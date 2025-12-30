export function initFluffStatblock() {
    const fluffStatblock = document.getElementById("fluff-statblock");

    document.addEventListener("showFluff", () => {
showFluff();
    });

showFluff();

function showFluff() {
    fluffStatblock.innerHTML = `

  <div class="home-text">
    <h1>Welcome to my D&D page</h1>
    <p>
D&D lore is coming soon!
     </p>
  </div>
`;
}

}