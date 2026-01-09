export function initCharacterFilters() {
  const classesBtn = document.getElementById("classesBtn");
  const characterBtn = document.getElementById("characterBtn");
  const strainBtn = document.getElementById("strainBtn");
  const strain2Btn = document.getElementById("strain2Btn");
  const strain3Btn = document.getElementById("strain3Btn");
  const racesBtn = document.getElementById("racesnBtn");
  const backgroundBtn = document.getElementById("backgroundBtn");
  const featsBtn = document.getElementById("featsBtn");


  if (!classesBtn || !characterBtn || !strainBtn) {
    console.error("Character filter buttons not found in DOM!");
    return;
  }

  classesBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showClassesTable"));
  });

  characterBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showCharacterTable"));
  });

  strainBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showStrainTable"));
  });

  strain2Btn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showStrainTable2"));
  });

  strain3Btn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showStrainTable3"));
  });

racesBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showRacesTable"));
  });

  backgroundBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showBackgroundsTable"));
  });   
  featsBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showFeatsTable"));
  });
  


}
