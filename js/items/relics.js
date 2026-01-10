export function initRelics() {
  const itemsStatblock = document.getElementById("items-statblock");

  document.addEventListener("showRelicsTable", showRelicsTable);


function showRelicsTable() { 

  itemsStatblock.innerHTML = `
<div class="table-title">Ranom Relics Common Items</div>
<table class="relicscommon-table">
  <tr>
    <th>Comming soon</th>
  </tr>  `;



}
}