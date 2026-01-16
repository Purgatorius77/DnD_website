// cosmicStrain2.js
export function initFracture(containerId = "character-statblock") {
  const container = document.getElementById(containerId);
  if (!container) {
    console.error(`Character container "${containerId}" not found.`);
    return;
  }

  document.addEventListener("showFracture", showCharacterPage);

  function showCharacterPage() {
    container.innerHTML = `
      <h2 class="table-title">The Fracture-Bearer</h2>

      <!-- ================= BACKGROUND ================= -->
      <section class="character-section">
        <h3>Background: The Fracture-Bearer (Extended)</h3>

        <p>
          I was born beneath Australis, in a Drow city that did not value children—only potential.
          When my aptitude for magic manifested, I was taken from my House and delivered to the
          Matriarch-Sorceress [DM Name], whose power shaped the city’s destiny.
        </p>

        <p><strong>I was not her student.<br>I was her instrument.</strong></p>

        <p>
          Through rites and sigils carved into my flesh and mind, she used me as a conduit—a living
          channel through which she could draw power beyond her natural limits. Each ritual hollowed
          me further, leaving something thin and unfinished where my will should have been.
        </p>

        <p>I survived only because I was never meant to.</p>

        <p>
          During my captivity, I discovered her private tome: a work older than Drow civilization,
          bound in unfamiliar script and impossible geometry. I believed it to be a source of her power.
          I was wrong.
        </p>

        <p><strong>The book was a door.</strong></p>

        <p>
          When I first opened it, I could not read the words. I could not even perceive them correctly.
          The symbols slid away from comprehension, rearranging themselves whenever I tried to focus.
          Diagrams depicted angles that hurt to follow. Entire pages felt like memories I did not own.
        </p>

        <p>I told myself it was simply difficult. Ancient. Dangerous, but learnable.</p>
        <p><strong>I was wrong again.</strong></p>

        <p>
          When I read it, my mind opened to something vast—an alien presence that exists outside time,
          space, and mortal intention. It did not offer a bargain. It did not speak in promises.
          It simply noticed me.
        </p>

        <p>
          Power flooded in where something had already been carved out.
        </p>

        <p>
          In the chaos that followed, I escaped the city. The Matriarch survived.
          I do not know whether she knows what I became—or whether she understands
          that the tome never truly belonged to her.
        </p>

        <p>
          I fled into the deserts of Australis, seeking distance, silence, and control.
          I found none of these.
        </p>

        <p>
          For years, I tried to understand the tome.
        </p>

        <p>
          I studied it by firelight and starlight, in ruins half-buried by sand,
          in caves where the wind could not reach. I traced its symbols.
          I copied fragments into the dirt. I attempted to organize its contents
          as I had been taught—by structure, by logic, by sequence.
        </p>

        <p><strong>The book resisted every method.</strong></p>

        <p>
          Some days, a single phrase would remain long enough to be understood.
          Other days, entire pages would feel close, as if meaning hovered just beyond reach.
          When I forced myself to read longer, my thoughts would fracture.
          Time would slip. I would lose hours, sometimes days, and wake with the book
          open to pages I did not remember turning.
        </p>

        <p>
          I learned this much: <strong>The tome does not teach magic.<br>
          It teaches how to misperceive reality.</strong>
        </p>

        <p>
          My spells did not come from study or mastery.
          They came from moments where my mind briefly aligned
          with something not meant for me.
        </p>

        <p>
          Sometimes, the book felt heavier. Sometimes lighter.
          Once, I burned it in a moment of panic, only to wake later
          with it resting against my pack, unmarked, open to a page that read:
        </p>

        <blockquote>“WHAT ENTERS IS NOT WHAT LEAVES.”</blockquote>

        <p>
          That was when I understood that the tome was no longer an object I carried.
          It was a condition I endured.
        </p>

        <p>
          As the years passed, the symptoms worsened. Magic warped around me.
          Reality misbehaved. Colors inverted. Gravity hesitated.
          Objects drifted when I was afraid.
        </p>

        <p>
          Sometimes I felt something else thinking through me—not controlling,
          not guiding, simply overlapping.
        </p>

        <p><strong>The entity is not attacking me.<br>It is approaching.</strong></p>

        <p>
          Now I have crossed the Sea of Storms to Orientalis,
          to the city of Steelforest, because the High Elves are said
          to remember what others bury.
        </p>

        <p>
          I am not seeking power.<br>
          I am seeking continuity.
        </p>

        <p>
          Because if I do nothing, I fear the book will eventually finish reading me.
        </p>
      </section>

      <!-- ================= TOME ================= -->
      <section class="character-section">
        <h3>The Tome of the Uncounted Door</h3>
        <p><em>Also called: The Black Lattice, The Index Without End</em></p>

        <h4>Appearance</h4>
        <p>
          The tome is bound in a material that resembles leather only in memory.
          It is warm to the touch, and its surface subtly resists being looked at directly.
          No title is written on the cover—yet everyone who holds it knows it is a book.
        </p>

        <p>
          The pages are not parchment. They are thin, translucent sheets etched
          with symbols that rearrange themselves when observed too long.
        </p>

        <p>The book is heavier when closed than when open.</p>

        <h4>🧠 The Central Truth of the Tome</h4>
        <ul>
          <li>The tome does not teach magic</li>
          <li>It teaches how to perceive reality incorrectly</li>
          <li>Most of it is unreadable</li>
          <li>Only fragments remain long enough to matter</li>
        </ul>

        <h4>🔓 How the Gate Was Opened</h4>
        <p>
          You did not understand the words.<br>
          You understood the relationship between them.
        </p>

        <p>
          You did not summon the entity.<br>
          You noticed it — and it noticed you in return.
        </p>

        <h4>The Tome (Narrative Artifact)</h4>
        <ul>
          <li>Unreadable shifting symbols and impossible diagrams</li>
          <li>Spells are partial translations — stable mistakes</li>
          <li>Leveling grants tolerance, not mastery</li>
        </ul>

       <h4>Immutable Rule — The Tome Is Bound to You</h4>
        <ul>
          <li>The tome cannot be lost or destroyed</li>
          <li>If taken or destroyed, it reappears in your belongings</li>
          <li>It does not rescue you or act independently</li>
          <li>Destroying it causes severe fracture backlash</li>
        </ul>
      </section>

      <!-- ================= MECHANIC ================= -->
      <section class="character-section">
        <h3>Core Mechanic: Fracture of the Open Mind</h3>

        <p>
          Your mind is partially aligned with an alien reality.
          Powerful magic strains this alignment.
        </p>

        <h4>Trigger</h4>
        <ul>
          <li>You cast a spell of 1st level or higher</li>
          <li>You critically succeed or fail with a spell</li>
          <li>You drop to 0 HP or regain consciousness</li>
          <li>DM discretion during high-stress magic moments</li>
        </ul>

        <h4>Design Goals</h4>
        <ul>
          <li>Fast resolution (1 roll)</li>
          <li>No permanent mechanical bonuses</li>
          <li>Mix of neutral, positive, negative, and weird effects</li>
          <li>Narrative escalation, not raw power</li>
        </ul>
      </section>

      <!-- ================= FRACTURE TABLE ================= -->
<section class="character-section">
<h3>Fracture of the Open Mind — d100</h3>
<p><em>Your mind is not broken. It is open.</em></p>

<h4>🕯️ 01–15 — STABLE / NO EFFECT</h4>
<table class="strain-table">
<tr><th>d100</th><th>Effect</th></tr>
<tr><td>01</td><td>The pressure recedes. Reality exhales. Nothing happens.</td></tr>
<tr><td>02</td><td>The whispers fall silent, as if listening instead.</td></tr>
<tr><td>03</td><td>The fracture tightens. You feel watched — but untouched.</td></tr>
<tr><td>04</td><td>For a moment, everything aligns correctly.</td></tr>
<tr><td>05</td><td>The entity’s attention slides elsewhere.</td></tr>
<tr><td>06</td><td>A chill passes, then fades without consequence.</td></tr>
<tr><td>07</td><td>Your thoughts remain your own. For now.</td></tr>
<tr><td>08</td><td>The magic settles into its expected shape.</td></tr>
<tr><td>09</td><td>The unseen strain releases harmlessly.</td></tr>
<tr><td>10</td><td>The door does not open. It remembers you.</td></tr>
<tr><td>11</td><td>You sense vast movement far away — not here.</td></tr>
<tr><td>12</td><td>The air stills. No distortion manifests.</td></tr>
<tr><td>13</td><td>A false resonance dissipates.</td></tr>
<tr><td>14</td><td>You feel relief you didn’t know you needed.</td></tr>
<tr><td>15</td><td>Silence. Even magic seems respectful.</td></tr>
</table>

<h4>🎭 16–40 — NEUTRAL / NARRATIVE EFFECTS</h4>
<table class="strain-table">
<tr><th>d100</th><th>Effect</th></tr>
<tr><td>16</td><td>Colors invert briefly, as if reality shows its underside.</td></tr>
<tr><td>17</td><td>Dust and loose objects float, unsure of gravity’s authority.</td></tr>
<tr><td>18</td><td>Your shadow reacts a heartbeat too late.</td></tr>
<tr><td>19</td><td>Your voice echoes with alien harmonics.</td></tr>
<tr><td>20</td><td>Flames nearby burn with an unfamiliar hue.</td></tr>
<tr><td>21</td><td>Impossible geometric patterns overlay the world.</td></tr>
<tr><td>22</td><td>A distant bell tolls — only you hear it.</td></tr>
<tr><td>23</td><td>Your eyes reflect a starless void.</td></tr>
<tr><td>24</td><td>Time feels thicker for a moment.</td></tr>
<tr><td>25</td><td>Reflections lag, showing you slightly earlier.</td></tr>
<tr><td>26</td><td>Objects hum softly in your presence.</td></tr>
<tr><td>27</td><td>A cold wind blows where none should exist.</td></tr>
<tr><td>28</td><td>Written text subtly rearranges itself.</td></tr>
<tr><td>29</td><td>Your footsteps leave fading afterimages.</td></tr>
<tr><td>30</td><td>Liquids ripple as if disturbed by something unseen.</td></tr>
<tr><td>31</td><td>You smell ozone and ancient dust.</td></tr>
<tr><td>32</td><td>Everyone nearby experiences déjà vu.</td></tr>
<tr><td>33</td><td>Constellations briefly appear indoors.</td></tr>
<tr><td>34</td><td>Your heartbeat syncs with a distant, massive rhythm.</td></tr>
<tr><td>35</td><td>Whispers speak a language no one knows.</td></tr>
<tr><td>36</td><td>A small object rotates slowly in midair.</td></tr>
<tr><td>37</td><td>Your spell’s visuals look wrong, though it functions.</td></tr>
<tr><td>38</td><td>A nearby creature shivers without knowing why.</td></tr>
<tr><td>39</td><td>A name forms in your thoughts. You don’t recognize it.</td></tr>
<tr><td>40</td><td>Space creases like folded paper, then smooths.</td></tr>
</table>

<h4>⚠️ 41–65 — MINOR NEGATIVE EFFECTS</h4>
<table class="strain-table">
<tr><th>d100</th><th>Effect</th></tr>
<tr><td>41</td><td>Disadvantage on your next roll.</td></tr>
<tr><td>42</td><td>You lose your reaction until next turn.</td></tr>
<tr><td>43</td><td>Take 1d6 psychic damage.</td></tr>
<tr><td>44</td><td>Your speed is reduced by 10 ft until next turn.</td></tr>
<tr><td>45</td><td>Disadvantage on concentration saves (1 round).</td></tr>
<tr><td>46</td><td>No bonus action next turn.</td></tr>
<tr><td>47</td><td>Spell range halved.</td></tr>
<tr><td>48</td><td>Spell damage −1 die.</td></tr>
<tr><td>49</td><td>You drop a held object.</td></tr>
<tr><td>50</td><td>Momentary amnesia.</td></tr>
<tr><td>51</td><td>Disadvantage on Perception (1 round).</td></tr>
<tr><td>52</td><td>A harmless cantrip misfires.</td></tr>
<tr><td>53</td><td>You fall prone.</td></tr>
<tr><td>54</td><td>Frightened of empty space (1 round).</td></tr>
<tr><td>55</td><td>Spell damage type changes.</td></tr>
<tr><td>56</td><td>Disadvantage on spell attacks (1 round).</td></tr>
<tr><td>57</td><td>Gain 1 exhaustion (ends after encounter).</td></tr>
<tr><td>58</td><td>Your next spell costs +1 slot level.</td></tr>
<tr><td>59</td><td>An ally has disadvantage on next save.</td></tr>
<tr><td>60</td><td>You immediately lose concentration.</td></tr>
<tr><td>61</td><td>Spell targets a random valid creature.</td></tr>
<tr><td>62</td><td>You are restrained until end of turn.</td></tr>
<tr><td>63</td><td>Initiative −5 next round.</td></tr>
<tr><td>64</td><td>You glow faintly with starlight.</td></tr>
<tr><td>65</td><td>Whisper compulsively; Wis save or lose reaction.</td></tr>
</table>

<h4>✨ 66–90 — MINOR POSITIVE EFFECTS</h4>
<table class="strain-table">
<tr><th>d100</th><th>Effect</th></tr>
<tr><td>66</td><td>Advantage on your next roll.</td></tr>
<tr><td>67</td><td>Regain 1d6 HP.</td></tr>
<tr><td>68</td><td>Regain one 1st-level spell slot.</td></tr>
<tr><td>69</td><td>+2 AC until next turn.</td></tr>
<tr><td>70</td><td>Ignore resistance for one spell.</td></tr>
<tr><td>71</td><td>Teleport up to 10 ft.</td></tr>
<tr><td>72</td><td>Advantage on concentration saves (1 round).</td></tr>
<tr><td>73</td><td>Maximize one spell’s damage.</td></tr>
<tr><td>74</td><td>Darkvision +30 ft (1 round).</td></tr>
<tr><td>75</td><td>You act first next round.</td></tr>
<tr><td>76</td><td>+2 spell save DC for one spell.</td></tr>
<tr><td>77</td><td>An ally gains advantage.</td></tr>
<tr><td>78</td><td>Spell gains Subtle Spell effect.</td></tr>
<tr><td>79</td><td>Gain temp HP = CHA mod.</td></tr>
<tr><td>80</td><td>See invisibility (1 round).</td></tr>
<tr><td>81</td><td>Ignore verbal components briefly.</td></tr>
<tr><td>82</td><td>No opportunity attacks against you (1 round).</td></tr>
<tr><td>83</td><td>Turn a failed save into a success.</td></tr>
<tr><td>84</td><td>Spell affects one additional target.</td></tr>
<tr><td>85</td><td>Psychic resistance (1 round).</td></tr>
<tr><td>86</td><td>Reroll one die.</td></tr>
<tr><td>87</td><td>Double spell range.</td></tr>
<tr><td>88</td><td>Gain an extra reaction.</td></tr>
<tr><td>89</td><td>Gain an extra bonus action.</td></tr>
<tr><td>90</td><td>The entity focuses; DM describes subtle approval.</td></tr>
</table>

<h4>🌀 91–100 — TOTALLY WEIRD</h4>
<table class="strain-table">
<tr><th>d100</th><th>Effect</th></tr>
<tr><td>91</td><td>A future version of you observes silently.</td></tr>
<tr><td>92</td><td>A location exists in two places briefly.</td></tr>
<tr><td>93</td><td>Everyone forgets the last 6 seconds.</td></tr>
<tr><td>94</td><td>A harmless creature appears, confused.</td></tr>
<tr><td>95</td><td>Gravity reverses for 1 round.</td></tr>
<tr><td>96</td><td>Time loops — reroll the last action.</td></tr>
<tr><td>97</td><td>Your spell manifests as alien geometry.</td></tr>
<tr><td>98</td><td>A cosmic omen appears; DM decides meaning.</td></tr>
<tr><td>99</td><td>A door appears where none should exist.</td></tr>
<tr><td>100</td><td><strong>THE DOOR OPENS.</strong> Reality warps; DM introduces a major effect.</td></tr>
</table>
</section>


      <!-- ================= SPELLS ================= -->
<section class="character-section">
<h3>Cosmic Tome Spell Table — Cantrips</h3>

<table class="strain-table">
<tr>
<th>#</th><th>Cantrip</th><th>Tome Fragment / Flavor</th><th>PHB 2024 Mechanics</th><th>Narrative / DM Hook</th>
</tr>

<tr><td>1</td><td>Prestidigitation</td><td>“Reality obeys expectation—briefly.”</td><td>1 action, 10 ft, 1 hr</td><td>Colors shimmer; objects float briefly.</td></tr>
<tr><td>2</td><td>Mage Hand</td><td>“The body is optional.”</td><td>1 action, 30 ft, 1 min</td><td>Hand bends unnaturally.</td></tr>
<tr><td>3</td><td>Minor Illusion</td><td>“Perception is a rushed choice.”</td><td>1 action, 30 ft, 1 min</td><td>Images flicker oddly.</td></tr>
<tr><td>4</td><td>Mind Sliver</td><td>“Thought can be scratched.”</td><td>1 action, 60 ft, 1d6 psychic</td><td>Whispers linger.</td></tr>
<tr><td>5</td><td>Thaumaturgy</td><td>“The air obeys insistence.”</td><td>1 action, 30 ft</td><td>Walls hum.</td></tr>
<tr><td>6</td><td>Shape Water</td><td>“Fluids remember geometry.”</td><td>1 action, 30 ft</td><td>Water bends impossibly.</td></tr>
<tr><td>7</td><td>Chill Touch</td><td>“Death is optional.”</td><td>1 action, 120 ft</td><td>Spectral frost.</td></tr>
<tr><td>8</td><td>Light</td><td>“Illumination leaks.”</td><td>1 action, touch</td><td>Shadows warp.</td></tr>
<tr><td>9</td><td>Dancing Lights</td><td>“Stars obey another hand.”</td><td>1 action, 120 ft</td><td>Lights linger.</td></tr>
<tr><td>10</td><td>Fire Bolt</td><td>“Flame is a suggestion.”</td><td>1 action, 120 ft</td><td>Fire burns strangely.</td></tr>
<tr><td>11</td><td>Message</td><td>“Words slip through thin places.”</td><td>1 action, 120 ft</td><td>Echoing whispers.</td></tr>
<tr><td>12</td><td>True Strike</td><td>“Certainty is borrowed.”</td><td>1 action, conc.</td><td>Reality pauses.</td></tr>
</table>
</section>


<section class="character-section">
<h3>Cosmic Tome Spell Table — Level 1</h3>

<table class="strain-table">
<tr>
<th>#</th><th>Spell</th><th>Tome Fragment / Flavor</th><th>PHB 2024 Mechanics</th><th>Narrative / DM Hook</th>
</tr>

<tr><td>1</td><td>Detect Magic</td><td>“All things leak.”</td><td>1 action, self, 10 min</td><td>Magic feels like pressure.</td></tr>
<tr><td>2</td><td>Chaos Bolt</td><td>“Consistency is weakness.”</td><td>1 action, 120 ft</td><td>Damage shifts.</td></tr>
<tr><td>3</td><td>Magic Missile</td><td>“The universe obeys briefly.”</td><td>1 action, 120 ft</td><td>Darts curve impossibly.</td></tr>
<tr><td>4</td><td>Shield</td><td>“Space resists.”</td><td>Reaction, +5 AC</td><td>Reality ripples.</td></tr>
<tr><td>5</td><td>Mage Armor</td><td>“Form resists.”</td><td>1 action, 8 hr</td><td>Alien shimmer.</td></tr>
<tr><td>6</td><td>Burning Hands</td><td>“Heat is relative.”</td><td>15-ft cone, 3d6</td><td>Flames distort.</td></tr>
<tr><td>7</td><td>Disguise Self</td><td>“Identity bends.”</td><td>1 action, 1 hr</td><td>Unsettling shifts.</td></tr>
<tr><td>8</td><td>Silent Image</td><td>“Reality forgets.”</td><td>1 action, conc.</td><td>Edges shimmer.</td></tr>
<tr><td>9</td><td>Feather Fall</td><td>“Gravity negotiates.”</td><td>Reaction, 1 min</td><td>Space softens.</td></tr>
<tr><td>10</td><td>Charm Person</td><td>“Thoughts are suggested.”</td><td>1 action, Wis save</td><td>Alien curiosity.</td></tr>
<tr><td>11</td><td>Sleep</td><td>“Consciousness thins.”</td><td>1 action, 5d8 HP</td><td>Dream bleed.</td></tr>
<tr><td>12</td><td>Fog Cloud</td><td>“Visibility is optional.”</td><td>20-ft radius, conc.</td><td>Mist curls alive.</td></tr>
</table>
</section>

    `;
  }
}
