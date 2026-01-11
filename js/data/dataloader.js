// dataloader.js

export async function loadAllData() {
  const [monsters, monsterFluff, spells] = await Promise.all([
    fetch("data/monsters.json").then(r => r.json()),
    fetch("data/monsters_fluff.json").then(r => r.json()),
    fetch("data/spells.json").then(r => r.json()),
  ]);

  monsters.sort((a, b) => a.name.localeCompare(b.name));

  return { monsters, monsterFluff, spells };
}

/* ================== ADD THIS ================== */

export async function loadJSON(path) {
  const response = await fetch(path);
  if (!response.ok) throw new Error(`Failed to load ${path}`);
  return response.json();
}
