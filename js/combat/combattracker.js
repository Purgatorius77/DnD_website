import { renderMonster } from "../monsters/monsterstatblock.js";
import { getMonsterImagePath } from "../monsters/monsterstatblock.js";

let combatGroups = [];
let allMonsters = [];

// ===== CONSTANTS =====
const DND_CONDITIONS = [
  "Blinded","Charmed","Deafened","Frightened","Grappled",
  "Incapacitated","Paralyzed","Petrified","Poisoned","Prone",
  "Restrained","Stunned","Unconscious"
];

const CONDITION_DESCRIPTIONS = {
  "Blinded": "A blinded creature can't see and automatically fails any ability check that requires sight.",
  "Charmed": "A charmed creature can't attack the charmer and has disadvantage on social checks with them.",
  "Deafened": "A deafened creature can't hear and automatically fails any ability check that requires hearing.",
  "Frightened": "A frightened creature has disadvantage on ability checks and attack rolls while the source is visible.",
  "Grappled": "A grappled creature's speed becomes 0 and it can't benefit from any bonus to its speed.",
  "Incapacitated": "An incapacitated creature can't take actions or reactions.",
  "Paralyzed": "A paralyzed creature is incapacitated, can't move, and fails Strength and Dexterity saving throws.",
  "Petrified": "A petrified creature is transformed into stone and is incapacitated.",
  "Poisoned": "A poisoned creature has disadvantage on attack rolls and ability checks.",
  "Prone": "A prone creature's only movement option is to crawl unless it stands up; melee attacks against it have advantage.",
  "Restrained": "A restrained creature's speed is 0, attack rolls against it have advantage, and it has disadvantage on attacks.",
  "Stunned": "A stunned creature is incapacitated, can't move, and can speak only falteringly.",
  "Unconscious": "An unconscious creature is incapacitated, can't move or speak, and drops whatever it’s holding."
};

// ===== COMBAT TRACKER =====
export function initCombatTracker(monsters) {
  allMonsters = monsters;

  const addGroupBtn = document.getElementById("addGroup");
  const resetBtn = document.getElementById("resetCombat");
  const groupsContainer = document.getElementById("groups");
  const tooltip = document.getElementById("tooltip");

  let selectedMonsterIndex = 0;

  // Listen for filtered monster selection
  document.addEventListener("monsterSelected", (e) => {
    const monster = e.detail;
    selectedMonsterIndex = allMonsters.indexOf(monster);
  });




function renderCombatTracker() {
  const groupsContainer = document.getElementById("groups");
  groupsContainer.innerHTML = "";

  combatGroups.forEach((group, gi) => {
    const monster = allMonsters[group.monsterIndex];
    if (!monster) return;

    // Initialize HP array if needed
    if (!group.hp || group.hp.length !== group.count) {
      group.hp = Array(group.count).fill().map(() => ({ hp: monster.hp?.average || 0, conditions: [] }));
    }

    const div = document.createElement("div");
    div.className = "group";

  // Get monster token image path
  const imgPath = getMonsterImagePath(monster);

    div.innerHTML = `
      <div class="group-header-row">
      <img src="${imgPath}" alt="${monster.name}" class="group-monster-image" onerror="this.style.display='none'">
     
        <h3 class="group-header">${monster.name}</h3>
      </div>

      <label>Monster</label>
      <select class="groupMonster">
        ${allMonsters.map((m, i) => `<option value="${i}" ${i === group.monsterIndex ? "selected" : ""}>${m.name}</option>`).join("")}
      </select>
   <div class="group-row">
        <div class="round-control">
          <label>Round</label>
          <div class="round-controls">
            <button class="round-minus" data-index="${gi}">−</button>
            <input type="number" class="groupRound" value="${group.roundOrder}" data-index="${gi}">
            <button class="round-plus" data-index="${gi}">+</button>
          </div>
        </div>

        <div class="count-control">
          <label>Count</label>
          <div class="count-controls">
            <button class="count-minus">-</button>
            <input type="number" class="groupCount" value="${group.count}">
            <button class="count-plus">+</button>
          </div>
        </div>
      </div>

      <div class="hp-list"></div>
      <button class="group-delete">Remove Group</button>
    `;

    groupsContainer.appendChild(div);
  

    // Monster dropdown change
    const monsterSelect = div.querySelector(".groupMonster");
    monsterSelect.addEventListener("change", e => {
      group.monsterIndex = Number(e.target.value);
      const newMonster = allMonsters[group.monsterIndex];
      group.hp = Array(group.count).fill().map(() => ({ hp: newMonster.hp?.average || 0, conditions: [] }));
      renderCombatTracker();
    });

// Inside renderCombatTracker(), after you append the group div:
div.querySelector(".group-header").addEventListener("click", () => {
  // Render the monster
  renderMonster(monster);

  // Update dropdown to the clicked monster
  const monsterSelect = document.getElementById("monsterSelect");
  if (monsterSelect) monsterSelect.value = group.monsterIndex;

  // Show filters and statblock
  const monsterFilters = document.getElementById("monster-filters");
  const monsterStatblock = document.getElementById("monster-statblock");
  if (monsterFilters) monsterFilters.style.display = "block";
  if (monsterStatblock) monsterStatblock.style.display = "block";
});



    
 // ROUND +/-
    div.querySelector(".round-minus").addEventListener("click", ()=>{ if(group.roundOrder>1) { group.roundOrder--; renderCombatTracker(); } });
    div.querySelector(".round-plus").addEventListener("click", ()=>{ group.roundOrder++; renderCombatTracker(); });
    div.querySelector(".groupRound").addEventListener("change", e=>{ group.roundOrder=Math.max(1,Number(e.target.value)); renderCombatTracker(); });

    // COUNT +/-
    const countInput = div.querySelector(".groupCount");
    div.querySelector(".count-minus").addEventListener("click", ()=>{
      if(group.count>1){ group.count--; group.hp.pop(); renderCombatTracker(); }
    });
    div.querySelector(".count-plus").addEventListener("click", ()=>{
      group.count++; group.hp.push({ hp: monster.hp?.average||0, conditions: [] }); renderCombatTracker();
    });
    countInput.addEventListener("change", e=>{
      const newCount = Math.max(1, Number(e.target.value));
      while(group.hp.length<newCount) group.hp.push({ hp: monster.hp?.average||0, conditions: [] });
      group.hp = group.hp.slice(0,newCount);
      group.count = newCount;
      renderCombatTracker();
    });



    
    // HP + conditions
    const hpList = div.querySelector(".hp-list");
    group.hp.forEach((m, i) => {
      const hpRow = document.createElement("div");
      hpRow.className = "hp-row";
      hpRow.innerHTML = `
        <span class="monster-number">${i+1}.</span>
        <button class="hp-plus">+</button>
        <input type="number" class="hp-input" value="${m.hp}">
        <button class="hp-minus">-</button>
        <button class="hp-delete">✖</button>
      `;

      // HP buttons
      hpRow.querySelector(".hp-plus").addEventListener("click", () => { m.hp++; renderCombatTracker(); });
      hpRow.querySelector(".hp-minus").addEventListener("click", () => { m.hp = Math.max(0, m.hp - 1); renderCombatTracker(); });
      hpRow.querySelector(".hp-input").addEventListener("change", e => { m.hp = Number(e.target.value); });
      hpRow.querySelector(".hp-delete").addEventListener("click", () => { group.hp.splice(i, 1); group.count--; renderCombatTracker(); });

      // Conditions
      const condDiv = document.createElement("div");
      condDiv.className = "conditions-container";
      condDiv.innerHTML = `
        <select class="condition-select">
          <option value="">Add condition...</option>
          ${DND_CONDITIONS.map(c => `<option value="${c}">${c}</option>`).join("")}
        </select>
        <div class="condition-list">
          ${m.conditions.length ? m.conditions.map((c, idx) => `
            <span class="condition" data-idx="${idx}" title="${CONDITION_DESCRIPTIONS[c] || ''}">${c}</span>
          `).join(" ") : "None"}
        </div>
      `;

      const condSelect = condDiv.querySelector(".condition-select");
      condSelect.addEventListener("change", e => {
        const val = e.target.value;
        if (val && !m.conditions.includes(val)) {
          m.conditions.push(val);
          e.target.value = "";
          renderCombatTracker();
        }
      });

      condDiv.querySelectorAll(".condition").forEach(span => {
        span.addEventListener("click", () => {
          const idx = parseInt(span.dataset.idx);
          m.conditions.splice(idx, 1);
          renderCombatTracker();
        });
      });

      hpList.appendChild(hpRow);
      hpList.appendChild(condDiv);
    });

    // Delete group
    div.querySelector(".group-delete").addEventListener("click", () => {
      combatGroups.splice(gi, 1);
      renderCombatTracker();
    });
  });
}



  addGroupBtn.addEventListener("click", () => {
    const monster = allMonsters[selectedMonsterIndex];
    if (!monster) return;

    const newGroup = {
      id: Date.now(),
      monsterIndex: selectedMonsterIndex,
      count: 1,
      roundOrder: 1,
      hp: [{ hp: monster.hp?.average || 0, conditions: [] }]
    };

    combatGroups.push(newGroup);
    renderCombatTracker();
  });

  resetBtn.addEventListener("click", () => {
    combatGroups = [];
    renderCombatTracker();
  });

  renderCombatTracker();
}
