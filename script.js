fetch("monsters.json")
  .then(res => res.json())
  .then(monsters => {
    const monster = monsters[0];
    renderMonster(monster);
  });

function renderMonster(m) {
  const block = document.getElementById("statblock");

  block.innerHTML = `
    <div class="stat-block">
      <h1>${m.name}</h1>
      <p class="meta">${m.size} ${m.type}, ${m.alignment}</p>

      <hr>

      <p><strong>Armor Class</strong> ${m.ac}</p>
      <p><strong>Hit Points</strong> ${m.hp.average} (${m.hp.formula})</p>
      <p><strong>Speed</strong> ${m.speed}</p>

      <hr>

      <table class="abilities">
        <tr>
          ${Object.entries(m.abilities).map(([key, val]) =>
            `<th>${key.toUpperCase()}</th>`
          ).join("")}
        </tr>
        <tr>
          ${Object.values(m.abilities).map(val =>
            `<td>${val}</td>`
          ).join("")}
        </tr>
      </table>

      ${renderList("Skills", m.skills)}
      ${renderList("Senses", m.senses)}
      ${renderList("Languages", m.languages)}
      <p><strong>Challenge</strong> ${m.cr}</p>

      <hr>

      ${renderSection("Traits", m.traits)}
      ${renderSection("Actions", m.actions)}
      ${renderSection("Reactions", m.reactions)}
      ${renderSection("Legendary Actions", m.legendaryActions)}
    </div>
  `;
}

function renderList(title, list) {
  if (!list || list.length === 0) return "";
  return `<p><strong>${title}</strong> ${list.join(", ")}</p>`;
}

function renderSection(title, items) {
  if (!items || items.length === 0) return "";

  return `
    <h2>${title}</h2>
    ${items.map(item => `
      <p><strong>${item.name}.</strong> ${item.text}</p>
    `).join("")}
  `;
}
