// characters.js
export function initCharacterStatblock() {
  const characterStatblock = document.getElementById("character-statblock");

  document.addEventListener("showCharacterTable", showCharacterTable);
  document.addEventListener("showClassesTable", showClassesTable);


  function showClassesTable() {
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

const subclasses = {
  Barbarian: ["Berserker", "Totem Warrior", "Ancestral Guardian", "Zealot"],
  Bard: ["Lore", "Valor", "Glamour", "Swords", "Whispers"],
  Cleric: ["Life", "Light", "Trickery", "Knowledge", "Tempest", "War"],
  Druid: ["Land", "Moon", "Shepherd", "Dreams"],
  Fighter: ["Champion", "Battle Master", "Eldritch Knight", "Samurai"],
  Monk: ["Open Hand", "Shadow", "Four Elements", "Kensei"],
  Paladin: ["Devotion", "Vengeance", "Ancients", "Conquest", "Redemption"],
  Ranger: ["Hunter", "Beast Master", "Gloom Stalker", "Horizon Walker"],
  Rogue: ["Thief", "Assassin", "Arcane Trickster", "Swashbuckler"],
  Sorcerer: ["Draconic Bloodline", "Wild Magic", "Shadow", "Divine Soul"],
  Warlock: ["Fiend", "Great Old One", "Hexblade", "Archfey"],
  Wizard: ["Evocation", "Abjuration", "Conjuration", "Necromancy", "Illusion", "Divination"]
};


function showCharacterTable() {
  characterStatblock.innerHTML = `
  <div class="table-title">Character Sheet</div>

  <!-- BASIC INFO -->
  <table class="dc-table">
    <tr><th>Field</th><th>Value</th></tr>
    <tr><td>Name</td><td><input id="charName"></td></tr>
    <tr>
  <td>Species</td>
  <td>
    <select id="charRace">
      <option value="">— Select —</option>
      <option>Dragonborn</option><option>Dwarf</option><option>Elf</option>
      <option>Gnome</option><option>Half-Elf</option><option>Half-Orc</option>
      <option>Halfling</option><option>Human</option><option>Tiefling</option>
    </select>
  </td>
</tr>

<tr>
  <td>Class</td>
  <td>
    <select id="charClass">
      <option value="">— Select —</option>
      <option>Barbarian</option><option>Bard</option><option>Cleric</option>
      <option>Druid</option><option>Fighter</option><option>Monk</option>
      <option>Paladin</option><option>Ranger</option><option>Rogue</option>
      <option>Sorcerer</option><option>Warlock</option><option>Wizard</option>
    </select>
  </td>
</tr>
<tr>
  <td>Subclass</td>
  <td>
    <select id="charSubclass">
      <option value="">— Select Class First —</option>
    </select>
  </td>
</tr>

<tr>
  <td>Background</td>
  <td>
    <select id="charBackground">
      <option value="">— Select —</option>
      <option>Acolyte</option><option>Charlatan</option><option>Criminal</option>
      <option>Entertainer</option><option>Folk Hero</option><option>Guild Artisan</option>
      <option>Hermit</option><option>Noble</option><option>Outlander</option>
      <option>Sage</option><option>Sailor</option><option>Soldier</option><option>Urchin</option>
    </select>
  </td>
</tr>

<tr>
  <td>Alignment</td>
  <td>
    <select id="charAlignment">
      <option value="">— Select —</option>
      <option>Lawful Good</option><option>Neutral Good</option><option>Chaotic Good</option>
      <option>Lawful Neutral</option><option>True Neutral</option><option>Chaotic Neutral</option>
      <option>Lawful Evil</option><option>Neutral Evil</option><option>Chaotic Evil</option>
    </select>
  </td>
</tr>

    <tr><td>Level</td><td><input type="number" id="charLevel" min="1"></td></tr>

    <tr>
  <td>Size</td>
  <td>
    <select id="charSize">
      <option value="">— Select —</option>
      <option>Small</option>
      <option>Medium</option>
    </select>
  </td>
</tr>

    <tr><td>Passive Perception</td><td><input id="charPassivePerception" readonly></td></tr>
  </table>

  <!-- COMBAT -->
  <table class="dc-table">
    <tr><th>Field</th><th>Value</th></tr>
    <tr><td>HP</td><td><input id="charHP"></td></tr>
    <tr><td>Hit Dice</td><td><input id="charHiDice"></td></tr>
    <tr><td>AC</td><td><input id="charAC"></td></tr>
    <tr><td>Initiative</td><td><input id="charInitiative" readonly></td></tr>
    <tr><td>Speed</td><td><input id="charSpeed"></td></tr>
  </table>

  <!-- DEATH SAVES / CONDITIONS -->
  <table class="dc-table">
    <tr><th colspan="8">Death Saves</th></tr>
    <tr>
      <td>Success</td>
      <td><input type="checkbox" id="dsS1"></td>
      <td><input type="checkbox" id="dsS2"></td>
      <td><input type="checkbox" id="dsS3"></td>
      <td>Fail</td>
      <td><input type="checkbox" id="dsF1"></td>
      <td><input type="checkbox" id="dsF2"></td>
      <td><input type="checkbox" id="dsF3"></td>
    </tr>
  </table>

  <table class="dc-table">
    <tr><td>Inspiration</td><td><input type="checkbox" id="charInspiration"></td></tr>
    <tr><td>Exhaustion</td><td><input type="number" id="charExhaustion" min="0" max="6"></td></tr>
  </table>

<!-- ABILITIES / SAVES / SKILLS -->
<div class="abilities-grid">
${[
  ["STR", [["Athletics","STR"]]],
  ["DEX", [["Acrobatics","DEX"],["Sleight of Hand","DEX"],["Stealth","DEX"]]],
  ["CON", []],
  ["INT", [["Arcana","INT"],["History","INT"],["Investigation","INT"],["Nature","INT"],["Religion","INT"]]],
  ["WIS", [["Animal Handling","WIS"],["Insight","WIS"],["Medicine","WIS"],["Perception","WIS"],["Survival","WIS"]]],
  ["CHA", [["Deception","CHA"],["Intimidation","CHA"],["Performance","CHA"],["Persuasion","CHA"]]]
].map(([stat, skills]) => `
<div class="ability-card">
  <h3>${stat}</h3>

  <div>Score: <input id="char${stat}" type="number"></div>
  <div>Mod: <span id="mod${stat}">0</span></div>

  <div class="save-row">
    Save:
    <input type="checkbox" id="saveProf${stat}">
    <span id="save${stat}">0</span>
  </div>

  <div class="skills-list">
    ${skills.map(([skill]) => `
      <div>
        <input type="checkbox" id="prof${skill}">
        ${skill}: <span id="mod${skill}">0</span>
      </div>
    `).join("")}
  </div>
</div>
`).join("")}
</div>

<div class="table-title">Weapons & Damage / Cantrips & Spells</div>
<table class="dc-table">
<tr><th>Name</th><th>Attack / Effect</th><th>Damage</th><th>Notes</th></tr>
${Array.from({length:6}).map((_,i)=>`
<tr>
  <td><input id="atkName${i}"></td>
  <td><input id="atkBonus${i}"></td>
  <td><input id="atkDamage${i}"></td>
  <td><input id="atkNotes${i}"></td>
</tr>`).join("")}
</table>


<div class="table-title">Equipment Training & Proficiencies</div>
<table class="dc-table">
<tr><th>Type</th><th>Details</th></tr>
<tr>
  <td>Armor</td>
  <td>
    <label><input type="checkbox" id="profLightArmor"> Light</label>
    <label><input type="checkbox" id="profMediumArmor"> Medium</label>
    <label><input type="checkbox" id="profHeavyArmor"> Heavy</label>
    <label><input type="checkbox" id="profShields"> Shields</label>
  </td>
</tr>

<tr><td>Weapons</td><td><textarea id="profWeapons" rows="2" class="full-width-box"></textarea></td></tr>
<tr><td>Tools</td><td><textarea id="profTools" rows="2" class="full-width-box"></textarea></td></tr>
<tr><td>Languages</td><td><textarea id="profLanguages" rows="2" class="full-width-box"></textarea></td></tr>
</table>


  <!-- SPELLCASTING -->
  <table class="dc-table">
    <tr><th colspan="2">Spellcasting</th></tr>
    <tr><td>Spellcasting Ability</td><td><input id="charSpellcastingAbility"></td></tr>
    <tr><td>Spellcasting modifier</td><td><span id="modPB">0</span></td></tr>
    <tr><td>Spell Save DC</td><td><input id="charSpellSaveDC" readonly></td></tr>
    <tr><td>Spell Attack Bonus</td><td><input id="charSpellAttackBonus" readonly></td></tr>
  </table>

<div class="table-title">Cantrips</div>
<table class="dc-table">
<tr><th>Name</th><th>Description</th></tr>
${Array.from({length:8}).map((_,i)=>`
<tr>
  <td><input id="cantripName${i}"></td>
  <td><input id="cantripDesc${i}"></td>
</tr>`).join("")}
</table>

<div class="table-title">Prepared Spells</div>
<table class="dc-table">
<tr><th>Lvl</th><th>Name</th><th>School</th><th>Cast Time</th><th>Notes</th></tr>
${Array.from({length:12}).map((_,i)=>`
<tr>
  <td><input id="spellLvl${i}" style="width:40px"></td>
  <td><input id="spellName${i}"></td>
  <td><input id="spellSchool${i}"></td>
  <td><input id="spellTime${i}"></td>
  <td><input id="spellNotes${i}"></td>
</tr>`).join("")}
</table>

  <div class="table-title">Features</div>
  <textarea id="charFeatures" rows="4"class="full-width-box"></textarea>

  <div class="table-title">Equipment</div>
  <textarea id="charEquipment" rows="4" class="full-width-box"></textarea>

  <div class="table-title">Notes</div>
  <textarea id="charNotes" rows="4" class="full-width-box"></textarea>

  <tr>
  <td>Languages</td>
  <td>
    <label><input type="checkbox" id="langCommon"> Common</label>
    <label><input type="checkbox" id="langDwarvish"> Dwarvish</label>
    <label><input type="checkbox" id="langElvish"> Elvish</label>
    <label><input type="checkbox" id="langGiant"> Giant</label>
    <label><input type="checkbox" id="langGnomish"> Gnomish</label>
    <label><input type="checkbox" id="langGoblin"> Goblin</label>
    <label><input type="checkbox" id="langHalfling"> Halfling</label>
    <label><input type="checkbox" id="langOrc"> Orc</label>
    <label><input type="checkbox" id="langSylvan"> Sylvan</label>
    <label><input type="checkbox" id="langDraconic"> Draconic</label>
    <!-- add more if needed -->
  </td>
</tr>

<tr>
  <td>Coins</td>
  <td>
    CP: <input type="number" id="coinCP" style="width:60px"> 
    SP: <input type="number" id="coinSP" style="width:60px"> 
    EP: <input type="number" id="coinEP" style="width:60px"> 
    GP: <input type="number" id="coinGP" style="width:60px"> 
    PP: <input type="number" id="coinPP" style="width:60px">
  </td>
</tr>


  <button id="saveSheet">💾 Save</button>
  <button id="loadSheet">📂 Load</button>
  `;

  attachEventListeners();
  updateCharacter();
}

// ================== CORE LOGIC ==================

function getProficiencyBonus(level){
  if (level >= 17) return 6;
  if (level >= 13) return 5;
  if (level >= 9) return 4;
  if (level >= 5) return 3;
  return 2;
}

function updateCharacter(){
  const level = +charLevel.value || 1;
  const PB = getProficiencyBonus(level);
  charPB.value = PB;
  modPB.textContent = PB;

  const mods = {};
  ["STR","DEX","CON","INT","WIS","CHA"].forEach(stat=>{
    const score = +document.getElementById("char"+stat).value || 10;
    mods[stat] = Math.floor((score-10)/2);
    document.getElementById("mod"+stat).textContent = mods[stat];
  });

  charInitiative.value = mods.DEX;

  ["STR","DEX","CON","INT","WIS","CHA"].forEach(stat=>{
    const prof = document.getElementById("saveProf"+stat).checked ? PB : 0;
    document.getElementById("save"+stat).textContent = mods[stat] + prof;
  });

  const skills = [
    ["Acrobatics","DEX"],["Animal Handling","WIS"],["Arcana","INT"],["Athletics","STR"],
    ["Deception","CHA"],["History","INT"],["Insight","WIS"],["Intimidation","CHA"],
    ["Investigation","INT"],["Medicine","WIS"],["Nature","INT"],["Perception","WIS"],
    ["Performance","CHA"],["Persuasion","CHA"],["Religion","INT"],["Sleight of Hand","DEX"],
    ["Stealth","DEX"],["Survival","WIS"]
  ];

  skills.forEach(([s,a])=>{
    const prof = document.getElementById("prof"+s).checked ? PB : 0;
    document.getElementById("mod"+s).textContent = mods[a] + prof;
  });

  const perceptionProf = document.getElementById("profPerception").checked ? PB : 0;
  charPassivePerception.value = 10 + mods.WIS + perceptionProf;

  const spellStat = charSpellcastingAbility.value.toUpperCase();
  if (mods[spellStat] !== undefined){
    charSpellSaveDC.value = 8 + PB + mods[spellStat];
    charSpellAttackBonus.value = PB + mods[spellStat];
  }
}

// ================== SAVE / LOAD ==================

function saveSheet(){
  const name = charName.value;
  if(!name) return alert("Name required");

  const data = {};
  document.querySelectorAll("input, textarea").forEach(el=>{
    data[el.id] = el.type==="checkbox" ? el.checked : el.value;
  });

  localStorage.setItem("character_"+name, JSON.stringify(data));
  localStorage.setItem("lastCharacter", name);
  alert("Saved!");
}

function loadSheet(){
  updateSubclassOptions();

  const name = charName.value || localStorage.getItem("lastCharacter");
  if(!name) return;

  const data = JSON.parse(localStorage.getItem("character_"+name));
  if(!data) return alert("Character not found");

  Object.keys(data).forEach(id=>{
    const el = document.getElementById(id);
    if(!el) return;
    el.type==="checkbox" ? el.checked = data[id] : el.value = data[id];
  });

  updateCharacter();
  updateSubclassOptions();

}

// ================== EVENTS ==================

function attachEventListeners(){
  document.getElementById("saveSheet").onclick = saveSheet;
  document.getElementById("loadSheet").onclick = loadSheet;
  document.querySelectorAll("input").forEach(el=>{
    el.addEventListener("input", updateCharacter);
    el.addEventListener("change", updateCharacter);
    document.getElementById("charClass").addEventListener("change", updateSubclassOptions);

  });
}

window.addEventListener("load", ()=>{
  showCharacterTable();
  loadSheet();
});

function updateSubclassOptions() {
  const cls = document.getElementById("charClass").value;
  const subclassSelect = document.getElementById("charSubclass");

  subclassSelect.innerHTML = `<option value="">— Select —</option>`;

  if (!subclasses[cls]) return;

  subclasses[cls].forEach(sc => {
    const opt = document.createElement("option");
    opt.value = sc;
    opt.textContent = sc;
    subclassSelect.appendChild(opt);
  });
}


}
