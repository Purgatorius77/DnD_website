// itemsFilters.js
export function initItemsFilters() {
  const basicItemsBtn = document.getElementById("basicItemsBtn");
  const itemsBtn = document.getElementById("itemsBtn");
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
}
