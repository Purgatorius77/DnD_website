export function initcosmicStrain() {
  const characterStatblock = document.getElementById("character-statblock");

  document.addEventListener("showStrainTable", showStrainTable);


  function showStrainTable() {
    characterStatblock.innerHTML = `
  <div class="home-text">
    <h1>Welcome to my D&D page</h1>
    <p>
 Cosmic Strain is coming soon!
     </p>
  </div>
`;
}

}
