// -------------------- Paths --------------------
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

const TYPE = {
  A: "Ammunition (old)",
  "A|XPHB": "Ammunition (new)",
  AF: "Ammunition (Firearm)",
  "AF|DMG": "Futuristic Ammunition",
  "AF|XDMG": "Futuristic Ammunition",
  INS: "Instrument (old)",
  "INS|XPHB": "Instrument (new)",
  M: "Melee Weapon (old)",
  "M|XPHB": "Melee Weapon (new)",
  R: "Ranged Weapon (old)",
  "R|XPHB": "Ranged Weapon (new)",
  MA: "Medium Armor (old)",
  "MA|XPHB": "Medium Armor (new)",
  LA: "Light Armor (old)",
  "LA|XPHB": "Light Armor (new)",
  HA: "Heavy Armor (old)",
  "HA|XPHB": "Heavy Armor (new)",
  S: "Shield",
  "S|XPHB": "Shield (new)",
  SCF: "Spellcasting Focus (old)",
  "SCF|XPHB": "Spellcasting Focus (new)",
  RD: "Rod",
  "RD|DMG": "Rod",
  "RD|XDMG": "Rod",
  WD: "Wand",
  "WD|DMG": "Wand",
  "WD|XDMG": "Wand",
  G: "Adventuring Gear",
  "G|XPHB": "Adventuring Gear",
  TG: "Trade Good",
  "TG|XDMG": "Trade Good",
  OTH: "Other",
  "RG|DMG": "Ring",
  "RG|XDMG": "Ring",
  AT: "Artisan's Tools",
  "AT|XPHB": "Artisan's Tools",
  TAH: "Tack and Harness",
  "TAH|XPHB": "Tack and Harness",
  T: "Tool",
  "T|XPHB": "Tool",
  GS: "Gaming Set",
  "GS|XPHB": "Gaming Set",
  EXP: "Explosive",
  "EXP|DMG": "Explosive",
  "EXP|XDMG": "Explosive",
  "$G|DMG": "Treasure: Gemstone",
  "$G|XDMG": "Treasure: Gemstone",
  "$A|DMG": "Treasure: Art",
  "$A|XDMG": "Treasure: Art",
  SPC: "Vehicle: Space",
  "SPC|AAG": "Vehicle: Space",
  "$C": "Treasure: Coinage",
  SHP: "Ship",
  "SHP|XPHB": "Ship",
  VEH: "Vehicle",
  "VEH|XPHB": "Vehicle",
  SC: "Scroll",
  "SC|DMG": "Scroll",
  "SC|XPHB": "Scroll",
  FD: "Food & Drink",
  "FD|XPHB": "Food & Drink",
  AIR: "Airship",
  "AIR|DMG": "Airship",
  "AIR|XPHB": "Airship",
  MNT: "Mount",
  "MNT|XPHB": "Mount"
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
  mastery: "Mastery",
  dmg1: "Damage",
  dmgType: "Damage Type",
  armor: "Armor Type",
  strength: "Strength Req.",
  stealth: "Stealth"
};

const PROPERTY = {
  A: "Ammunition",
  AF: "Ammunition (Firearm)",
  F: "Finesse",
  H: "Heavy",
  L: "Light",
  R: "Reach",
  S: "Special",
  T: "Thrown",
  V: "Versatile",
  "2H": "Two-Handed",
  LD: "Loading",
  BF: "Burst Fire",
  RLD: "Reload",
  BF2: "Burst Fire (2)",
  BF3: "Burst Fire (3)",
  Vst: "Vestige"
};

const DAMAGE_TYPES = {
  B: "Bludgeoning",
  P: "Piercing",
  S: "Slashing",
  F: "Fire",
  C: "Cold",
  L: "Lightning",
  T: "Thunder",
  A: "Acid",
  N: "Necrotic",
  R: "Radiant",
  O: "Poison",
  Y: "Psychic",
  H: "Force"
};

// -------------------- Tooltips --------------------
const PROPERTY_TOOLTIPS = {
  A: "Ammunition: You can use a weapon with this property to make a ranged attack. Each attack consumes one piece of ammunition. Drawing ammunition from a quiver, case, or container is part of the attack.",
  AF: "Ammunition (Firearm): Same as Ammunition but for firearms, including modern or futuristic types.",
  F: "Finesse: You can use your Dexterity modifier instead of Strength for the attack and damage rolls.",
  H: "Heavy: Small creatures have disadvantage on attack rolls with this weapon. Disadvantage applies on melee attacks if Strength < 13 and ranged attacks if Dexterity < 13.",
  L: "Light: This weapon is small and easy to handle, suitable for two-weapon fighting.",
  R: "Reach: This weapon adds 5 feet to your reach when you attack with it.",
  S: "Special: This weapon has unusual rules or properties; see its description for details.",
  T: "Thrown: You can throw this weapon to make a ranged attack using the same ability modifier as for melee attacks.",
  V: "Versatile: Can be used with one or two hands. Damage listed for both modes.",
  "2H": "Two-Handed: Requires two hands to use.",
  LD: "Loading: Can fire only one piece of ammunition per action, regardless of extra attacks.",
  BF: "Burst Fire: Fires multiple rounds per attack action; see description.",
  RLD: "Reload: Must spend listed actions to reload the weapon after firing."
};

const MASTERY_TOOLTIPS = {
  Topple: "Topple: When you hit a creature with this weapon, you can attempt to knock it prone. The target must make a Constitution saving throw (DC 8) or fall prone. Works only on Large or smaller creatures.",
  Slow: "Slow: Weapons with this mastery reduce attack speed or frequency. Only one attack per attack action.",
  Sap: "Sap: Deals non-lethal damage. Can knock a creature unconscious if it drops to 0 HP.",
  Vex: "Vex: Allows special maneuvers or bonus effects; see weapon description for details.",
  Cleave: "Cleave: When hitting a creature, may also damage another adjacent creature using same attack rules.",
  Graze: "Graze: Deals partial damage on hit; may cause secondary effects or conditions.",
  Nick: "Nick: Deals minor damage; may cause minor conditions like bleeding or stagger.",
  Push: "Push: On hit, can push target a short distance. Target may make Strength saving throw if specified."
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

function formatPropertyTooltip(props, item) {
  if (!props) return "—";
  if (!Array.isArray(props)) props = [props];

  return props.map(p => {
    const key = (typeof p === "string" ? p : p?.type ?? String(p)).split("|")[0];
    let label = PROPERTY[key] || key;

    // Versatile damage
    if (key === "V" && item?.dmg2) label += ` (${item.dmg2})`;

    // Ammunition
    if ((key === "A" || key === "AF") && item) {
      const parts = [];
      if (item.range) parts.push(`Range ${item.range}`);
      if (item.ammoType) parts.push(item.ammoType.split("|")[0]);
      if (parts.length) label += ` (${parts.join(", ")})`;
    }

    // Reload
    if (key === "RLD" && item?.reload) label += ` (${item.reload} shots)`;

    const tooltip = PROPERTY_TOOLTIPS[key] ? ` title="${PROPERTY_TOOLTIPS[key]}"` : "";
    const style = tooltip
      ? "style='text-decoration: underline dotted; cursor: help; color: #0645AD'"
      : "";

    return `<span${tooltip} ${style}>${label}</span>`;
  }).join(", ");
}

function formatMasteryTooltip(mastery) {
  if (!mastery) return "—";
  if (!Array.isArray(mastery)) mastery = [mastery];

  return mastery.map(m => {
    const key = (typeof m === "string" ? m : m?.type ?? String(m)).split("|")[0];
    const tooltip = MASTERY_TOOLTIPS[key] ? ` title="${MASTERY_TOOLTIPS[key]}"` : "";
    const style = tooltip
      ? "style='text-decoration: underline dotted; cursor: help; color: #0645AD'"
      : "";
    return `<span${tooltip} ${style}>${key}</span>`;
  }).join(", ");
}

function formatDamageType(type) {
  if (!type) return "—";
  const clean = typeof type === "string" ? type.split("|")[0] : type;
  return DAMAGE_TYPES[clean] || clean;
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

function formatStealth(item) {
  return item?.stealth ? "Disadvantage" : "—";
}

function formatArmorAC(item) {
  if (!item?.ac) return "—";
  const type = (item.type || "").split("|")[0];
  if (type === "S") return `+${item.ac}`;
  if (type === "LA") return `${item.ac} + Dex`;
  if (type === "MA") return `${item.ac} + Dex (max 2)`;
  if (type === "HA") return String(item.ac);
  return String(item.ac);
}

function formatType(typeKey) {
  if (!typeKey) return "—";
  return typeKey.toString().split("|").map(t => TYPE[t] || t).join(", ");
}

function formatEntries(entries) {
  if (!entries) return "";
  if (!Array.isArray(entries)) entries = [entries];

  return entries.map(e => {
    if (typeof e === "string") return `<p>${e}</p>`;
    if (e.type === "list" && Array.isArray(e.items)) {
      const itemsHtml = e.items.map(item => {
        let content = item.name ? `<strong>${item.name}</strong> ` : "";
        if (item.entries) content += formatEntries(item.entries);
        return `<li>${content}</li>`;
      }).join("");
      return `<ul style="margin-left:1em">${itemsHtml}</ul>`;
    }
    if (e.entries) return formatEntries(e.entries);
    return `<pre>${JSON.stringify(e)}</pre>`;
  }).join("");
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
    "ac", "bonusAc", "weaponCategory", "property", "mastery",
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

      switch(k) {
        case "source": value = formatSource(flat.source, flat.page); break;
        case "type": value = formatType(flat.type); break;
        case "value": value = flat.value ? (flat.value / 100) + " gp" : "—"; break;
        case "property": value = formatPropertyTooltip(flat.property, item); break;
        case "mastery": value = formatMasteryTooltip(flat.mastery); break;
        case "ac": value = formatArmorAC(item); break;
        case "stealth": value = formatStealth(item); break;
        case "dmgType": value = formatDamageType(flat.dmgType); break;
      }

      html += `<td>${formatCell(value)}</td>`;
    });

    const otherDetails = [];
    if (item.entries) otherDetails.push(formatEntries(item.entries));
    if (Object.keys(special).length) otherDetails.push(formatNested(special));

    html += `<td>${otherDetails.join("<br>") || "—"}</td>`;
    html += "</tr>";
  });

  html += "</tbody></table>";
  return html;
}

// -------------------- Filters & Tabs --------------------
function applyFilters(tabId, items) {
  const sourceFilter = document.querySelector(`.filter-source[data-tab="${tabId}"]`).value;
  const typeFilter = document.querySelector(`.filter-type[data-tab="${tabId}"]`).value;

  let filtered = items.slice();
  if (sourceFilter) filtered = filtered.filter(i => i.source === sourceFilter);
  if (typeFilter) filtered = filtered.filter(i => i.type.toString().split('|').includes(typeFilter));

  document.getElementById(`table-${tabId}`).innerHTML = renderItemsTable(filtered);
}

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
