export function initViewSwitcher() {

  const monsterBtn = document.getElementById("Monsterstats");
  const spellsBtn  = document.getElementById("Spells");
  const rulesBtn   = document.getElementById("Rules");
  const charactersBtn = document.getElementById("Character");
 const itemsBtn = document.getElementById("Items");
const fluffBtn = document.getElementById("Fluff");
const classesBtn = document.getElementById("classesBtn");
const strainBtn     = document.getElementById("strainBtn");
const racesBtn      = document.getElementById("racesnBtn");
const backgroundBtn = document.getElementById("backgroundBtn");
const featsBtn      = document.getElementById("featsBtn");



  const monsterFilters    = document.getElementById("monster-filters");
  const spellFilters      = document.getElementById("spell-filters");
  const rulesFilters      = document.getElementById("rules-filters");
  const characterFilters  = document.getElementById("character-filters");
const itemsFilters  = document.getElementById("items-filters");
const fluffFilters  = document.getElementById("fluff-filters");
const classFilters = document.getElementById("classFilters");

  const monsterStatblock   = document.getElementById("monster-statblock");
  const spellStatblock     = document.getElementById("spell-statblock");
  const rulesStatblock     = document.getElementById("rules-statblock");
  const characterStatblock = document.getElementById("character-statblock");
  const combatTracker = document.querySelector(".combat-tracker");
const itemsStatblock = document.getElementById("items-statblock");
const fluffStatblock = document.getElementById("fluff-statblock");
const homeStatblock = document.getElementById("home-statblock");


  function show(el) { if (el) el.style.display = "block"; }
  function hide(el) { if (el) el.style.display = "none"; }

function showHome() {
  show(homeStatblock);

  hide(monsterFilters);
  hide(monsterStatblock);
  hide(spellFilters);
  hide(spellStatblock);
  hide(rulesFilters);
  hide(rulesStatblock);
  hide(characterFilters);
  hide(characterStatblock);
  hide(itemsFilters);
  hide(itemsStatblock);
  hide(fluffFilters);
  hide(fluffStatblock);
  hide(combatTracker);
}


  function showMonsters() {
  show(monsterFilters);
  show(monsterStatblock);
  show(combatTracker);

  hide(spellFilters);
  hide(spellStatblock);
  hide(rulesFilters);
  hide(rulesStatblock);
  hide(characterFilters);
  hide(characterStatblock);
  hide(itemsFilters);
  hide(itemsStatblock);
  hide(fluffFilters);
  hide(fluffStatblock);
  hide(homeStatblock);

}

function showSpells() {
  show(spellFilters);
  show(spellStatblock);
  show(combatTracker);

  hide(monsterFilters);
  hide(monsterStatblock);
  hide(rulesFilters);
  hide(rulesStatblock);
  hide(characterFilters);
  hide(characterStatblock);
  hide(itemsFilters);
  hide(itemsStatblock);
    hide(fluffFilters);
  hide(fluffStatblock);
  hide(homeStatblock);

}

function showRules() {
  show(rulesFilters);
  show(rulesStatblock);
  show(combatTracker);

  hide(monsterFilters);
  hide(monsterStatblock);
  hide(spellFilters);
  hide(spellStatblock);
  hide(characterFilters);
  hide(characterStatblock);
  hide(itemsFilters);
  hide(itemsStatblock);
    hide(fluffFilters);
  hide(fluffStatblock);
  hide(homeStatblock);

}
function showCharacters() {
  show(characterFilters);
  show(characterStatblock);

  hide(monsterFilters);
  hide(monsterStatblock);
  hide(spellFilters);
  hide(spellStatblock);
  hide(rulesFilters);
  hide(rulesStatblock);
  hide(combatTracker);
  hide(itemsFilters);
  hide(itemsStatblock);
    hide(fluffFilters);
  hide(fluffStatblock);
  hide(homeStatblock);
    hide(classFilters);

}

function showItems() {
  show(itemsFilters);
  show(itemsStatblock);

  hide(monsterFilters);
  hide(monsterStatblock);
  hide(spellFilters);
  hide(spellStatblock);
  hide(rulesFilters);
  hide(rulesStatblock);
  hide(combatTracker);
  hide(characterFilters);
  hide(characterStatblock);
    hide(fluffFilters);
  hide(fluffStatblock);
  hide(homeStatblock);

}


function showFluff() {
  show(fluffFilters);
  show(fluffStatblock);
  hide(monsterFilters);
  hide(monsterStatblock);
  hide(spellFilters);
  hide(spellStatblock);
  hide(rulesFilters);
  hide(rulesStatblock);
  hide(combatTracker);
  hide(characterFilters);
  hide(characterStatblock);
  hide(itemsFilters);
  hide(itemsStatblock);
  hide(homeStatblock);

}

function hideClassFilters() {
  hide(classFilters);
}

function showClassFilters() {
  show(classFilters);
}



  monsterBtn.addEventListener("click", showMonsters);
  spellsBtn.addEventListener("click", showSpells);
  rulesBtn.addEventListener("click", showRules);
  charactersBtn.addEventListener("click", showCharacters);
  itemsBtn.addEventListener("click", showItems);
  fluffBtn.addEventListener("click", showFluff);
  classesBtn.addEventListener("click", showClassFilters);
  characterBtn.addEventListener("click", hideClassFilters);
strainBtn.addEventListener("click", hideClassFilters);
racesBtn.addEventListener("click", hideClassFilters);
backgroundBtn.addEventListener("click", hideClassFilters);
featsBtn.addEventListener("click", hideClassFilters);


  showHome();
}

