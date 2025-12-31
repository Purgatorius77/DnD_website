// rulesfilters.js

export function initRulesFilters() {
  const dcBtn = document.getElementById("dcRatingBtn");
const conditionsBtn = document.getElementById("conditionsBtn");

  dcBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showDCTable"));
  });

  conditionsBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showConditionsTable"));
  });
      damageBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showDamageTable"));

  });
        hpacBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showHPACTable"));

  });

    attackBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showAttackTable"));

  });
    monsterCreationBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showMonsterCreationTable"));

  });
}
