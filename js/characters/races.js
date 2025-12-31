export function initRaces() {
  const characterStatblock = document.getElementById("character-statblock");

  document.addEventListener("showRacesTable", showRacesTable);


function showRacesTable() {
  characterStatblock.innerHTML = `
  <div class="table-title">Races</div>
<table class="race-table">
  <tr>
    <th>Race</th>
    <th>Creature Type</th>
    <th>Size</th>
    <th>Speed</th>
    <th>Traits</th>
    <th>Lineage</th>
  </tr>

  <tr>
    <td><strong>Aasimar</strong></td>
    <td>Humanoid</td>
    <td>Medium or Small</td>
    <td>30 ft.</td>
    <td>
      <strong>Darkvision 60 ft:</strong> See in dim light as if bright light, in darkness as dim light.<br>
      <strong>Celestial Resistance:</strong> Resistance to necrotic and radiant damage.<br>
      <strong>Healing Hands:</strong> Touch heals a creature equal to your level.<br>
      <strong>Light Bearer:</strong> Knows the Light cantrip. Use charisma as spellcasting ability.<br>
      <strong>Celestial Revelation:</strong> Divine ability or spell feature granted by your celestial heritage.
    </td>
    <td>
      — <!-- No specific lineage for Aasimar in PHB -->
    </td>
  </tr>

  <tr>
    <td><strong>Dragonborn</strong></td>
    <td>Humanoid</td>
    <td>Medium</td>
    <td>30 ft.</td>
    <td>
      <strong>Draconic Ancestry:</strong> Your breath weapon and damage resistance come from your draconic lineage.<br>
      <strong>Breath Weapon:</strong> Exhale elemental energy in a 15 ft. cone or 30 ft. line.<br>
      <strong>Damage Resistance:</strong> Resistance to damage type associated with your draconic ancestry.<br>
      <strong>Darkvision 60 ft.:</strong> See in dim light as if bright light, in darkness as dim light.<br>
      <strong>Draconic Flight:</strong> Wings grant flying speed equal to your walking speed (if applicable).
    </td>
    <td>
      <strong>Black:</strong> Breath weapon does Acid damage<br>
      <strong>Blue:</strong> Breath weapon does Lightning damage<br>
      <strong>Brass:</strong> Breath weapon does Fire damage<br>
      <strong>Bronze:</strong> Breath weapon does Lightning damage<br>
      <strong>Copper:</strong> Breath weapon does Acid damage<br>
      <strong>Gold:</strong> Breath weapon does Fire damage<br>
      <strong>Green:</strong> Breath weapon does Poison damage<br>
      <strong>Red:</strong> Breath weapon does Fire damage<br>
      <strong>Silver:</strong> Breath weapon does Cold damage<br>
      <strong>White:</strong> Breath weapon does Cold damage
    </td>
  </tr>

  <tr>
    <td><strong>Dwarf</strong></td>
    <td>Humanoid</td>
    <td>Medium</td>
    <td>30 ft.</td>
    <td>
      <strong>Darkvision:</strong> See in dim light as if bright light, in darkness as dim light.<br>
      <strong>Dwarven Resilience:</strong> Advantage on saving throws against poison; resistance to poison damage.<br>
      <strong>Dwarven Toughness:</strong> Extra hit points each level.<br>
      <strong>Stonecunning:</strong> Double proficiency bonus to History checks related to stonework.
    </td>
    <td>
 — 
    </td>
  </tr>

  <tr>
    <td><strong>Elf</strong></td>
    <td>Humanoid</td>
    <td>Medium</td>
    <td>30 ft.</td>
    <td>
      <strong>Darkvision:</strong> See in dim light as if bright light, in darkness as dim light.<br>
      <strong>Keen Senses:</strong> Proficiency in the Perception skill.<br>
      <strong>Fey Ancestry:</strong> Advantage on saving throws against being charmed; magic can’t put you to sleep.<br>
      <strong>Trance:</strong> Meditate 4 hours instead of sleeping.<br>
      <strong>Elven Lineage:</strong> Subrace traits.
    </td>
    <td>
      <strong>Drow:</strong> Dark-skinned elves with innate spellcasting and superior darkvision.<br>
      <strong>High Elf:</strong> Skilled with magic and weaponry; cantrip known.<br>
      <strong>Wood Elf:</strong> Fleet-footed, natural stealth, and woodland camouflage.
    </td>
  </tr>

  <tr>
    <td><strong>Gnome</strong></td>
    <td>Humanoid</td>
    <td>Small</td>
    <td>30 ft.</td>
    <td>
      <strong>Darkvision:</strong> See in dim light as if bright light, in darkness as dim light.<br>
      <strong>Gnome Cunning:</strong> Advantage on all Intelligence, Wisdom, and Charisma saving throws against magic.<br>
      <strong>Gnomish Lineage:</strong> Subrace traits and abilities.
    </td>
    <td>
      <strong>Forest Gnome:</strong> Natural illusionists and stealthy, speak with small beasts.<br>
      <strong>Rock Gnome:</strong> Inventive and skilled with artisan tools, adept at crafting.
    </td>
  </tr>

  <tr>
    <td><strong>Goliath</strong></td>
    <td>Humanoid</td>
    <td>Medium</td>
    <td>35 ft.</td>
    <td>
      <strong>Powerful Build:</strong> Counts as one size larger for carrying capacity and lifting.<br>
      <strong>Stone’s Endurance:</strong> Reduce damage dealt to you once per short or long rest.<br>
      <strong>Mountain Born:</strong> Adaptation to high altitude and cold climates.
    </td>
    <td>
      <strong>Cloud:</strong> Strong and agile, mountainous terrain adept.<br>
      <strong>Fire:</strong> Aggressive and resistant to heat.<br>
      <strong>Frost:</strong> Resilient in cold regions.<br>
      <strong>Hill:</strong> Hardy and strong.<br>
      <strong>Stone:</strong> Sturdy, physically robust.<br>
      <strong>Storm:</strong> Lightning and storm affinity.
    </td>
  </tr>

  <tr>
    <td><strong>Halfling</strong></td>
    <td>Humanoid</td>
    <td>Small</td>
    <td>30 ft.</td>
    <td>
      <strong>Lucky:</strong> Reroll 1 on attack roll, ability check, or saving throw.<br>
      <strong>Brave:</strong> Advantage on saving throws against being frightened.<br>
      <strong>Halfling Nimbleness:</strong> Can move through space of creatures larger than you.<br>
      <strong>Naturally Stealthy:</strong> Can attempt to hide even when obscured only by a creature.
    </td>
    <td>
      — <!-- No special lineages in PHB -->
    </td>
  </tr>

  <tr>
    <td><strong>Human</strong></td>
    <td>Humanoid</td>
    <td>Medium</td>
    <td>30 ft.</td>
    <td>
      <strong>Versatile:</strong> Increase all ability scores by 1 (standard human).<br>
      <strong>Skilled:</strong> Gain proficiency in extra skill (variant human).<br>
      <strong>Resourceful:</strong> Subrace or variant features.
    </td>
    <td>
      — <!-- Humans have variant traits rather than lineages -->
    </td>
  </tr>

  <tr>
    <td><strong>Orc</strong></td>
    <td>Humanoid</td>
    <td>Medium</td>
    <td>30 ft.</td>
    <td>
      <strong>Darkvision:</strong> See in dim light as if bright light, in darkness as dim light.<br>
      <strong>Menacing:</strong> Proficiency in Intimidation skill.<br>
      <strong>Relentless Endurance:</strong> When reduced to 0 HP but not killed, drop to 1 HP instead.<br>
      <strong>Adrenaline Rush:</strong> Extra action on first turn in combat (if variant traits applied).
    </td>
    <td>
      — <!-- No official lineage variants in PHB -->
    </td>
  </tr>

  <tr>
    <td><strong>Tiefling</strong></td>
    <td>Humanoid</td>
    <td>Medium</td>
    <td>30 ft.</td>
    <td>
      <strong>Darkvision:</strong> See in dim light as if bright light, in darkness as dim light.<br>
      <strong>Otherworldly Presence:</strong> Advantage on interactions with fiends and certain creatures.<br>
      <strong>Fiendish Legacy:</strong> Know Thaumaturgy cantrip and spells granted by infernal heritage.
    </td>
    <td>
      <strong>Abyssal:</strong> Infernal heritage linked to chaotic planes.<br>
      <strong>Chthonic:</strong> Dark, underworld-influenced heritage.<br>
      <strong>Infernal:</strong> Fiendish ancestry, associated with devils and infernal powers.
    </td>
  </tr>

</table>

  `;
}
}