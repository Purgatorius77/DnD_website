document.addEventListener("DOMContentLoaded", () => {

  let allMonsters = [];
  let spells = [];
  let combatGroups = [];
  let currentMonster = null;

  const monsterSelect = document.getElementById("monsterSelect");
  const crCheckboxesDiv = document.getElementById("crCheckboxes");
  const typeCheckboxesDiv = document.getElementById("typeCheckboxes");
  const nameFilterInput = document.getElementById("nameFilter");
  const crComparisonSelect = document.getElementById("crComparison");
  const addGroupBtn = document.getElementById("addGroup");
  const resetBtn = document.getElementById("resetCombat");
  const groupsContainer = document.getElementById("groups");


const spellSelect = document.getElementById("spellSelect");
const spellNameFilterInput = document.getElementById("spellSearch"); // matches your HTML
const spellLevelCheckboxesDiv = document.getElementById("levelCheckboxes"); // matches HTML
const spellSchoolCheckboxesDiv = document.getElementById("spellSchoolCheckboxes"); // matches HTML
const levelComparisonSelect = document.getElementById("levelComparison"); // matches HTML




// ===== SPELLS SECTION =====
fetch("data/spells.json")
  .then(res => res.json())
  .then(data => {
    spells = data.sort((a,b) => a.name.localeCompare(b.name));

    buildSpellDropdown(spells);          // builds the dropdown
    buildSpellSchoolCheckboxes(spells);  // builds the school checkboxes
    buildSpellLevelCheckboxes();         // builds the level checkboxes
  })
  .catch(err => console.error("Failed to load spells:", err));


  // ===== CONSTANTS =====
  const DND_CONDITIONS = [
    "Blinded","Charmed","Deafened","Frightened","Grappled",
    "Incapacitated","Paralyzed","Petrified","Poisoned","Prone",
    "Restrained","Stunned","Unconscious"
  ];


  const CONDITION_DESCRIPTIONS = {
  "Blinded": "A blinded creature can't see and automatically fails any ability check that requires sight.",
  "Charmed": "A charmed creature can't attack the charmer and has disadvantage on social checks with them.",
  "Deafened": "A deafened creature can't hear and automatically fails any ability check that requires hearing.",
  "Frightened": "A frightened creature has disadvantage on ability checks and attack rolls while the source is visible.",
  "Grappled": "A grappled creature's speed becomes 0 and it can't benefit from any bonus to its speed.",
  "Incapacitated": "An incapacitated creature can't take actions or reactions.",
  "Paralyzed": "A paralyzed creature is incapacitated, can't move, and fails Strength and Dexterity saving throws.",
  "Petrified": "A petrified creature is transformed into stone and is incapacitated.",
  "Poisoned": "A poisoned creature has disadvantage on attack rolls and ability checks.",
  "Prone": "A prone creature's only movement option is to crawl unless it stands up; melee attacks against it have advantage.",
  "Restrained": "A restrained creature's speed is 0, attack rolls against it have advantage, and it has disadvantage on attacks.",
  "Stunned": "A stunned creature is incapacitated, can't move, and can speak only falteringly.",
  "Unconscious": "An unconscious creature is incapacitated, can't move or speak, and drops whatever it’s holding."
};

  const spellSchoolNames = { 
  "A": "Abjuration",  
  "C": "Conjuration",
  "D": "Divination",
  "E": "Enchantment",
  "V": "Evocation",
  "I": "Illusion",
  "N": "Necromancy",
  "T": "Transmutation"
  };

  // ===== HELPER =====

document.getElementById("backToMonster").addEventListener("click", () => {
  document.getElementById("spell-statblock").style.display = "none";
  document.getElementById("monster-statblock").style.display = "block";

  if (currentMonster) {
    renderMonster(currentMonster);
  }
});



  const crToNumber = crStr => {
    if (!crStr) return 0;
    if (crStr.includes("/")) {
      const [num, denom] = crStr.split("/").map(Number);
      return num / denom;
    }
    return parseFloat(crStr);
  };

  const formatSigned = n => n >= 0 ? `+${n}` : `${n}`;
  const abilityMod = score => Math.floor((score - 10) / 2);

  const getMonsterImagePath = monster => {
    if (!monster.source || !monster.name) return "";
    let folder = monster.source.split("page")[0].trim();
    return `images/tokens/${encodeURIComponent(folder)}/${encodeURIComponent(monster.name)}.webp`;
  };

function getMonsterFluff(monsterName) {
  if (!Array.isArray(window.fluffData)) return null;

  const fluff = window.fluffData.find(f => f.name === monsterName);
  if (!fluff) return null;

function addBackButtonToSpellHeader() {
  const header = document.getElementById("spell-header");
  if (!header) return;

  // Prevent duplicates
  if (header.querySelector(".back-button")) return;

  const btn = document.createElement("button");
  btn.className = "back-button";
  btn.textContent = "← Back to Monster";

  btn.addEventListener("click", () => {
    document.getElementById("spell-statblock").style.display = "none";
    document.getElementById("monster-statblock").style.display = "block";

    if (currentMonster) {
      renderMonster(currentMonster);
    }
  });

  header.prepend(btn);
}




  
  // Direct fluff
  if (fluff.entries) return fluff;

  // _copy resolution
  if (fluff._copy) {
    const base = window.fluffData.find(f =>
      f.name === fluff._copy.name &&
      f.source === fluff._copy.source
    );

    if (!base || !base.entries) return null;

    let mergedEntries = [...base.entries];

    const mod = fluff._copy._mod;
    if (mod?.entries?.mode === "prependArr") {
      mergedEntries = [
        ...mod.entries.items,
        ...mergedEntries
      ];
    }

    return {
      name: fluff.name,
      source: fluff.source,
      entries: mergedEntries
    };
  }

  return null;
}



  // ===== RENDER FUNCTIONS =====
  const renderList = (title, list) => !list || list.length === 0 ? "" : `<p><strong>${title}:</strong> ${list.join(", ")}</p>`;

const renderSection = (title, items) => {
  if (!items || items.length === 0) return "";

  return `<h2>${title}</h2>` + items.map(i => {
    const textWithLinks = makeSpellsClickableInText(i.text);
    return `<p><strong>${i.name}.</strong> ${textWithLinks}</p>`;
  }).join("");
};




function renderFluffEntries(entries) {
  if (!entries) return "";

  return entries.map(entry => {
    // Plain text
    if (typeof entry === "string") {
      return `<p>${entry}</p>`;
    }

    // Section with a heading
    if (entry.type === "section") {
      return `
        <h3>${entry.name || ""}</h3>
        ${renderFluffEntries(entry.entries)}
      `;
    }

    // Fallback
    return "";
  }).join("");
}

// Function to make spell names clickable in the action text
function makeSpellsClickableInText(text) {
  if (!text || spells.length === 0) return text;

  spells.forEach(spell => {
    const name = spell.name;

    // escape regex characters
    const safeName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // 🔑 CASE INSENSITIVE MATCH
    const regex = new RegExp(`\\b${safeName}\\b`, "gi");

    text = text.replace(regex, match =>
      `<a class="spell-link" data-spell="${spell.name}">${match}</a>`
    );
  });

  return text;
}

document.addEventListener("click", e => {
  const link = e.target.closest(".spell-link");
  if (!link) return;

  const spellName = link.dataset.spell;
  const spell = spells.find(s => s.name === spellName);
  if (!spell) return;

  renderSpell(spell);

  document.getElementById("monster-statblock").style.display = "none";
  document.getElementById("spell-statblock").style.display = "block";

  addBackButtonToSpellHeader(); // ✅ safe
});


document.getElementById("backToMonster").addEventListener("click", () => {
  if (!currentMonster) return;

  document.getElementById("spell-statblock").style.display = "none";
  document.getElementById("monster-statblock").style.display = "block";

  renderMonster(currentMonster);
});




// ===== SHARED HEADER =====
function renderStatblockHeader(mon) {
  const header = document.getElementById("statblock-header");
  const imgPath = getMonsterImagePath(mon);

  header.innerHTML = `
    <div class="stat-block">
      <div class="monster-header-wrapper">
        <img src="${imgPath}" alt="${mon.name}" class="monster-image" onerror="this.style.display='none'">

        <div class="monster-header-info">
          <h1>${mon.name}</h1>
          <p class="subtitle">${mon.size} ${mon.type}, ${mon.alignment}</p>
          <p class="subtitle">Habitat: ${mon.habitat || "Unknown"}</p>
          <p class="subtitle">Treasure: ${mon.treasure || "None"}</p>
          ${mon.source ? `<p class="subtitle">Source: ${mon.source}</p>` : ""}

          <!-- TAB BUTTONS -->
          <div class="header-tabs">
            <button class="tab-button active" data-tab="stats">Statblock</button>
            <button class="tab-button" data-tab="background">Background</button>
          </div>
        </div>
      </div>
    </div>
  `;
}

// ===== TAB SETUP =====
function setupTabs() {
  const header = document.getElementById("statblock-header");
  const content = document.getElementById("statblock-content");

  header.querySelectorAll(".tab-button").forEach(btn => {
    btn.onclick = () => {
      // Hide all tab content
      content.querySelectorAll(".tab-content").forEach(tc => tc.style.display = "none");
      // Remove active from all buttons
      header.querySelectorAll(".tab-button").forEach(b => b.classList.remove("active"));
      // Show selected tab
      const tab = content.querySelector(`#tab-${btn.dataset.tab}`);
      if (tab) tab.style.display = "block";
      btn.classList.add("active");
    };
  });
}

// ===== MAIN MONSTER RENDER =====
function renderMonster(mon) {
  if (!mon) return;
currentMonster = mon;

  // Render the header
  currentMonster = mon;   // 🔑 remember monster
  renderStatblockHeader(mon);

  const el = document.getElementById("statblock-content");
  const abilities = ["str", "dex", "con", "int", "wis", "cha"];
  const fluff = getMonsterFluff(mon.name);

  // Render the monster's stat block
  el.innerHTML = `
    <div class="stat-block">
      <div class="statblock-container">
        <div class="tab-contents-wrapper">

          <!-- STATS TAB -->
          <div class="tab-content" id="tab-stats">
            <div class="top-stats">
              <div class="stat ac"><span class="label">AC:</span> <span class="value">${mon.ac}</span></div>
              <div class="stat hp"><span class="label">HP:</span> <span class="value">${mon.hp.average} (${mon.hp.roll})</span></div>
              <div class="stat speed"><span class="label">Speed:</span> <span class="value">${mon.speed}</span></div>
              <div class="stat initiative"><span class="label">Initiative:</span> <span class="value">${mon.initiative}</span></div>
            </div>

            <div class="abilities">
              ${abilities.map(a => {
                const score = mon.abilities[a];
                const mod = Math.floor((score - 10) / 2);
                const save = mon.abilities[`${a}_save`] ?? mod;
                return `
                  <div class="ability">
                    <div class="ability-name">${a.toUpperCase()}</div>
                    <div class="ability-score">${score}</div>
                    <div class="ability-mod">mod ${mod >= 0 ? "+" + mod : mod}</div>
                    <div class="ability-save">save ${save}</div>
                  </div>
                `;
              }).join("")}
            </div>

            ${renderList("Skills", mon.skills)}
            ${renderList("Damage Vulnerabilities", mon.vulnerability)}
            ${renderList("Damage Resistances", mon.resistance)}
            ${renderList("Damage Immunities", mon.immunity)}
            ${renderList("Gear", mon.gear)}
            ${renderList("Senses", mon.senses)}
            ${renderList("Languages", mon.languages)}
            <p><strong>Challenge</strong> ${mon.challenge}</p>

            ${renderSection("Traits", mon.traits)}
            ${renderSection("Actions", mon.actions)} <!-- Spells will be clickable in this section -->
            ${renderSection("Bonus Actions", mon.bonus_actions)}
            ${renderSection("Reactions", mon.reactions)}
            ${renderSection("Legendary Actions", mon.legendary_actions)}

            <h2>Private Information</h2>
            <p>Own: ${mon.own}</p>
            <p>Number: ${mon.number}</p>
            <p>Storage: ${mon.storage ?? "—"}</p>
          </div>

          <!-- BACKGROUND TAB -->
          <div class="tab-content" id="tab-background" style="display:none;">
            ${fluff && fluff.entries
              ? renderFluffEntries(reorderFluffEntries(fluff.entries, mon.name))
              : `<p>No background information available.</p>`
            }
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach tab functionality
  setupTabs();
}

// Recursively flatten entries for string filtering
function flattenEntries(entries) {
  const result = [];

  entries.forEach(entry => {
    if (typeof entry === "string") {
      result.push(entry);
    } else if ((entry.type === "section" || entry.type === "entries") && Array.isArray(entry.entries)) {
      if (entry.name) result.push(entry.name);
      result.push(...flattenEntries(entry.entries));
    } else if (entry.type === "list" && Array.isArray(entry.items)) {
      entry.items.forEach(item => {
        if (item.entry) result.push(item.entry);
      });
    }
    // **Do not flatten tables or other types**
  });

  return result;
}


// Merge base and _mod for any monster
function getMonsterFluff(monsterName) {
  if (!Array.isArray(window.fluffData)) return null;

  const fluff = window.fluffData.find(f => f.name === monsterName);
  if (!fluff) return null;

  let baseEntries = [];

  if (fluff.entries) {
    baseEntries = fluff.entries;
  } else if (fluff._copy) {
    // Resolve base recursively
    const copied = getMonsterFluff(fluff._copy.name);
    if (copied && copied.entries) baseEntries = [...copied.entries];

    // Apply _mod entries: append instead of prepend
    const mod = fluff._copy._mod;
    if (mod?.entries?.items) {
      baseEntries = [...baseEntries, ...mod.entries.items];
    }
  }

if (!baseEntries.length) return null;

// Clean all entries of D&D markup
baseEntries = cleanFluffEntries(baseEntries);

// Add Habitat/Treasure labels at the top level
baseEntries = labelHabitatAndTreasure(baseEntries);

return { name: monsterName, entries: baseEntries };

}

// Reorder entries: move any string matching 'aeromancers' to the end
function reorderFluffEntries(entries) {
  if (!Array.isArray(entries)) return entries;

  // Only strings matter for reordering
  const flatStrings = flattenEntries(entries);
  const specificStrings = flatStrings.filter(s => s.toLowerCase().includes("aeromancers"));
  if (!specificStrings.length) return entries;

  function removeSpecificStrings(e) {
    if (typeof e === "string") return specificStrings.includes(e) ? null : e;

    // Recurse into nested entries/sections
    if ((e.type === "section" || e.type === "entries") && Array.isArray(e.entries)) {
      const newEntries = e.entries.map(removeSpecificStrings).filter(sub => sub !== null);
      return { ...e, entries: newEntries };
    }

    // Handle lists
    if (e.type === "list" && Array.isArray(e.items)) {
      const newItems = e.items
        .map(it => {
          if (!it.entry || specificStrings.includes(it.entry)) return null;
          return it;
        })
        .filter(Boolean);
      return { ...e, items: newItems };
    }

    // **Keep tables and all other objects untouched**
    return e;
  }

  const cleanedEntries = entries.map(removeSpecificStrings).filter(Boolean);

  // Append "aeromancers" strings at the end
  const appended = specificStrings.map(s => s);

  return [...cleanedEntries, ...appended];
}




// Recursively clean entries of D&D markup
function cleanFluffEntries(entries) {
  if (!Array.isArray(entries)) return entries;

  return entries.map(entry => {
    if (typeof entry === "string") {
      return stripDnDMarkup(entry);
    }

    if (entry.type === "section") {
      return {
        ...entry,
        name: stripDnDMarkup(entry.name || ""),
        entries: cleanFluffEntries(entry.entries)
      };
    }

    if (entry.type === "list" && Array.isArray(entry.items)) {
      return {
        ...entry,
        items: entry.items.map(it => ({
          ...it,
          entry: it.entry ? stripDnDMarkup(it.entry) : it.entry,
          name: it.name ? stripDnDMarkup(it.name) : it.name
        }))
      };
    }

    return entry;
  });
}

// Render entries recursively
function renderFluffEntries(entries) {
  if (!entries) return "";

  return entries
    .map(entry => {
      if (typeof entry === "string") {
        return `<p>${stripDnDMarkup(entry)}</p>`;
      }

      // Single item (e.g., labeled Habitat/Treasure)
      if (entry.type === "item") {
        return `<p><strong>${stripDnDMarkup(entry.name)}</strong> ${stripDnDMarkup(entry.entry)}</p>`;
      }

      // Sections / nested entries
      if ((entry.type === "section" || entry.type === "entries") && Array.isArray(entry.entries)) {
        const title = entry.name ? `<h3>${stripDnDMarkup(entry.name)}</h3>` : "";
        return title + renderFluffEntries(entry.entries);
      }

      // Lists
      if (entry.type === "list" && Array.isArray(entry.items)) {
        return `<ul>${entry.items
          .map(i => {
            // Render labeled items inside the list
            if (i.type === "item" && i.name) {
              return `<li><strong>${stripDnDMarkup(i.name)}</strong> ${stripDnDMarkup(i.entry)}</li>`;
            } else {
              return `<li>${stripDnDMarkup(i.entry || i.name || "")}</li>`;
            }
          })
          .join("")}</ul>`;
      }

      // Tables
      if (entry.type === "table" && Array.isArray(entry.rows)) {
        const caption = entry.caption ? `<caption>${stripDnDMarkup(entry.caption)}</caption>` : "";
        const header = entry.colLabels
          ? `<thead><tr>${entry.colLabels.map((c, i) => `<th class="${entry.colStyles?.[i] || ""}">${stripDnDMarkup(c)}</th>`).join("")}</tr></thead>`
          : "";
        const body = `<tbody>${entry.rows
          .map(row => `<tr>${row.map(cell => `<td>${stripDnDMarkup(cell)}</td>`).join("")}</tr>`)
          .join("")}</tbody>`;
        return `<table>${caption}${header}${body}</table>`;
      }

      // Everything else (images, unknown types) are ignored or handled elsewhere
      return "";
    })
    .join("");
}



// Strip D&D markup from strings
function stripDnDMarkup(text) {
  if (!text || typeof text !== "string") return text;

  let cleaned = text;

  // Patterns to remove:
  // {@i text} -> text
  // {@bold text} -> text
  // {@filter text|...} -> text
  // {@table text|...} -> text
  // {@book text|...} -> text
  const markupPattern = /\{@[a-zA-Z]+ ([^{}|]+)(\|[^{}]+)?\}/g;
  while (markupPattern.test(cleaned)) {
    cleaned = cleaned.replace(markupPattern, '$1');
  }

  // Remove leftover table/filter references like "Underdark|bestiary|environment=underdark"
  cleaned = cleaned.split('|')[0]; // Keep only first part before "|"

  return cleaned.trim();
}

function labelHabitatAndTreasure(entries) {
  if (!Array.isArray(entries)) return entries;

  // Check if Habitat/Treasure already exist
  const hasHabitatTreasure = entries.some(e => e.type === "item" && (e.name === "Habitat:" || e.name === "Treasure:"));
  if (hasHabitatTreasure) return entries;

  const labeledItems = [];
  const remainingEntries = [];

  let labelCount = 0;

  entries.forEach(entry => {
    if (labelCount < 2 && typeof entry === "string") {
      const labelName = labelCount === 0 ? "Habitat:" : "Treasure:";
      labeledItems.push({ type: "item", name: labelName, entry });
      labelCount++;
    } else {
      remainingEntries.push(entry);
    }
  });

  return [...labeledItems, ...remainingEntries];
}

function renderSpellHeader(spell) {
  const header = document.getElementById("spell-header");

  header.innerHTML = `
    <div class="stat-block">
      <div class="monster-header-wrapper">
        <button id="backToMonster" class="back-button">← Back to Monster</button>
        <div class="monster-header-info">
          <h1>${spell.name}</h1>
          <p class="subtitle">
            Level: ${spell.level === 0 ? "Cantrip" : spell.level}, 
            School: ${spellSchoolNames[spell.school] || spell.school}
          </p>
          <p class="subtitle">
            Source: ${spell.source || "Unknown"} ${spell.page ? "Page " + spell.page : ""}
          </p>
        </div>
      </div>
    </div>
  `;

  // Attach click handler after button is in the DOM
  const backBtn = document.getElementById("backToMonster");
  if (backBtn) {
    backBtn.onclick = () => {
      document.getElementById("spell-statblock").style.display = "none";
      document.getElementById("monster-statblock").style.display = "block";
  // Show monsters
  monsterFilters.style.display = "block";
  monsterStatblock.style.display = "block";

  // Hide spells
  spellFilters.style.display = "none";
  spellStatblock.style.display = "none";
      if (currentMonster) {
        renderMonster(currentMonster);
      }
    };
  }
}



function cleanSpellText(text) {
  if (!text) return "";

  // Replace all {@type content|...|...} or {@type content} with the first content before any pipe
  return text.replace(/\{@\w+\s+([^}|]+)(?:\|[^}]*)*\}/g, (_, content) => content)
             .replace(/\{@\w+\}/g, ""); // fallback for empty braces
}

function renderSpellContent(spell) {
  if (!spell) return;

  const content = document.getElementById("spell-content");

  // Format time, range, components, duration
  const castingTime = spell.time.map(t => `${t.number} ${t.unit}`).join(", ");
 const range = formatSpellRange(spell.range);

  const components = Object.keys(spell.components).map(c => c.toUpperCase()).join(", ");
  const duration = spell.duration.map(d => d.type === "instant" ? "Instant" : `${d.duration.amount} ${d.duration.type}`).join(", ");

  // Clean main entries
 const mainEntries = spell.entries
  .map(renderEntry)
  .join("");

  // Clean higher-level entries
  const higherLevelEntries = spell.entriesHigherLevel?.map(e => {
    const cleaned = e.entries
      .filter(x => typeof x === "string")
      .map(x => cleanSpellText(x))
      .join("<br>");
    return `<p><strong>${e.name}:</strong> ${cleaned}</p>`;
  }).join("") || "";

  content.innerHTML = `
    <div class="stat-block">
      <div class="statblock-container" style="display: flex; flex-direction: column; gap: 0.5em;">
        <p><strong>Casting Time:</strong> ${castingTime}</p>
        <p><strong>Range:</strong> ${range}</p>
        <p><strong>Components:</strong> ${formatComponents(spell.components)}</p>

        <p><strong>Duration:</strong> ${formatDuration(spell.duration)}</p>


        <hr>

        ${mainEntries}

        ${higherLevelEntries ? `<hr><p><strong>Higher Level:</strong></p>${higherLevelEntries}` : ""}
      </div>
    </div>
  `;
}

function renderSpell(spell) {
  if (!spell) return;

  const statblock = document.getElementById("spell-statblock");
  statblock.style.display = "block";

  renderSpellHeader(spell);   // assumes you have a header function
  renderSpellContent(spell);
}

document.addEventListener("click", e => {
  const link = e.target.closest(".spell-link");
  if (!link) return;

  const spellName = link.dataset.spell;
  const spell = spells.find(s => s.name === spellName);
  if (!spell) return;

  renderSpell(spell);

  document.getElementById("monster-statblock").style.display = "none";
});


function formatSpellRange(range) {
  if (!range) return "Unknown";

  // If there's a distance object
  if (range.distance) {
    const dist = range.distance;
    if ("amount" in dist && dist.amount !== undefined) {
      return `${dist.amount} ${dist.type} (${range.type})`;
    } else if (dist.type) {
      return `${dist.type} (${range.type})`;
    }
  }

  // Fallback for simple types
  return range.type || "Unknown";
}

function formatComponents(components) {
  if (!components) return "None";

  const parts = [];
  if (components.v) parts.push("Verbal");
  if (components.s) parts.push("Somatic");
  if (components.m) {
    parts.push(`Material (${components.m})`);
  }

  return parts.join(", ");
}


function renderEntry(entry) {
  if (typeof entry === "string") {
    return `<p>${cleanSpellText(entry)}</p>`;
  }

  if (entry.type === "table") {
    return renderTable(entry);
  }

  // Fallback for unknown entry types
  return "";
}


function renderTable(table) {
  const headers = table.colLabels
    .map(label => `<th>${cleanSpellText(label)}</th>`)
    .join("");

  const rows = table.rows
    .map(row => `
      <tr>
        ${row.map(cell => `<td>${cleanSpellText(cell)}</td>`).join("")}
      </tr>
    `)
    .join("");

  return `
    <table class="spell-table">
      <thead>
        <tr>${headers}</tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}




function formatDuration(durationArray) {
  if (!durationArray || !durationArray.length) return "Unknown";

  return durationArray.map(d => {
    let text = "";

    if (d.type === "instant") {
      text = "Instant";
    } else if (d.type === "timed") {
      const amount = d.duration?.amount ?? "";
      const unit = d.duration?.type ?? "";
      text = `${amount} ${unit}`;
    }

    if (d.concentration) {
      text += " (Concentration)";
    }

    return text;
  }).join(", ");
}


  // ===== BUILD DROPDOWNS & CHECKBOXES =====
  function buildMonsterDropdown(monsters) {
    monsterSelect.innerHTML = `<option value="">-- Choose a monster --</option>`;
    monsters.forEach((m,i) => {
      const option = document.createElement("option");
      option.value = i;
      option.textContent = m.name;
      monsterSelect.appendChild(option);
    });

    monsterSelect.addEventListener("change", e => {
      const index = e.target.value;
      if (index !== "") renderMonster(monsters[index]);
    });
  }

  function buildTypeCheckboxes(monsters) {
    const types = [...new Set(monsters.map(m => m.type.replace(/\s*\(.*?\)/,"")))].sort();
    typeCheckboxesDiv.innerHTML = "";
    types.forEach(type => {
      const label = document.createElement("label");
      label.style.marginRight="5px";
      const cb = document.createElement("input");
      cb.type="checkbox";
      cb.value = type;
      label.appendChild(cb);
      label.appendChild(document.createTextNode(type));
      typeCheckboxesDiv.appendChild(label);
    });
  }

  const crValues = ["0","1/8","1/4","1/2", ...Array.from({length:30},(_,i)=>`${i+1}`)];
  crValues.forEach(cr => {
    const label = document.createElement("label");
    label.style.marginRight="5px";
    const cb = document.createElement("input");
    cb.type="checkbox";
    cb.value = cr;
    label.appendChild(cb);
    label.appendChild(document.createTextNode(cr));
    crCheckboxesDiv.appendChild(label);
  });

 function filterMonsters() {
  const searchText = nameFilterInput.value.toLowerCase();
  const comparison = crComparisonSelect.value;

  const selectedCRs = Array.from(crCheckboxesDiv.querySelectorAll("input:checked")).map(cb => cb.value);
  const selectedTypes = Array.from(typeCheckboxesDiv.querySelectorAll("input:checked")).map(cb => cb.value);
  const ownChecked = document.getElementById("ownCheckbox").checked;

  const filtered = allMonsters.filter(mon => {
    // Name filter
    if (!mon.name.toLowerCase().includes(searchText)) return false;

    // CR filter
    if (selectedCRs.length) {
      const monCRNum = crToNumber(mon.challenge.split(" ")[0]);
      const matchesCR = selectedCRs.some(cr => {
        const crNum = crToNumber(cr);
        if (comparison === "=") return monCRNum === crNum;
        if (comparison === "<") return monCRNum < crNum;
        if (comparison === ">") return monCRNum > crNum;
        return false;
      });
      if (!matchesCR) return false;
    }

    // Type filter
    if (selectedTypes.length) {
      const typeClean = mon.type.replace(/\s*\(.*?\)/, "");
      if (!selectedTypes.includes(typeClean)) return false;
    }

    // Own filter
    if (ownChecked && !mon.own) return false;

    return true;
  });

  // Update main dropdown
  monsterSelect.innerHTML = `<option value="">-- Choose a monster --</option>`;
  filtered.forEach(mon => {
    const option = document.createElement("option");
    option.value = allMonsters.indexOf(mon);
    option.textContent = mon.name;
    monsterSelect.appendChild(option);
  });

  if (filtered.length > 0) {
    monsterSelect.value = allMonsters.indexOf(filtered[0]);
    renderMonster(filtered[0]);
  } else {
    monsterSelect.value = "";
    document.getElementById("statblock").innerHTML = "";
  }

  // Update combat tracker dropdowns
  document.querySelectorAll(".groupMonster").forEach(select => {
    const currentValue = select.value;
    select.innerHTML = filtered.map(mon => {
      const idx = allMonsters.indexOf(mon);
      return `<option value="${idx}" ${idx == currentValue ? "selected" : ""}>${mon.name}</option>`;
    }).join("");

    if (!Array.from(select.options).some(opt => opt.value == currentValue) && currentValue !== "") {
      const mon = allMonsters[currentValue];
      select.innerHTML += `<option value="${currentValue}" selected>${mon.name}</option>`;
    }
  });
}

// ===== BUILD SPELL DROPDOWN & CHECKBOXES =====
function buildSpellDropdown(spells) {
  spellSelect.innerHTML = `<option value="">-- Choose a spell --</option>`;
  spells.forEach((s, i) => {
    const option = document.createElement("option");
    option.value = i;
    option.textContent = s.name;
    spellSelect.appendChild(option);
  });

  spellSelect.addEventListener("change", e => {
    const index = e.target.value;
    if (index !== "") renderSpell(spells[index]);
  });
}


// ===== SPELL SCHOOL CHECKBOXES =====
function buildSpellSchoolCheckboxes(spells) {
  // Create a unique list of school codes
  const uniqueCodes = [...new Set(spells.map(s => s.school))];

  // Map codes to { code, name } and sort by name
  const schools = uniqueCodes
    .map(code => ({ code, name: spellSchoolNames[code] || code }))
    .sort((a, b) => a.name.localeCompare(b.name));

  spellSchoolCheckboxesDiv.innerHTML = "";

schools.forEach(school => {
  const label = document.createElement("label");
  label.style.marginRight = "5px";

  const cb = document.createElement("input");
  cb.type = "checkbox";
  cb.value = school.code; 

  // Trigger filtering when changed
  cb.addEventListener("change", filterSpells);

  label.appendChild(cb);
  label.appendChild(document.createTextNode(school.name));
  spellSchoolCheckboxesDiv.appendChild(label);
});

}

spellNameFilterInput.addEventListener("input", filterSpells);


// ===== SPELL LEVEL CHECKBOXES =====
// Build spell level checkboxes (Cantrips + Levels 1-9)
function buildSpellLevelCheckboxes() {
  const levels = [0, ...Array.from({ length: 9 }, (_, i) => i + 1)];
  spellLevelCheckboxesDiv.innerHTML = "";

  levels.forEach(level => {
    const label = document.createElement("label");
    label.style.marginRight = "5px";

    const cb = document.createElement("input");
    cb.type = "checkbox";
    cb.value = level;

    // Trigger filtering when changed
    cb.addEventListener("change", filterSpells);

    label.appendChild(cb);
    label.appendChild(document.createTextNode(level === 0 ? "Cantrip" : `Lv ${level}`));
    spellLevelCheckboxesDiv.appendChild(label);
  });
}




// ===== FILTER SPELLS =====
function filterSpells() {
  const searchText = spellNameFilterInput.value.toLowerCase();
  const comparison = levelComparisonSelect.value;

  const selectedSchools = Array.from(
    spellSchoolCheckboxesDiv.querySelectorAll("input:checked")
  ).map(cb => cb.value);

  const selectedLevels = Array.from(
    spellLevelCheckboxesDiv.querySelectorAll("input:checked")
  ).map(cb => Number(cb.value));

  const filtered = spells.filter(spell => {
    if (!spell.name.toLowerCase().includes(searchText)) return false;
    if (selectedSchools.length && !selectedSchools.includes(spell.school)) return false;
    if (selectedLevels.length && !selectedLevels.includes(spell.level)) return false;
    return true;
  });

  spellSelect.innerHTML = `<option value="">-- Choose a spell --</option>`;
  filtered.forEach(spell => {
    const idx = spells.indexOf(spell);
    const option = document.createElement("option");
    option.value = idx;
    option.textContent = spell.name;
    spellSelect.appendChild(option);
  });

  if (filtered.length > 0) {
    spellSelect.value = spells.indexOf(filtered[0]);
    renderSpell(filtered[0]);
  } else {
    spellSelect.value = "";
    document.getElementById("spell-statblock").innerHTML = "";
  }
}

// ===== RESET FILTERS BUTTON =====

const resetFiltersBtn = document.getElementById("resetFiltersBtn");

resetFiltersBtn.addEventListener("click", () => {
  // Reset text input
  nameFilterInput.value = "";

  // Reset CR checkboxes
  crCheckboxesDiv.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = false);

  // Reset type checkboxes
  typeCheckboxesDiv.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = false);

  // Reset "Own" checkbox
  const ownCheckbox = document.getElementById("ownCheckbox");
  if (ownCheckbox) ownCheckbox.checked = false;

  // Re-filter monsters
  filterMonsters();
});


const resetSpellFiltersBtn = document.getElementById("resetSpellFiltersBtn");

resetSpellFiltersBtn.addEventListener("click", () => {
  spellNameFilterInput.value = "";
  spellLevelCheckboxesDiv.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = false);
  spellSchoolCheckboxesDiv.querySelectorAll("input[type='checkbox']").forEach(cb => cb.checked = false);
  filterSpells();
});



// ===== COMBAT TRACKER =====
function renderCombatTracker() {
  groupsContainer.innerHTML="";
  combatGroups.sort((a,b)=>a.roundOrder-b.roundOrder).forEach((group, gi)=>{
    const monster = allMonsters[group.monsterIndex];
    if (!monster) return;

    if (!group.hp || group.hp.length !== group.count) {
      group.hp = Array(group.count).fill().map(()=>({ hp: monster.hp?.average || 0, conditions: [] }));
    }

    const div = document.createElement("div");
    div.className="group";

    const imgPath = getMonsterImagePath(monster);

    div.innerHTML = `
      <div class="group-header-row">
        <img src="${imgPath}" alt="${monster.name}" class="group-monster-image" onerror="this.style.display='none'">
        <h3 class="group-header" data-monster-index="${group.monsterIndex}">${monster.name}</h3>
      </div>

      <label>Monster</label>
      <select class="groupMonster">
        ${allMonsters.map((m,i)=>`<option value="${i}" ${i===group.monsterIndex?"selected":""}>${m.name}</option>`).join("")}
      </select>

      <div class="group-row">
        <div class="round-control">
          <label>Round</label>
          <div class="round-controls">
            <button class="round-minus" data-index="${gi}">−</button>
            <input type="number" class="groupRound" value="${group.roundOrder}" data-index="${gi}">
            <button class="round-plus" data-index="${gi}">+</button>
          </div>
        </div>

        <div class="count-control">
          <label>Count</label>
          <div class="count-controls">
            <button class="count-minus">-</button>
            <input type="number" class="groupCount" value="${group.count}">
            <button class="count-plus">+</button>
          </div>
        </div>
      </div>

      <div class="hp-list"></div>
      <button class="group-delete">Remove Group</button>
    `;

    groupsContainer.appendChild(div);

    // MONSTER SELECT
    div.querySelector(".groupMonster").addEventListener("change", e=>{
      group.monsterIndex = Number(e.target.value);
      group.hp = Array(group.count).fill().map(()=>({ hp: allMonsters[group.monsterIndex].hp?.average || 0, conditions: [] }));
      renderCombatTracker();
    });
    div.querySelector(".group-header").addEventListener("click", ()=>{
      renderMonster(monster);
      monsterSelect.value = group.monsterIndex;
        monsterFilters.style.display = "block";
  monsterStatblock.style.display = "block";
    });

    // ROUND +/-
    div.querySelector(".round-minus").addEventListener("click", ()=>{ if(group.roundOrder>1) { group.roundOrder--; renderCombatTracker(); } });
    div.querySelector(".round-plus").addEventListener("click", ()=>{ group.roundOrder++; renderCombatTracker(); });
    div.querySelector(".groupRound").addEventListener("change", e=>{ group.roundOrder=Math.max(1,Number(e.target.value)); renderCombatTracker(); });

    // COUNT +/-
    const countInput = div.querySelector(".groupCount");
    div.querySelector(".count-minus").addEventListener("click", ()=>{
      if(group.count>1){ group.count--; group.hp.pop(); renderCombatTracker(); }
    });
    div.querySelector(".count-plus").addEventListener("click", ()=>{
      group.count++; group.hp.push({ hp: monster.hp?.average||0, conditions: [] }); renderCombatTracker();
    });
    countInput.addEventListener("change", e=>{
      const newCount = Math.max(1, Number(e.target.value));
      while(group.hp.length<newCount) group.hp.push({ hp: monster.hp?.average||0, conditions: [] });
      group.hp = group.hp.slice(0,newCount);
      group.count = newCount;
      renderCombatTracker();
    });

    // HP + CONDITIONS
    const hpList = div.querySelector(".hp-list");
    hpList.innerHTML="";
    group.hp.forEach((m,i)=>{
      const hpRow = document.createElement("div");
      hpRow.className="hp-row";
      hpRow.innerHTML=`
        <span class="monster-number">${i+1}.</span>
        <button class="hp-plus" data-index="${i}">+</button>
        <input type="number" class="hp-input" value="${m.hp}" data-index="${i}">
        <button class="hp-minus" data-index="${i}">-</button>
        <button class="hp-delete" data-index="${i}">✖</button>
      `;
      hpRow.querySelector(".hp-plus").addEventListener("click", ()=>{ m.hp++; renderCombatTracker(); });
      hpRow.querySelector(".hp-minus").addEventListener("click", ()=>{ m.hp=Math.max(0,m.hp-1); renderCombatTracker(); });
      hpRow.querySelector(".hp-input").addEventListener("change", e=>{ m.hp=Number(e.target.value); });
      hpRow.querySelector(".hp-delete").addEventListener("click", ()=>{ group.hp.splice(i,1); group.count--; renderCombatTracker(); });

      const condDiv = document.createElement("div");
      condDiv.className="conditions-container";
      condDiv.innerHTML=`
        <select class="condition-select" data-index="${i}">
          <option value="">Add condition...</option>
          ${DND_CONDITIONS.map(c=>`<option value="${c}">${c}</option>`).join("")}
        </select>
        <div class="condition-list">
${m.conditions.length ? m.conditions.map(c => `<span class="condition" title="${CONDITION_DESCRIPTIONS[c] || ""}">${c}</span>`).join(" ") : "None"}
</div>
   `;
      condDiv.querySelector(".condition-select").addEventListener("change", e=>{
        const val = e.target.value;
        if(val && !m.conditions.includes(val)){ m.conditions.push(val); e.target.value=""; renderCombatTracker(); }
      });
      condDiv.querySelectorAll(".condition").forEach((span,idx)=>span.addEventListener("click", ()=>{ m.conditions.splice(idx,1); renderCombatTracker(); }));
      hpList.appendChild(hpRow);
      hpList.appendChild(condDiv);
    });

    // REMOVE GROUP
    div.querySelector(".group-delete").addEventListener("click", ()=>{ combatGroups.splice(gi,1); renderCombatTracker(); });
  });
}

// ===== EVENT LISTENERS =====
[ nameFilterInput, crComparisonSelect, crCheckboxesDiv, typeCheckboxesDiv, document.getElementById("ownCheckbox") ]
.forEach(el => {
    el.addEventListener(el.tagName === "SELECT" ? "change" : "input", filterMonsters);
});


// ===== FIXED ADD GROUP BUTTON =====
addGroupBtn.addEventListener("click", ()=>{
  const monsterIndex = monsterSelect ? Number(monsterSelect.value) : 0; // use currently selected monster if available
  const monster = allMonsters[monsterIndex];
  const newGroup = {
    id: Date.now(),
    monsterIndex,
    count: 1,
    roundOrder: 1,
    hp: [{ hp: monster.hp?.average || 0, conditions: [] }]
  };
  combatGroups.push(newGroup);
  renderCombatTracker();
});

// RESET
resetBtn.addEventListener("click", ()=>{
  combatGroups=[]; renderCombatTracker();
});

// ===== INITIAL FETCH =====
Promise.all([
    fetch("data/monsters.json").then(res => res.json()),
    fetch("data/monsters_fluff.json").then(res => res.json())
  ])
  .then(([monsters, fluff]) => {
    allMonsters = monsters.sort((a,b) => a.name.localeCompare(b.name));

    // Build a lookup table for fluff
window.fluffData = fluff;


    buildTypeCheckboxes(allMonsters);
    buildMonsterDropdown(allMonsters);

    if(allMonsters.length>0){
      renderMonster(allMonsters[0]);
      monsterSelect.value = 0;
    }
  })
  .catch(err => console.error("Failed to load monsters or fluff:", err));
});




const monsterBtn = document.getElementById("Monsterstats");
const spellsBtn = document.getElementById("Spells");

const monsterFilters = document.getElementById("monster-filters");
const spellFilters = document.getElementById("spell-filters");

const monsterStatblock = document.getElementById("monster-statblock");
const spellStatblock = document.getElementById("spell-statblock");

monsterBtn.addEventListener("click", () => {
  // Show monsters
  monsterFilters.style.display = "block";
  monsterStatblock.style.display = "block";

  // Hide spells
  spellFilters.style.display = "none";
  spellStatblock.style.display = "none";
});

spellsBtn.addEventListener("click", () => {
  // Show spells
  spellFilters.style.display = "block";
  spellStatblock.style.display = "block";

  // Hide monsters
  monsterFilters.style.display = "none";
  monsterStatblock.style.display = "none";
});

