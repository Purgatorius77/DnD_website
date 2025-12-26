// monsterfilters.js

export function initMonsterFilters(monsters) {
  const monsterSelect = document.getElementById("monsterSelect");
  const crCheckboxesDiv = document.getElementById("crCheckboxes");
  const typeCheckboxesDiv = document.getElementById("typeCheckboxes");
  const nameFilterInput = document.getElementById("nameFilter");
  const crComparisonSelect = document.getElementById("crComparison");
  const resetFiltersBtn = document.getElementById("resetFiltersBtn");
  const ownCheckbox = document.getElementById("ownCheckbox");
  const homebrewCheckbox = document.getElementById("homebrewCheckbox");

  buildTypeCheckboxes();
  buildCRCheckboxes();
  filterMonsters();

  // === REACTIVE FILTERING ===
  const filterElements = [
    nameFilterInput,
    crComparisonSelect,
    crCheckboxesDiv,
    typeCheckboxesDiv,
    ownCheckbox,
    homebrewCheckbox
  ];

  filterElements.forEach(el => {
    if (el) {
      // For div containers (checkbox groups) we use 'change', for inputs/selects the same
      const eventType = el.tagName === "DIV" ? "change" : "input";
      el.addEventListener(eventType, filterMonsters);
      // Also listen for 'change' to cover selects
      if (el.tagName === "SELECT") el.addEventListener("change", filterMonsters);
    }
  });

  // === RESET BUTTON ===
  resetFiltersBtn.addEventListener("click", () => {
    nameFilterInput.value = "";
    crCheckboxesDiv.querySelectorAll("input").forEach(cb => cb.checked = false);
    typeCheckboxesDiv.querySelectorAll("input").forEach(cb => cb.checked = false);
    if (ownCheckbox) ownCheckbox.checked = false;
    if (homebrewCheckbox) homebrewCheckbox.checked = false;

    filterMonsters();
  });

  // === MONSTER SELECTION ===
  monsterSelect.addEventListener("change", () => {
    const index = monsterSelect.value;
    if (index === "") return;
    const monster = monsters[index];
    document.dispatchEvent(new CustomEvent("monsterSelected", { detail: monster }));
  });

  // ==================== HELPERS ====================

  function buildTypeCheckboxes() {
    const types = [...new Set(monsters.map(m => m.type.replace(/\s*\(.*?\)/, "")))].sort();
    typeCheckboxesDiv.innerHTML = "";
    types.forEach(type => {
      const label = document.createElement("label");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = type;
      label.append(cb, type);
      typeCheckboxesDiv.appendChild(label);
    });
  }

  function buildCRCheckboxes() {
    const crValues = ["0","1/8","1/4","1/2","1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","30"];
    crCheckboxesDiv.innerHTML = "";
    crValues.forEach(cr => {
      const label = document.createElement("label");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = cr;
      label.append(cb, cr);
      crCheckboxesDiv.appendChild(label);
    });
  }

  function filterMonsters() {
    const searchText = nameFilterInput.value.toLowerCase();
    const comparison = crComparisonSelect.value;
    const ownChecked = ownCheckbox?.checked;
    const homebrewChecked = homebrewCheckbox?.checked;
    const selectedCRs = [...crCheckboxesDiv.querySelectorAll("input:checked")].map(cb => cb.value);
    const selectedTypes = [...typeCheckboxesDiv.querySelectorAll("input:checked")].map(cb => cb.value);

    const filtered = monsters.filter(mon => {
      if (!mon.name.toLowerCase().includes(searchText)) return false;

      if (selectedCRs.length) {
        const monCR = crToNumber(mon.challenge.split(" ")[0]);
        const matches = selectedCRs.some(cr => {
          const crNum = crToNumber(cr);
          if (comparison === "=") return monCR === crNum;
          if (comparison === "<") return monCR < crNum;
          if (comparison === ">") return monCR > crNum;
        });
        if (!matches) return false;
      }

      if (ownChecked && !mon.own) return false;
      if (homebrewChecked && !mon.homebrew) return false;

      if (selectedTypes.length) {
        const typeClean = mon.type.replace(/\s*\(.*?\)/, "");
        if (!selectedTypes.includes(typeClean)) return false;
      }

      return true;
    });

    updateDropdown(filtered);
  }

  function updateDropdown(list) {
    monsterSelect.innerHTML = `<option value="">-- Choose a monster --</option>`;
    list.forEach(mon => {
      const index = monsters.indexOf(mon);
      const option = document.createElement("option");
      option.value = index;
      option.textContent = mon.name;
      monsterSelect.appendChild(option);
    });

    if (list.length) {
      monsterSelect.value = monsters.indexOf(list[0]);
      document.dispatchEvent(new CustomEvent("monsterSelected", { detail: list[0] }));
    }
  }

  function crToNumber(cr) {
    if (cr.includes("/")) {
      const [a,b] = cr.split("/").map(Number);
      return a / b;
    }
    return Number(cr);
  }
}
