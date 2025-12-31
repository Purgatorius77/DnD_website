// js/main.js
import { initMonsterFilters } from "./filters/monsterfilters.js";
import { initSpellFilters } from "./filters/spellfilters.js";
import { initMonsterStatblock } from "./monsters/monsterstatblock.js";
import { initSpellStatblock } from "./spells/spellstatblock.js";
import { initViewSwitcher } from "./ui/viewswitcher.js";
import { loadAllData } from "./data/dataloader.js";
import { initCombatTracker } from "./combat/combattracker.js";
import { initRulesFilters } from "./filters/rulesfilters.js";
import { initRulesStatblock } from "./rules/rules.js";
import { initCharacterFilters } from "./filters/characterfilter.js";
import { initCharacterStatblock } from "./characters/characters.js";
import { initcosmicStrain } from "./characters/cosmicStrain.js";
import { initItemsFilters} from "./filters/itemfilters.js";
import { initItems} from "./items/items.js";
import { initFluffFilters } from "./filters/flufffilter.js";
import { initFluffStatblock} from "./fluff/fluff.js";
import { initCharClasses} from "./characters/charclasses.js";
import { initBackgrounds} from "./characters/backgrounds.js";
import { initFeats} from "./characters/feats.js";
import { initRaces} from "./characters/races.js";





document.addEventListener("DOMContentLoaded", async () => {

  const { monsters, spells, monsterFluff } = await loadAllData();

  window.appState = {
    monsters,
    spells,
    fluff: monsterFluff
  };




  initMonsterStatblock(monsters, monsterFluff, spells);
  initSpellStatblock(spells);

  initMonsterFilters(monsters);
  initSpellFilters(spells);
  initCombatTracker(monsters);
  initRulesFilters();
  initRulesStatblock();
  initCharacterFilters();
  initCharacterStatblock();
  initcosmicStrain();
  initItemsFilters();
  initItems();
  initFluffFilters();
  initFluffStatblock();
  initCharClasses();
  initFeats();
  initRaces();
  initBackgrounds();

  initViewSwitcher();

});

