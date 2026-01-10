export function initArcana() {
  const itemsStatblock = document.getElementById("items-statblock");

  document.addEventListener("showArcanaTable", showArcanaTable);


function showArcanaTable() { 

  itemsStatblock.innerHTML = `
<div class="table-title">Ranom Arcana Common Items</div>
<table class="arcanacommon-table">
  <tr>
    <th>Comming soon</th>
  </tr>  `;



}
}