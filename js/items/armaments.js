export function initArmaments() {
  const itemsStatblock = document.getElementById("items-statblock");

  document.addEventListener("showArmamentsTable", showArmamentsTable);


function showArmamentsTable() { 

  itemsStatblock.innerHTML = `
<div class="table-title">Ranom Armaments Common Items</div>
<table class="armamentscommon-table">
  <tr>
    <th>Comming soon</th>
  </tr>  `;



}
}