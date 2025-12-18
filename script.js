let allMonsters = [];

fetch("monsters.json")
  .then(res => res.json())
  .then(monsters => {
    // Sort alphabetically by name
    allMonsters = monsters.sort((a, b) =>
      a.name.localeCompare(b.name)
    );

    buildMonsterList(allMonsters);     // optional: your list menu
    buildMonsterDropdown(allMonsters); // ✅ dropdown

    if (allMonsters.length > 0) {
      renderMonster(allMonsters[0]);
      document.getElementById("monsterSelect").value = 0;
    }

    // Search filter (still works)
    const searchInput = document.getElementById("monsterSearch");
    if (searchInput) {
      searchInput.addEventListener("input", e => {
        const query = e.target.value.toLowerCase();
        const filtered = allMonsters.filter(m =>
          m.name.toLowerCase().includes(query)
        );
        buildMonsterList(filtered);
      });
    }
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
