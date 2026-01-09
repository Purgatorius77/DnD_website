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
  return data.class.find(c => c.source === "XPHB") || data.class[0];
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
    classFeatures,
    subclassTitle,
    subclasses,
    spellcasting,
    classTableGroups
  } = classData;

  const abilities = primaryAbility?.map(a => Object.keys(a)[0].toUpperCase()).join(", ") || "None";
  const saves = savingThrows?.join(", ") || (proficiency?.join(", ") || "None");
  const skills = startingProficiencies?.skills?.length
    ? startingProficiencies.skills.map(s => s.choose ? `Choose ${s.choose.count} from ${s.choose.from.join(", ")}` : s).join("; ")
    : "None";
  const weapons = startingProficiencies?.weapons?.join(", ") || "None";
  const armor = startingProficiencies?.armor?.join(", ") || "None";
  const tools = startingProficiencies?.tools?.join(", ") || "None";
  const featuresList = classFeatures?.map(f => typeof f === "string" ? f : f.classFeature).join(", ") || "None";
  const subclassList = subclasses?.map(s => s.name).join(", ") || "None";
  const equipment = startingEquipment?.default?.join("; ") || "None";
  const spellInfo = spellcasting ? `Spellcasting Ability: ${spellcasting.spellcastingAbility}` : "";

  // ===================== COMBINE ALL TABLE GROUPS INTO ONE TABLE =====================
  let allColumns = [];
  let maxRows = 20; // fixed for levels 1-20

  classTableGroups?.forEach(group => {
    const cols = group.colLabels.map(c => cleanSpellText(c));
    const rows = group.rows || group.rowsSpellProgression || [];
    allColumns.push({ cols, rows });
  });

  // Build header row with Level column first
  const headerHtml = ["<th>Level</th>"]
    .concat(allColumns.map(g => g.cols.map(c => `<th>${c}</th>`).join("")).join(""))
    .join("");

  // Build rows with Level column
  const allRowsHtml = [];
  for (let i = 0; i < maxRows; i++) {
    let rowHtml = `<td>${i + 1}</td>`; // Level column
    allColumns.forEach(g => {
      const row = g.rows[i] || Array(g.cols.length).fill(""); // fill missing cells
      rowHtml += row.map(c => `<td>${c}</td>`).join("");
    });
    allRowsHtml.push(`<tr>${rowHtml}</tr>`);
  }

  const combinedTable = `<table border="1"><tr>${headerHtml}</tr>${allRowsHtml.join("")}</table>`;

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

    <h3>Class Features</h3>
    <p>${featuresList}</p>

    <h3>Subclasses (${subclassTitle})</h3>
    <p>${subclassList}</p>

    ${spellInfo ? `<h3>Spellcasting</h3><p>${spellInfo}</p>` : ""}
    
    <h3>Class Table</h3>
    ${combinedTable}
  `;
}
