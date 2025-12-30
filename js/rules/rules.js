// rules.js
export function initRulesStatblock() {
  const rulesStatblock = document.getElementById("rules-statblock");

  document.addEventListener("showDCTable", () => {
    showDCRatingTable();
  });

  document.addEventListener("showConditionsTable", () => {
    showConditionsTable();
  });

  document.addEventListener("showDamageTable", () => {
    showDamageTable();
  });

  document.addEventListener("showHPACTable", () => {
    showHPACTable();
  });

  document.addEventListener("showAttackTable", () => {
    showAttackTable();
  });


    document.addEventListener("showMonsterCreationTable", () => {
    showMonsterCreationTable();
  });

  showDCRatingTable();
function showMonsterCreationTable() {

    rulesStatblock.innerHTML = `
<div class="table-title">Monster Creation Reference Table (CR 0–30) (see this blog for more info: https://alphastream.org/index.php/2025/03/26/how-to-create-a-monster-for-revised-dd-5e-2024/)</div>
<table class="monster-creation-table">
<tr>
<th>CR</th><th>XP</th><th>PB</th><th>AC</th>
<th>Published HP Range</th><th>Published Avg HP</th><th>FoH HP</th>
<th>Attack Bonus</th><th># Attacks</th><th>Avg Damage/Round</th>
<th>Save DC</th><th>Initiative</th><th>Example Monster</th>
</tr>

<tr><td>0</td><td>10</td><td>+2</td><td>11 (=<13)</td><td>1–13</td><td>4</td><td>3 (2–4)</td><td>+2</td><td>1</td><td>1.5</td><td>=<11</td><td>+1</td><td>Commoner, Frog</td></tr>
<tr><td>1/8</td><td>25</td><td>+2</td><td>13</td><td>5–17</td><td>9</td><td>9 (7–11)</td><td>+3</td><td>1</td><td>4</td><td>11</td><td>+1</td><td>Bandit, Giant Rat</td></tr>
<tr><td>1/4</td><td>50</td><td>+2</td><td>13</td><td>8–22</td><td>14</td><td>13 (10–16)</td><td>+4</td><td>2</td><td>6</td><td>11</td><td>+2</td><td>Goblin, Wolf</td></tr>
<tr><td>1/2</td><td>100</td><td>+2</td><td>13</td><td>11–33</td><td>20</td><td>22 (17–28)</td><td>+4</td><td>2</td><td>8</td><td>11</td><td>+2</td><td>Black Bear, Hobgoblin</td></tr>
<tr><td>1</td><td>200</td><td>+2</td><td>13</td><td>19–52</td><td>29</td><td>33 (25–41)</td><td>+4</td><td>2</td><td>10</td><td>12</td><td>+2</td><td>Ghoul, Bugbear</td></tr>
<tr><td>2</td><td>450</td><td>+2</td><td>13</td><td>22–85</td><td>46</td><td>45 (34–56)</td><td>+5</td><td>2</td><td>17</td><td>12</td><td>+2</td><td>Gelatinous Cube, Ogre</td></tr>
<tr><td>3</td><td>700</td><td>+2</td><td>14</td><td>45–90</td><td>63</td><td>65 (49–81)</td><td>+5</td><td>2</td><td>23</td><td>12</td><td>+2</td><td>Basilisk, Wight</td></tr>
<tr><td>4</td><td>1100</td><td>+2</td><td>15</td><td>40–120</td><td>71</td><td>84 (64–106)</td><td>+6</td><td>2</td><td>28</td><td>13</td><td>+2</td><td>Ettin, Ghost</td></tr>
<tr><td>5</td><td>1800</td><td>+3</td><td>15</td><td>60–147</td><td>99</td><td>95 (71–119)</td><td>+7</td><td>3</td><td>36</td><td>14</td><td>+3</td><td>Troll, Flesh Golem</td></tr>
<tr><td>6</td><td>2300</td><td>+3</td><td>16</td><td>78–152</td><td>109</td><td>112 (84–140)</td><td>+7</td><td>3</td><td>47</td><td>14</td><td>+3</td><td>Chimera, Wyvern</td></tr>
<tr><td>7</td><td>2900</td><td>+3</td><td>16</td><td>99–168</td><td>128</td><td>130 (98–162)</td><td>+8</td><td>3</td><td>50</td><td>15</td><td>+4</td><td>Mind Flayer, Stone Giant</td></tr>
<tr><td>8</td><td>3900</td><td>+3</td><td>16</td><td>85–184</td><td>135</td><td>136 (102–170)</td><td>+8</td><td>3</td><td>57</td><td>15</td><td>+4</td><td>Frost Giant, Hydra</td></tr>
<tr><td>9</td><td>5000</td><td>+4</td><td>17</td><td>123–200</td><td>158</td><td>145 (109–181)</td><td>+9</td><td>3</td><td>60</td><td>16</td><td>+4</td><td>Fire Giant, Treant</td></tr>
<tr><td>10</td><td>5900</td><td>+4</td><td>17</td><td>136–229</td><td>171</td><td>155 (116–194)</td><td>+9</td><td>3</td><td>65</td><td>16</td><td>+5</td><td>Aboleth, Stone Colossus</td></tr>
<tr><td>11</td><td>7200</td><td>+4</td><td>17</td><td>143–248</td><td>194</td><td>165 (124–206)</td><td>+10</td><td>3</td><td>80</td><td>17</td><td>+5</td><td>Behir, Remorhaz</td></tr>
<tr><td>12</td><td>8400</td><td>+4</td><td>17</td><td>169–240</td><td>190</td><td>175 (131–219)</td><td>+10</td><td>3</td><td>89</td><td>17</td><td>+8</td><td>Archmage, Erinyes</td></tr>
<tr><td>13</td><td>10000</td><td>+5</td><td>18</td><td>172–230</td><td>200</td><td>184 (138–230)</td><td>+10</td><td>3</td><td>96</td><td>17</td><td>+10</td><td>Beholder, Vampire</td></tr>
<tr><td>14</td><td>11500</td><td>+5</td><td>18</td><td>184–228</td><td>201</td><td>196 (147–245)</td><td>+10</td><td>3</td><td>105</td><td>18</td><td>+11</td><td>Adult Black Dragon, Ice Devil</td></tr>
<tr><td>15</td><td>13000</td><td>+5</td><td>18</td><td>187–256</td><td>216</td><td>210 (158–263)</td><td>+11</td><td>3</td><td>110</td><td>18</td><td>+12</td><td>Mummy Lord, Purple Worm</td></tr>
<tr><td>16</td><td>15000</td><td>+5</td><td>19</td><td>212–264</td><td>240</td><td>229 (172–286)</td><td>+12</td><td>3</td><td>115</td><td>18</td><td>+12</td><td>Marilith, Planetar</td></tr>
<tr><td>17</td><td>18000</td><td>+6</td><td>19</td><td>199–356</td><td>265</td><td>246 (185–308)</td><td>+12</td><td>3</td><td>120</td><td>19</td><td>+13</td><td>Death Knight, Dracolich</td></tr>
<tr><td>18</td><td>20000</td><td>+6</td><td>20</td><td>180</td><td>180</td><td>266 (200–333)</td><td>+13</td><td>3</td><td>130</td><td>19</td><td>+14</td><td>Demilich</td></tr>
<tr><td>19</td><td>22000</td><td>+6</td><td>20</td><td>300</td><td>300</td><td>285 (214–356)</td><td>+14</td><td>3</td><td>140</td><td>20</td><td>+14</td><td>Balor</td></tr>
<tr><td>20</td><td>25000</td><td>+6</td><td>20</td><td>323–337</td><td>331</td><td>300 (225–375)</td><td>+14</td><td>3</td><td>146</td><td>21</td><td>+14</td><td>Pit Fiend</td></tr>
<tr><td>21</td><td>33000</td><td>+7</td><td>21</td><td>297–367</td><td>336</td><td>325 (244–406)</td><td>+15</td><td>3</td><td>160</td><td>22</td><td>+15</td><td>Lich, Solar</td></tr>
<tr><td>22</td><td>41000</td><td>+7</td><td>21</td><td>370–507</td><td>431</td><td>350 (263–438)</td><td>+15</td><td>3</td><td>170</td><td>23</td><td>+15</td><td>Elemental Cataclysm</td></tr>
<tr><td>23</td><td>50000</td><td>+7</td><td>22</td><td>346–481</td><td>445</td><td>375 (281–469)</td><td>+16</td><td>3</td><td>180</td><td>23</td><td>+15</td><td>Kraken</td></tr>
<tr><td>24</td><td>62000</td><td>+7</td><td>22</td><td>546</td><td>546</td><td>400 (300–500)</td><td>+16</td><td>3</td><td>190</td><td>24</td><td>+16</td><td>Ancient Red Dragon</td></tr>
<tr><td>25</td><td>75000</td><td>+8</td><td>22</td><td>553</td><td>553</td><td>430 (323–538)</td><td>+17</td><td>3</td><td>205</td><td>24</td><td>+16</td><td>Colossus</td></tr>
<tr><td>26</td><td>90000</td><td>+8</td><td>23</td><td>—</td><td>—</td><td>460 (345–575)</td><td>+18</td><td>4</td><td>240</td><td>25</td><td>+16</td><td>—</td></tr>
<tr><td>27</td><td>105000</td><td>+8</td><td>23</td><td>—</td><td>—</td><td>490 (368–613)</td><td>+18</td><td>4</td><td>258</td><td>25</td><td>+17</td><td>—</td></tr>
<tr><td>28</td><td>120000</td><td>+8</td><td>24</td><td>—</td><td>—</td><td>540 (405–675)</td><td>+19</td><td>4</td><td>276</td><td>26</td><td>+17</td><td>—</td></tr>
<tr><td>29</td><td>135000</td><td>+9</td><td>24</td><td>—</td><td>—</td><td>600 (450–750)</td><td>+19</td><td>4</td><td>294</td><td>26</td><td>+18</td><td>—</td></tr>
<tr><td>30</td><td>155000</td><td>+9</td><td>25</td><td>697</td><td>697</td><td>666 (500–833)</td><td>+19</td><td>4</td><td>312</td><td>26</td><td>+18</td><td>Tarrasque</td></tr>
</table>

    `;

}




  function showDCRatingTable() {
    rulesStatblock.innerHTML = `

    <div class="table-title">DC Rating</div>
<table class="dc-table">
  <tr>
    <th>Difficulty</th>
    <th>DC</th>
  </tr>
  <tr>
    <td><strong>Very Easy</strong></td>
    <td>5</td>
  </tr>
  <tr>
    <td><strong>Easy</strong></td>
    <td>10</td>
  </tr>
  <tr>
    <td><strong>Medium</strong></td>
    <td>15</td>
  </tr>
  <tr>
    <td><strong>Hard</strong></td>
    <td>20</td>
  </tr>
  <tr>
    <td><strong>Very Hard</strong></td>
    <td>25</td>
  </tr>
  <tr>
    <td><strong>Nearly Impossible</strong></td>
    <td>30</td>
  </tr>
</table>


    <div class="table-title">Ability check examples</div>
<table class="ability-check-table">
  <tr>
    <th>Ability</th>
    <th>Task</th>
  </tr>
  <tr>
    <td><strong>Strength</strong></td>
    <td>Lift, push, pull, break, run, swim</td>
  </tr>
  <tr>
    <td><strong>Dexterity</strong></td>
    <td>Stealth, acrobatics, sleight of hand, move quickly or nimbly,</td>
  </tr>
  <tr>
    <td><strong>Constitution</strong></td>
    <td>Push your body beyond its normal limits, hold your breath, or resist poison or disease</td>
  </tr>
  <tr>
    <td><strong>Intelligence</strong></td>
    <td>reason, remember, analyze, solve problems</td>
  </tr>
  <tr>
    <td><strong>Wisdom</strong></td>
    <td>perception, insight, intuition, notice things others miss</td>
  </tr>
  <tr>
    <td><strong>Charisma</strong></td>
    <td>entertain, intimidate, persuade, perform, or make a good first impression</td>
  </tr>
</table>

    <div class="table-title">Ability saving throw examples</div>
<table class="ability-save-table">
  <tr>
    <th>Ability</th>
    <th>Task</th>
  </tr>
  <tr>
    <td><strong>Strength</strong></td>
    <td>Physically resist direct force or damage</td>
  </tr>
  <tr>
    <td><strong>Dexterity</strong></td>
    <td>Dodge attacks or avoid being hit</td>
  </tr>
  <tr>
    <td><strong>Constitution</strong></td>
    <td>Endure a toxic hazard or resist poison or disease</td>
  </tr>
  <tr>
    <td><strong>Intelligence</strong></td>
    <td>recognize an illusion as fake</td>
  </tr>
  <tr>
    <td><strong>Wisdom</strong></td>
    <td>Resist a mental assault</td>
  </tr>
  <tr>
    <td><strong>Charisma</strong></td>
    <td>Assert your identity</td>
  </tr>
</table>


    <div class="table-title">Skills examples</div>
<table class="skills-table">
  <tr>
    <th>Skill</th>
    <th>Ability</th>
    <th>Example uses</th>
  </tr>
  <tr>
    <td><strong>Acrobatics</strong></td>
    <td>Dexterity</td>
    <td>Stay on your feet in tricky situation or perform an acrobatic stunt.Balance on a narrow ledge, perform a flip, tumble through a crowd</td>
  </tr>
  <tr>
    <td><strong>Animal Handling</strong></td>
    <td>Wisdom</td>
    <td>Handle and train animals, read animal behavior, or calm a wild animal</td>
  </tr>
  <tr>
    <td><strong>Arcana</strong></td>
    <td>Intelligence</td>
    <td>Recall lore about spells, magic items and the planes of existence</td>
  </tr>
  <tr>
    <td><strong>Athletics</strong></td>
    <td>Strength</td>
    <td>Jump farther then normal, stay afloat in rough water, break something</td>
  </tr>
  <tr>
    <td><strong>Deception</strong></td>
    <td>Charisma</td>
    <td>Tell a convincing lie, wear a disguise convincingly, hide your true intentions, or manipulate others</td>
  </tr>
  <tr>
    <td><strong>History</strong></td>
    <td>Intelligence</td>
    <td>Recall lore about the past, its events, its cultures and its people</td>
  </tr>
  <tr>
    <td><strong>Insight</strong></td>
    <td>Wisdom</td>
    <td>Discern the true intentions of others, or notice subtle changes in behavior</td>
  </tr>
    <tr>
    <td><strong>Intimidation</strong></td>
    <td>Charisma</td>
    <td>Awe or threaten someone into doing what you want</td>
  </tr>
    <tr>
    <td><strong>Investigation</strong></td>
    <td>Intelligence</td>
    <td>Find obscure information in books, or deduce how something works</td>
  </tr>
    <tr>
    <td><strong>Medicine</strong></td>
    <td>Wisdom</td>
    <td>Diagnose an illness or determine what killed the recently slain.</td>
  </tr>
    <tr>
    <td><strong>Nature</strong></td>
    <td>Intelligence</td>
    <td>Recall lore about the natural world, its creatures, and its environments</td>
  </tr>
    <tr>
    <td><strong>Perception</strong></td>
    <td>Wisdom</td>
    <td>Using a combination of senses, notice something that is easy to miss</td>
  </tr>
    <tr>
    <td><strong>Performance</strong></td>
    <td>Charisma</td>
    <td>Act, tell a story, perform music or dance</td>
  </tr>
    <tr>
    <td><strong>Persuasion</strong></td>
    <td>Charisma</td>
    <td>Honestly and graciously convince someone to see things your way</td>
  </tr>
    <tr>
    <td><strong>Religion</strong></td>
    <td>Intelligence</td>
    <td>Recall lore about deities, religious practices, and holy symbols</td>
  </tr>
    <tr>
    <td><strong>Sleight of Hand</strong></td>
    <td>Dexterity</td>
    <td>Pick a pocket, conceal a handheld object or perform a trick</td>
  </tr>
    <tr>
    <td><strong>Stealth</strong></td>
    <td>Dexterity</td>
    <td>Move silently, hide in shadows, or avoid detection</td>
  </tr>
      <tr>
    <td><strong>Survival</strong></td>
    <td>Wisdom</td>
    <td>Track animals, identify food and water sources, and navigate the wilderness</td>
  </tr>
</table>



    `;
  }


function showConditionsTable() {
  rulesStatblock.innerHTML = `
  <div class="table-title">Conditions</div>
<table class="conditions-table">
  <tr>
    <th>Condition</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><strong>Blinded</strong></td>
    <td>A blinded creature can’t see and automatically fails any ability check that requires sight. Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage.</td>
  </tr>
  <tr>
    <td><strong>Charmed</strong></td>
    <td>A charmed creature can’t attack the charmer or target the charmer with harmful abilities or magical effects. The charmer has advantage on any ability check to interact socially with the creature.</td>
  </tr>
  <tr>
    <td><strong>Deafened</strong></td>
    <td>A deafened creature can’t hear and automatically fails any ability check that requires hearing.</td>
  </tr>
  <tr>
    <td><strong>Frightened</strong></td>
    <td>A frightened creature has disadvantage on ability checks and attack rolls while the source of its fear is within line of sight. The creature can’t willingly move closer to the source of its fear.</td>
  </tr>
  <tr>
    <td><strong>Grappled</strong></td>
    <td>A grappled creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. The condition ends if the grappler is incapacitated or if an effect removes the grappled creature from the reach of the grappler or grappling effect.</td>
  </tr>
  <tr>
    <td><strong>Incapacitated</strong></td>
    <td>An incapacitated creature can’t take actions or reactions.</td>
  </tr>
  <tr>
    <td><strong>Invisible</strong></td>
    <td>An invisible creature is impossible to see without the aid of magic or a special sense. For the purpose of hiding, the creature is heavily obscured. Attack rolls against the creature have disadvantage, and the creature’s attack rolls have advantage.</td>
  </tr>
  <tr>
    <td><strong>Paralyzed</strong></td>
    <td>A paralyzed creature is incapacitated and can’t move or speak. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.</td>
  </tr>
  <tr>
    <td><strong>Petrified</strong></td>
    <td>A petrified creature is transformed, along with any nonmagical object it is wearing or carrying, into a solid inanimate substance (usually stone). The creature is incapacitated, can’t move or speak, and is unaware of its surroundings. Attack rolls against the creature have advantage. The creature automatically fails Strength and Dexterity saving throws. The creature has resistance to all damage, and is immune to poison and disease, although a poison or disease already in its system is suspended, not neutralized.</td>
  </tr>
  <tr>
    <td><strong>Poisoned</strong></td>
    <td>A poisoned creature has disadvantage on attack rolls and ability checks.</td>
  </tr>
  <tr>
    <td><strong>Prone</strong></td>
    <td>A prone creature’s only movement option is to crawl, unless it stands up and thereby ends the condition. The creature has disadvantage on attack rolls. An attack roll against the creature has advantage if the attacker is within 5 feet of the creature. Otherwise, the attack roll has disadvantage.</td>
  </tr>
  <tr>
    <td><strong>Restrained</strong></td>
    <td>A restrained creature’s speed becomes 0, and it can’t benefit from any bonus to its speed. Attack rolls against the creature have advantage, and the creature’s attack rolls have disadvantage. The creature has disadvantage on Dexterity saving throws.</td>
  </tr>
  <tr>
    <td><strong>Stunned</strong></td>
    <td>A stunned creature is incapacitated, can’t move, and can speak only falteringly. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage.</td>
  </tr>
  <tr>
    <td><strong>Unconscious</strong></td>
    <td>An unconscious creature is incapacitated, can’t move or speak, and is unaware of its surroundings. The creature drops whatever it’s holding and falls prone. The creature automatically fails Strength and Dexterity saving throws. Attack rolls against the creature have advantage. Any attack that hits the creature is a critical hit if the attacker is within 5 feet of the creature.</td>
  </tr>
</table>





  `;
}
function showDamageTable() {
  rulesStatblock.innerHTML = `
 <div class="table-title">Damage</div>
    <table class="damage-table">
      <tr>
        <th>Object / Situation</th>
        <th>Damage</th>
      </tr>
      <tr>
        <td>Burned by coals, hit by a falling bookcase, pricked by a poison needle</td>
        <td>1d10</td>
      </tr>
      <tr>
        <td>Struck by lightning, stumbling into a firepit</td>
        <td>2d10</td>
      </tr>
      <tr>
        <td>Hit by falling rubble in a collapsing tunnel, tumbling in a vat of acid</td>
        <td>4d10</td>
      </tr>
      <tr>
        <td>Crushed by compacting walls, hit by whirling steel blades, wading through lava</td>
        <td>10d10</td>
      </tr>
      <tr>
        <td>Submerged in lava, hit by a crashing flying fortress</td>
        <td>18d10</td>
      </tr>
      <tr>
        <td>Tumbling into a vortex of fire on the elemental plane of fire, crushed in the jaws of a godlike creature, or a moon-sized monster</td>
        <td>24d10</td>
      </tr>
    </table>

  <div class="table-title">Severity</div>
    <table class="severity-table">
      <tr>
        <th>Level Range</th>
        <th>Severity</th>
        <th>Nuisance</th>
        <th>Deadly</th>
      </tr>
      <tr>
        <td>1-4</td>
        <td>Minor — temporary bruises, small cuts, no mechanical penalty</td>
        <td>5 (1d10)</td>
        <td>11 (2d10)</td>
      </tr>
      <tr>
        <td>5-10</td>
        <td>Moderate — pain, disadvantage on next attack or check</td>
        <td>11 (2d10)</td>
        <td>22 (4d10)</td>
      </tr>
      <tr>
        <td>11-16</td>
        <td>Serious — possible status effect (stunned, prone), disadvantage on multiple rolls</td>
        <td>22 (4d10)</td>
        <td>55 (10d10)</td>
      </tr>
      <tr>
        <td>16-20</td>
        <td>Severe — major injury, requires recovery, multiple turns affected</td>
        <td>55 (10d10)</td>
        <td>99 (18d10)</td>
      </tr>

    </table>

    
  `;
}
function showHPACTable() {
  rulesStatblock.innerHTML = `
<div class="table-title">AC Rating</div>
<table class="ac-table">
  <tr>
    <th>AC</th>
    <th>Substance</th>
  </tr>
  <tr>
    <td><strong>11</strong></td>
    <td>cloth, paper, rope</td>
  </tr>
  <tr>
    <td><strong>13</strong></td>
    <td>crystal, glass, ice</td>
  </tr>
  <tr>
    <td><strong>15</strong></td>
    <td>wood</td>
  </tr>
  <tr>
    <td><strong>17</strong></td>
    <td>stone</td>
  </tr>
  <tr>
    <td><strong>19</strong></td>
    <td>iron, steel</td>
  </tr>
  <tr>
    <td><strong>21</strong></td>
    <td>Mithral</td>
  </tr>
    <tr>
    <td><strong>23</strong></td>
    <td>Adamantine</td>
  </tr>
</table>



<div class="table-title">HP table</div>
<table class="hp-table">
  <tr>
    <th>Size</th>
    <th>Fragile</th>
    <th>Resilient</th>
  </tr>
  <tr>
    <td><strong>Tiny (bottle, lock)</strong></td>
    <td>2 (1d4)</td>
    <td>5 (2d4)</td>
  </tr>
  <tr>
    <td><strong>small (chest, lute)</strong></td>
    <td>2 (1d6)</td>
    <td>10 (3d6)</td>
  </tr>
  <tr>
    <td><strong>medium (barrel, chandelier)</strong></td>
    <td>4 (1d8)</td>
    <td>18 (4d8)</td>
  </tr>
  <tr>
    <td><strong>Large (cart, dining table)</strong></td>
    <td>5 (1d10)</td>
    <td>27 (5d10)</td>
  </tr>
</table>


  `;
}


  function showAttackTable() {
    rulesStatblock.innerHTML = `
<div class="table-title">Combat</div>
<table class="combatstart-table">
  <tr>
    <th>Start of Combat</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><strong>Surprise</strong></td>
    <td>Surprised combatants cannot act in the first round of combat</td>
  </tr>
  <tr>
    <td><strong>Initiative</strong></td>
    <td>Combatants roll initiative to determine turn order</td>
  </tr>
  <tr>
    <td><strong>Turns</strong></td>
    <td>All combatants take their turns in initiative order</td>
  </tr>
  <tr>
    <td><strong>Repeat</strong></td>
    <td>Repeat rounds until victory, defeat, parley or retreat</td>
  </tr>
</table>



<div class="table-title">Attack</div>
<table class="attack-table">
  <tr>
    <th>Attack</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><strong>Target</strong></td>
    <td>Choose a target within range</td>
  </tr>
  <tr>
    <td><strong>Attack</strong></td>
    <td>Roll a d20. During attack rolls, 1 is always a miss and 20 is always a hit</td>
  </tr>
  <tr>
    <td><strong>Modify</strong></td>
    <td>Add your modifiers</td>
  </tr>
  <tr>
    <td><strong>Armour Class</strong></td>
    <td>If the modified roll meets or exceeds the target's Armour Class, the attack hits</td>
  </tr>
    <tr>
    <td><strong>Damage</strong></td>
    <td>Roll damage dice and add modifiers. The targets HP are reduced by the damage dealt, factoring in vulnerabilities, resistances and immunity</td>
  </tr>
    <tr>
    <td><strong>Spell attack</strong></td>
    <td>Many spells count as attacks. The caster rolls D20 + spellcasting ability + proficiency bonus to hit vs AC</td>
  </tr>
    <tr>
    <td><strong>Ranged attack</strong></td>
    <td>Example longbow 150/600: 0-150 normal attack, 151-600 roll with disadvantage, 601+ no attack</td>
  </tr>
</table>



<div class="table-title">Cover</div>
<table class="cover-table">
  <tr>
    <th>Cover</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><strong>1/2 cover</strong></td>
    <td>Grant a +2 bonus to AC and dexterity saving throws</td>
  </tr>
  <tr>
    <td><strong>3/4 cover</strong></td>
    <td>Grant a +5 bonus to AC and dexterity saving throws</td>
  </tr>
  <tr>
    <td><strong>Full cover</strong></td>
    <td>Cannot be directly targeted but can be hit by area of effect.</td>
  </tr>
</table>



<div class="table-title">Damage & Health</div>
<table class="dh-table">
  <tr>
    <th>Damage & Healing</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><strong>Improvised Weapon</strong></td>
    <td>Do 1d4 damage, range 20/60. If it resembles a weapon, it can be used as one.</td>
  </tr>
  <tr>
    <td><strong>Hit Points</strong></td>
    <td>Hit points represent a creature's remaining vitality. When hit points reach 0, the creature is knocked unconscious or dies.</td>
  </tr>
  <tr>
    <td><strong>Hit Dice</strong></td>
    <td>Represents toughness and daily ability to recover from damage. When you take a short rest, you roll your hit dice to recover hit points.</td>
  </tr>
    <tr>
    <td><strong>Armor Class</strong></td>
    <td>Indicates how hard it is to hit a creature with an attack. A higher AC is better.</td>
  </tr>
  <tr>
    <td><strong>Damage Rolls</strong></td>
    <td>Determines the amount of damage dealt by an attack.</td>
  </tr>
  <tr>
    <td><strong>Healing</strong></td>
    <td>The recovery of hit points through rests, magical or mundane means.</td>
  </tr>
    <tr>
    <td><strong>Short rest</strong></td>
    <td>A period of rest lasting at least one hour, during which a character can recover hit points.</td>
  </tr>
  <tr>
    <td><strong>Long Rest</strong></td>
    <td>A period of rest lasting at least eight hours, during which a character can recover all hit points, recover 1/2 the hit dice and reset their spell slots.</td>
  </tr>
  <tr>
    <td><strong>Instant Death</strong></td>
    <td>If a creature takes damage that reduces its hit points below 0 to -1x maximum hit points, it dies instantly.</td>
  </tr>
    <tr>
    <td><strong>Death Saving Throws</strong></td>
    <td>When a character is at 0 hit points, they must make saving throws to avoid dying. Dc is 10. 3 fails before 3 successes is fatal. 3 successes before 3 fails is a stable character at 0 HP</td>
  </tr>
  <tr>
    <td><strong>Temporary Hit Points</strong></td>
    <td>A temporary hit point is a bonus to a character's hit points that is added to the character's current hit points. Temporary hit points are not actual hit points, but they function as if they were.</td>
  </tr>
  <tr>
    <td><strong>Knockout</strong></td>
    <td>When a creature is reduced to 0 hit points, it is knocked unconscious. An attacker may elect to knock out a creature instead of killing it.</td>
  </tr>
    </tr>
    <tr>
    <td><strong>Immunity</strong></td>
    <td>When a creature is immune to a condition, it cannot be affected by that condition and gains no damage from it.</td>
  </tr>
  <tr>
    <td><strong>Resistance</strong></td>
    <td>A creature with resistance has advantage against a specific type of damage. It takes half damage from that type instead of normal damage.</td>
  </tr>
  <tr>
    <td><strong>Vulnerability</strong></td>
    <td>A creature with vulnerability takes double damage from a specific type of damage.</td>
  </tr>
</table>



<div class="table-title">Actions</div>
<table class="actions-table">
  <tr>
    <th>Combat Action</th>
    <th>Description</th>
  </tr>
  <tr>
    <td><strong>Move</strong></td>
    <td>Move a character or creature up to their speed.</td>
  </tr>
  <tr>
    <td><strong>Action</strong></td>
    <td>Perform a single action during your turn, such as attacking or casting a spell.</td>
  </tr>
  <tr>
    <td><strong>Minor Free Action</strong></td>
    <td>Perform a minor free action during your turn, such as drawing a weapon or speaking a verbal component.</td>
  </tr>
    <tr>
    <td><strong>Bonus action</strong></td>
    <td>Perform one bonus action during your turn, such as casting a spell or using a special ability. Only if available.</td>
  </tr>
  <tr>
    <td><strong>Reaction</strong></td>
    <td>Perform one reaction out of your turn, such as responding to an attack or casting a spell. Only if available.</td>
  </tr>
  <tr>
    <td><strong>Action: Attack</strong></td>
    <td>Perform an attack action during your turn, such as making a melee or ranged attack or casting a spell.</td>
  </tr>
    <tr>
    <td><strong>Action: Cast Spell</strong></td>
    <td>Cast a spell with a casting time of one round</td>
  </tr>
  <tr>
    <td><strong>Action: Dash</strong></td>
    <td>An extra move to move a character or creature up to their speed.</td>
  </tr>
  <tr>
    <td><strong>Action: Disarm (uses attack)</strong></td>
    <td>Roll attack roll vs Athletics or Acrobatics. Disadvantage if target has two handed weapon. Advantage if target is smaller.</td>
  </tr>
    <tr>
    <td><strong>Action: Disengage</strong></td>
    <td>When a creature moves, it can use a bonus action to avoid opportunity attacks.</td>
  </tr>
  <tr>
    <td><strong>Action: Dodge</strong></td>
    <td>Attacks for the turn. Attackers roll with disadvantage. Also gain advantage on any dexterity rolls</td>
  </tr>
  <tr>
    <td><strong>Action: First Aid</strong></td>
    <td>Stabilize a dying character or creature.</td>
  </tr>
    <tr>
    <td><strong>Action: Grapple (uses attack)</strong></td>
    <td>Seize a creature and hold it. Roll Athletics vs target's Athletics or Acrobatics. To escape, the target must make a successful Athletics or Acrobatics check against the grapppler's Athletics check.</td>
  </tr>
  <tr>
    <td><strong>Action: Help</strong></td>
    <td>Help an ally with an action or attack giving them an advantage.</td>
  </tr>
  <tr>
    <td><strong>Action: Hide</strong></td>
    <td>Hide by making a Stealth check.</td>
  </tr>
    <tr>
    <td><strong>Action: Ready</strong></td>
    <td>Prepare a reaction to a specific trigger.</td>
  </tr>
  <tr>
    <td><strong>Action: Search</strong></td>
    <td>Search for an item. May require a perception or investigation check.</td>
  </tr>
    <tr>
    <td><strong>Action: Shove (uses attack)</strong></td>
    <td>Make a atheletics check vs target's athletics or acrobatics to push them 5 feet away or knock them prone.</td>
  </tr>
  <tr>
    <td><strong>Action: Use</strong></td>
    <td>Use an item for some purpose. This may require a skill check.</td>
  </tr>
    <tr>
    <td><strong>Action: Two weapon fighting</strong></td>
    <td>With a light melee weapon in each hand, use bonus action to attack with second weapon. No ability modifier added to damage roll.</td>
  </tr>
  <tr>
    <td><strong>Action: Optional move rules</strong></td>
    <td>Climb bigger creature, Disarm, Mark, Overrun, Shove Aside, Tumble</td>
  </tr>
</table>
    `;
  }
}