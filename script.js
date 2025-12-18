fetch("monsters.json")
  .then(res => res.json())
  .then(monsters => {
    // Show Goblin by default
    renderMonster(monsters[0]);

    // Add button handlers (make sure buttons exist in HTML)
    const goblinBtn = document.getElementById("showGoblin");
    const skeletonBtn = document.getElementById("showSkeleton");

    goblinBtn.onclick = () => renderMonster(monsters[0]);
    skeletonBtn.onclick = () => renderMonster(monsters[1]);
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
      <p><strong>Hit Points</strong> ${m.hp.average
