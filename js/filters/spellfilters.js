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

const spellSource = {
  PHB: "Player's Handbook",
  XPHB: "Player's Handbook 2024",
  TCE: "Tasha's Cauldron of Everything",
  EFA: "Eberron: Rising from the Last War",
  ERLW: "Eberron: Rising from the Last War",
  DMG: "Dungeon Master's Guide",
  SCAG: "Sword Coast Adventurer's Guide",
  MTF: "Mordekainen's Tome of Foes",
  XGE: "Xanathar's Guide to Everything",
  FRHoF: "Forgotten Realms: Heroes of Feyrun",
  DSotDQ: "Dragonlance: Shadows of the Dragon Queen",
  SatO: "Sigil and the Outlands",
  ABH: "Astarion's Book of Hungers",
  BMT: "Book of Many Things",
  LFL: "Lowryn First Light",
  BGG: "Glory of the Giants",
  FTD: "Fizban's Treasury of Dragons",
  TDCSR: "Tal'dorei Campaign Setting Reloaded",
  SCC: "Strixhaven: Curriculum of Chaos",
  XDMG: "Dungeon Master's Guide 2024",
  OotA: "Out of the Abyss",
  ToA: "Tomb of Annihilation",
  CoA: "Chains of Asmodeus",
  MOT: "Theros",
  IDRotF: "Icewind Dale: Rime of the Frostmaiden",
  CM: "Candlekeep Mysteries",
  PSX: "Planeshift: Ixalan",
  TftYP: "Tales from the Yawning Portal",
  EGW: "Explorer's Guide to Wildemount",
  WDH: "Waterdeep: Dragon Heist",
  AAG: "Astral Adventurer's Guide",
  LLK: "Lost Laboratory of Kwalish",
  QftIS: "Quest from the Infinite Staircase",
  NF: "Netheril's Fall",
  GGR: "Ravnica",
  PotA: "Princes of the Apocalypse",
  SKT: "Storm King's Thunder",
  BGDIA: "Baldur's Gate: Ascent into Avernus",
  WDMM: "Waterdeep: Dungeon of the Mad Mage",
  JttRC: "Journeys Through the Radiant Citadel",
  WBtW: "Wild Beyond the Witchlight",
  HotDQ: "Horde of the Dragon Queen",
  IMR: "Infernal Machine Rebuilt",
  CoS: "Curse of Strahd",
  RoTOS: "Rise of Tiamat",
  SDW: "Sleeping Dragon's Wake",
  FRAiF: "Forgotten Realms: Adventures in Faerûn",
  HotB: "Heroes of the Borderlands",
};

export function initSpellFilters(spells) {
  const spellSelect = document.getElementById("spellSelect");
  const nameInput = document.getElementById("spellSearch");
  const levelDiv = document.getElementById("levelCheckboxes");
  const schoolDiv = document.getElementById("spellSchoolCheckboxes");
  const levelComparison = document.getElementById("levelComparison");
  const resetBtn = document.getElementById("resetSpellFiltersBtn");
  const spellsourceDiv = document.getElementById("spellsourceCheckboxes");

  buildLevelCheckboxes();
  buildSchoolCheckboxes();
  filterSpells();

  nameInput.addEventListener("input", filterSpells);
  levelDiv.addEventListener("change", filterSpells);
  schoolDiv.addEventListener("change", filterSpells);
  spellsourceDiv.addEventListener("change", filterSpells);
  levelComparison.addEventListener("change", filterSpells);

  resetBtn.addEventListener("click", () => {
    nameInput.value = "";
    levelDiv.querySelectorAll("input").forEach(cb => cb.checked = false);
    schoolDiv.querySelectorAll("input").forEach(cb => cb.checked = false);
    spellsourceDiv.querySelectorAll("input").forEach(cb => cb.checked = false);
    filterSpells();
  });

  spellSelect.addEventListener("change", () => {
    const index = spellSelect.value;
    if (index === "") return;
    document.dispatchEvent(new CustomEvent("spellSelected", { detail: spells[index] }));
  });

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
    const schoolsArray = Object.entries(spellSchoolNames).sort((a, b) => a[1].localeCompare(b[1]));
    schoolsArray.forEach(([code, labelText]) => {
      const label = document.createElement("label");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = code;
      label.append(cb, labelText);
      schoolDiv.appendChild(label);
    });
  }

  function buildSpellSourceCheckboxes(list) {
    const previouslyChecked = [...spellsourceDiv.querySelectorAll("input:checked")].map(cb => cb.value);
    spellsourceDiv.innerHTML = "";

    const usedSources = [...new Set(list.map(sp => sp.source))].sort();

    usedSources.forEach(code => {
      const labelText = spellSource[code] ?? code;
      const label = document.createElement("label");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = code;
      if (previouslyChecked.includes(code)) cb.checked = true;
      label.append(cb, labelText);
      spellsourceDiv.appendChild(label);
    });
  }

  function filterSpells() {
    const search = nameInput.value.toLowerCase();
    const selectedLevels = [...levelDiv.querySelectorAll("input:checked")].map(cb => Number(cb.value));
    const selectedSchools = [...schoolDiv.querySelectorAll("input:checked")].map(cb => cb.value);
    const selectedSpellSource = [...spellsourceDiv.querySelectorAll("input:checked")].map(cb => cb.value);
    const comparison = levelComparison.value;

    const filtered = spells.filter(sp => {
      if (!sp.name.toLowerCase().includes(search)) return false;

      if (selectedLevels.length) {
        const match = selectedLevels.some(lv =>
          comparison === "=" ? sp.level === lv :
          comparison === "<" ? sp.level < lv :
          sp.level > lv
        );
        if (!match) return false;
      }

      if (selectedSchools.length && !selectedSchools.includes(sp.school)) return false;
      if (selectedSpellSource.length && !selectedSpellSource.includes(sp.source)) return false;

      return true;
    });

    const sorted = filtered.sort((a, b) => a.name.localeCompare(b.name));

    updateDropdown(sorted);
    buildSpellSourceCheckboxes(sorted);
  }

  function updateDropdown(list) {
    spellSelect.innerHTML = `<option value="">-- Choose a spell --</option>`;
    list.forEach(sp => {
      const index = spells.indexOf(sp);
      const option = document.createElement("option");
      option.value = index;
      option.textContent = sp.name;
      spellSelect.appendChild(option);
    });

    if (list.length) {
      spellSelect.value = spells.indexOf(list[0]);
      document.dispatchEvent(new CustomEvent("spellSelected", { detail: list[0] }));
    }
  }
}
