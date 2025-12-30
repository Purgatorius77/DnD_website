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

    showItemsTable();

function showItemsTable() {
    itemsStatblock.innerHTML = `

    
  <div class="home-text">
    <h1>Welcome to my D&D page</h1>
    <p>
 Items are coming soon!
     </p>
  </div>
`;
}

function showWeaponsTable() {
    itemsStatblock.innerHTML = `

  <div class="home-text">
    <h1>Welcome to my D&D page</h1>
    <p>
 Weapons are coming soon!
     </p>
  </div>
`;
}

function showArmorTable() {
    itemsStatblock.innerHTML = `

  <div class="home-text">
    <h1>Welcome to my D&D page</h1>
    <p>
 Armour is coming soon!
     </p>
  </div>
`;
}
}