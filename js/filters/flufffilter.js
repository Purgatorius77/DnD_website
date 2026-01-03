export function initFluffFilters() {
  
// rulesfilters.js


  const loreBtn = document.getElementById("loreBtn");
const worldBtn = document.getElementById("worldBtn");

  loreBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showLore"));
  });

  worldBtn.addEventListener("click", () => {
    document.dispatchEvent(new CustomEvent("showWorld"));
  });


}

