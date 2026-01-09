export function initLoot() {
  const itemsStatblock = document.getElementById("items-statblock");

  document.addEventListener("showLootTable", showLootTable);


function showLootTable() { 

  itemsStatblock.innerHTML = `
<div class="table-title">D&D Currency Abbreviations</div>
<table class="cur-table">
  <tr>
    <th>Abbreviation</th>
    <th>Meaning</th>
    <th>Conversion</th>
  </tr>
  <tr>
    <td><strong>CP</strong></td>
    <td>Copper Pieces</td>
    <td>1 CP</td>
  </tr>
  <tr>
    <td><strong>SP</strong></td>
    <td>Silver Pieces</td>
    <td>10 CP = 1 SP</td>
  </tr>
  <tr>
    <td><strong>EP</strong></td>
    <td>Electrum Pieces</td>
    <td>150 CP = 5 SP = 1 EP</td>
  </tr>
  <tr>
    <td><strong>GP</strong></td>
    <td>Gold Pieces</td>
    <td>100 CP = 10 SP = 1 GP</td>
  </tr>
  <tr>
    <td><strong>PP</strong></td>
    <td>Platinum Pieces</td>
    <td>1000 CP = 100 SP = 10 GP = 1 PP</td>
  </tr>
</table>



<div class="table-title">Random Individual Treasure</div>
<table class="rit-table">
  <tr>
    <th>CR</th>
    <th>Treasure</th>
  </tr>
  <tr>
    <td><strong>0 - 4</strong></td>
    <td>3d6 (10) GP</td>
  </tr>
  <tr>
    <td><strong>5 - 10</strong></td>
    <td>2d8 * 10 (90) GP</td>
  </tr>
  <tr>
    <td><strong>11 - 16</strong></td>
    <td>2d10 (110) PP</td>
  </tr>
  <tr>
    <td><strong>17+</strong></td>
    <td>2d8 * 100 (900) PP</td>
  </tr>
</table>


<div class="table-title">Random Hoard Treasure</div>
<table class="rht-table">
  <tr>
    <th>CR</th>
    <th>Treasure</th>
    <th>Magic Items</th>
  </tr>
  <tr>
    <td><strong>0 - 4</strong></td>
    <td>2d4 * 100 (500) GP</td>
    <td>1d4 - 1</td>
  </tr>
  <tr>
    <td><strong>5 - 10</strong></td>
    <td>8d10 * 100 (4400) GP</td>
       <td>1d3</td>
  </tr>
  <tr>
    <td><strong>11 - 16</strong></td>
    <td>8d8 * 1000 (36000) GP</td>
       <td>1d4</td>
  </tr>
  <tr>
    <td><strong>17+</strong></td>
    <td>6d10 * 10000 (330000) GP</td>
       <td>1d6</td>
  </tr>
</table>

  `;



}
}