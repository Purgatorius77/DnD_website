// -------------------- Paths --------------------
const BASIC_ITEMS_PATH = "data/items-base.json";
const ITEMS_PATH = "data/items.json";
const ALLOWED_MAGIC_SOURCES = new Set(["XDMG", "XPHB"]);

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
  A: "You can use a weapon that has the Ammunition property to make a ranged attack only if you have ammunition to fire from it. The type of ammunition required is specified with the weapon's range. Each attack expends one piece of ammunition. Drawing the ammunition is part of the attack (you need a free hand to load a one-handed weapon). After a fight, you can spend 1 minute to recover half the ammunition (round down) you used in the fight; the rest is lost.",
  AF: "Ammunition (Firearm): Same as Ammunition but for firearms, including modern or futuristic types.",
  F: "When making an attack with a finesse weapon, you use your choice of your Strength or Dexterity modifier for the attack and damage rolls. You must use the same modifier for both rolls.",
  H: "You have Disadvantage on attack rolls with a Heavy weapon if it's a Melee weapon and your Strength score isn't at least 13 or if it's a Ranged weapon and your Dexterity score isn't at least 13.",
  L: "A light weapon is small and easy to handle, making it ideal for use when fighting with two weapons.",
  R: "A Reach weapon adds 5 feet to your reach when you attack with it, as well as when determining your reach for Opportunity Attacks with it.",
  S: "This weapon has unusual rules or properties; see its description for details.",
  T: "If a weapon has the thrown property, you can throw the weapon to make a ranged attack. If the weapon is a melee weapon, you use the same ability modifier for that attack roll and damage roll that you would use for a melee attack with the weapon. For example, if you throw a handaxe, you use your Strength, but if you throw a dagger, you can use either your Strength or your Dexterity, since the dagger has the finesse property.",
  V: "A Versatile weapon can be used with one or two hands. A damage value in parentheses appears with the property. The weapon deals that damage when used with two hands to make a melee attack.",
  "2H": "A Two-Handed weapon requires two hands when you attack with it.",
  LD: "You can fire only one piece of ammunition from a Loading weapon when you use an action, a Bonus Action, or a Reaction to fire it, regardless of the number of attacks you can normally make.",
  BF: "Burst Fire: Fires multiple rounds per attack action; see description.",
  RLD: "Reload: Must spend listed actions to reload the weapon after firing."
};

const MASTERY_TOOLTIPS = {
  Topple: "If you hit a creature with this weapon, you can force the creature to make a Constitution saving throw (DC 8 plus the ability modifier used to make the attack roll and your Proficiency Bonus). On a failed save, the creature has the Prone condition.",
  Slow: "If you hit a creature with this weapon and deal damage to it, you can reduce its Speed by 10 feet until the start of your next turn. If the creature is hit more than once by weapons that have this property, the Speed reduction doesn't exceed 10 feet.",
  Sap: "If you hit a creature with this weapon, that creature has Disadvantage on its next attack roll before the start of your next turn.",
  Vex: "If you hit a creature with this weapon and deal damage to the creature, you have Advantage on your next attack roll against that creature before the end of your next turn.",
  Cleave: "If you hit a creature with a melee attack roll using this weapon, you can make a melee attack roll with the weapon against a second creature within 5 feet of the first that is also within your reach. On a hit, the second creature takes the weapon's damage, but don't add your ability modifier to that damage unless that modifier is negative. You can make this extra attack only once per turn.",
  Graze: "If your attack roll with this weapon misses a creature, you can deal damage to that creature equal to the ability modifier you used to make the attack roll. This damage is the same type dealt by the weapon, and the damage can be increased only by increasing the ability modifier.",
  Nick: "When you make the extra attack of the Light property, you can make it as part of the Attack action instead of as a Bonus Action. You can make this extra attack only once per turn.",
  Push: "If you hit a creature with this weapon, you can push the creature up to 10 feet straight away from yourself if it is Large or smaller."
};

// -------------------- State --------------------
let normalItems = [];
let basicItems = [];
let magicBaseItems = [];
let currentItems = [];
let MAGIC_VARIANTS = [];


// -------------------- Fetch --------------------
async function fetchJson(path, key) {
  const res = await fetch(path);
  if (!res.ok) throw new Error(`Failed to load ${path}`);
  const data = await res.json();
  return data[key] || [];
}

async function loadMagicVariants() {
  const data = await fetch("data/magicvariants.json").then(r => r.json());
  // Only keep non-classic variants
  MAGIC_VARIANTS = (data.magicvariant || []).filter(v => v.edition !== "classic");
}


// -------------------- Utilities --------------------
function parseInline(text, item) {
  if (typeof text !== "string") return "";

  // Only replace bonus placeholders if item is provided
  if (item) {
    text = text.replace(/\{=bonusWeapon\}/gi, item.bonusWeapon || "");
    text = text.replace(/\{=bonusAc\}/gi, item.bonusAc || "");
  }

  // Replace {#itemEntry Item Name|SOURCE} with the full magic name including suffix/prefix
  text = text.replace(/\{#itemEntry\s+([^|}]+)(?:\|([^}]+))?\}/gi, (_, entryName, entrySource) => {
    const baseItem = [...basicItems, ...normalItems].find(i =>
      i.name === entryName && (!entrySource || i.source === entrySource)
    );
    if (!baseItem) return entryName; // fallback if items aren't loaded yet
    let fullName = baseItem.name;
    if (baseItem.resist && Array.isArray(baseItem.resist) && baseItem.resist.length) {
      const resistNames = baseItem.resist.map(r => r[0].toUpperCase() + r.slice(1));
      fullName = fullName + " of " + resistNames.join(" & ") + " Resistance";
    }
    return fullName;
  });

  // …rest of inline parsing (dice, dc, italics, etc.)
  text = text
    .replace(/\{@dice\s+([^}]+)\}/gi, "<strong>$1</strong>")
    .replace(/\{@dc\s+([^}]+)\}/gi, "DC $1")
    .replace(/\{@italic\s+([^}]+)\}/gi, "<em>$1</em>")
    .replace(/\{@bold\s+([^}]+)\}/gi, "<strong>$1</strong>")
    .replace(/\{@sense\s+([^|}]+)(?:\|[^}]*)?\}/gi, "$1")
    .replace(/\{@skill\s+([^|}]+)(?:\|[^}]*)?\}/gi, "$1")
    .replace(/\{@condition\s+([^|}]+)(?:\|[^}]*)?\}/gi, "$1")
    .replace(/\{@(spell|item|creature|class|feat|background)\s+([^|}]+)(?:\|[^}]*)?\}/gi, "$2")
    .replace(/\{@table\s+([^|}]+)(?:\|[^}]*)?\}/gi, "$1")
    .replace(/\{@book\s+([^|}]+)(?:\|[^}]*)?\}/gi, "$1")
    .replace(/\{@variantrule\s+([^|}]+)(?:\|[^}]*)?\}/gi, "<em>$1</em>")
    .replace(/\{@chance\s+(\d+)\}/gi, "$1% chance")
    .replace(/\{@[^}]+\}/g, "");

  return text;
}




function enrichBaseItems(items) {
  for (const item of items) {
    const type = (item.type || "").split("|")[0];

    if (["M", "R", "A", "AF"].includes(type)) item.weapon = true;
    if (["LA", "MA", "HA"].includes(type)) item.armor = true;
    if (type === "S") item.shield = true;
    if (type.includes("Tool") || type.includes("Artisan") || type.includes("Mount") || type.includes("Vehicle"))
      item.gear = true;

    // Ensure the source is XPHB or XDMG so variants can apply
    if (!ALLOWED_MAGIC_SOURCES.has(item.source)) item.source = "XPHB"; 
  }
}


function excludesItem(excludes, item) {
  if (excludes.net && item.name.toLowerCase().includes("net")) return true;
  if (excludes.name && item.name === excludes.name) return true;
  return false;
}



function generateMagicVariants(item) {
  const results = [];

  for (const variant of MAGIC_VARIANTS) {
    if (!variantAppliesToItem(variant, item)) continue;

    const magicItem = applyVariant(item, variant);

    magicItem.baseItemName = item.name;
    magicItem.baseItemSource = item.source;

    results.push(magicItem);
  }

  return results;
}



function applyVariant(item, variant) {
  const magicItem = structuredClone(item);

  if (variant.inherits?.namePrefix)
    magicItem.name = variant.inherits.namePrefix + magicItem.name;

  if (variant.inherits?.nameSuffix)
    magicItem.name = magicItem.name + variant.inherits.nameSuffix;

  if (variant.inherits?.source) magicItem.source = variant.inherits.source;
  if (variant.inherits?.page) magicItem.page = variant.inherits.page;
  if (variant.inherits?.rarity) magicItem.rarity = variant.inherits.rarity;

  // ✅ Copy bonusWeapon and bonusAc
  if (variant.inherits?.bonusWeapon) magicItem.bonusWeapon = variant.inherits.bonusWeapon;
  if (variant.inherits?.bonusAc) magicItem.bonusAc = variant.inherits.bonusAc;

  if (variant.inherits?.entries) magicItem.entries = variant.inherits.entries;
  if (variant.inherits?.reqAttune) magicItem.reqAttune = variant.inherits.reqAttune;
  if (variant.inherits?.curse) magicItem.curse = variant.inherits.curse;
  if (variant.inherits?.lootTables) magicItem.lootTables = variant.inherits.lootTables;

  return magicItem;
}


function ruleMatchesItemStrict(rule, item) {
  // Exact name + source match
  if (rule.name) {
    return (
      item.name === rule.name &&
      (!rule.source || item.source === rule.source)
    );
  }

  // Type match
  if (rule.type) {
    return item.type === rule.type;
  }

  // Boolean flag match (weapon, armor, axe, etc.)
  for (const key of Object.keys(rule)) {
    if (key === "name" || key === "type" || key === "source") continue;

    // The rule requires this flag, the item MUST explicitly have it true
    if (rule[key] === true) {
      return item[key] === true;
    }
  }

  return false;
}


function variantAppliesToItem(variant, item) {
  // 1️⃣ Only allow base items from 2024 core books **if source exists**
  if (item.source && !ALLOWED_MAGIC_SOURCES.has(item.source)) return false;

  // 2️⃣ Variant itself must be from 2024 core books
  const variantSource = variant.inherits?.source;
  if (!ALLOWED_MAGIC_SOURCES.has(variantSource)) return false;

  // 3️⃣ Must have requirements
  if (!Array.isArray(variant.requires) || !variant.requires.length) return false;

  // 4️⃣ At least one requirement must match
  return variant.requires.some(req => ruleMatchesItemStrict(req, item));
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

export function enableItemTooltips() {
  const tooltip = document.getElementById("tooltip");
  let tooltipTimer;

  // Select all item cells that have a tooltip
  document.querySelectorAll(".items-table-wrap [data-tooltip]").forEach(el => {
    const text = el.dataset.tooltip;
    if (!text) return;

    // --- Desktop hover ---
    el.addEventListener("mouseenter", () => {
      clearTimeout(tooltipTimer);
      tooltip.textContent = text;
      tooltip.classList.add("show");
      positionTooltip(el);
    });

    el.addEventListener("mouseleave", () => {
      tooltip.classList.remove("show");
      clearTimeout(tooltipTimer);
    });

    // --- Touch / iPad ---
    el.addEventListener("pointerdown", e => {
      e.preventDefault(); // prevents accidental scroll
      clearTimeout(tooltipTimer);

      tooltip.textContent = text;
      tooltip.classList.add("show");
      positionTooltip(el);

      // hide after 5 seconds
      tooltipTimer = setTimeout(() => {
        tooltip.classList.remove("show");
      }, 5000);
    });

    el.addEventListener("pointercancel", () => {
      clearTimeout(tooltipTimer);
      tooltip.classList.remove("show");
    });
  });

  function positionTooltip(el) {
    const rect = el.getBoundingClientRect();
    const tipRect = tooltip.getBoundingClientRect();

    let left = rect.left + rect.width / 2 - tipRect.width / 2;
    let top = rect.top - tipRect.height - 10;

    left = Math.max(8, Math.min(left, window.innerWidth - tipRect.width - 8));
    if (top < 8) top = rect.bottom + 10;

    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";
  }
}


function formatAttachedSpells(attached) {
  if (!attached) return "—";

  const parts = [];

  if (attached.daily) {
    for (const [level, spells] of Object.entries(attached.daily)) {
      parts.push(`<b>Daily:</b> ${spells.join(", ")}`);
    }
  }

  if (attached.other?.length) {
    parts.push(`<b>Other:</b> ${attached.other.join(", ")}`);
  }

  return parts.join("<br>");
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

  // If the full key exists in TYPE, use it
  if (TYPE[typeKey]) return TYPE[typeKey];

  // Otherwise, fallback: split by | and map individually
  return typeKey.toString().split("|").map(t => TYPE[t] || t).join(", ");
}

function formatEntries(entries, item) {
  if (!entries) return "";
  if (!Array.isArray(entries)) entries = [entries];

  return entries.map(e => {
    // Simple string entry
    if (typeof e === "string") return `<p>${parseInline(e, item)}</p>`;

    // Entry is a list
// Entry is a list
if (e.type === "list" && Array.isArray(e.items)) {
  const itemsHtml = e.items.map(subItem => {
    // Handle string list items
    if (typeof subItem === "string") {
      return `<li>${parseInline(subItem, item)}</li>`;
    }

    // Handle object list items
    let content = "";
    if (subItem.name) content += `<strong>${parseInline(subItem.name, item)}</strong> `;
    if (subItem.entries) content += formatEntries(subItem.entries, item);

    return `<li>${content}</li>`;
  }).join("");

  return `<ul style="margin-left:1em">${itemsHtml}</ul>`;
}

    // Nested entries (like an object with 'entries' property)
// Entry with a heading + nested content
if (e.entries) {
  const title = e.name ? `<h4 style="margin:0.6em 0 0.2em 0">${parseInline(e.name, item)}</h4>` : "";
  return title + formatEntries(e.entries, item);
}


    // Fallback: stringify object
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

function categorizeMagicItems(magicItems) {
  // Same as categorizeItems
  return categorizeItems(magicItems);
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


let html = `
<div class="items-table-wrap">
<table border="1" style="border-collapse:collapse">


  <thead><tr>`;

  visibleColumns.forEach(k => {
    html += `<th>${COLUMN_TITLES[k] || k}</th>`;
  });

html += `<th style="width:28%; min-width:320px">Other Details</th>`;
html += `</tr></thead><tbody>`;


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


if (item.attachedSpells) {
  otherDetails.push(formatAttachedSpells(item.attachedSpells));
  delete special.attachedSpells;
}

if (Object.keys(special).length) otherDetails.push(formatNested(special));



html += `<td class="other-details-cell">
  ${otherDetails.length
    ? otherDetails.map(d => `<div class="other-block">${d}</div>`).join("")
    : "—"}
</td>`;

    html += "</tr>";
  });

html += `
</tbody>
</table>
</div>
`;


  return html;
}

function renderMagicItemsTable(items) {
  if (!items.length) return "<p>No magical items available.</p>";

  const keyColumns = [
    "name", "source", "type", "rarity", "value", "weight",
    "baseItemName", "baseItemSource"
  ];

  let html = `
    <div class="items-table-wrap">
      <table border="1" style="border-collapse:collapse; min-width:1000px">
        <thead>
          <tr>
            <th>Name</th>
            <th>Source</th>
            <th>Type</th>
            <th>Rarity</th>
            <th>Value</th>
            <th>Weight</th>
            <th>Base Item</th>
            <th>Base Source</th>
            <th style="width:28%; min-width:320px">Other Details</th>
          </tr>
        </thead>
        <tbody>
  `;

  items.forEach(item => {
    html += "<tr>";

    const { flat, special } = flattenItem(item);

    html += `<td>${flat.name}</td>`;
    html += `<td>${formatSource(flat.source, flat.page)}</td>`;
    html += `<td>${formatType(flat.type)}</td>`;
    html += `<td>${flat.rarity || "—"}</td>`;
    html += `<td>${flat.value ? flat.value / 100 + " gp" : "—"}</td>`;
    html += `<td>${flat.weight || "—"}</td>`;
    html += `<td>${item.baseItemName || "—"}</td>`;
    html += `<td>${item.baseItemSource ? formatSource(item.baseItemSource) : "—"}</td>`;

    const otherDetails = [];
    // In renderMagicItemsTable:
if (item.entries) otherDetails.push(formatEntries(item.entries, item));

    if (item.attachedSpells) {
      otherDetails.push(formatAttachedSpells(item.attachedSpells));
      delete special.attachedSpells;
    }
    if (Object.keys(special).length) otherDetails.push(formatNested(special));

    html += `<td class="other-details-cell">${otherDetails.length
      ? otherDetails.map(d => `<div class="other-block">${d}</div>`).join("")
      : "—"}</td>`;

    html += "</tr>";
  });

  html += `
        </tbody>
      </table>
    </div>
  `;

  return html;
}



// -------------------- Filters & Tabs --------------------
function applyFilters(tabId, items) {
  const sourceEl = document.querySelector(`.filter-source[data-tab="${tabId}"]`);
  const typeEl = document.querySelector(`.filter-type[data-tab="${tabId}"]`);
  if (!sourceEl || !typeEl) return;

  const sourceFilter = sourceEl.value;
  const typeFilter = typeEl.value;

  // For magical items, items are already categorized by category
  const categories = tabId === "magical" ? categorizeItems(items) : { [tabId]: items };

  for (const [cat, catItems] of Object.entries(categories)) {
    let filtered = catItems.slice();

    if (sourceFilter) {
      filtered = filtered.filter(
        i => i.source === sourceFilter || i.baseItemSource === sourceFilter
      );
    }

    if (typeFilter) {
      filtered = filtered.filter(
        i => i.type.toString().split('|').includes(typeFilter)
      );
    }

    const tableId = `table-${cat}`;
    const html = tabId === "magical" ? renderMagicItemsTable(filtered) : renderItemsTable(filtered);
    const tableEl = document.getElementById(tableId);
    if (tableEl) tableEl.innerHTML = html;
     enableItemTooltips(); 
  }
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
  const sourceEl = document.querySelector(`.filter-source[data-tab="${tabId}"]`);
  const typeEl = document.querySelector(`.filter-type[data-tab="${tabId}"]`);
  if (!sourceEl || !typeEl) return;

  sourceEl.addEventListener("change", () => applyFilters(tabId, items));
  typeEl.addEventListener("change", () => applyFilters(tabId, items));
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
// -------------------- Load Items (non-magical) --------------------
async function loadItems(fetchFn, itemsArray) {
  const statblock = document.getElementById("items-statblock");
  statblock.innerHTML = "<p>Loading items...</p>";

  try {
    // Fetch the items if not already loaded
    if (!itemsArray.length) itemsArray.push(...await fetchFn());

    // Only base items — no magic variants
    currentItems = itemsArray.slice();

    const categories = categorizeItems(currentItems);

    // Render tabs and tables as usual
    const tabHeaders = Object.keys(categories)
      .map(cat => `<button class="tab-btn" data-tab="${cat}">${cat} (${categories[cat].length})</button>`)
      .join("");

    const tabContents = Object.entries(categories)
      .map(([cat, items]) => `
        <div class="tab-content" id="tab-${cat}" style="display:none">
          ${renderFilters(cat)}
          <div id="table-${cat}">${renderItemsTable(items)}</div>
        </div>
      `).join("");

    statblock.innerHTML = `<div class="tabs">${tabHeaders}</div>${tabContents}`;
    setupTabs();
    Object.entries(categories).forEach(([cat, items]) => setupFilters(cat, items));

    statblock.style.display = "block";
  } catch(err) {
    console.error(err);
    statblock.innerHTML = "<p>Error loading items.</p>";
  }
}


// -------------------- Load Magical Items --------------------
async function loadMagicItemsTable() {
  const statblock = document.getElementById("items-statblock");
  statblock.innerHTML = "<p>Loading magical items...</p>";

  try {
    if (!magicBaseItems.length)
      magicBaseItems.push(...await fetchJson(BASIC_ITEMS_PATH, "baseitem"));

    if (!normalItems.length)
      normalItems.push(...await fetchJson(ITEMS_PATH, "item"));

    // Enrich items with flags
    enrichBaseItems(magicBaseItems);
    enrichBaseItems(normalItems);

    if (!MAGIC_VARIANTS.length)
      await loadMagicVariants();

    const allBaseItems = [...magicBaseItems, ...normalItems];

    const magicItems = [];

    for (const item of allBaseItems) {
      const variants = generateMagicVariants(item);
      for (const v of variants) {
        v.baseItemName = item.name;
        v.baseItemSource = item.source;
        magicItems.push(v);
      }
    }

    currentItems = magicItems.slice();

    const categories = categorizeMagicItems(magicItems);

    const tabHeaders = Object.keys(categories)
      .map(cat => `<button class="tab-btn" data-tab="${cat}">${cat} (${categories[cat].length})</button>`)
      .join("");

    const tabContents = Object.entries(categories)
      .map(([cat, items]) => `
        <div class="tab-content" id="tab-${cat}" style="display:none">
          ${renderFilters(cat)}
          <div id="table-${cat}">${renderMagicItemsTable(items)}</div>
        </div>
      `).join("");

    statblock.innerHTML = `<div class="tabs">${tabHeaders}</div>${tabContents}`;

    setupTabs();
    Object.entries(categories).forEach(([cat, items]) => setupFilters(cat, items));

  } catch (err) {
    console.error(err);
    statblock.innerHTML = "<p>Error loading magical items.</p>";
  }
}








// -------------------- Exported --------------------
export async function initItems() {
  await loadMagicVariants();

  document.addEventListener("showItemsTable", () =>
    loadItems(() => fetchJson(ITEMS_PATH, "item"), normalItems)
  );

  document.addEventListener("showBasicItemsTable", () =>
    loadItems(() => fetchJson(BASIC_ITEMS_PATH, "baseitem"), basicItems)
  );

  document.addEventListener("showMagicalItemsTable", () =>
    loadMagicItemsTable()
  );
}




