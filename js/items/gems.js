export function initGems() {
  const itemsStatblock = document.getElementById("items-statblock");

  document.addEventListener("showGemsTable", showGemsTable);


function showGemsTable() { 

  itemsStatblock.innerHTML = `
<div class="table-title">Ranom Gems Common Items</div>
<table class="gemscommon-table">
  <tr>
    <th>Comming soon</th>
  </tr>  `;



}
}