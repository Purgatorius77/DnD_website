fetch("monsters.json")
  .then(res => res.json())
  .then(monsters => {
    renderMonster(monsters[0]);
  })
  .catch(err => console.error(err));

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
    ${items.map(i => `
      <p><strong>${i.name}.</strong> ${i.text}</p>
    `).join("")}
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
      <p><strong>Hit Points</strong> ${m.hp.average} (${m.hp.formula})</p>
      <p><strong>Speed</strong> ${m.speed}</p>

      <div class="divider"></div>

      <table class="abilities">
        <tr>
          ${Object.keys(m.abilities).map(a => `<th>${a.toUpperCase()}</th>`).join("")}
        </tr>
        <tr>
          ${Object.values(m.abilities).map(v => `<td>${formatAbility(v)}</td>`).join("")}
        </tr>
      </table>

      <div class="divider"></div>

      ${renderList("Skills", m.skills)}
      ${renderList("Senses", m.senses)}
      ${renderList("Languages", m.languages)}
      <p><strong>Challenge</strong> ${m.cr}</p>

      <div class="divider"></div>

      ${renderSection("Traits", m.traits)}
      ${renderSection("Actions", m.actions)}
      ${renderSection("Reactions", m.reactions)}
      ${renderSection("Legendary Actions", m.legendaryActions)}
    </div>
  `;
}
