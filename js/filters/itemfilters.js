// itemsFilters.js
export function initItemsFilters() {
  const basicItemsBtn = document.getElementById("basicItemsBtn");
  const itemsBtn = document.getElementById("itemsBtn");
  const magicalitemsBtn = document.getElementById("magicalitemsBtn");
  const treasureBtn = document.getElementById("treasureBtn");
  const relicsBtn = document.getElementById("relicsBtn");
  const gemsBtn = document.getElementById("gemsBtn");
  const artBtn = document.getElementById("artBtn");
  const arcanaBtn = document.getElementById("arcanaBtn");
  const armamentsBtn = document.getElementById("armamentsBtn");
  const implementsBtn = document.getElementById("implementsBtn");
  const filters = document.getElementById("items-filters");

  if (!basicItemsBtn || !itemsBtn || !filters) return;

  // Initially hide filters
  filters.style.display = "none";

  basicItemsBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showBasicItemsTable"));
  });

  itemsBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showItemsTable"));
  });

    magicalitemsBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showMagicalItemsTable"));
  });

    treasureBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showTreasureTable"));
  });

      gemsBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showGemsTable"));
  });

      arcanaBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showArcanaTable"));
  });

      armamentsBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showArmamentsTable"));
  });

      relicsBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showRelicsTable"));
  });

      implementsBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showImplementsTable"));
  });

    artBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showArtTable"));
  });
}
