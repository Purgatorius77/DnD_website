export function initViewSwitcher() {

  const monsterBtn = document.getElementById("Monsterstats");
  const spellsBtn  = document.getElementById("Spells");
  const rulesBtn   = document.getElementById("Rules");
  const charactersBtn = document.getElementById("Character");
 

  const monsterFilters    = document.getElementById("monster-filters");
  const spellFilters      = document.getElementById("spell-filters");
  const rulesFilters      = document.getElementById("rules-filters");
  const characterFilters  = document.getElementById("character-filters");


  const monsterStatblock   = document.getElementById("monster-statblock");
  const spellStatblock     = document.getElementById("spell-statblock");
  const rulesStatblock     = document.getElementById("rules-statblock");
  const characterStatblock = document.getElementById("character-statblock");
  const combatTracker      = document.getElementById("combat-tracker");

  function show(el) { if (el) el.style.display = "block"; }
  function hide(el) { if (el) el.style.display = "none"; }

  function showMonsters() {
    show(monsterFilters);
    show(monsterStatblock);

    hide(spellFilters);
    hide(spellStatblock);
    hide(rulesFilters);
    hide(rulesStatblock);
    hide(characterFilters);
    hide(characterStatblock);
  }

  function showSpells() {
    show(spellFilters);
    show(spellStatblock);

    hide(monsterFilters);
    hide(monsterStatblock);
    hide(rulesFilters);
    hide(rulesStatblock);
    hide(characterFilters);
    hide(characterStatblock);
  }

  function showRules() {
    show(rulesFilters);
    show(rulesStatblock);

    hide(monsterFilters);
    hide(monsterStatblock);
    hide(spellFilters);
    hide(spellStatblock);
    hide(characterFilters);
    hide(characterStatblock);
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
  }

  monsterBtn.addEventListener("click", showMonsters);
  spellsBtn.addEventListener("click", showSpells);
  rulesBtn.addEventListener("click", showRules);
  charactersBtn.addEventListener("click", showCharacters);

  showMonsters();
}
