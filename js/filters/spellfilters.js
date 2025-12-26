// spellfilters.js
const spellSchoolNames = { 
  "A": "Abjuration",  
  "C": "Conjuration",
  "D": "Divination",
  "E": "Enchantment",
  "V": "Evocation",
  "I": "Illusion",
  "N": "Necromancy",
  "T": "Transmutation"
};

export function initSpellFilters(spells) {
  const spellSelect = document.getElementById("spellSelect");
  const nameInput = document.getElementById("spellSearch");
  const levelDiv = document.getElementById("levelCheckboxes");
  const schoolDiv = document.getElementById("spellSchoolCheckboxes");
  const levelComparison = document.getElementById("levelComparison");
  const resetBtn = document.getElementById("resetSpellFiltersBtn");

  buildLevelCheckboxes();
  buildSchoolCheckboxes();
  filterSpells();

  // === EVENT WIRING ===
  nameInput.addEventListener("input", filterSpells);
  levelDiv.addEventListener("change", filterSpells);
  schoolDiv.addEventListener("change", filterSpells);
  levelComparison.addEventListener("change", filterSpells);

  resetBtn.addEventListener("click", () => {
    nameInput.value = "";
    levelDiv.querySelectorAll("input").forEach(cb => cb.checked = false);
    schoolDiv.querySelectorAll("input").forEach(cb => cb.checked = false);
    filterSpells();
  });

  spellSelect.addEventListener("change", () => {
    const index = spellSelect.value;
    if (index === "") return;

    const spell = spells[index];
    document.dispatchEvent(new CustomEvent("spellSelected", { detail: spell }));
  });

  // === HELPERS ===
  function buildLevelCheckboxes() {
    const levels = [0,1,2,3,4,5,6,7,8,9];
    levelDiv.innerHTML = "";

    levels.forEach(lv => {
      const label = document.createElement("label");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = lv;
      label.append(cb, lv === 0 ? "Cantrip" : `Level ${lv}`);
      levelDiv.appendChild(label);
    });
  }

  function buildSchoolCheckboxes() {
    schoolDiv.innerHTML = "";

    // Convert object to array and sort by label
    const schoolsArray = Object.entries(spellSchoolNames)
      .sort((a, b) => a[1].localeCompare(b[1]));

    schoolsArray.forEach(([code, labelText]) => {
      const label = document.createElement("label");
      label.style.marginRight = "5px";

      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = code;
      cb.addEventListener("change", filterSpells);

      label.appendChild(cb);
      label.appendChild(document.createTextNode(labelText));

      schoolDiv.appendChild(label);
    });
  }

function filterSpells() {
  const search = nameInput.value.toLowerCase();
  const selectedLevels = [...levelDiv.querySelectorAll("input:checked")].map(cb => Number(cb.value));
  const selectedSchools = [...schoolDiv.querySelectorAll("input:checked")].map(cb => cb.value);
  const comparison = levelComparison.value; // "=" | "<" | ">"

  const filtered = spells.filter(sp => {
    // Filter by name
    if (!sp.name.toLowerCase().includes(search)) return false;

    // Filter by level using comparison
    if (selectedLevels.length) {
      const levelMatch = selectedLevels.some(lv => {
        if (comparison === "=") return sp.level === lv;
        if (comparison === "<") return sp.level < lv;
        if (comparison === ">") return sp.level > lv;
      });
      if (!levelMatch) return false;
    }

    // Filter by school
    if (selectedSchools.length && !selectedSchools.includes(sp.school)) return false;

    return true;
  });

  // Sort alphabetically by spell name
  const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));

  updateDropdown(sorted);
}


function updateDropdown(list) {
  spellSelect.innerHTML = `<option value="">-- Choose a spell --</option>`;

  // Sort the filtered list alphabetically by spell name
  const sortedList = [...list].sort((a, b) => a.name.localeCompare(b.name));

  sortedList.forEach(sp => {
    const index = spells.indexOf(sp);  // original index in full spells array
    const option = document.createElement("option");
    option.value = index;
    option.textContent = sp.name;
    spellSelect.appendChild(option);
  });

  if (sortedList.length) {
    spellSelect.value = spells.indexOf(sortedList[0]);
    document.dispatchEvent(new CustomEvent("spellSelected", { detail: sortedList[0] }));
  }
}
}
