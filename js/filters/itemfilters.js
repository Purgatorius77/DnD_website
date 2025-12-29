export function initItemsFilters() {
  const weaponsBtn = document.getElementById("weaponsBtn");
  const armorBtn = document.getElementById("armorBtn");
  const potionsBtn = document.getElementById("itemsBtn");
    weaponsBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showWeaponsTable"));
    });
    armorBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showArmorTable"));
    });
    potionsBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showItemsTable"));
    });     
}
