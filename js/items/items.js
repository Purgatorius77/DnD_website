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
  OotA: "Out of the Abyss"
};

const TYPE = {
  A: "Ammunition",
  INS: "Instrument",
  "M|XPHB": "Melee Weapon",
  M: "Melee Weapon",
  R: "Ranged Weapon",
  "R|XPHB": "Ranged Weapon",
  "A|XPHB": "Ammunition",
  "MA|XPHB": "Medium Armor",
  MA: "Medium Armor",
  LA: "Light Armor",
  "LA|XPHB": "Heavy Armor",
  HA: "Light Armor",
  "HA|XPHB": "Heavy Armor",
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

    html += `
      <tr>
        <td>${i.name}</td>
        <td>${source}</td>
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
