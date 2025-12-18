fetch("monsters.json")
  .then(response => response.json())
  .then(monsters => {
    const monster = monsters[0]; // show first monster

    const container = document.getElementById("monster");

    container.innerHTML = `
      <h2>${monster.name}</h2>
      <p><strong>AC:</strong> ${monster.ac}</p>
      <p><strong>HP:</strong> ${monster.hp.average} (${monster.hp.formula})</p>
      <p><strong>CR:</strong> ${monster.cr}</p>

      <h3>Abilities</h3>
      <ul>
        <li>STR: ${monster.abilities.str}</li>
        <li>DEX: ${monster.abilities.dex}</li>
        <li>CON: ${monster.abilities.con}</li>
        <li>INT: ${monster.abilities.int}</li>
        <li>WIS: ${monster.abilities.wis}</li>
        <li>CHA: ${monster.abilities.cha}</li>
      </ul>
    `;
  })
  .catch(error => {
    console.error("Error loading monsters:", error);
  });
