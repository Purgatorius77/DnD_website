export function initcosmicStrain() {
  const characterStatblock = document.getElementById("character-statblock");

  document.addEventListener("showStrainTable", showStrainTable);


  function showStrainTable() {
    characterStatblock.innerHTML = `
      <div class="table-title">Classes</div>
      <table class="dc-table">
        <tr><th>Class</th><th>Main Ability</th></tr>
        <tr><td><strong>Barbarian</strong></td><td>Strength</td></tr>
        <tr><td><strong>Bard</strong></td><td>Charisma</td></tr>
        <tr><td><strong>Sorcerer</strong></td><td>Charisma</td></tr>
        <tr><td><strong>Wizard</strong></td><td>Intelligence</td></tr>
        <tr><td><strong>Druid</strong></td><td>Wisdom</td></tr>
        <tr><td><strong>Rogue</strong></td><td>Dexterity</td></tr>
      </table>
    `;
  }

}
