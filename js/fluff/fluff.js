export function initFluffStatblock() {
    const fluffStatblock = document.getElementById("fluff-statblock");


  document.addEventListener("showLore", () => {
    showLore();
  });

  document.addEventListener("showWorld", () => {
    showWorld();
  });



showLore();

function showLore() {
    fluffStatblock.innerHTML = `

  <div class="home-text">
    <h1>Welcome to my D&D page</h1>
    <p>
D&D lore is coming soon!
     </p>
  </div>
`;
}

function showWorld() {
    fluffStatblock.innerHTML = `

  <div class="home-text">
    <h1>Welcome to my D&D page</h1>
    <p>
D&D cosmology is coming soon!
     </p>
  </div>
`;

}
}