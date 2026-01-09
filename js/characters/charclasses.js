// js/characters/charclasses.js
const BASE_PATH = "data/classes";

// Clean D&D variant text like {@item ...}, {@filter ...}, {@dice ...}, etc.
function cleanSpellText(text) {
  if (typeof text !== "string") return text;
  return text.replace(/\{@\w+\s+([^}|]+)(?:\|[^}]*)*\}/g, (_, c) => c);
}


async function fetchJSON(path) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  return res.json();
}

async function loadClassList() {
  const index = await fetchJSON(`${BASE_PATH}/index.json`);
  const results = [];

  for (const fileName of Object.values(index)) {
    try {
      const data = await fetchJSON(`${BASE_PATH}/${fileName}`);
      if (!Array.isArray(data.class) || data.class.length === 0) continue;

      const cls = data.class.find(c => c.source === "XPHB") || data.class[0];

      results.push({
        name: cls.name,
        file: fileName
      });
    } catch (err) {
      console.warn(`Skipping ${fileName}`, err);
    }
  }

  return results;
}

// Recursive function to get text from entries
function getEntryText(entry) {
  if (typeof entry === "string") return entry;
  if (Array.isArray(entry)) return entry.map(getEntryText).join(" ");
  if (entry.type === "entries" && entry.entries) return getEntryText(entry.entries);
  if (entry.type === "list" && entry.items) return entry.items.map(getEntryText).join(" ");
  if (entry.type === "item" && entry.entries) return getEntryText(entry.entries);
  return ""; // ignore tables, options, refClassFeature, etc.
}

// Build XPHB feature descriptions



async function populateClassSelect(selectEl) {
  const classes = await loadClassList();
  selectEl.innerHTML = `<option value="">Select a class</option>`;
  classes.forEach(cls => {
    const opt = document.createElement("option");
    opt.value = cls.file;
    opt.textContent = cls.name;
    selectEl.appendChild(opt);
  });
}

async function loadSelectedClass(fileName) {
  const data = await fetchJSON(`${BASE_PATH}/${fileName}`);

  const selectedClass =
    data.class.find(c => c.source === "XPHB") || data.class[0];

  // Attach the full feature list to the class object
  selectedClass.__allClassFeatures = data.classFeature || [];

  return selectedClass;
}


export function initCharClasses() {
  const classSelect = document.getElementById("classSelect");
  const classesBtn = document.getElementById("classesBtn");
  const classFilters = document.getElementById("classFilters");
  const characterStatblock = document.getElementById("character-statblock");

  if (!classSelect || !classesBtn || !classFilters || !characterStatblock) return;

  let dropdownLoaded = false;

  // Show filters when button clicked
  classesBtn.addEventListener("click", async () => {
    classFilters.style.display = "block";

    if (!dropdownLoaded) {
      await populateClassSelect(classSelect);
      dropdownLoaded = true;
    }
  });

  // Handle selection changes
classSelect.addEventListener("change", async () => {
  const fileName = classSelect.value;
  if (!fileName) {
    characterStatblock.innerHTML = "";
    return;
  }

  try {
    const classData = await loadSelectedClass(fileName);
    characterStatblock.innerHTML = renderClassStatblock(classData);
  } catch (err) {
    console.error("Failed to load class:", err);
    characterStatblock.innerHTML = "<p>Error loading class data.</p>";
  }
});

}

function renderClassStatblock(classData) {
const {
  name,
  hd,
  primaryAbility,
  savingThrows,
  proficiency,
  startingProficiencies,
  startingEquipment,
  subclasses,
  subclassTitle,
  spellcasting,
  classTableGroups,
  classFeatures,
  __allClassFeatures
} = classData;


  const abilities = primaryAbility?.map(a => Object.keys(a)[0].toUpperCase()).join(", ") || "None";
  const saves = savingThrows?.join(", ") || (proficiency?.join(", ") || "None");
  const skills = startingProficiencies?.skills?.length
    ? startingProficiencies.skills.map(s => s.choose ? `Choose ${s.choose.count} from ${s.choose.from.join(", ")}` : s).join("; ")
    : "None";
  const weapons = startingProficiencies?.weapons?.join(", ") || "None";
  const armor = startingProficiencies?.armor?.join(", ") || "None";
  const tools = startingProficiencies?.tools?.join(", ") || "None";
  const equipment = startingEquipment?.default?.join("; ") || "None";

  // ===================== RESOLVE XPHB CLASS FEATURES =====================

function resolveXPHBFeatures() {
  if (!classFeatures || !__allClassFeatures) return [];

  return classFeatures.map(f => {
    let refString = typeof f === "string" ? f : f.classFeature;
    if (!refString) return null;

    const [name, , source] = refString.split("|");

    return __allClassFeatures.find(cf =>
      cf.name === name &&
      cf.source === source
    );
  }).filter(Boolean);
}


  const xphbFeatures = resolveXPHBFeatures();

  const featuresHtml = xphbFeatures.length
    ? xphbFeatures
        .sort((a, b) => a.level - b.level)
        .map(f => `<h4>Level ${f.level} — ${f.name}</h4><p>${getEntryText(f.entries)}</p>`)
        .join("")
    : "<p>None</p>";

  // ===================== SUBCLASSES =====================

  const subclassList = subclasses?.map(s => s.name).join(", ") || "None";
  const spellInfo = spellcasting ? `Spellcasting Ability: ${spellcasting.spellcastingAbility}` : "";

  // ===================== COMBINE CLASS TABLES =====================

  let allColumns = [];
  let maxRows = 20;

  classTableGroups?.forEach(group => {
    const cols = group.colLabels.map(c => cleanSpellText(c));
    const rows = group.rows || group.rowsSpellProgression || [];
    allColumns.push({ cols, rows });
  });

  const headerHtml = ["<th>Level</th>"]
    .concat(allColumns.map(g => g.cols.map(c => `<th>${c}</th>`).join("")).join(""))
    .join("");

  const allRowsHtml = [];
  for (let i = 0; i < maxRows; i++) {
    let rowHtml = `<td>${i + 1}</td>`;
    allColumns.forEach(g => {
      const row = g.rows[i] || Array(g.cols.length).fill("");
      rowHtml += row.map(c => `<td>${cleanSpellText(c)}</td>`).join("");
    });
    allRowsHtml.push(`<tr>${rowHtml}</tr>`);
  }

  const combinedTable = `<table border="1"><tr>${headerHtml}</tr>${allRowsHtml.join("")}</table>`;

  // ===================== FINAL OUTPUT =====================

  return `
    <h2>${name}</h2>

    <h3>Core Traits</h3>
    <p><strong>Primary Ability:</strong> ${abilities}</p>
    <p><strong>Hit Die:</strong> ${hd?.number}d${hd?.faces}</p>
    <p><strong>Saving Throws:</strong> ${saves}</p>
    <p><strong>Skill Proficiencies:</strong> ${skills}</p>
    <p><strong>Weapon Proficiencies:</strong> ${weapons}</p>
    <p><strong>Armor Training:</strong> ${armor}</p>
    <p><strong>Tool Proficiencies:</strong> ${tools}</p>
    <p><strong>Starting Equipment:</strong> ${equipment}</p>

    <h3>Class Features (XPHB only)</h3>
    ${featuresHtml}

    <h3>Subclasses (${subclassTitle})</h3>
    <p>${subclassList}</p>

    ${spellInfo ? `<h3>Spellcasting</h3><p>${spellInfo}</p>` : ""}

    <h3>Class Table</h3>
    ${combinedTable}
  `;
}
