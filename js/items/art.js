export function initArt() {
  const itemsStatblock = document.getElementById("items-statblock");

  document.addEventListener("showArtTable", showArtTable);


function showArtTable() { 

  itemsStatblock.innerHTML = `
<div class="table-title">Ranom Art Common Items</div>
<table class="artcommon-table">
  <tr>
    <th>Comming soon</th>
  </tr>  `;



}
}