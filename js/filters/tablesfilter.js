// tablesfilter.js

const tableSourceNames = {
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
  XMM: "Monster Manual 2024",
  XScreen: "Dungeon Master Screen 2024",
  AATM: "Adventure Atlas: The Mortuary",
  AI: "Acquisitions Incorporated",
  AL: "Adventurers' League",
  AWM: "Adventures with Muk",
  BAM: "Boo's Astral Menagerie",
  DoD: "Domain of Delight",
  DMTCRG: "The deck of many things: Card reference guide",
  GoS: "Ghosts of Saltmarsh",
  MCV4EC: "Monstrous Compendium volume 4: Eldraine Creatures",
  MGELFT: "Muk's Guide to everything he learned from Tasha",
  MPP: "Morte's Planar Parade",
  MaBJoV: "Minsc and Boo's Journal of Villainy",
  PSA: "Planeshift: Amonkhet",
  PSD: "Planeshift: Dominaria",
  PSK: "Planeshift: Kaladesh",
  RMR: "Rick and Morty basic rules",
  SAC: "Sage Advice Compendium",
  TTP:  "The Tortle Package",
  VGM: "Volo's Guide to Monsters",
  VRGR: "Von Richten's Guide to Ravenloft"

};// /js/filters/tablesfilter.js


// /js/filters/tablesfilter.js



export function initTableFilters(tables) {
  if (!Array.isArray(tables)) {
    console.warn("initTableFilters(): tables not ready", tables);
    return;
  }

  const tableSelect = document.getElementById("tableSelect");
  const nameInput = document.querySelector("#tables-filters input[type=text]");
  const sourceDiv = document.getElementById("tablesourceCheckboxes");

  // Build source checkboxes only once
  buildSourceCheckboxes();

  // Initial filter shows all tables
  filterTables();

  // Event listeners
  nameInput.addEventListener("input", filterTables);
  sourceDiv.addEventListener("change", filterTables);
  tableSelect.addEventListener("change", () => {
    const index = tableSelect.value;
    if (index === "") return;
    document.dispatchEvent(new CustomEvent("tableSelected", { detail: tables[index] }));
  });

  function buildSourceCheckboxes() {
    const usedSources = [...new Set(tables.map(t => t.source))].sort();
    sourceDiv.innerHTML = "";

    usedSources.forEach(code => {
      const labelText = tableSourceNames[code] ?? code;
      const label = document.createElement("label");
      const cb = document.createElement("input");
      cb.type = "checkbox";
      cb.value = code;
      cb.checked = false; // default: unchecked
      label.append(cb, labelText);
      sourceDiv.appendChild(label);
    });
  }


  
// Add this near the other event listeners inside initTableFilters
const resetBtn = document.getElementById("resetTablesFiltersBtn");

resetBtn.addEventListener("click", () => {
  // Clear search
  nameInput.value = "";

  // Uncheck all sources
  sourceDiv.querySelectorAll("input").forEach(cb => cb.checked = false);

  // Re-filter tables
  filterTables();
});

  function filterTables() {
    const search = nameInput.value.toLowerCase();
    const selectedSources = [...sourceDiv.querySelectorAll("input:checked")].map(cb => cb.value);

    const filtered = tables.filter(t => {
      if (!t.name.toLowerCase().includes(search)) return false;

      // Only filter by sources if at least one is checked
      if (selectedSources.length && !selectedSources.includes(t.source)) return false;

      return true;
    });

    filtered.sort((a, b) => a.name.localeCompare(b.name));
    updateDropdown(filtered);
  }

  function updateDropdown(list) {
    tableSelect.innerHTML = `<option value="">-- Choose a table --</option>`;
    list.forEach(t => {
      const index = tables.indexOf(t);
      const option = document.createElement("option");
      option.value = index;
      option.textContent = t.name;
      tableSelect.appendChild(option);
    });

    // Auto-select first table if available
    if (list.length) {
      tableSelect.value = tables.indexOf(list[0]);
      document.dispatchEvent(new CustomEvent("tableSelected", { detail: list[0] }));
    }
  }
}


