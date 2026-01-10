export function initImplements() {
  const itemsStatblock = document.getElementById("items-statblock");

  document.addEventListener("showImplementsTable", showImplementsTable);


function showImplementsTable() { 

  itemsStatblock.innerHTML = `
<div class="table-title">Ranom Implements Common Items</div>
<table class="arcanacommon-table">
  <tr>
    <th>Comming soon</th>
  </tr>  `;



}
}