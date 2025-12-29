export function initRaces() {
  const characterStatblock = document.getElementById("character-statblock");

  document.addEventListener("showRacesTable", showRacesTable);


function showRacesTable() {
  characterStatblock.innerHTML = `
    <div class="table-title
">Races</div>
    <table class="race-table">
      <tr><th>Race</th><th>Creature Type</th><th>Size</th><th>Speed</th><th>Traits</th><th>Lineage</th></tr>
      <tr><td><strong>Aasimar</strong></td><td>Humanoid</td><td>Medium or Small</td><td>30 ft.</td><td>Darkvision 60 ft, Celestial Resistance, Healing Hands, Light Bearer</td><td>Aasimar</td></tr>
      <tr><td><strong>Dragonborn</strong></td><td>Humanoid</td><td>Medium</td><td>30 ft.</td><td>Draconic Ancestry, Breath Weapon, Damage Resistance</td><td>Dragonborn</td></tr>
      <tr><td><strong>Dwarf</strong></td><td>Humanoid</td><td>Medium</td><td>25 ft.</td><td>Darkvision, Dwarven Resilience, Stonecunning</td><td>Dwarven</td></tr>
      <tr><td><strong>Elf</strong></td><td>Humanoid</td><td>Medium</td><td>30 ft.</td><td>Darkvision, Keen Senses, Fey Ancestry, Trance</td><td>Elven</td></tr>
      <tr><td><strong>Gnome</strong></td><td>Humanoid</td><td>Small</td><td>25 ft.</td><td>Darkvision, Gnome Cunning</td><td>Gnomish</td></tr>
      <tr><td><strong>Goliath</strong></td><td>Humanoid</td><td>Medium</td><td>30 ft.</td><td>Natural Athlete, Stone's Endurance, Powerful Build, Mountain Born</td><td>Goliath</td></tr>
      <tr><td><strong>Halfling</strong></td><td>Humanoid</td><td>Small</td><td>25 ft.</td><td>Lucky, Brave, Halfling Nimbleness</td><td>Halfling</td></tr>
      <tr><td><strong>Human</strong></td><td>Humanoid</td><td>Medium</td><td>30 ft.</td><td>Extra Language, Versatile</td><td>Human</td></tr>
      <tr><td><strong>Orc</strong></td><td>Humanoid</td><td>Medium</td><td>30 ft.</td><td>Darkvision, Menacing, Relentless Endurance, Savage Attacks</td><td>Orcish</td></tr>
      <tr><td><strong>Tiefling</strong></td><td>Humanoid</td><td>Medium</td><td>30 ft.</td><td>Darkvision, Hellish Resistance, Infernal Legacy</td><td>Tiefling</td></tr>      
      </table>
  `;
}
}