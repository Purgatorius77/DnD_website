// js/combat/combattracker.js
import { getMonsterImagePath } from "../monsters/monsterstatblock.js";
import { renderMonster } from "../monsters/monsterstatblock.js";

let combatGroups = [];
let allMonsters = [];

// D&D Conditions
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


export function initCombatTracker(monsters) {
  allMonsters = monsters;

  const addGroupBtn = document.getElementById("addGroup");
  const resetBtn = document.getElementById("resetCombat");
  const groupsContainer = document.getElementById("groups");
  const tooltip = document.getElementById("tooltip");

  let selectedMonsterIndex = 0;

  // Listen for monster selection from filters
  document.addEventListener("monsterSelected", e => {
    const monster = e.detail;
    selectedMonsterIndex = allMonsters.indexOf(monster);
  });

  // Listen for the new "Add Monster" header button
  document.addEventListener("addMonsterToCombat", e => {
    const monster = e.detail;
    if (!monster) return;

    const index = allMonsters.indexOf(monster);
    if (index === -1) return;

    combatGroups.push({
      id: Date.now(),
      monsterIndex: index,
      count: 1,
      roundOrder: 1,
      hp: [{ hp: monster.hp?.average || 0, conditions: [] }]
    });

    renderCombatTracker();
  });

  // Add group button inside combat tracker
  if (addGroupBtn) {
    addGroupBtn.addEventListener("click", () => {
      const monster = allMonsters[selectedMonsterIndex] || allMonsters[0];
      if (!monster) return;

      combatGroups.push({
        id: Date.now(),
        monsterIndex: allMonsters.indexOf(monster),
        count: 1,
        roundOrder: 1,
        hp: [{ hp: monster.hp?.average || 0, conditions: [] }]
      });

      renderCombatTracker();
    });
  }

  // Reset combat button
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      combatGroups = [];
      renderCombatTracker();
    });
  }

function renderCombatTracker() {
  groupsContainer.innerHTML = "";

  // Sort combatGroups by roundOrder ascending
  const sortedGroups = [...combatGroups].sort((a, b) => a.roundOrder - b.roundOrder);

  sortedGroups.forEach((group, gi) => {
    const monster = allMonsters[group.monsterIndex];
    if (!monster) return;

    // Make sure HP array matches count
    if (!group.hp || group.hp.length !== group.count) {
      group.hp = Array(group.count).fill().map(() => ({ hp: monster.hp?.average || 0, conditions: [] }));
    }

    const div = document.createElement("div");
    div.className = "group";

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
            <label>Round order</label>
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

      // Attach all event listeners for this group
      const monsterSelect = div.querySelector(".groupMonster");
      monsterSelect.addEventListener("change", e => {
        group.monsterIndex = Number(e.target.value);
        const newMonster = allMonsters[group.monsterIndex];
        group.hp = Array(group.count).fill().map(() => ({ hp: newMonster.hp?.average || 0, conditions: [] }));
        renderCombatTracker();
      });

      div.querySelector(".group-header").addEventListener("click", () => {
        renderMonster(monster);

        const monsterFilters = document.getElementById("monster-filters");
        const monsterStatblock = document.getElementById("monster-statblock");
        if (monsterFilters) monsterFilters.style.display = "block";
        if (monsterStatblock) monsterStatblock.style.display = "block";
      });

      // Round controls
// Round controls
const roundMinusBtn = div.querySelector(".round-minus");
const roundPlusBtn = div.querySelector(".round-plus");
const roundInput = div.querySelector(".groupRound");

roundMinusBtn.addEventListener("click", () => { 
  if (group.roundOrder > 1) {
    group.roundOrder--;
    renderCombatTracker(); // re-renders and re-sorts
  }
});

roundPlusBtn.addEventListener("click", () => { 
  group.roundOrder++;
  renderCombatTracker(); // re-renders and re-sorts
});

roundInput.addEventListener("change", e => { 
  group.roundOrder = Math.max(1, Number(e.target.value));
  renderCombatTracker(); // re-renders and re-sorts
});


      // HP + Conditions
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
 // Inside renderCombatTracker(), for each monster's hp row:

// Conditions container
const condDiv = document.createElement("div");
condDiv.className = "conditions-container";
condDiv.innerHTML = `
  <select class="condition-select">
    <option value="">Add condition...</option>
    ${DND_CONDITIONS.map(c => `<option value="${c}">${c}</option>`).join("")}
  </select>
  <div class="condition-list">
    ${m.conditions.length
      ? m.conditions.map(c => `<span class="condition" data-tooltip="${CONDITION_DESCRIPTIONS[c]||''}">${c}</span>`).join(" ")
      : "None"}
  </div>
`;

// Add condition from dropdown
const condSelect = condDiv.querySelector(".condition-select");
condSelect.addEventListener("change", e => {
  const val = e.target.value;
  if (val && !m.conditions.includes(val)) {
    m.conditions.push(val);
    e.target.value = "";
    renderCombatTracker();
  }
});

// Tooltip + remove logic
const tooltip = document.getElementById("tooltip");
let tooltipTimer;
let longPressTimer;

condDiv.querySelectorAll(".condition").forEach(span => {
  function showTooltip() {
    const text = span.dataset.tooltip;
    if (!text) return;

    tooltip.textContent = text;
    tooltip.classList.add("show");

    const rect = span.getBoundingClientRect();
    const tipRect = tooltip.getBoundingClientRect();

    let left = rect.left + rect.width / 2 - tipRect.width / 2;
    let top = rect.top - tipRect.height - 10;

    left = Math.max(8, Math.min(left, window.innerWidth - tipRect.width - 8));
    if (top < 8) top = rect.bottom + 10;

    tooltip.style.left = left + "px";
    tooltip.style.top = top + "px";

    clearTimeout(tooltipTimer);
    tooltipTimer = setTimeout(() => {
      tooltip.classList.remove("show");
    }, 5000);
  }

  function hideTooltip() {
    clearTimeout(tooltipTimer);
    tooltip.classList.remove("show");
  }

  // ✅ Correct remove condition
  function removeCondition() {
    const condText = span.textContent;
    const index = m.conditions.indexOf(condText);
    if (index >= 0) {
      m.conditions.splice(index, 1);
      renderCombatTracker(); // re-render tracker
    }
  }

  // 🖱 Desktop
  span.addEventListener("mouseenter", showTooltip);
  span.addEventListener("mouseleave", hideTooltip);
  span.addEventListener("click", removeCondition);

  // 📱 Touch (long press)
  span.addEventListener("touchstart", e => {
    e.preventDefault();
    longPressTimer = setTimeout(() => {
      removeCondition();
    }, 600);
  });
  span.addEventListener("touchend", () => {
    clearTimeout(longPressTimer);
    showTooltip();
  });
});

hpList.appendChild(hpRow);
hpList.appendChild(condDiv);
});

      // Delete group button
      div.querySelector(".group-delete").addEventListener("click", () => {
        combatGroups.splice(gi,1);
        renderCombatTracker();
      });
    });
  }


  
  // Initial render
  renderCombatTracker();
}
