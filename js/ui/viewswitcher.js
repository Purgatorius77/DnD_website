export function initViewSwitcher() {
  /* =====================
     BUTTONS
  ====================== */
  const homeBtn       = document.getElementById("homeBtn");
  const monsterBtn    = document.getElementById("Monsterstats");
  const spellsBtn     = document.getElementById("Spells");
  const rulesBtn      = document.getElementById("Rules");
  const charactersBtn = document.getElementById("Character");
  const itemsBtn      = document.getElementById("Items");
  const fluffBtn      = document.getElementById("Fluff");

  const classesBtn    = document.getElementById("classesBtn");
  const strainBtn     = document.getElementById("strainBtn");
  const racesBtn      = document.getElementById("racesnBtn");
  const backgroundBtn = document.getElementById("backgroundBtn");
  const featsBtn      = document.getElementById("featsBtn");

  /* =====================
     INTRO STATBLOCKS
  ====================== */
  const homeStatblock   = document.getElementById("home-statblock");
  const monstersIntro   = document.getElementById("monsters-intro");
  const spellsIntro     = document.getElementById("spells-intro");
  const charactersIntro = document.getElementById("characters-intro");
  const rulesIntro      = document.getElementById("rules-intro");
  const itemsIntro      = document.getElementById("items-intro");
  const fluffIntro      = document.getElementById("fluff-intro");

  /* =====================
     FILTERS
  ====================== */
  const monsterFilters   = document.getElementById("monster-filters");
  const spellFilters     = document.getElementById("spell-filters");
  const rulesFilters     = document.getElementById("rules-filters");
  const characterFilters = document.getElementById("character-filters");
  const itemsFilters     = document.getElementById("items-filters");
  const fluffFilters     = document.getElementById("fluff-filters");
  const classFilters     = document.getElementById("classFilters");
  const racesFilters     = document.getElementById("racesFilters");
  const backgroundFilters= document.getElementById("backgroundFilters");
  const featsFilters     = document.getElementById("featsFilters");
  const strainFilters    = document.getElementById("strainFilters");

  /* =====================
     STATBLOCKS
  ====================== */
  const monsterStatblock   = document.getElementById("monster-statblock");
  const spellStatblock     = document.getElementById("spell-statblock");
  const rulesStatblock     = document.getElementById("rules-statblock");
  const characterStatblock = document.getElementById("character-statblock");
  const itemsStatblock     = document.getElementById("items-statblock");
  const fluffStatblock     = document.getElementById("fluff-statblock");

  const combatTracker = document.querySelector(".combat-tracker");

  /* =====================
     HELPERS
  ====================== */
  const show = el => el && (el.style.display = "block");
  const hide = el => el && (el.style.display = "none");

  function hideAll() {
    [
      homeStatblock,
      monstersIntro,
      spellsIntro,
      charactersIntro,
      rulesIntro,
      itemsIntro,
      fluffIntro,

      monsterFilters,
      spellFilters,
      rulesFilters,
      characterFilters,
      itemsFilters,
      fluffFilters,
      classFilters,
      racesFilters,
      backgroundFilters,
      featsFilters,
      strainFilters,

      monsterStatblock,
      spellStatblock,
      rulesStatblock,
      characterStatblock,
      itemsStatblock,
      fluffStatblock,

      combatTracker
    ].forEach(hide);
  }

  /* =====================
     HOME
  ====================== */
  function showHome() {
    hideAll();
    show(homeStatblock);
  }

  /* =====================
     LANDING (INTRO + FILTERS)
  ====================== */
  function showLanding(intro, filters) {
    hideAll();
    show(intro);
    show(filters);
  }

  /* =====================
     ENTER SECTION
     (called when user interacts with filters)
  ====================== */
  function enterSection(intro, statblock, tracker = false) {
    hide(intro);
    show(statblock);
    if (tracker) show(combatTracker);
  }

  /* =====================
     CHARACTER FILTER TOGGLING
  ====================== */
  function toggleCharacterFilter(filterSection) {
    hide(charactersIntro);
    // hide all character sub-filters
    [classFilters, racesFilters, backgroundFilters, featsFilters, strainFilters].forEach(hide);
    // show chosen filter
    show(filterSection);
    show(characterStatblock);
  }

  /* =====================
     AUTO-ENTER ON FILTER USE
  ====================== */
  monsterFilters?.addEventListener("click", () => enterSection(monstersIntro, monsterStatblock, true));
  spellFilters?.addEventListener("click", () => enterSection(spellsIntro, spellStatblock, true));
  characterFilters?.addEventListener("click", () => enterSection(charactersIntro, characterStatblock));
  rulesFilters?.addEventListener("click", () => enterSection(rulesIntro, rulesStatblock, true));
  itemsFilters?.addEventListener("click", () => enterSection(itemsIntro, itemsStatblock));
  fluffFilters?.addEventListener("click", () => enterSection(fluffIntro, fluffStatblock));

  /* =====================
     CHARACTER SUB-FILTERS
  ====================== */
  classesBtn?.addEventListener("click", () => toggleCharacterFilter(classFilters));
  racesBtn?.addEventListener("click", () => toggleCharacterFilter(racesFilters));
  backgroundBtn?.addEventListener("click", () => toggleCharacterFilter(backgroundFilters));
  featsBtn?.addEventListener("click", () => toggleCharacterFilter(featsFilters));
  strainBtn?.addEventListener("click", () => toggleCharacterFilter(strainFilters));

  /* =====================
     NAV BUTTONS
  ====================== */
  homeBtn?.addEventListener("click", showHome);
  monsterBtn?.addEventListener("click", () => showLanding(monstersIntro, monsterFilters));
  spellsBtn?.addEventListener("click", () => showLanding(spellsIntro, spellFilters));
  charactersBtn?.addEventListener("click", () => showLanding(charactersIntro, characterFilters));
  rulesBtn?.addEventListener("click", () => showLanding(rulesIntro, rulesFilters));
  itemsBtn?.addEventListener("click", () => showLanding(itemsIntro, itemsFilters));
  fluffBtn?.addEventListener("click", () => showLanding(fluffIntro, fluffFilters));

  /* =====================
     SPELL OPEN EVENT
  ====================== */
  document.addEventListener("spell:open", () => {
    hide(spellsIntro);
    show(spellStatblock);
    show(combatTracker);
  });

  /* =====================
     INITIAL STATE
  ====================== */
  showHome();
}
