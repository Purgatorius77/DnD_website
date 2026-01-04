// cosmicStrain2.js
export function initcosmicStrain2(containerId = "character-statblock") {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Cosmic Strain container "${containerId}" not found.`);
    return;
  }

  let strain = 0;
  let level = 1; // default character level; you can update dynamically

  // HTML layout
  container.innerHTML = `
    <h2 class="table-title">Cosmic Strain (v2)</h2>

    <div class="strain-controls">
      <button id="decrease">–</button>
      <div id="strainNumber" class="strain-number">${strain}</div>
      <button id="increase">+</button>
    </div>

    <label>Character Level:
      <input type="number" id="charLevel" value="${level}" min="1" max="20" style="width:50px">
    </label>

    <h3>Power Table (Build Up)</h3>
    <table class="strain-table">
      <tr><th>Current Strain</th><th>Effect</th></tr>
      <tr><td>0–2</td><td>Minor cosmic hum: +1 minor roll, subtle visual flair</td></tr>
      <tr><td>3–5</td><td>Cosmic shimmer: +1d4 damage on spell/attack or minor skill bonus</td></tr>
      <tr><td>6–8</td><td>Surge of power: +1d6 damage, small object floats, whispers heard</td></tr>
      <tr><td>9+</td><td>Overload: +1d8 damage, risk of backlash (roll Chaos Table)</td></tr>
    </table>

    <h3>Chaos Table (Lose Control)</h3>
    <table class="strain-table">
      <tr><th>d20 Roll</th><th>Effect</th></tr>
      <tr><td>1–5</td><td>Minor mishap: lose 1 strain, small object misbehaves</td></tr>
      <tr><td>6–15</td><td>Neutral: odd visual/auditory effect, no mechanical impact</td></tr>
      <tr><td>16–20</td><td>Minor boon: gain temporary bonus or small healing, reduce 1 strain</td></tr>
    </table>

    <button id="rollChaos">Roll Chaos Effect</button>
    <div id="chaosResult" style="margin-top:8px; font-weight:bold;"></div>
  `;

  const strainNumber = document.getElementById("strainNumber");
  const charLevelInput = document.getElementById("charLevel");
  const chaosResult = document.getElementById("chaosResult");

  // Buttons
  document.getElementById("increase").onclick = () => {
    strain++;
    strainNumber.textContent = strain;
  };

  document.getElementById("decrease").onclick = () => {
    if (strain > 0) strain--;
    strainNumber.textContent = strain;
  };

  charLevelInput.onchange = () => {
    let val = parseInt(charLevelInput.value);
    if (!isNaN(val) && val >= 1 && val <= 20) {
      level = val;
    } else {
      charLevelInput.value = level;
    }
  };

  document.getElementById("rollChaos").onclick = () => {
    const roll = Math.floor(Math.random() * 20) + 1;
    let effect = "";

    if (roll <= 5) {
      effect = "Minor mishap: lose 1 strain, small object misbehaves";
      if (strain > 0) strain--;
      strainNumber.textContent = strain;
    } else if (roll <= 15) {
      effect = "Neutral: odd visual/auditory effect, no mechanical impact";
    } else {
      effect = `Minor boon: gain +1 temporary bonus or small healing (${level} points)`;
      // Optional: integrate level scaling
    }

    chaosResult.textContent = `Roll: ${roll} → ${effect}`;
  };
}
