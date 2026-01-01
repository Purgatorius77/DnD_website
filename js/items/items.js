const BASIC_ITEMS_PATH = "data/items-base.json";
const ITEMS_PATH = "data/items.json";

// -------------------- Mappings --------------------
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
  GGR: "Ravnica",
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

const COLUMN_TITLES = {
    name: "Name",
    source: "Source",
    type: "Type",
    rarity: "Rarity",
    value: "Value",
    weight: "Weight",
    ac: "AC",
    bonusAc: "Bonus AC",
    weaponCategory: "Weapon Category",
    property: "Properties",
    dmg1: "Damage",
    dmgType: "Damage Type",
    armor: "Armor Type",
    strength: "Strength Req.",
    stealth: "Stealth"
};

const PROPERTY = {
  A: "Ammunition",
  F: "Finesse",
  H: "Heavy",
  L: "Light",
  R: "Reach",
  S: "Special",
  T: "Thrown",
  V: "Versatile",
  "2H": "Two-Handed",
  LD: "Loading",
  AF: "Ammunition (Firearm)",
  BF: "Burst Fire",
  RLD: "Reload",
  BF2: "Burst Fire (2)",
  BF3: "Burst Fire (3)"
};



// -------------------- State --------------------
let allItems = [];
let basicItems = [];
let currentItems = [];

// -------------------- Fetch --------------------
async function fetchJson(path, key) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  const data = await res.json();
  return data[key] || [];
}

// -------------------- Utilities --------------------
function parseInline(text) {
  if (typeof text !== "string") return text;
  return text.replace(/\{@(\w+)\s+([^|}]+)(?:\|([^}]+))?\}/g, (_, type, name, source) => {
    switch(type.toLowerCase()) {
      case "item": return source ? `${name} (${source})` : name;
      case "spell": return `${name} (Spell)`;
      case "condition": return `${name} (Condition)`;
      case "skill": return `${name} (Skill)`;
      case "variantrule": return `${name} (Variant Rule)`;
      default: return `${name} (${type})`;
    }
  });
}

function formatCell(value) {
  if (Array.isArray(value)) return value.join(", ");
  if (typeof value === "boolean") return value ? "Yes" : "No";
  return value ?? "—";
}

function formatNested(obj) {
  if (!obj) return "—";
  if (typeof obj === "string") return parseInline(obj);
  if (Array.isArray(obj)) return obj.map(formatNested).join("<br>");
  return Object.entries(obj).map(([k,v])=>`<b>${k}</b>: ${formatNested(v)}`).join("<br>");
}

function formatProperty(prop) {
  if (!prop) return "—";
  if (Array.isArray(prop)) {
    return prop.map(p => PROPERTY[p] || p).join(", ");
  }
  return PROPERTY[prop] || prop;
}


function flattenItem(item) {
  const flat = {};
  const special = {};
  for (const [k,v] of Object.entries(item)) {
    if (v === null || v === undefined) flat[k] = "—";
    else if (["string","number","boolean"].includes(typeof v) || Array.isArray(v)) flat[k] = v;
    else special[k] = v;
  }
  return { flat, special };
}

function formatSource(source, page) {
  const text = SOURCE_NAMES[source] || source || "—";
  return page ? `${text}: page ${page}` : text;
}

function formatType(typeKey) {
  if (!typeKey) return "—";
  typeKey = typeKey.toString();

  // Try full match first
  if (TYPE[typeKey]) return TYPE[typeKey];

  // Fallback: split and map individual keys
  return typeKey.split("|").map(t => TYPE[t] || t).join(", ");
}


// -------------------- Categorize --------------------
function categorizeItems(items) {
  const categories = { Weapons: [], Armor: [], Gear: [], Spellcasting: [], Treasure: [], Misc: [] };
  items.forEach(i => {
    const t = TYPE[i.type] || i.type || "";
    if (t.includes("Weapon") || t.includes("Ammunition")) categories.Weapons.push(i);
    else if (t.includes("Armor") || t.includes("Shield")) categories.Armor.push(i);
    else if (t.includes("Artisan") || t.includes("Adventuring Gear") || t.includes("Tool") || t.includes("Mount") || t.includes("Vehicle")) categories.Gear.push(i);
    else if (t.includes("Spellcasting Focus") || t.includes("Scroll")) categories.Spellcasting.push(i);
    else if (t.startsWith("Treasure") || t.includes("Gem") || t.includes("Art") || t.includes("coinage") || t.includes("Ring")) categories.Treasure.push(i);
    else categories.Misc.push(i);
  });
  return categories;
}

// -------------------- Table --------------------
function getVisibleColumns(items, keyColumns) {
  return keyColumns.filter(k =>
    items.some(item => {
      const { flat } = flattenItem(item);
      const v = flat[k];
      return v !== undefined && v !== null && v !== "" && v !== "—";
    })
  );
}


function renderItemsTable(items) {
    if (!items.length) return "<p>No items available.</p>";

const keyColumns = [
    "name", "source", "type", "rarity", "value", "weight",
    "ac", "bonusAc", "weaponCategory", "property",
    "dmg1", "dmgType", "armor", "strength", "stealth"
];

const visibleColumns = getVisibleColumns(items, keyColumns);

let html = `<table border="1" style="border-collapse:collapse">
<thead><tr>`;

visibleColumns.forEach(k => {
  html += `<th>${COLUMN_TITLES[k] || k}</th>`;
});

html += `<th>Other Details</th></tr></thead><tbody>`;

items.forEach(item => {
  const { flat, special } = flattenItem(item);
  html += "<tr>";

  visibleColumns.forEach(k => {
    let value = flat[k] ?? "—";

    if (k === "source") value = formatSource(flat.source, flat.page);
    if (k === "type") value = formatType(flat.type);
    if (k === "value") value = flat.value ? (flat.value / 100) + " gp" : "—";

    html += `<td>${formatCell(value)}</td>`;
  });

  html += `<td>${
    Object.keys(special).length
      ? `<details><summary>Show</summary>${formatNested(special)}</details>`
      : "—"
  }</td></tr>`;
});

html += "</tbody></table>";
return html;

}

function applyFilters(tabId, items) {
    const sourceFilter = document.querySelector(`.filter-source[data-tab="${tabId}"]`).value;
    const typeFilter = document.querySelector(`.filter-type[data-tab="${tabId}"]`).value;

    let filtered = items.slice();
    if (sourceFilter) filtered = filtered.filter(i => i.source === sourceFilter);
    if (typeFilter) filtered = filtered.filter(i => i.type.toString().split('|').includes(typeFilter));

    document.getElementById(`table-${tabId}`).innerHTML = renderItemsTable(filtered);
}


// -------------------- Tabs --------------------
function renderFilters(tabId) {
  const sourceOptions = Object.entries(SOURCE_NAMES).map(([k,v])=>`<option value="${k}">${v}</option>`).join("");
  const typeOptions = Object.entries(TYPE).map(([k,v])=>`<option value="${k}">${v}</option>`).join("");
  return `
    <div style="margin-bottom:1em;">
      <label>Source: <select class="filter-source" data-tab="${tabId}"><option value="">All</option>${sourceOptions}</select></label>
      <label style="margin-left:1em;">Type: <select class="filter-type" data-tab="${tabId}"><option value="">All</option>${typeOptions}</select></label>
    </div>
  `;
}

function setupFilters(tabId, items) {
  document.querySelector(`.filter-source[data-tab="${tabId}"]`).addEventListener("change",()=>applyFilters(tabId,items));
  document.querySelector(`.filter-type[data-tab="${tabId}"]`).addEventListener("change",()=>applyFilters(tabId,items));
}

function setupTabs() {
  const buttons = document.querySelectorAll(".tab-btn");
  buttons.forEach(btn => btn.addEventListener("click",()=>{
    document.querySelectorAll(".tab-content").forEach(tc=>tc.style.display="none");
    document.querySelectorAll(".tab-btn").forEach(b=>b.classList.remove("active"));
    document.getElementById("tab-"+btn.dataset.tab).style.display="block";
    btn.classList.add("active");
  }));
  if(buttons.length) buttons[0].click();
}

// -------------------- Load Items --------------------
async function loadItems(fetchFn, itemsArray) {
  const statblock = document.getElementById("items-statblock");
  statblock.innerHTML = "<p>Loading items...</p>";
  try {
    if (!itemsArray.length) itemsArray.push(...await fetchFn());
    currentItems = itemsArray.slice();
    const categories = categorizeItems(currentItems);

    const tabHeaders = Object.keys(categories).map(cat => `<button class="tab-btn" data-tab="${cat}">${cat} (${categories[cat].length})</button>`).join("");
    const tabContents = Object.entries(categories).map(([cat, items])=>`
      <div class="tab-content" id="tab-${cat}" style="display:none">
        ${renderFilters(cat)}
        <div id="table-${cat}">${renderItemsTable(items)}</div>
      </div>
    `).join("");

    statblock.innerHTML = `<div class="tabs">${tabHeaders}</div>${tabContents}`;
    setupTabs();
    Object.entries(categories).forEach(([cat, items])=>setupFilters(cat, items));
    statblock.style.display="block";
  } catch(err) {
    console.error(err);
    statblock.innerHTML = "<p>Error loading items.</p>";
  }
}

// -------------------- Exported --------------------
export function initItems() {
  document.addEventListener("showItemsTable", ()=>loadItems(()=>fetchJson(ITEMS_PATH,"item"), allItems));
  document.addEventListener("showBasicItemsTable", ()=>loadItems(()=>fetchJson(BASIC_ITEMS_PATH,"baseitem"), basicItems));
}
