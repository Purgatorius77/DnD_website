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
import { initcosmicStrain2 } from "./characters/cosmicStrain2.js";
import { initcosmicStrain3 } from "./characters/cosmicStrain3.js";
import { initItemsFilters} from "./filters/itemfilters.js";
import { initItems} from "./items/items.js";
import { initFluffFilters } from "./filters/flufffilter.js";
import { initFluffStatblock} from "./fluff/fluff.js";
import { initCharClasses} from "./characters/charclasses.js";
import { initBackgrounds} from "./characters/backgrounds.js";
import { initFeats} from "./characters/feats.js";
import { initRaces} from "./characters/races.js";
import { initTreasure} from "./items/treasure.js"
import { initGems} from "./items/gems.js"
import { initRelics} from "./items/relics.js"
import { initArcana} from "./items/arcana.js"
import { initArmaments} from "./items/armaments.js"
import { initImplements} from "./items/implements.js"
import { initArt} from "./items/art.js"
import { initTableFilters } from "./filters/tablesfilter.js";
import { initTables, renderTableStatblock } from "./tables/tables.js";


// after tables loaded


async function main() {
  console.log("Loading tables...");

  const tables = await initTables();   // ⏳ WAIT here

  console.log("Loaded tables:", tables.length);

  initTableFilters(tables);            // ✅ Only now is it safe

  document.addEventListener("tableSelected", e => {
  renderTableStatblock(e.detail);
});

}

main();

document.addEventListener("DOMContentLoaded", async () => {
  // Load all your data
  const { monsters, spells, monsterFluff } = await loadAllData();

  window.appState = {
    monsters,
    spells,
    fluff: monsterFluff
  };

  // Initialize all modules
  initMonsterStatblock(monsters, monsterFluff, spells);
  initSpellStatblock(spells);

  initMonsterFilters(monsters);
  initSpellFilters(spells);

  // ✅ Initialize combat tracker only once
  initCombatTracker(monsters);
  initRulesFilters();
  initRulesStatblock();
  initCharacterFilters();
  initCharacterStatblock();
  initcosmicStrain();
  initcosmicStrain2();
  initcosmicStrain3();  
  initItemsFilters();
  initItems();
  initFluffFilters();
  initFluffStatblock();
  initCharClasses();
  initFeats();
  initRaces();
  initBackgrounds();
  initTreasure();
  initGems();
  initArt();
  initArcana();
  initArmaments();
  initRelics();
  initImplements();
  initViewSwitcher();

});


const toggleBtn = document.getElementById("toggleCombatTracker");
const layout = document.querySelector(".layout");

toggleBtn.addEventListener("click", () => {
  layout.classList.toggle("tracker-collapsed");
});




