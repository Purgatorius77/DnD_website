let allMonsters = [];

fetch("monsters.json")
  .then(res => res.json())
  .then(monsters => {
    allMonsters = monsters;

    buildMonsterList(monsters);
    renderMonster(monsters[0]);
  })
  .catch(err => console.error("Failed to load monsters:", err));

function buildMonsterList(monsters) {
  const list = document.getElementById("monsterList");
  list.innerHTML = "";

  monsters.forEach(monster => {
    const li = document.createElement("li");
    li.textContent = monster.name;

    li.addEventListener("click", () => {
      renderMonster(monster);
    });

    list.appendChild(li);
  });
}

// 🔍 Search filter
document.getElementById("monsterSearch").addEventListener("input", e => {
  const query = e.target.value.toLowerCase();

  const filtered = allMonsters.filter(m =>
    m.name.toLowerCase().includes(query)
  );

  buildMonsterList(filtered);
});
  .catch(err => console.error("Failed to load monsters:", err));

function abilityMod(score) {
  return Math.floor((score - 10) / 2);
}

function formatAbility(score) {
  const mod = abilityMod(score);
  return `${score} (${mod >= 0 ? "+" : ""}${mod})`;
}

function renderList(title, list) {
  if (!list || list.length === 0) return "";
  return `<p><strong>${title}</strong> ${list.join(", ")}</p>`;
}

function renderSection(title, items) {
  if (!items || items.length === 0) return "";

  return `
    <h2>${title}</h2>
    ${items
      .map(
        i => `<p><strong>${i.name}.</strong> ${i.text}</p>`
      )
      .join("")}
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

      <div class="divider"></div>

      <p><strong>Armor Class</strong> ${m.ac}</p>
      <p><strong>Hit Points</strong> ${m.hp.average} (${m.hp.roll})</p>
      <p><strong>Speed</strong> ${m.speed}</p>

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
