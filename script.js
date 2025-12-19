/***********************
 * MONSTER DATA
 ***********************/
let allMonsters = [];
let combatGroups = [];

fetch("monsters.json")
  .then(res => res.json())
  .then(monsters => {
    // Sort alphabetically
    allMonsters = monsters.sort((a, b) => a.name.localeCompare(b.name));

    // Build dropdown
    buildMonsterDropdown(allMonsters);

    // Render first monster
    if (allMonsters.length > 0) {
      renderMonster(allMonsters[0]);
      document.getElementById("monsterSelect").value = 0;
    }
  })
  .catch(err => console.error("Failed to load monsters:", err));


/***********************
 * STATBLOCK DROPDOWN
 ***********************/
function buildMonsterDropdown(monsters) {
  const select = document.getElementById("monsterSelect");
  select.innerHTML = `<option value="">-- Choose a monster --</option>`;

  monsters.forEach((monster, index) => {
    const option = document.createElement("option");
    option.value = index;
    option.textContent = monster.name;
    select.appendChild(option);
  });

  select.addEventListener("change", e => {
    const index = e.target.value;
    if (index !== "") {
      renderMonster(monsters[index]);
    }
  });
}


/***********************
 * STATBLOCK RENDERING
 ***********************/
function abilityMod(score) {
  return Math.floor((score - 10) / 2);
}

function formatAbility(score) {
  const mod = abilityMod(score);
  return `${score} (${mod >= 0 ? "+" : ""}${mod})`;
}

function renderList(title, list) {
  if (!list || list.length === 0) return "";
  return `<p><strong>${title}:</strong> ${list.join(", ")}</p>`;
}

function renderSection(title, items) {
  if (!items || items.length === 0) return "";
  return `
    <h2>${title}</h2>
    ${items.map(i =>
      `<p><strong>${i.name}.</strong> ${i.text}</p>`
    ).join("")}
  `;
}

function renderMonster(m) {
  const el = document.getElementById("statblock");
  el.innerHTML = `
    <div class="stat-block">
      <header>
        <h1>${m.name}</h1>
        <p class="subtitle">${m.size} ${m.type}, ${m.alignment}</p>
      </header>

      <div class="top-stats">
        <p><strong>Armor Class</strong> ${m.ac}</p>
        <p><strong>Hit Points</strong> ${m.hp.average} (${m.hp.roll})</p>
        <p><strong>Speed</strong> ${m.speed}</p>
      </div>

      <div class="abilities">
        <p><strong>STR</strong> ${formatAbility(m.abilities.str)}</p>
        <p><strong>DEX</strong> ${formatAbility(m.abilities.dex)}</p>
        <p><strong>CON</strong> ${formatAbility(m.abilities.con)}</p>
        <p><strong>INT</strong> ${formatAbility(m.abilities.int)}</p>
        <p><strong>WIS</strong> ${formatAbility(m.abilities.wis)}</p>
        <p><strong>CHA</strong> ${formatAbility(m.abilities.cha)}</p>
      </div>

      ${renderList("Skills", m.skills)}
      ${renderList("Damage Vulnerabilities", m.vulnerabilities)}
      ${renderList("Damage Resistances", m.resistances)}
      ${renderList("Damage Immunities", m.immunities)}
      ${renderList("Senses", m.senses)}
      ${renderList("Languages", m.languages)}

      <p><strong>Challenge</strong> ${m.challenge}</p>

      ${renderSection("Actions", m.actions)}
      ${renderSection("Special Traits", m.traits)}
    </div>
  `;
}


/***********************
 * COMBAT TRACKER
 ***********************/
document.getElementById("addGroup").addEventListener("click", () => {
  combatGroups.push({
    id: Date.now(),
    monsterIndex: 0,
    count: 1,
    roundOrder: 1,
    hp: []
  });
  renderCombatTracker();
});

document.getElementById("resetCombat").addEventListener("click", () => {
  combatGroups = [];
  renderCombatTracker();
});

function renderCombatTracker() {
  const container = document.getElementById("groups");
  container.innerHTML = "";

  combatGroups
    .sort((a, b) => a.roundOrder - b.roundOrder)
    .forEach((group, groupIndex) => {
      const monster = allMonsters[group.monsterIndex];

      // Ensure HP array matches count
      if (group.hp.length !== group.count) {
        group.hp = Array(group.count).fill(monster.hp.average);
      }

      const div = document.createElement("div");
      div.className = "group";

      div.innerHTML = `
        <h3 class="group-header">${monster.name}</h3>

        <label>Monster</label>
        <select class="groupMonster">
          ${allMonsters.map((m, i) =>
            `<option value="${i}" ${i === group.monsterIndex ? "selected" : ""}>
              ${m.name}
            </option>`
          ).join("")}
        </select>

        <div class="group-row">
          <div>
            <label>Round</label>
            <input type="number" class="groupRound" value="${group.roundOrder}">
          </div>

          <div>
            <label>Count</label>
            <input type="number" min="1" class="groupCount" value="${group.count}">
          </div>
        </div>

        <div class="hp-list">
          ${group.hp.map((hp, i) => `
            <div class="hp-row">
              <span>${i + 1}.</span>
              <input type="number" value="${hp}" data-index="${i}">
              <button data-index="${i}">✖</button>
            </div>
          `).join("")}
        </div>

        <button class="group-delete">Remove Group</button>
      `;

      /* ---- EVENTS ---- */

      // Show statblock
      div.querySelector(".group-header").addEventListener("click", () => {
        renderMonster(monster);
      });

      // Change monster type
      div.querySelector(".groupMonster").addEventListener("change", e => {
        group.monsterIndex = Number(e.target.value);
        group.hp = [];
        renderCombatTracker();
      });

      // Round order
      div.querySelector(".groupRound").addEventListener("change", e => {
        group.roundOrder = Number(e.target.value);
        renderCombatTracker();
      });

      // Count change
      div.querySelector(".groupCount").addEventListener("change", e => {
        group.count = Number(e.target.value);
        renderCombatTracker();
      });

      // HP change
      div.querySelectorAll(".hp-row input").forEach(input => {
        input.addEventListener("change", e => {
          group.hp[e.target.dataset.index] = Number(e.target.value);
        });
      });

      // Delete individual monster
      div.querySelectorAll(".hp-row button").forEach(btn => {
        btn.addEventListener("click", e => {
          const index = Number(e.target.dataset.index);
          group.hp.splice(index, 1);
          group.count--;
          renderCombatTracker();
        });
      });

      // Delete entire group
      div.querySelector(".group-delete").addEventListener("click", () => {
        combatGroups.splice(groupIndex, 1);
        renderCombatTracker();
      });

      container.appendChild(div);
    });
}

