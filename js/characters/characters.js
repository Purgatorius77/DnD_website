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

const classSpellAbility = {
  "Bard": "CHA",
  "Cleric": "WIS",
  "Druid": "WIS",
  "Paladin": "CHA",
  "Ranger": "WIS",
  "Sorcerer": "CHA",
  "Warlock": "CHA",
  "Wizard": "INT"
};

const spellcastingClasses = {
  Bard: { cantrips: [2, 2, 2, 3, 3, 3, 3, 4, 4, 4], spellsKnown: [4, 5, 6, 7, 8, 9, 10, 11, 12, 14] },
  Cleric: { cantrips: [3, 3, 3, 3, 4, 4, 4, 4, 4, 4], spellsPrepared: level => level + getMod("WIS") },
  Druid: { cantrips: [2, 2, 2, 3, 3, 3, 3, 4, 4, 4], spellsPrepared: level => level + getMod("WIS") },
  Sorcerer: { cantrips: [4, 4, 4, 4, 5, 5, 5, 5, 6, 6], spellsKnown: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  Warlock: { cantrips: [2, 2, 2, 2, 2, 3, 3, 3, 3, 4], spellsKnown: [2, 3, 4, 5, 6, 7, 8, 9, 10, 11] },
  Wizard: { cantrips: [3, 3, 3, 4, 4, 4, 4, 4, 4, 4], spellsPrepared: level => level + getMod("INT") }
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
          <option>Aasimar</option><option>Dragonborn</option><option>Dwarf</option><option>Elf</option>
          <option>Gnome</option><option>Goliath</option><option>Halfling</option>
          <option>Human</option><option>Orc</option><option>Tiefling</option>
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

    <tr>
      <td>Level</td>
      <td>
        <div class="number-control">
          <button class="dec">-</button>
          <input type="number" id="charLevel" min="1" value="1">
          <button class="inc">+</button>
        </div>
      </td>
    </tr>

    <tr>
      <td>Proficiency Bonus</td>
      <td><span id="charPB">+2</span></td>
    </tr>

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
<tr>
  <td>HP</td>
  <td>
    <div class="hp-wrapper">
      <div class="hp-block">
        <label>Current</label>
        <div class="number-control">
          <button class="dec">-</button>
          <input type="number" id="charHPcurrent" value="0">
          <button class="inc">+</button>
        </div>
      </div>
      <div class="hp-block">
        <label>Temp</label>
        <div class="number-control">
          <button class="dec">-</button>
          <input type="number" id="charHPtemp" value="0">
          <button class="inc">+</button>
        </div>
      </div>
      <div class="hp-block">
        <label>Max</label>
        <div class="number-control">
          <button class="dec">-</button>
          <input type="number" id="charHPmax" value="0">
          <button class="inc">+</button>
        </div>
      </div>
    </div>
  </td>
</tr>


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
<div class="abilities-wrapper">
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

  <div>Score: 
    <div class="number-control">
      <button class="dec">-</button>
      <input id="char${stat}" type="number" value="10">
      <button class="inc">+</button>
    </div>
  </div>

  <div>Mod: <span id="mod${stat}">0</span></div>

  <div class="save-row">
    <label>
      <input type="checkbox" id="saveProf${stat}">
      Save: <span id="save${stat}">0</span>
    </label>
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
<tr><th>Name</th><th>Attack Bonus / DC</th><th>Damage & Type</th><th>Notes</th></tr>
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
</table>


  <!-- SPELLCASTING -->
  <table class="dc-table">
    <tr><th colspan="2">Spellcasting</th></tr>
    <tr><td>Spellcasting Ability</td><td><input id="charSpellcastingAbility"></td></tr>
    <tr><td>Spellcasting modifier</td><td><span id="modPB">0</span></td></tr>
    <tr><td>Spell Save DC</td><td><input id="charSpellSaveDC" readonly></td></tr>
    <tr><td>Spell Attack Bonus</td><td><input id="charSpellAttackBonus" readonly></td></tr>
  </table>

  <div class="table-title">Spell Slots / Known Spells</div>
<table class="dc-table">
  <tr><th>Level</th><th>Slots</th><th>Spells Known / Prepared</th></tr>
  ${[1,2,3,4,5,6,7,8,9].map(l => `
  <tr>
    <td>${l}</td>
    <td><input id="spellSlots${l}" readonly></td>
    <td><input id="spellsKnown${l}" readonly></td>
  </tr>`).join("")}
</table>

<div class="table-title">Spells & Cantrips</div>

<div class="spell-scroll">
  <table class="dc-table spell-table">
    <tr>
      <th>Lvl</th>
      <th>Name</th>
      <th>Cast</th>
      <th>Range</th>
      <th>Req</th>
      <th>Comp</th>
      <th>School</th>
      <th>Notes</th>
    </tr>

    ${Array.from({length:20}).map((_,i)=>`
    <tr>
      <td><input id="spellLvl${i}" style="width:40px"></td>
      <td><input id="spellName${i}"></td>
      <td><input id="spellCast${i}"></td>
      <td><input id="spellRange${i}"></td>

      <td class="req-boxes">
        <label><input type="checkbox" id="spellC${i}"> C</label>
        <label><input type="checkbox" id="spellR${i}"> R</label>
        <label><input type="checkbox" id="spellMReq${i}"> M</label>
      </td>

      <td class="comp-boxes">
        <label><input type="checkbox" id="spellV${i}"> V</label>
        <label><input type="checkbox" id="spellS${i}"> S</label>
        <label><input type="checkbox" id="spellMComp${i}"> M</label>
      </td>

      <td><input id="spellSchool${i}"></td>
      <td><input id="spellNotes${i}"></td>
    </tr>`).join("")}

  </table>
</div>


  <div class="wide-section">

  <div class="wide-block">
    <h3>Class Features</h3>
    <textarea id="charFeatures"></textarea>
  </div>

 <div class="wide-block">
    <h3>Feats</h3>
    <textarea id="charFeats"></textarea>
  </div>

  <div class="wide-block">
    <h3>Species Traits</h3>
    <textarea id="charSpeciesTraits"></textarea>
  </div>

  <div class="wide-block">
    <h3>Equipment</h3>
    <textarea id="charEquipment"></textarea>
  </div>

 <div class="wide-block">
    <h3>Appearance</h3>
    <textarea id="charAppearance"></textarea>
  </div>

   <div class="wide-block">
    <h3>Backstory & Personality</h3>
    <textarea id="charBackstory"></textarea>
  </div>


  <div class="wide-block">
    <h3>Notes</h3>
    <textarea id="charNotes"></textarea>
  </div>

  <div class="wide-row">
    <h3>Languages</h3>
    <div class="inline-group">
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
    </div>
  </div>

  <!-- COINS -->
  <div class="wide-row">
    <h3>Coins</h3>
    <div class="inline-group">
      CP <div class="number-control"><button class="dec">-</button><input id="coinCP" type="number" min="0"><button class="inc">+</button></div>
      SP <div class="number-control"><button class="dec">-</button><input id="coinSP" type="number" min="0"><button class="inc">+</button></div>
      EP <div class="number-control"><button class="dec">-</button><input id="coinEP" type="number" min="0"><button class="inc">+</button></div>
      GP <div class="number-control"><button class="dec">-</button><input id="coinGP" type="number" min="0"><button class="inc">+</button></div>
      PP <div class="number-control"><button class="dec">-</button><input id="coinPP" type="number" min="0"><button class="inc">+</button></div>
    </div>
  </div>

</div>


<div style="margin:10px 0;">
  <label>Characters: </label>
  <select id="characterList"></select>
</div>

  <button id="saveSheet">💾 Save</button>
  <button id="loadSheet">📂 Load</button>
  `;

  // Attach your original event listeners
  attachEventListeners();

  // Add number control handlers for + / - buttons
  document.querySelectorAll(".number-control").forEach(control => {
    const input = control.querySelector("input[type=number]");
    const incBtn = control.querySelector(".inc");
    const decBtn = control.querySelector(".dec");

    incBtn.addEventListener("click", () => {
      input.value = Math.min((+input.value || 0) + 1, input.max || Infinity);
      input.dispatchEvent(new Event('input'));
    });

    decBtn.addEventListener("click", () => {
      input.value = Math.max((+input.value || 0) - 1, input.min || 0);
      input.dispatchEvent(new Event('input'));
    });
  });

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

  function updateCharacter() {

  const charClass = document.getElementById("charClass")?.value;
  const cls = charClass;

  const level = +document.getElementById("charLevel")?.value || 1;
  const PB = getProficiencyBonus(level);

  // Display PB
  const pbEl = document.getElementById("charPB");
  if(pbEl) pbEl.textContent = "+" + PB;

  const modPBEl = document.getElementById("modPB");
  if(modPBEl) modPBEl.textContent = PB;

  // -----------------------------
  // Ability Modifiers
  // -----------------------------
  const mods = {};
  ["STR","DEX","CON","INT","WIS","CHA"].forEach(stat => {
    const score = +document.getElementById("char"+stat)?.value || 10;
    mods[stat] = Math.floor((score - 10) / 2);
    const modEl = document.getElementById("mod"+stat);
    if(modEl) modEl.textContent = mods[stat];
  });

// HP
const hpCurrent = document.getElementById("charHPcurrent");
const hpMax = document.getElementById("charHPmax");

if (hpCurrent && hpMax) {
  const cur = +hpCurrent.value || 0;
  const max = +hpMax.value || 0;

  if (cur > max && max > 0) {
    hpCurrent.value = max;
  }
}





  // -----------------------------
  // Initiative
  // -----------------------------
  const initiativeEl = document.getElementById("charInitiative");
  if(initiativeEl) initiativeEl.value = mods.DEX; // now shows in input

  // -----------------------------
  // Saving Throws
  // -----------------------------
  ["STR","DEX","CON","INT","WIS","CHA"].forEach(stat => {
    const prof = document.getElementById("saveProf"+stat)?.checked ? PB : 0;
    const saveEl = document.getElementById("save"+stat);
    if(saveEl) saveEl.textContent = mods[stat] + prof;
  });

  // -----------------------------
  // Skills
  // -----------------------------
  const skills = [
    ["Acrobatics","DEX"], ["Animal Handling","WIS"], ["Arcana","INT"], ["Athletics","STR"],
    ["Deception","CHA"], ["History","INT"], ["Insight","WIS"], ["Intimidation","CHA"],
    ["Investigation","INT"], ["Medicine","WIS"], ["Nature","INT"], ["Perception","WIS"],
    ["Performance","CHA"], ["Persuasion","CHA"], ["Religion","INT"], ["Sleight of Hand","DEX"],
    ["Stealth","DEX"], ["Survival","WIS"]
  ];

  skills.forEach(([skill, stat]) => {
    const prof = document.getElementById("prof"+skill)?.checked ? PB : 0;
    const skillEl = document.getElementById("mod"+skill);
    if(skillEl) skillEl.textContent = mods[stat] + prof;
  });

  // -----------------------------
  // Passive Perception
  // -----------------------------
  const perceptionProf = document.getElementById("profPerception")?.checked ? PB : 0;
  const passiveEl = document.getElementById("charPassivePerception");
  if(passiveEl) passiveEl.value = 10 + mods.WIS + perceptionProf;

  // -----------------------------
  // Spellcasting ability derived from class
  // -----------------------------


  const spellAbilityStat = classSpellAbility[charClass] || "";
  const spellAbilityInput = document.getElementById("charSpellcastingAbility");
  if(spellAbilityInput) spellAbilityInput.value = spellAbilityStat;

  if(spellAbilityStat && mods[spellAbilityStat] !== undefined) {
    const spellSaveDC = 8 + PB + mods[spellAbilityStat];
    const spellAttack = PB + mods[spellAbilityStat];
    const saveEl = document.getElementById("charSpellSaveDC");
    const attackEl = document.getElementById("charSpellAttackBonus");
    if(saveEl) saveEl.value = spellSaveDC;
    if(attackEl) attackEl.value = spellAttack;
  }
// === Spellcasting calculation ===
  if(spellcastingClasses[cls]) {
    const spellInfo = spellcastingClasses[cls];

    // Cantrips known
    const cantripsKnown = spellInfo.cantrips[level-1] || 0;
    for(let i=0; i<8; i++){
      const elName = document.getElementById(`cantripName${i}`);
      if(elName) elName.readOnly = i >= cantripsKnown;
    }

    // Spell slots and spells known/prepared
    for(let l=1; l<=9; l++){
      const slotsEl = document.getElementById(`spellSlots${l}`);
      const knownEl = document.getElementById(`spellsKnown${l}`);
      if(slotsEl) slotsEl.value = spellSlotsTable[cls]?.[level]?.[l] || 0; // optional detailed table
      if(knownEl){
        if(spellInfo.spellsKnown) knownEl.value = spellInfo.spellsKnown[level-1] || 0;
        if(spellInfo.spellsPrepared) knownEl.value = spellInfo.spellsPrepared(level);
      }
    }
  }
}


const GITHUB_USER = "Purgatorius77";
const GITHUB_REPO = "DnD_website";
const GITHUB_BRANCH = "main";
const GITHUB_TOKEN = "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"; // Replace with your PAT

async function saveCharacterToGitHub(data, name) {
  const path = `data/characters/${encodeURIComponent(name)}.json`;
  const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${path}`;
  const content = btoa(JSON.stringify(data, null, 2));

  // Fetch SHA if file exists
  let sha;
  try {
    const res = await fetch(`${url}?ref=${GITHUB_BRANCH}`, {
      headers: { Authorization: `token ${GITHUB_TOKEN}` }
    });
    if (res.ok) {
      const json = await res.json();
      sha = json.sha;
    }
  } catch (err) {
    console.warn("File doesn't exist yet, creating new...");
  }

  const body = {
    message: `Save character ${name}`,
    content: content,
    branch: GITHUB_BRANCH
  };
  if (sha) body.sha = sha;

  const putRes = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  if (!putRes.ok) {
    const text = await putRes.text();
    throw new Error(`GitHub save failed: ${text}`);
  }

  console.log(`Character "${name}" saved to GitHub.`);
}

async function loadCharacterFromGitHub(name) {
  const path = `data/characters/${encodeURIComponent(name)}.json`;
  const url = `https://api.github.com/repos/${GITHUB_USER}/${GITHUB_REPO}/contents/${path}?ref=${GITHUB_BRANCH}`;

  const res = await fetch(url, {
    headers: { Authorization: `token ${GITHUB_TOKEN}` }
  });

  if (!res.ok) throw new Error(`GitHub load failed: ${res.statusText}`);

  const json = await res.json();
  const data = JSON.parse(atob(json.content));
  populateCharacterForm(data);
  localStorage.setItem("character_" + name, JSON.stringify(data));
}



// ================== SAVE / LOAD SHEET ==================

async function saveSheet() {
  const name = document.getElementById("charName").value.trim();
  if (!name) return alert("Please enter a character name");

  // Gather all inputs
  const data = {};
  document.querySelectorAll("#character-statblock input, #character-statblock select, #character-statblock textarea")
    .forEach(el => {
      if(el.id) {
        if(el.type === "checkbox") data[el.id] = el.checked;
        else data[el.id] = el.value;
      }
    });

  // Save locally first
  localStorage.setItem("character_" + name, JSON.stringify(data));
  localStorage.setItem("lastCharacter", name);
  refreshCharacterList();
  document.getElementById("characterList").value = name;

  // Try saving to GitHub
  try {
    await saveCharacterToGitHub(data, name);
    alert(`Character "${name}" saved locally and to GitHub!`);
  } catch (err) {
    console.warn("GitHub save failed, saved locally only:", err);
    alert(`Character "${name}" saved locally. GitHub save failed.`);
  }
}

async function loadSheet() {
  const list = document.getElementById("characterList");
  const name = list.value;
  if (!name) return alert("Select a character first");

  let data = null;

  // Try localStorage first
  const saved = localStorage.getItem("character_" + name);
  if(saved) {
    data = JSON.parse(saved);
    populateCharacterForm(data);
    console.log(`Loaded "${name}" from localStorage`);
  }

  // Then try GitHub (overwrite localStorage if successful)
  try {
    await loadCharacterFromGitHub(name);
    console.log(`Loaded "${name}" from GitHub`);
  } catch (err) {
    if(!data) alert(`Failed to load character "${name}" from GitHub or localStorage`);
    else console.warn("GitHub load failed, using localStorage version", err);
  }

  // Remember last character
  localStorage.setItem("lastCharacter", name);
}

// Helper to populate form from data object
function populateCharacterForm(data) {
  Object.keys(data).forEach(id => {
    const el = document.getElementById(id);
    if (!el) return;
    if(el.type === "checkbox") el.checked = data[id];
    else el.value = data[id];
  });
  updateCharacter();
}

// Refresh the character dropdown
function refreshCharacterList(){
  const list = document.getElementById("characterList");
  list.innerHTML = "";

  Object.keys(localStorage)
    .filter(k => k.startsWith("character_"))
    .sort()
    .forEach(k => {
      const name = k.replace("character_", "");
      const opt = document.createElement("option");
      opt.value = name;
      opt.textContent = name;
      list.appendChild(opt);
    });

  const last = localStorage.getItem("lastCharacter");
  if(last) list.value = last;
}






// ================== EVENTS ==================

function attachEventListeners(){
  document.getElementById("characterList").addEventListener("change", loadSheet);

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
  refreshCharacterList();

  const last = localStorage.getItem("lastCharacter");
  if(last){
    document.getElementById("characterList").value = last;
    loadSheet();
  }
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












