export function initBackgrounds() {
  const characterStatblock = document.getElementById("character-statblock");

  document.addEventListener("showBackgroundsTable", showBackgroundsTable);


function showBackgroundsTable() {
  characterStatblock.innerHTML = `

  <div class="table-title">Backgrounds (D&D 2024 PHB — Full Details)</div>
  <table class="background-table">
    <tr>
      <th>Background</th>
      <th>Ability Scores</th>
      <th>Origin Feat</th>
      <th>Skills</th>
      <th>Tool</th>
      <th>Starting Equipment</th>
    </tr>

    <tr>
      <td><strong>Acolyte</strong></td>
      <td>Intelligence, Wisdom, Charisma</td>
      <td>Magic Initiate (Cleric)</td>
      <td>Insight, Religion</td>
      <td>Calligrapher’s Supplies</td>
      <td>Calligrapher’s Supplies, Prayer Book, Holy Symbol, Parchment (10), Robe, 8 gp</td>
    </tr>

    <tr>
      <td><strong>Artisan</strong></td>
      <td>Strength, Dexterity, Intelligence</td>
      <td>Crafter</td>
      <td>Investigation, Persuasion</td>
      <td>Chosen Artisan’s Tools</td>
      <td>Chosen Tools, 2 Pouches, Traveler’s Clothes, 32 gp</td>
    </tr>

    <tr>
      <td><strong>Charlatan</strong></td>
      <td>Dexterity, Constitution, Charisma</td>
      <td>Skilled</td>
      <td>Deception, Sleight of Hand</td>
      <td>Forgery Kit</td>
      <td>Forgery Kit, Costume, Fine Clothes, 15 gp</td>
    </tr>

    <tr>
      <td><strong>Criminal</strong></td>
      <td>Dexterity, Constitution, Intelligence</td>
      <td>Alert</td>
      <td>Sleight of Hand, Stealth</td>
      <td>Thieves’ Tools</td>
      <td>2 Daggers, Thieves’ Tools, Crowbar, 2 Pouches, Traveler’s Clothes, 16 gp</td>
    </tr>

    <tr>
      <td><strong>Entertainer</strong></td>
      <td>Strength, Dexterity, Charisma</td>
      <td>Musician</td>
      <td>Acrobatics, Performance</td>
      <td>One Musical Instrument</td>
      <td>Instrument, 2 Costumes, Mirror, Perfume, Traveler’s Clothes, 11 gp</td>
    </tr>

    <tr>
      <td><strong>Farmer</strong></td>
      <td>Strength, Constitution, Wisdom</td>
      <td>Tough</td>
      <td>Animal Handling, Nature</td>
      <td>Carpenter’s Tools</td>
      <td>Carpenter’s Tools, Work Clothes, 12 gp</td>
    </tr>

    <tr>
      <td><strong>Guard</strong></td>
      <td>Strength, Intelligence, Wisdom</td>
      <td>Alert</td>
      <td>Athletics, Perception</td>
      <td>One Gaming Set</td>
      <td>Gaming Set, Traveler’s Clothes, 10 gp</td>
    </tr>

    <tr>
      <td><strong>Guide</strong></td>
      <td>Dexterity, Constitution, Wisdom</td>
      <td>Magic Initiate (Druid)</td>
      <td>Stealth, Survival</td>
      <td>Cartographer’s Tools</td>
      <td>Cartographer’s Tools, Traveler’s Clothes, 14 gp</td>
    </tr>

    <tr>
      <td><strong>Hermit</strong></td>
      <td>Constitution, Wisdom, Charisma</td>
      <td>Healer</td>
      <td>Medicine, Religion</td>
      <td>Herbalism Kit</td>
      <td>Herbalism Kit, Common Clothes, 10 gp</td>
    </tr>

    <tr>
      <td><strong>Merchant</strong></td>
      <td>Constitution, Intelligence, Charisma</td>
      <td>Lucky</td>
      <td>Animal Handling, Persuasion</td>
      <td>Navigator’s Tools</td>
      <td>Navigator’s Tools, Trade Goods, Traveler’s Clothes, 20 gp</td>
    </tr>

    <tr>
      <td><strong>Noble</strong></td>
      <td>Strength, Intelligence, Charisma</td>
      <td>Skilled</td>
      <td>History, Persuasion</td>
      <td>One Gaming Set</td>
      <td>Gaming Set, Fine Clothes, Signet Ring, 25 gp</td>
    </tr>

    <tr>
      <td><strong>Sage</strong></td>
      <td>Constitution, Intelligence, Wisdom</td>
      <td>Magic Initiate (Wizard)</td>
      <td>Arcana, History</td>
      <td>Calligrapher’s Supplies</td>
      <td>Calligrapher’s Supplies, Tome/Notes, Traveler’s Clothes, 10 gp</td>
    </tr>

    <tr>
      <td><strong>Sailor</strong></td>
      <td>Strength, Dexterity, Wisdom</td>
      <td>Tavern Brawler</td>
      <td>Acrobatics, Perception</td>
      <td>Navigator’s Tools</td>
      <td>Navigator’s Tools, Bedroll, 2 Pouches, Traveler’s Clothes, 12 gp</td>
    </tr>

    <tr>
      <td><strong>Scribe</strong></td>
      <td>Dexterity, Intelligence, Wisdom</td>
      <td>Skilled</td>
      <td>Investigation, Perception</td>
      <td>Calligrapher’s Supplies</td>
      <td>Calligrapher’s Supplies, Ink & Quill, Parchment, 10 gp</td>
    </tr>

    <tr>
      <td><strong>Soldier</strong></td>
      <td>Strength, Dexterity, Constitution</td>
      <td>Savage Attacker</td>
      <td>Athletics, Intimidation</td>
      <td>One Gaming Set</td>
      <td>Gaming Set, Military Gear, Traveler’s Clothes, 15 gp</td>
    </tr>

    <tr>
      <td><strong>Wayfarer</strong></td>
      <td>Dexterity, Wisdom, Charisma</td>
      <td>Lucky</td>
      <td>Insight, Stealth</td>
      <td>Thieves’ Tools</td>
      <td>2 Daggers, Thieves’ Tools, Traveler’s Clothes, 16 gp</td>
    </tr>

  </table>
  `;
}




}
