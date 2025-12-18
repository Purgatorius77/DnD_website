let allMonsters = [];

fetch("monsters.json")
  .then(res => res.json())
  .then(monsters => {
    allMonsters = monsters;

    buildMonsterList(monsters);

    if (monsters.length > 0) {
      renderMonster(monsters[0]);
    }

    // Attach search AFTER data + DOM exist
    const searchInput = document.getElementById("monsterSearch");
    searchInput.addEventListener("input", e => {
      const query = e.target.value.toLowerCase();

      const filtered = allMonsters.filter(m =>
        m.name.toLowerCase().includes(query)
      );

      buildMonsterList(filtered);
    });
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

function abilityMod(score) {
  return Math.floor((score - 10) / 2);
}

function formatAbility(score) {
  const mod = abilityMod(score);
  return `${score} (${mod >= 0 ? "+" :
