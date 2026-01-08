// cosmicStrain2.js
export function initcosmicStrain2(containerId = "character-statblock") {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Cosmic Strain container "${containerId}" not found.`);
    return;
  }

  let strain = 0;
  let level = 1;

  document.addEventListener("showStrainTable2", showStrainTable2);

  function showStrainTable2() {

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
        <tr><td>0–2</td><td>Minor cosmic hum</td></tr>
        <tr><td>3–5</td><td>Cosmic shimmer</td></tr>
        <tr><td>6–8</td><td>Surge of power</td></tr>
        <tr><td>9+</td><td>Overload</td></tr>
      </table>

      <h3>Chaos Table (Lose Control)</h3>
      <table class="strain-table">
        <tr><th>d20 Roll</th><th>Effect</th></tr>
        <tr><td>1–5</td><td>Minor mishap</td></tr>
        <tr><td>6–15</td><td>Neutral</td></tr>
        <tr><td>16–20</td><td>Minor boon</td></tr>
      </table>

      <button id="rollChaos">Roll Chaos Effect</button>
      <div id="chaosResult" style="margin-top:8px; font-weight:bold;"></div>
    `;

    // 🌟 Bind elements AFTER HTML exists
    const strainNumber = document.getElementById("strainNumber");
    const charLevelInput = document.getElementById("charLevel");
    const chaosResult = document.getElementById("chaosResult");

    const increaseBtn = document.getElementById("increase");
    const decreaseBtn = document.getElementById("decrease");
    const rollChaosBtn = document.getElementById("rollChaos");

    increaseBtn.onclick = () => {
      strain++;
      strainNumber.textContent = strain;
    };

    decreaseBtn.onclick = () => {
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

    rollChaosBtn.onclick = () => {
      const roll = Math.floor(Math.random() * 20) + 1;
      let effect = "";

      if (roll <= 5) {
        effect = "Minor mishap: lose 1 strain";
        if (strain > 0) strain--;
        strainNumber.textContent = strain;
      } else if (roll <= 15) {
        effect = "Neutral: strange cosmic phenomenon";
      } else {
        effect = `Minor boon: gain ${level} temporary healing`;
      }

      chaosResult.textContent = `Roll: ${roll} → ${effect}`;
    };
  }
}
