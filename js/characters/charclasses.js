// js/characters/charclasses.js
const BASE_PATH = "data/classes";

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
    levelTable
  } = classData;

  // Primary ability list
  const abilities = primaryAbility?.map(a => Object.keys(a)[0].toUpperCase()).join(", ") || "None";

  // Saving throws
  const saves = savingThrows?.join(", ") || (proficiency?.join(", ") || "None");

  // Skills
  let skills = "None";
  if (startingProficiencies?.skills?.length) {
    skills = startingProficiencies.skills
      .map(s => s.choose ? `Choose ${s.choose.count} from ${s.choose.from.join(", ")}` : s)
      .join("; ");
  }

  // Weapons, armor, tools
  const weapons = startingProficiencies?.weapons?.join(", ") || "None";
  const armor = startingProficiencies?.armor?.join(", ") || "None";
  const tools = startingProficiencies?.tools?.join(", ") || "None";

  // Features list
  const featuresList = classFeatures?.map(f => typeof f === "string" ? f : f.classFeature).join(", ") || "None";

  // Subclasses
  const subclassList = subclasses?.map(s => s.name).join(", ") || "None";

  // Starting equipment
  let equipment = "None";
  if (startingEquipment?.default) {
    equipment = startingEquipment.default.join("; ");
  }

  // Spellcasting
  let spellInfo = spellcasting ? `Spellcasting Ability: ${spellcasting.spellcastingAbility}` : "";

  // Level table
  let levelTableHtml = "";
  if (levelTable?.length) {
    levelTableHtml = `<table border="1"><tr>${Object.keys(levelTable[0]).map(k => `<th>${k}</th>`).join("")}</tr>`;
    levelTableHtml += levelTable.map(row => `<tr>${Object.values(row).map(v => `<td>${v}</td>`).join("")}</tr>`).join("");
    levelTableHtml += `</table>`;
  }

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
    
    ${levelTableHtml ? `<h3>Level Table</h3>${levelTableHtml}` : ""}
  `;
}
