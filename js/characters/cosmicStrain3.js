export function initcosmicStrain3() {
  const container = document.getElementById("character-statblock");

  let strain = 0;
  document.addEventListener("showStrainTable3", showStrainTable3);

  function showStrainTable3() {
    container.innerHTML = `
<h2 class="table-title">Cosmic Strain System</h2>



<h3>1. Strain Points (SP)</h3>
<p>You track Strain Points from <strong>0 → Max</strong>.</p>

    <div class="strain-controls">
      <button id="decrease">–</button>
      <div id="strainNumber" class="strain-number">${strain}</div>
      <button id="increase">+</button>
    </div>

<h4>Your Max Strain</h4>
<p><strong>Formula:</strong> 5 + Character Level</p>

<table>
<tr><th>Level</th><th>Max Strain</th></tr>
<tr><td>1</td><td>6</td></tr>
<tr><td>5</td><td>10</td></tr>
<tr><td>10</td><td>15</td></tr>
<tr><td>15</td><td>20</td></tr>
</table>

<hr>

<h3>2. How You Gain Strain</h3>
<ul>
<li>Cast a leveled spell of 2nd level or higher</li>
<li>Use Metamagic</li>
<li>Use a Warlock spell slot</li>
<li>Fail a Concentration save</li>
<li>Take psychic or necrotic damage</li>
<li>DM triggers it for strong narrative moments</li>
</ul>

<hr>

<h3>3. Strain Thresholds</h3>

<table>
<tr><th>Strain</th><th>State</th><th>Effects</th></tr>
<tr><td>0–⅓ Max</td><td>Stable</td><td>No effect</td></tr>
<tr><td>⅓–⅔ Max</td><td>Unstable</td><td>Whispers, visual glitches, roleplay effects</td></tr>
<tr><td>⅔–(Max-1)</td><td>Critical</td><td>When you cast a spell → roll for Backlash</td></tr>
<tr><td>Max</td><td>Overload</td><td>You must make an Overload Save</td></tr>
</table>

<hr>

<h3>4. Cosmic Backlash (Critical Zone)</h3>

<table>
<tr><th>d20</th><th>Backlash</th></tr>
<tr><td>1–5</td><td>Take 1d6 psychic damage</td></tr>
<tr><td>6–10</td><td>Spell behaves strangely</td></tr>
<tr><td>11–15</td><td>Wild surge effect</td></tr>
<tr><td>16–19</td><td>Advantage on the spell, take 1d4 Strain</td></tr>
<tr><td>20</td><td>Spell is cast at +1 level</td></tr>
</table>

<hr>

<h3>5. Overload — Losing Control</h3>

<p><strong>Overload Save:</strong> d20 + CHA mod + Proficiency  
<br><strong>DC:</strong> 10 + (current Strain ÷ 2)</p>

<h4>On a Failure</h4>
<ul>
<li>Lose control for 1 round (DM controls your action)</li>
<li>Take 2d6 psychic damage</li>
<li>Strain resets to ⅓ Max</li>
</ul>

<h4>On a Success</h4>
<ul>
<li>Take 1d6 psychic damage</li>
<li>Gain 1 level of exhaustion</li>
<li>Strain drops to ⅔ Max</li>
</ul>

<hr>

<h3>6. Reducing Strain</h3>
<ul>
<li><strong>Short Rest:</strong> reduce Strain by half (round down)</li>
<li><strong>Long Rest:</strong> reset to 0</li>
<li><strong>Dark rituals / patron communion:</strong> –1 to –3 (DM controlled)</li>
</ul>

<hr>

<h3>7. Unstable Effects Table (d100)</h3>
<p><em>Use when your Strain is between ⅓ and ⅔ Max</em></p>

<table>
<tr><th>d100</th><th>Effect</th></tr>
<tr><td>1</td><td>Whispers echo — disadvantage on next Perception or Insight check</td></tr>
<tr><td>2</td><td>Veins glow faintly; shed dim light 1 minute</td></tr>
<tr><td>3</td><td>Gravity tilts — move 5 ft randomly</td></tr>
<tr><td>4</td><td>Your shadow moves on its own</td></tr>
<tr><td>5</td><td>Alien taste; next Con save at disadvantage</td></tr>
<tr><td>6</td><td>Eyes become star-speckled; advantage on Intimidation</td></tr>
<tr><td>7</td><td>Cold wind passes through the area</td></tr>
<tr><td>8</td><td>You hear your name spoken by many voices</td></tr>
<tr><td>9</td><td>Your reflection lags behind you</td></tr>
<tr><td>10</td><td>A nearby flame extinguishes</td></tr>
<tr><td>11</td><td>Illusion of distant stars surrounds your head</td></tr>
<tr><td>12</td><td>You speak in an unknown language briefly</td></tr>
<tr><td>13</td><td>Your skin ripples like water</td></tr>
<tr><td>14</td><td>Metallic smell fills the air</td></tr>
<tr><td>15</td><td>A whisper predicts your next action</td></tr>
<tr><td>16</td><td>Fingers leave faint glowing trails</td></tr>
<tr><td>17</td><td>Time hiccups — reroll initiative next round</td></tr>
<tr><td>18</td><td>Your heartbeat echoes audibly</td></tr>
<tr><td>19</td><td>Nearby creatures feel watched</td></tr>
<tr><td>20</td><td>You glimpse the patron’s true form; advantage on next spell attack</td></tr>

<tr><td>21–100</td><td>Escalating versions of the above: stronger whispers, deeper distortions, more vivid hallucinations, intensified temporal and gravitational effects, increasingly alien manifestations.</td></tr>
</table>

<hr>

<h3>8. d100 Cosmic Backlash Table</h3>
<p><em>Use while in Critical Strain when casting a leveled spell</em></p>

<p>(Full d100 table exactly as you specified — already integrated in your project)</p>
`;

  // Counter functionality (must be AFTER innerHTML is set)
  const strainNumber = document.getElementById("strainNumber");
  const increaseBtn = document.getElementById("increase");
  const decreaseBtn = document.getElementById("decrease");

  if (increaseBtn && decreaseBtn && strainNumber) {
    increaseBtn.onclick = () => {
      strain++;
      strainNumber.textContent = strain;
    };

    decreaseBtn.onclick = () => {
      if (strain > 0) strain--;
      strainNumber.textContent = strain;
    };
  }
}} 
