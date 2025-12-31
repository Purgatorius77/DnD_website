const BASIC_ITEMS_PATH = "data/items-base.json";
const ITEMS_PATH = "data/items.json";

const SOURCE_NAMES = {
  PHB: "Player's Handbook",
  XPHB: "Player's Handbook 2024",
  TCE: "Tasha's Cauldron of Everything",
  EFA: "Eberron: Rising from the Last War",
  ERLW: "Eberron: Rising from the Last War",
  DMG: "Dungeon Master's Guide",
  SCAG: "Sword Coast Adventurer's Guide",
  MTF: "Mordekainen's Tome of Foes",
  XGE: "Xanathar's Guide to Everything",
  FRHoF: "Forggotten Realms: Heroes of Feyrun",
  DSotDQ: "Dragonlance: Shadows of the Dragon Queen",
  SatO: "Sigil and the outlands",
  ABH: "Astarion's book of hungers",
  BMT: "Book of many things",
  LFL: "Lowryn first light",
  BGG: "Glory of the giants",
  FTD: "Fizban's treasury of dragons",
  TDCSR: "Tal'dorei campaign setting reloaded",
  SCC: "Strixhaven: curriculum of chaos",
  XDMG: "Dungeon Master's Guide 2024",
  OotA: "Out of the Abyss",
  ToA: "Tomb of Annihilation",
  CoA: "Chains of Asmodeus",
  MOT: "Theros",
  IDRotF: "Icewind Dale: Ryme of the Frostmaiden",
  CM: "Candlekeep Mysteries",
PSX: "Planeshift: Ixalan",
TftYP: "Tales from the yawning Portal",
EGW: "Explorer's guide to Wildemount",
WDH: "Waterdeep: Dragon heist",
AAG: "Astral Adventurer's guide",
LLK: "Lost Laboratory of Kwalish",
QftIS: "Quest from the infinate staircase",
NF: "Netheril's fall",
GGR:  "Ravnica",
PotA: "Princes of the Apocalypse",
SKT: "Storm King's Thunder",
BGDIA: "Baldur's Gate: ascent into Avernus",
WDMM: "Waterdeep: Dungeon of the Mad Mage",
JttRC: "Journeys through the Radiant Citadel",
WBtW: "Wild beyond the Witchlight",
HotDQ: "Horde of the Dragon Queen",
IMR: "Infernal Machine Rebuilt",
CoS: "Curse of Strahd",
RoTOS: "Rise of Tiamat",
SDW: "Sleeping Dragon's Wake",
FRAiF: "Forgotten realms: adventures in Fearun",
HotB: "Heroes of the Borderlands",



};

const TYPE = {
  A: "Ammunition (old)",
  INS: "Instrument (old)",
  "M|XPHB": "Melee Weapon (new)",
  M: "Melee Weapon (old)",
  R: "Ranged Weapon (old)",
  "R|XPHB": "Ranged Weapon (new)",
  "A|XPHB": "Ammunition (new)",
  "MA|XPHB": "Medium Armor (new)",
  MA: "Medium Armor (old)",
  LA: "Light Armor (old)",
  "LA|XPHB": "Heavy Armor (new)",
  HA: "Light Armor (old)",
  "HA|XPHB": "Heavy Armor (new)",
  "INS|XPHB": "Instrument (new)",
  SCF: "Spellcasting Focus (old)",
  "SCF|XPHB": "Spellcasting Focus (new)",
  S: "Shield (old)",
  "S|XPHB": "Shield (new)",
  "AF|XDMG": "Futuristic Ammunition (new)",
  "AF|DMG": "Futuristic Ammunition (old)",
  "RD|DMG": "Rod",
  "WD|DMG": "Wand",
  "RD|XDMG": "Rod",
  "WD|XDMG": "Wand",
  G: "Adventuring Gear",
  "G|XPHB": "Adventuring Gear",
  TG: "Trade Good",
  "TG|XDMG": "Trade Good",
  OTH: "Other",
  "RG|XDMG": "Ring",
  "AT|XPHB": "Artisan's Tools",
  AT: "Artisan's Tools",
  "AIR|XPHB": "Airship",
  "AIR|DMG": "Airship",
  "FD|XPHB": "Food & Drink",
  FD: "Food & Drink",
  "$G|XDMG": "Treasure: Gemstone",
  "$G|DMG": "Treasure: Gemstone",
  "$A|XDMG": "Treasure: Art",
  "$A|DMG": "Treasure: Art",
  "MNT|XPHB": "Mount",
  MNT: "Mount",
  P: "Poison",
  "P|XPHB": "Poison",
  "RG|DMG": "Ring",
  TAH: "Tack and Harness",
  "TAH|XPHB": "Tack and Harness",
  "T|XPHB": "Tool",
  T: "Tool",
  "GS|XPHB": "Gaming Set",
  GS: "Gaming Set",
  "EXP|XDMG": "Explosive",
  "EXP|DMG": "Explosive",
 	"SPC|AAG": "Vehicle: Space",
  "$C": "Treasure: coinage",
  SHP: "Ship",
  "VEH|XPHB": "Vehicle", 
  "SHP|XPHB": "Ship",
  VEH: "Vehicle",
  "SC|DMG": "Scroll",
  "SC|XPHB": "Scroll",
};

let allItems = [];
let basicItems = [];
let currentItems = []; // ← currently displayed dataset

// -------------------- Fetch functions --------------------
async function fetchItems() {
  const res = await fetch(ITEMS_PATH);
  if (!res.ok) throw new Error("Failed to load items.json");
  const data = await res.json();
  return data.item || [];
}

async function fetchBasicItems() {
  const res = await fetch(BASIC_ITEMS_PATH);
  if (!res.ok) throw new Error("Failed to load items-base.json");
  const data = await res.json();
  return data.baseitem || [];
}

// -------------------- Render table --------------------
function renderItemsTable(items) {
  if (!items.length) return "<p>No items available.</p>";

  let html = `
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Source</th>
          <th>Type</th>
          <th>Rarity</th>
          <th>Value</th>
          <th>Weight</th>
        </tr>
      </thead>
      <tbody>
  `;

  items.forEach(i => {
    const source = SOURCE_NAMES[i.source] || i.source || "—";
    const type = TYPE[i.type] || i.type || "—";
    const value = i.value ? (i.value / 100) + " gp" : "—";
    const sourceText = i.page ? `${source}: page ${i.page}` : source; // concatenate source and page


    html += `
      <tr>
        <td>${i.name}</td>
        <td>${sourceText}</td>
        <td>${type}</td>
        <td>${i.rarity || "—"}</td>
        <td>${value}</td>
        <td>${i.weight ?? "—"}</td>
      </tr>
    `;
  });

  html += "</tbody></table>";
  return html;
}

// -------------------- Filters --------------------
function renderItemsFilters() {
  const sourceOptions = Object.entries(SOURCE_NAMES)
    .map(([k,v]) => `<option value="${k}">${v}</option>`).join("");

  const typeOptions = Object.entries(TYPE)
    .map(([k,v]) => `<option value="${k}">${v}</option>`).join("");

  return `
    <div style="margin-bottom: 1em;">
      <label>Source:
        <select id="itemsSourceFilter">
          <option value="">All</option>
          ${sourceOptions}
        </select>
      </label>
      <label style="margin-left: 1em;">Type:
        <select id="itemsTypeFilter">
          <option value="">All</option>
          ${typeOptions}
        </select>
      </label>
    </div>
  `;
}

function applyItemsFilters() {
  const sourceFilter = document.getElementById("itemsSourceFilter").value;
  const typeFilter = document.getElementById("itemsTypeFilter").value;

  let filtered = currentItems.slice(); // ← filter the currently displayed dataset

  if (sourceFilter) filtered = filtered.filter(i => i.source === sourceFilter);
  if (typeFilter) filtered = filtered.filter(i => i.type === typeFilter);

  document.getElementById("itemsTableContainer").innerHTML = renderItemsTable(filtered);
}

// -------------------- Initialization --------------------
export function initItems() {
  const statblock = document.getElementById("items-statblock");
  if (!statblock) return;

  // Show all items
  document.addEventListener("showItemsTable", async () => {
    statblock.innerHTML = "<p>Loading items...</p>";
    try {
      if (!allItems.length) allItems = await fetchItems();
      currentItems = allItems.slice(); // ← track dataset for filters

      statblock.innerHTML = `
        ${renderItemsFilters()}
        <div id="itemsTableContainer">${renderItemsTable(allItems)}</div>
      `;

      document.getElementById("itemsSourceFilter").addEventListener("change", applyItemsFilters);
      document.getElementById("itemsTypeFilter").addEventListener("change", applyItemsFilters);

      statblock.style.display = "block";
    } catch (err) {
      console.error(err);
      statblock.innerHTML = "<p>Error loading items.</p>";
    }
  });

  // Show basic items
  document.addEventListener("showBasicItemsTable", async () => {
    statblock.innerHTML = "<p>Loading basic items...</p>";
    try {
      if (!basicItems.length) basicItems = await fetchBasicItems();
      currentItems = basicItems.slice(); // ← track dataset for filters

      statblock.innerHTML = `
        ${renderItemsFilters()}
        <div id="itemsTableContainer">${renderItemsTable(basicItems)}</div>
      `;

      document.getElementById("itemsSourceFilter").addEventListener("change", applyItemsFilters);
      document.getElementById("itemsTypeFilter").addEventListener("change", applyItemsFilters);

      statblock.style.display = "block";
    } catch (err) {
      console.error(err);
      statblock.innerHTML = "<p>Error loading basic items.</p>";
    }
  });
}
