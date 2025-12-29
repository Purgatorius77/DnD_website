export function initItemsStatblock() {
    const itemsStatblock = document.getElementById("items-statblock");

    document.addEventListener("showWeaponsTable", () => {
showWeaponsTable();
    });
    document.addEventListener("showArmorTable", () => {
showArmorTable();
    });     
    document.addEventListener("showItemsTable", () => {
showItemsTable();
    }
    );     


function showItemsTable() {
    itemsStatblock.innerHTML = `

    <div class="table-title">DC Rating</div>
<table class="dc-table">
  <tr>
    <th>Difficulty</th>
    <th>DC</th>
  </tr>
  <tr>
    <td><strong>Very Easy</strong></td>
    <td>5</td>
  </tr>
  <tr>
    <td><strong>Easy</strong></td>
    <td>10</td>
  </tr>
  <tr>
    <td><strong>Medium</strong></td>
    <td>15</td>
  </tr>
  <tr>
    <td><strong>Hard</strong></td>
    <td>20</td>
  </tr>
  <tr>
    <td><strong>Very Hard</strong></td>
    <td>25</td>
  </tr>
  <tr>
    <td><strong>Nearly Impossible</strong></td>
    <td>30</td>
  </tr>
</table>
`;
}

function showWeaponsTable() {
    itemsStatblock.innerHTML = `

    <div class="table-title">DC Rating</div>
<table class="dc-table">
  <tr>
    <th>Difficulty</th>
    <th>DC</th>
  </tr>
  <tr>
    <td><strong>Very Easy</strong></td>
    <td>5</td>
  </tr>
  <tr>
    <td><strong>Easy</strong></td>
    <td>10</td>
  </tr>
  <tr>
    <td><strong>Medium</strong></td>
    <td>15</td>
  </tr>
  <tr>
    <td><strong>Hard</strong></td>
    <td>20</td>
  </tr>
  <tr>
    <td><strong>Very Hard</strong></td>
    <td>25</td>
  </tr>
  <tr>
    <td><strong>Nearly Impossible</strong></td>
    <td>30</td>
  </tr>
</table>
`;
}

function showArmorTable() {
    itemsStatblock.innerHTML = `

    <div class="table-title">DC Rating</div>
<table class="dc-table">
  <tr>
    <th>Difficulty</th>
    <th>DC</th>
  </tr>
  <tr>
    <td><strong>Very Easy</strong></td>
    <td>5</td>
  </tr>
  <tr>
    <td><strong>Easy</strong></td>
    <td>10</td>
  </tr>
  <tr>
    <td><strong>Medium</strong></td>
    <td>15</td>
  </tr>
  <tr>
    <td><strong>Hard</strong></td>
    <td>20</td>
  </tr>
  <tr>
    <td><strong>Very Hard</strong></td>
    <td>25</td>
  </tr>
  <tr>
    <td><strong>Nearly Impossible</strong></td>
    <td>30</td>
  </tr>
</table>
`;
}
}