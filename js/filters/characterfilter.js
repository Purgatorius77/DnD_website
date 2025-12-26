// characterfilter.js

export function initCharacterFilters() {
  const classesBtn = document.getElementById("classesBtn");
  const characterBtn = document.getElementById("characterBtn");


  classesBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showClassesTable"));
  });

    characterBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showCharacterTable"));
    });
}