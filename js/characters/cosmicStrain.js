export function initcosmicStrain() {
  const container = document.getElementById("character-statblock");

  let strain = 0;

  document.addEventListener("showStrainTable", showStrainTable);

function showStrainTable() {

  // Static layout inside character statblock
  container.innerHTML = `
    <h2 class="table-title">Cosmic Strain</h2>

    <div class="strain-controls">
      <button id="decrease">–</button>
      <div id="strainNumber" class="strain-number">${strain}</div>
      <button id="increase">+</button>
    </div>

    <h3 class="table-title">Strain Capacity</h3>
    <p><strong>Formula:</strong> 4 + Proficiency Bonus + floor(Level / 4)</p>
    <table>
      <tr><th>Level</th><th>PB</th><th>Max Strain</th></tr>
      <tr><td>1–4</td><td>+2</td><td>6</td></tr>
      <tr><td>5–8</td><td>+3</td><td>8</td></tr>
      <tr><td>9–12</td><td>+4</td><td>10</td></tr>
      <tr><td>13–16</td><td>+5</td><td>12</td></tr>
      <tr><td>17–20</td><td>+6</td><td>14</td></tr>
    </table>

        <h3 class="table-title">How You Gain Strain</h3>
    <table>
      <tr><th>Action</th><th>SP Gained</th><th>Notes</th></tr>
      <tr><td>Cast leveled spell (1st+)</td><td>+1</td><td>Each spell individually</td></tr>
      <tr><td>Cast spell using Metamagic</td><td>+1</td><td>On top of base spell SP</td></tr>
      <tr><td>Use Warlock Invocation / special feature</td><td>+1</td><td>Only if it amplifies magic</td></tr>
      <tr><td>Fail Concentration check</td><td>+1</td><td>For spells 2nd level or higher</td></tr>
      <tr><td>Take psychic/necrotic/cosmic damage</td><td>+1</td><td>Per source, DM discretion</td></tr>
      <tr><td>Roleplay / succumb to alien visions</td><td>+1</td><td>DM judgment</td></tr>
    </table>

    <h3 class="table-title">How You Reduce Strain</h3>
    <table>
      <tr><th>Method</th><th>SP Reduced</th><th>Notes</th></tr>
      <tr><td>Short Rest</td><td>Halve SP (round down)</td><td>Meditation or minor ritual</td></tr>
      <tr><td>Long Rest</td><td>Reset SP to 0</td><td>Full recovery of mind and body</td></tr>
      <tr><td>Ritual / Offering</td><td>-1 to -3</td><td>DM discretion, roleplay encouraged</td></tr>
      <tr><td>Special Abilities</td><td>Varies</td><td>Some class/subclass features may reduce SP automatically</td></tr>
      <tr><td>After a strain effect</td><td>Varies</td><td>Reduce by strain tier level</td></tr>
    </table>

    <h4>Tier & DC Reference (Dynamic guidance)</h4>
<p>Use this to determine tier & DC based on current SP:</p>
<table class="strain-table">
<tr><th>Current SP</th><th>Tier</th><th>DC</th><th>Notes</th></tr>
<tr><td>0</td><td>Stable</td><td>—</td><td>No effect</td></tr>
<tr><td>1–2</td><td>Flicker (I)</td><td>11–12</td><td>Chance for minor positive effect if DM rolls</td></tr>
<tr><td>3–5</td><td>Contortion (II)</td><td>16–20</td><td>Random minor negative or positive effects possible</td></tr>
<tr><td>6–8</td><td>Rupture (III)</td><td>28–31</td><td>High risk; optional player “roll effect” encouraged</td></tr>
<tr><td>9+</td><td>Overload (IV)</td><td>42–56</td><td>Severe effect; DM may allow minor beneficial outcomes at discretion</td></tr>
</table>

<h4>Guidance for “Roll Effect” (Optional)</h4>
<ul>
  <li>Players may roll a d20 when SP increases to trigger minor random effects.</li>
  <li>1–5: Minor negative effect (additional SP, small mishap).</li>
  <li>6–15: No effect.</li>
  <li>16–20: Minor positive effect (reduce SP by 1, or minor beneficial event).</li>
</ul>

<h4>Recovery & Interaction Notes</h4>
<ul>
  <li>Short and Long rests remain primary recovery methods.</li>
  <li>Rituals and offerings allow flexibility — can be roleplayed for narrative benefits or random positive effects.</li>
  <li>DM may allow SP reduction after certain strain events based on tier or player choice.</li>
</ul>

      <h4>Level 1–4 (Max SP = 6)</h4>
      <table class="strain-table">
        <tr><th>Current SP</th><th>Tier</th><th>DC</th></tr>
        <tr><td>0</td><td>Stable</td><td>—</td></tr>
        <tr><td>1</td><td>Flicker (I)</td><td>11</td></tr>
        <tr><td>2</td><td>Flicker (I)</td><td>12</td></tr>
        <tr><td>3</td><td>Contortion (II)</td><td>16</td></tr>
        <tr><td>4</td><td>Contortion (II)</td><td>18</td></tr>
        <tr><td>5</td><td>Contortion (II)</td><td>20</td></tr>
        <tr><td>6</td><td>Rupture (III)</td><td>28</td></tr>
      </table>

      <h4>Level 5–8 (Max SP = 8)</h4>
      <table class="strain-table">
        <tr><th>Current SP</th><th>Tier</th><th>DC</th></tr>
        <tr><td>0</td><td>Stable</td><td>—</td></tr>
        <tr><td>1</td><td>Flicker (I)</td><td>11</td></tr>
        <tr><td>2</td><td>Flicker (I)</td><td>12</td></tr>
        <tr><td>3</td><td>Contortion (II)</td><td>16</td></tr>
        <tr><td>4</td><td>Contortion (II)</td><td>18</td></tr>
        <tr><td>5</td><td>Contortion (II)</td><td>20</td></tr>
        <tr><td>6</td><td>Rupture (III)</td><td>28</td></tr>
        <tr><td>7</td><td>Rupture (III)</td><td>31</td></tr>
        <tr><td>8</td><td>Overload (IV)</td><td>42</td></tr>
      </table>

      <h4>Level 9–12 (Max SP = 10)</h4>
      <table class="strain-table">
        <tr><th>Current SP</th><th>Tier</th><th>DC</th></tr>
        <tr><td>0</td><td>Stable</td><td>—</td></tr>
        <tr><td>1–3</td><td>Flicker (I)</td><td>11–16</td></tr>
        <tr><td>4–6</td><td>Contortion (II)</td><td>18–28</td></tr>
        <tr><td>7–9</td><td>Rupture (III)</td><td>31–37</td></tr>
        <tr><td>10</td><td>Overload (IV)</td><td>50</td></tr>
      </table>

      <h4>Level 13–16 (Max SP = 12)</h4>
      <table class="strain-table">
        <tr><th>Current SP</th><th>Tier</th><th>DC</th></tr>
        <tr><td>0</td><td>Stable</td><td>—</td></tr>
        <tr><td>1–4</td><td>Flicker (I)</td><td>11–16</td></tr>
        <tr><td>5–8</td><td>Contortion (II)</td><td>18–28</td></tr>
        <tr><td>9–11</td><td>Rupture (III)</td><td>31–40</td></tr>
        <tr><td>12</td><td>Overload (IV)</td><td>52</td></tr>
      </table>

      <h4>Level 17–20 (Max SP = 14)</h4>
      <table class="strain-table">
        <tr><th>Current SP</th><th>Tier</th><th>DC</th></tr>
        <tr><td>0</td><td>Stable</td><td>—</td></tr>
        <tr><td>1–4</td><td>Flicker (I)</td><td>11–16</td></tr>
        <tr><td>5–9</td><td>Contortion (II)</td><td>18–32</td></tr>
        <tr><td>10–13</td><td>Rupture (III)</td><td>34–44</td></tr>
        <tr><td>14</td><td>Overload (IV)</td><td>56</td></tr>
      </table>

    <h4>Cosmic Strain Backlash – Level 1–4</h4>
<table class="strain-table">
<tr>
  <th>d20 Roll</th>
  <th>Tier I (Flicker)</th>
  <th>Tier II (Contortion)</th>
  <th>Tier III (Rupture)</th>
  <th>Tier IV (Overload)</th>
</tr>
<tr><td>1</td><td>Pebble floats 1 ft</td><td>1d2 psychic, pebble floats 2 ft</td><td>1d4 psychic, rock levitates 3 ft</td><td>1d6 psychic, teleport 5 ft, minor alien glow</td></tr>
<tr><td>2</td><td>Pebble rotates in air</td><td>1d2 psychic, small object levitates 2 ft</td><td>1d4 psychic, object floats 3 ft + flicker of light</td><td>1d6 psychic, teleport 5–10 ft, faint whisper</td></tr>
<tr><td>3</td><td>Whispers heard briefly</td><td>1d2 psychic, involuntary twitch</td><td>1d4 psychic, 1d4 ft forced movement</td><td>1d6 psychic, teleport 5 ft + visual distortion</td></tr>
<tr><td>4</td><td>Minor visual flicker</td><td>1d2 psychic, hand twitches</td><td>1d4 psychic, small rock rises 4 ft</td><td>1d6 psychic, teleport 5–10 ft + floating object</td></tr>
<tr><td>5</td><td>Hair/eye color briefly shifts</td><td>1d2 psychic, small cantrip misfires</td><td>1d4 psychic, small object levitates + flicker</td><td>1d6 psychic, teleport 5–10 ft, small alien appendage flickers</td></tr>
<tr><td>6</td><td>Faint hum in air</td><td>1d2 psychic, object rotates involuntarily</td><td>1d4 psychic, minor hallucination</td><td>1d6 psychic, teleport 5–10 ft, random cantrip on self</td></tr>
<tr><td>7</td><td>Pebble vibrates lightly</td><td>1d2 psychic, hand twitches involuntarily</td><td>1d4 psychic, object floats 4–5 ft</td><td>1d6 psychic, teleport 5–10 ft, tentacle flicker</td></tr>
<tr><td>8</td><td>Minor shimmer in air</td><td>1d2 psychic, involuntary movement 1 ft</td><td>1d4 psychic, object levitates 3–4 ft</td><td>1d6 psychic, teleport 5–10 ft, hallucination appears</td></tr>
<tr><td>9</td><td>Whispers in alien tongue</td><td>1d2 psychic, small object floats 2 ft</td><td>1d4 psychic, involuntary movement 2 ft</td><td>1d6 psychic, teleport 5–10 ft, visual distortion</td></tr>
<tr><td>10</td><td>Pebble or coin hovers briefly</td><td>1d2 psychic, object rotates in air</td><td>1d4 psychic, small rock levitates 3–4 ft</td><td>1d6 psychic, teleport 5–10 ft, minor portal appears</td></tr>
<tr><td>11</td><td>Hair shifts color briefly</td><td>1d2 psychic, object floats 3 ft</td><td>1d4 psychic, involuntary hand movement 1 ft</td><td>1d6 psychic, teleport 5–10 ft, faint tentacle flicker</td></tr>
<tr><td>12</td><td>Faint shimmer in vision</td><td>1d2 psychic, object rotates 2 ft</td><td>1d4 psychic, pebble levitates 5 ft</td><td>1d6 psychic, teleport 5–10 ft, minor hallucination</td></tr>
<tr><td>13</td><td>Whispers and hum</td><td>1d2 psychic, hand twitches 1 ft</td><td>1d4 psychic, small rock levitates 4 ft</td><td>1d6 psychic, teleport 5–10 ft, floating alien glyph appears</td></tr>
<tr><td>14</td><td>Minor tremor in air</td><td>1d2 psychic, object spins</td><td>1d4 psychic, involuntary movement 2–3 ft</td><td>1d6 psychic, teleport 5–10 ft, minor portal flicker</td></tr>
<tr><td>15</td><td>Pebble shakes lightly</td><td>1d2 psychic, object levitates 3 ft</td><td>1d4 psychic, small rock rises 5 ft</td><td>1d6 psychic, teleport 5–10 ft, tentacle flicker + glow</td></tr>
<tr><td>16</td><td>Gain temporary clarity: +1 to next skill check</td><td>1d2 psychic, minor insight bonus to allies</td><td>Small object glows, granting advantage on next roll</td><td>Teleport 5–10 ft safely, minor protective aura appears</td></tr>
<tr><td>17</td><td>Extra focus: +2 initiative next turn</td><td>1d2 psychic, minor bonus to defense</td><td>Levitate object to aid ally, +1 AC for 1 round</td><td>Teleport 5–10 ft, small beneficial effect triggers</td></tr>
<tr><td>18</td><td>Calming hum surrounds you, advantage on saving throw</td><td>1d2 psychic, minor healing (1 HP)</td><td>Small rock forms protective barrier (+1 AC)</td><td>Teleport safely, ally gains temporary shield</td></tr>
<tr><td>19</td><td>Whispers inspire courage, +1 to next attack</td><td>1d2 psychic, minor buff to skill check</td><td>Object floats, creating safe stepping stone</td><td>Teleport + minor beneficial effect on self or ally</td></tr>
<tr><td>20</td><td>Pebble vibrates, restoring 1 SP or 1 HP</td><td>1d2 psychic, minor healing for party</td><td>Levitate rock to shield or aid ally</td><td>Teleport 5–10 ft, full visual clarity + temporary bonus</td></tr>
</table>


<h4>Cosmic Strain Backlash – Level 5–8</h4>
<table class="strain-table">
<tr>
  <th>d20 Roll</th>
  <th>Tier I (Flicker)</th>
  <th>Tier II (Contortion)</th>
  <th>Tier III (Rupture)</th>
  <th>Tier IV (Overload)</th>
</tr>
<tr><td>1</td><td>Small pebble floats 2 ft</td><td>1d4 psychic, small rock levitates 3 ft</td><td>1d6 psychic, rock levitates 4 ft</td><td>2d6 psychic, teleport 10 ft, minor alien glow</td></tr>
<tr><td>2</td><td>Whispers and flicker of light</td><td>1d4 psychic, small object rotates 3 ft</td><td>1d6 psychic, minor hallucination + object floats 5 ft</td><td>2d6 psychic, teleport 10–15 ft, random cantrip cast</td></tr>
<tr><td>3</td><td>Minor tremor in environment</td><td>1d4 psychic, hand twitches</td><td>1d6 psychic, object levitates 5 ft + visual distortion</td><td>2d6 psychic, teleport 10–20 ft, minor portal</td></tr>
<tr><td>4</td><td>Faint alien whisper</td><td>1d4 psychic, object floats involuntarily</td><td>1d6 psychic, partial spell misfire</td><td>2d6 psychic, teleport 10–20 ft, small tentacle flickers</td></tr>
<tr><td>5</td><td>Hair/eye color shifts briefly</td><td>1d4 psychic, small object levitates 2–3 ft</td><td>1d6 psychic, involuntary movement 2–3 ft</td><td>2d6 psychic, teleport 10–20 ft, minor hallucination + glow</td></tr>
<tr><td>6</td><td>Faint hum in air</td><td>1d4 psychic, object rotates 2–4 ft</td><td>1d6 psychic, small rock levitates 4–5 ft</td><td>2d6 psychic, teleport 10–20 ft, random cantrip, floating object</td></tr>
<tr><td>7</td><td>Pebble vibrates lightly</td><td>1d4 psychic, hand twitches 1–2 ft</td><td>1d6 psychic, object floats 4–5 ft</td><td>2d6 psychic, teleport 10–15 ft, tentacle flicker</td></tr>
<tr><td>8</td><td>Minor shimmer in air</td><td>1d4 psychic, involuntary movement 1–2 ft</td><td>1d6 psychic, object levitates 4–5 ft</td><td>2d6 psychic, teleport 10–20 ft, hallucination appears</td></tr>
<tr><td>9</td><td>Whispers in alien tongue</td><td>1d4 psychic, small object floats 3 ft</td><td>1d6 psychic, involuntary movement 2–3 ft</td><td>2d6 psychic, teleport 10–20 ft, visual distortion</td></tr>
<tr><td>10</td><td>Pebble or coin hovers briefly</td><td>1d4 psychic, object rotates in air</td><td>1d6 psychic, small rock levitates 4–5 ft</td><td>2d6 psychic, teleport 10–15 ft, minor portal appears</td></tr>
<tr><td>11</td><td>Hair shifts color briefly</td><td>1d4 psychic, object floats 3–4 ft</td><td>1d6 psychic, involuntary hand movement 1–2 ft</td><td>2d6 psychic, teleport 10–20 ft, faint tentacle flicker</td></tr>
<tr><td>12</td><td>Faint shimmer in vision</td><td>1d4 psychic, object rotates 2–4 ft</td><td>1d6 psychic, small rock levitates 4–6 ft</td><td>2d6 psychic, teleport 10–20 ft, minor hallucination</td></tr>
<tr><td>13</td><td>Whispers and hum</td><td>1d4 psychic, hand twitches 1–2 ft</td><td>1d6 psychic, small rock levitates 4–5 ft</td><td>2d6 psychic, teleport 10–20 ft, floating alien glyph</td></tr>
<tr><td>14</td><td>Minor tremor in air</td><td>1d4 psychic, object spins 2–3 ft</td><td>1d6 psychic, involuntary movement 2–3 ft</td><td>2d6 psychic, teleport 10–20 ft, minor portal flicker</td></tr>
<tr><td>15</td><td>Pebble shakes lightly</td><td>1d4 psychic, object levitates 3–4 ft</td><td>1d6 psychic, small rock rises 5 ft</td><td>2d6 psychic, teleport 10–20 ft, tentacle flicker + glow</td></tr>
<tr><td>16</td><td>Temporary insight: +2 to next check</td><td>1d4 psychic, small shield appears (+1 AC)</td><td>Object levitates to block attack</td><td>Teleport 10–20 ft, ally gains minor boost</td></tr>
<tr><td>17</td><td>Calm aura: advantage on next save</td><td>1d4 psychic, 1d4 healing to self or ally</td><td>Floating object grants +1 to ally roll</td><td>Teleport + temporary protective effect</td></tr>
<tr><td>18</td><td>Whispering guidance, +1 to attack or skill</td><td>1d4 psychic, minor buff to allies</td><td>Object glows, bonus on next roll</td><td>Teleport safely + minor positive visual effect</td></tr>
<tr><td>19</td><td>Pebble floats with protective aura (+1 AC)</td><td>1d4 psychic, heal 1–2 HP</td><td>Levitate small object for cover</td><td>Teleport 10–20 ft, minor boon to party</td></tr>
<tr><td>20</td><td>Full clarity: advantage on next roll</td><td>1d4 psychic, small healing for party</td><td>Object shields ally temporarily</td><td>Teleport 10–20 ft, major beneficial effect triggers</td></tr>
</table>

<h4>Cosmic Strain Backlash – Level 9–12</h4>
<table class="strain-table">
<tr>
  <th>d20 Roll</th>
  <th>Tier I (Flicker)</th>
  <th>Tier II (Contortion)</th>
  <th>Tier III (Rupture)</th>
  <th>Tier IV (Overload)</th>
</tr>
<tr><td>1</td><td>Small rock floats 3 ft</td><td>1d6 psychic, boulder levitates 4 ft</td><td>1d8 psychic, boulder rises 6 ft + flicker</td><td>3d6 psychic, teleport 15 ft, minor alien appendage appears</td></tr>
<tr><td>2</td><td>Whispers + flicker of light</td><td>1d6 psychic, small object spins 4 ft</td><td>1d8 psychic, object levitates 5–6 ft</td><td>3d6 psychic, teleport 15–20 ft, random cantrip</td></tr>
<tr><td>3</td><td>Minor tremor in air</td><td>1d6 psychic, involuntary hand twitch 1–2 ft</td><td>1d8 psychic, small boulder floats 6 ft</td><td>3d6 psychic, teleport 15–25 ft, hallucination appears</td></tr>
<tr><td>4</td><td>Faint alien whisper</td><td>1d6 psychic, small object levitates 3–4 ft</td><td>1d8 psychic, involuntary movement 3 ft</td><td>3d6 psychic, teleport 15–25 ft, portal flicker</td></tr>
<tr><td>5</td><td>Hair/eye color shifts</td><td>1d6 psychic, small object spins 3–5 ft</td><td>1d8 psychic, object rises 4–6 ft</td><td>3d6 psychic, teleport 15–25 ft, tentacle flicker + glow</td></tr>
<tr><td>6</td><td>Faint hum</td><td>1d6 psychic, object rotates 3–4 ft</td><td>1d8 psychic, small boulder levitates 5–7 ft</td><td>3d6 psychic, teleport 15–25 ft, floating glyph + hallucination</td></tr>
<tr><td>7</td><td>Pebble shakes lightly</td><td>1d6 psychic, hand twitches 1–3 ft</td><td>1d8 psychic, object floats 5–6 ft</td><td>3d6 psychic, teleport 15–25 ft, tentacle flicker + whispers</td></tr>
<tr><td>8</td><td>Minor shimmer in air</td><td>1d6 psychic, involuntary movement 2–3 ft</td><td>1d8 psychic, object levitates 5–7 ft</td><td>3d6 psychic, teleport 15–25 ft, hallucination + floating object</td></tr>
<tr><td>9</td><td>Whispers in alien tongue</td><td>1d6 psychic, small object floats 4 ft</td><td>1d8 psychic, involuntary movement 3–4 ft</td><td>3d6 psychic, teleport 15–25 ft, visual distortion + minor portal</td></tr>
<tr><td>10</td><td>Small pebble hovers</td><td>1d6 psychic, object rotates 3–5 ft</td><td>1d8 psychic, small boulder levitates 5–6 ft</td><td>3d6 psychic, teleport 15–25 ft, minor portal appears</td></tr>
<tr><td>11</td><td>Hair flicker</td><td>1d6 psychic, object floats 4–5 ft</td><td>1d8 psychic, involuntary hand movement 2–3 ft</td><td>3d6 psychic, teleport 15–25 ft, tentacle flicker + glow</td></tr>
<tr><td>12</td><td>Faint shimmer</td><td>1d6 psychic, object rotates 3–5 ft</td><td>1d8 psychic, small boulder levitates 6–7 ft</td><td>3d6 psychic, teleport 15–25 ft, minor hallucination + floating object</td></tr>
<tr><td>13</td><td>Whispers and hum</td><td>1d6 psychic, hand twitches 1–3 ft</td><td>1d8 psychic, small rock levitates 6 ft</td><td>3d6 psychic, teleport 15–25 ft, floating alien glyph</td></tr>
<tr><td>14</td><td>Minor tremor</td><td>1d6 psychic, object spins 2–4 ft</td><td>1d8 psychic, involuntary movement 3–4 ft</td><td>3d6 psychic, teleport 15–25 ft, minor portal flicker</td></tr>
<tr><td>15</td><td>Pebble shakes</td><td>1d6 psychic, object levitates 4–5 ft</td><td>1d8 psychic, small rock rises 6–7 ft</td><td>3d6 psychic, teleport 15–25 ft, tentacle flicker + glow</td></tr>
<tr><td>16</td><td>Temporary focus: +2 to next roll</td><td>1d6 psychic, minor shield for ally</td><td>Levitate object to aid party</td><td>Teleport 15–25 ft, temporary protective aura</td></tr>
<tr><td>17</td><td>Calm energy, advantage on next saving throw</td><td>1d6 psychic, minor healing 2 HP</td><td>Object glows, grants +1 to attack roll</td><td>Teleport safely, minor boon for allies</td></tr>
<tr><td>18</td><td>Whispers of insight, +1 to next attack</td><td>1d6 psychic, small healing to party</td><td>Floating object provides cover or aid</td><td>Teleport 15–25 ft, visual clarity + bonus</td></tr>
<tr><td>19</td><td>Pebble floats, +1 AC for self or ally</td><td>1d6 psychic, minor buff on next skill</td><td>Object shields ally briefly</td><td>Teleport safely, minor positive effect triggers</td></tr>
<tr><td>20</td><td>Full focus: advantage on next 2 rolls</td><td>1d6 psychic, restore 2 SP or 2 HP</td><td>Levitate object for major protection</td><td>Teleport 15–25 ft, temporary powerful boon appears</td></tr>
</table>

<h4>Cosmic Strain Backlash – Level 13–16</h4>
<table class="strain-table">
<tr>
  <th>d20 Roll</th>
  <th>Tier I (Flicker)</th>
  <th>Tier II (Contortion)</th>
  <th>Tier III (Rupture)</th>
  <th>Tier IV (Overload)</th>
</tr>
<tr><td>1</td><td>Small boulder floats 4 ft</td><td>2d6 psychic, boulder levitates 6 ft</td><td>3d6 psychic, rock levitates 8 ft + flicker</td><td>4d6 psychic, teleport 20 ft, minor tentacle appears</td></tr>
<tr><td>2</td><td>Whispers + flicker of light</td><td>2d6 psychic, object spins 5 ft</td><td>3d6 psychic, object levitates 7–8 ft</td><td>4d6 psychic, teleport 20–30 ft, random cantrip</td></tr>
<tr><td>3</td><td>Minor tremor in air</td><td>2d6 psychic, involuntary hand twitch 2–3 ft</td><td>3d6 psychic, small boulder floats 8 ft</td><td>4d6 psychic, teleport 20–30 ft, hallucination appears</td></tr>
<tr><td>4</td><td>Faint alien whisper</td><td>2d6 psychic, object levitates 4–5 ft</td><td>3d6 psychic, involuntary movement 4–5 ft</td><td>4d6 psychic, teleport 20–30 ft, portal flicker</td></tr>
<tr><td>5</td><td>Hair/eye color shifts</td><td>2d6 psychic, object spins 4–6 ft</td><td>3d6 psychic, object rises 6–8 ft</td><td>4d6 psychic, teleport 20–30 ft, tentacle flicker + glow</td></tr>
<tr><td>6</td><td>Faint hum</td><td>2d6 psychic, object rotates 4–6 ft</td><td>3d6 psychic, boulder levitates 7–9 ft</td><td>4d6 psychic, teleport 20–30 ft, floating glyph + hallucination</td></tr>
<tr><td>7</td><td>Pebble shakes lightly</td><td>2d6 psychic, hand twitches 2–3 ft</td><td>3d6 psychic, object floats 6–8 ft</td><td>4d6 psychic, teleport 20–30 ft, tentacle flicker + whispers</td></tr>
<tr><td>8</td><td>Minor shimmer in air</td><td>2d6 psychic, involuntary movement 3–4 ft</td><td>3d6 psychic, object levitates 7–8 ft</td><td>4d6 psychic, teleport 20–30 ft, hallucination + floating object</td></tr>
<tr><td>9</td><td>Whispers in alien tongue</td><td>2d6 psychic, small object floats 5 ft</td><td>3d6 psychic, involuntary movement 4–5 ft</td><td>4d6 psychic, teleport 20–30 ft, visual distortion + minor portal</td></tr>
<tr><td>10</td><td>Small pebble hovers</td><td>2d6 psychic, object rotates 4–6 ft</td><td>3d6 psychic, boulder levitates 7–8 ft</td><td>4d6 psychic, teleport 20–30 ft, minor portal appears</td></tr>
<tr><td>11</td><td>Hair flicker</td><td>2d6 psychic, object floats 5–6 ft</td><td>3d6 psychic, involuntary hand movement 3–4 ft</td><td>4d6 psychic, teleport 20–30 ft, tentacle flicker + glow</td></tr>
<tr><td>12</td><td>Faint shimmer</td><td>2d6 psychic, object rotates 4–6 ft</td><td>3d6 psychic, boulder levitates 8–9 ft</td><td>4d6 psychic, teleport 20–30 ft, minor hallucination + floating object</td></tr>
<tr><td>13</td><td>Whispers and hum</td><td>2d6 psychic, hand twitches 2–3 ft</td><td>3d6 psychic, boulder levitates 8 ft</td><td>4d6 psychic, teleport 20–30 ft, floating alien glyph</td></tr>
<tr><td>14</td><td>Minor tremor</td><td>2d6 psychic, object spins 3–5 ft</td><td>3d6 psychic, involuntary movement 4–5 ft</td><td>4d6 psychic, teleport 20–30 ft, minor portal flicker</td></tr>
<tr><td>15</td><td>Pebble shakes</td><td>2d6 psychic, object levitates 5–6 ft</td><td>3d6 psychic, boulder rises 8–9 ft</td><td>4d6 psychic, teleport 20–30 ft, tentacle flicker + glow</td></tr>
<tr><td>16</td><td>Insight surges, +2 to next attack or check</td><td>2d6 psychic, minor shield for ally</td><td>Levitate object to block or aid</td><td>Teleport 20–30 ft, minor protective aura appears</td></tr>
<tr><td>17</td><td>Calm energy: advantage on saving throw</td><td>2d6 psychic, heal 2–3 HP to self or ally</td><td>Floating object grants bonus to ally</td><td>Teleport 20–30 ft safely + minor positive effect</td></tr>
<tr><td>18</td><td>Whispering guidance, +1 to next skill</td><td>2d6 psychic, minor buff to party</td><td>Levitate object for cover or aid</td><td>Teleport 20–30 ft, minor visual boon</td></tr>
<tr><td>19</td><td>Pebble or rock levitates, +1 AC</td><td>2d6 psychic, small healing to party</td><td>Object shields ally temporarily</td><td>Teleport 20–30 ft, minor positive effect triggers</td></tr>
<tr><td>20</td><td>Full clarity: advantage on next 2–3 rolls</td><td>2d6 psychic, restore 3 SP or HP</td><td>Levitate object for major protection</td><td>Teleport 20–30 ft, temporary powerful boon appears</td></tr>
</table>


<h4>Cosmic Strain Backlash – Level 17–20</h4>
<table class="strain-table">
<tr>
  <th>d20 Roll</th>
  <th>Tier I (Flicker)</th>
  <th>Tier II (Contortion)</th>
  <th>Tier III (Rupture)</th>
  <th>Tier IV (Overload)</th>
</tr>
<tr><td>1</td><td>Boulder floats 5 ft</td><td>3d6 psychic, large boulder levitates 8 ft</td><td>4d6 psychic, huge rock levitates 12 ft</td><td>6d6 psychic, teleport 30 ft, large alien appendage emerges</td></tr>
<tr><td>2</td><td>Whispers + flicker</td><td>3d6 psychic, object spins 6–8 ft</td><td>4d6 psychic, boulder rises 10–12 ft</td><td>6d6 psychic, teleport 30–40 ft, random cantrip + minor portal</td></tr>
<tr><td>3</td><td>Minor tremor in air</td><td>3d6 psychic, involuntary hand twitch 3–4 ft</td><td>4d6 psychic, huge rock levitates 12 ft</td><td>6d6 psychic, teleport 30–40 ft, hallucination + floating boulder</td></tr>
<tr><td>4</td><td>Faint alien whisper</td><td>3d6 psychic, object levitates 5–6 ft</td><td>4d6 psychic, involuntary movement 6–8 ft</td><td>6d6 psychic, teleport 30–40 ft, portal flicker + glow</td></tr>
<tr><td>5</td><td>Hair/eye color shifts</td><td>3d6 psychic, object spins 6–7 ft</td><td>4d6 psychic, huge rock rises 10–12 ft</td><td>6d6 psychic, teleport 30–40 ft, tentacle flicker + hallucination</td></tr>
<tr><td>6</td><td>Faint hum</td><td>3d6 psychic, object rotates 5–7 ft</td><td>4d6 psychic, large rock levitates 10–12 ft</td><td>6d6 psychic, teleport 30–40 ft, floating glyph + tentacle</td></tr>
<tr><td>7</td><td>Pebble shakes lightly</td><td>3d6 psychic, hand twitches 3–4 ft</td><td>4d6 psychic, object floats 8–10 ft</td><td>6d6 psychic, teleport 30–40 ft, tentacle flicker + alien glow</td></tr>
<tr><td>8</td><td>Minor shimmer</td><td>3d6 psychic, involuntary movement 4–5 ft</td><td>4d6 psychic, object levitates 8–10 ft</td><td>6d6 psychic, teleport 30–40 ft, hallucination + floating object</td></tr>
<tr><td>9</td><td>Whispers in alien tongue</td><td>3d6 psychic, object floats 5–6 ft</td><td>4d6 psychic, involuntary movement 6–8 ft</td><td>6d6 psychic, teleport 30–40 ft, visual distortion + minor portal</td></tr>
<tr><td>10</td><td>Small pebble hovers</td><td>3d6 psychic, object rotates 5–6 ft</td><td>4d6 psychic, huge rock levitates 10–12 ft</td><td>6d6 psychic, teleport 30–40 ft, minor portal + hallucination</td></tr>
<tr><td>11</td><td>Hair flicker</td><td>3d6 psychic, object floats 6–7 ft</td><td>4d6 psychic, involuntary hand movement 4–5 ft</td><td>6d6 psychic, teleport 30–40 ft, tentacle flicker + glow</td></tr>
<tr><td>12</td><td>Faint shimmer</td><td>3d6 psychic, object rotates 5–6 ft</td><td>4d6 psychic, large boulder levitates 10–12 ft</td><td>6d6 psychic, teleport 30–40 ft, hallucination + floating object</td></tr>
<tr><td>13</td><td>Whispers + hum</td><td>3d6 psychic, hand twitches 3–4 ft</td><td>4d6 psychic, large boulder levitates 12 ft</td><td>6d6 psychic, teleport 30–40 ft, floating alien glyph</td></tr>
<tr><td>14</td><td>Minor tremor</td><td>3d6 psychic, object spins 4–6 ft</td><td>4d6 psychic, involuntary movement 6–8 ft</td><td>6d6 psychic, teleport 30–40 ft, minor portal flicker</td></tr>
<tr><td>15</td><td>Pebble shakes</td><td>3d6 psychic, object levitates 6–7 ft</td><td>4d6 psychic, huge rock rises 12–14 ft</td><td>6d6 psychic, teleport 30–40 ft, tentacle flicker + glow</td></tr>
<tr><td>16</td><td>Temporary insight: +2 to next attack or check</td><td>3d6 psychic, minor shield for ally</td><td>Levitate object to block attacks</td><td>Teleport 30–40 ft, protective aura appears</td></tr>
<tr><td>17</td><td>Calm energy: advantage on next saving throw</td><td>3d6 psychic, heal 3 HP to self or ally</td><td>Floating object grants +1 bonus to ally roll</td><td>Teleport safely, minor boon to party</td></tr>
<tr><td>18</td><td>Whispering guidance: +1 to next skill or attack</td><td>3d6 psychic, minor party buff</td><td>Levitate object for cover or aid</td><td>Teleport 30–40 ft, minor visual boon</td></tr>
<tr><td>19</td><td>Pebble/rock levitates, +1 AC to self or ally</td><td>3d6 psychic, small healing to party</td><td>Object shields ally briefly</td><td>Teleport 30–40 ft safely, minor positive effect</td></tr>
<tr><td>20</td><td>Full clarity: advantage on next 3 rolls</td><td>3d6 psychic, restore 4 SP or HP</td><td>Levitate object for major protection</td><td>Teleport 30–40 ft, temporary powerful boon triggers</td></tr>
</table>

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
}
}
