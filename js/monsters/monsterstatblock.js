// monsterstatblock.js

let currentMonster = null;
let monsterFluff = null;

const getMonsterImagePath = monster => {
  if (!monster.source || !monster.name) return "";
  let folder = monster.source.split("page")[0].trim();
  return `images/tokens/${encodeURIComponent(folder)}/${encodeURIComponent(monster.name)}.webp`;
};



// ==================== INIT ====================

export function initMonsterStatblock(monsters, fluff, spells) {
  monsterFluff = fluff;
 window.spells = spells; // optional global
  if (monsters.length) {
    renderMonster(monsters[0]);
  }

  document.addEventListener("monsterSelected", e => {
    renderMonster(e.detail);
  });
}

export function getCurrentMonster() {
  return currentMonster;
}




// ==================== RENDER CORE ====================

function renderMonster(mon) {
  if (!mon) return;

  currentMonster = mon;

  renderStatblockHeader(mon);

  const content = document.getElementById("statblock-content");
  const abilities = ["str", "dex", "con", "int", "wis", "cha"];
  const fluff = getMonsterFluff(mon.name);

  content.innerHTML = `
    <div class="stat-block">
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
          ${renderSection("Actions", mon.actions)}
          ${renderSection("Bonus Actions", mon.bonus_actions)}
          ${renderSection("Reactions", mon.reactions)}
          ${renderSection("Legendary Actions", mon.legendary_actions)}

          <h2>Private Information</h2>
          <p>Own: ${mon.own}</p>
          <p>Number: ${mon.number}</p>
          <p>Storage: ${mon.storage ?? "—"}</p>
          <p>Homebrew: ${mon.homebrew ?? "—"}</p>
        </div>

        <!-- BACKGROUND TAB -->
        <div class="tab-content" id="tab-background" style="display:none;">
          ${fluff && fluff.entries ? renderFluffEntries(fluff.entries) : `<p>No background information available.</p>`}
        </div>
      </div>
    </div>
  `;

  setupTabs();
  attachSpellLinkListeners();

}

// ==================== HEADER ====================



export function renderStatblockHeader(mon) {
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
                    <!-- Add Monster Button -->
          <button id="addMonsterBtn">Add to Combat</button>
            <button class="tab-button active" data-tab="stats">Statblock</button>
            <button class="tab-button" data-tab="background">Background</button>
          </div>
        </div>
      </div>
    </div>
  `;

  // ✅ Attach button AFTER it exists
  const addBtn = document.getElementById("addMonsterBtn");
  if (addBtn) {
    addBtn.onclick = () => {
      document.dispatchEvent(new CustomEvent("addMonsterToCombat", { detail: mon }));
    };
  }
// Example snippet inside renderStatblockHeader(mon)
const spellContainer = document.getElementById("monster-spells");
if (spellContainer) {
  spellContainer.innerHTML = mon.spells?.map(spell => `
    <button class="monster-spell-btn" data-spell="${spell.name}">${spell.name}</button>
  `).join("") || "";

  // Add click listeners
  spellContainer.querySelectorAll(".monster-spell-btn").forEach(btn => {
    btn.addEventListener("click", () => {
      const spellName = btn.dataset.spell;
      const spell = window.spells.find(s => s.name === spellName);
      if (spell) onMonsterSpellClick(spell, mon);
    });
  });
}

  
}

function onMonsterSpellClick(spell, monster) {
  // currentMonster is already set when renderMonster(monster) was called
  const spellStatblock = document.getElementById("spell-statblock");
  const monsterStatblock = document.getElementById("monster-statblock");
  const monsterFilters = document.getElementById("monster-filters");

  // Hide monster
  if (monsterStatblock) monsterStatblock.style.display = "none";
  if (monsterFilters) monsterFilters.style.display = "none";

  // Show spell
  if (spellStatblock) spellStatblock.style.display = "block";

  renderSpell(spell); // Your function that fills the spell statblock
}



// ==================== HELPERS ====================

const renderList = (title, list) =>
  list?.length ? `<p><strong>${title}:</strong> ${list.join(", ")}</p>` : "";

const renderSection = (title, items) => {
  if (!items || items.length === 0) return "";

  return `<h2>${title}</h2>` + items.map(i => {
    const textWithLinks = makeSpellsClickableInText(i.text, spells);
    return `<p><strong>${i.name}.</strong> ${textWithLinks}</p>`;
  }).join("");
};

// Function to make spell names clickable in the action text
function makeSpellsClickableInText(text, spellsList) {
  if (!text || !spellsList || spellsList.length === 0) return text;

  spellsList.forEach(spell => {
    const name = spell.name;

    // escape regex characters
    const safeName = name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");

    // CASE INSENSITIVE MATCH
    const regex = new RegExp(`\\b${safeName}\\b`, "gi");

    text = text.replace(regex, match =>
      `<a class="spell-link" data-spell="${spell.name}">${match}</a>`
    );
  });

  return text;
}


// Fluff functions
function getMonsterFluff(name) {
  if (!monsterFluff) return null;

  const fluff = monsterFluff.find(f => f.name === name);
  if (!fluff) return null;

  let entries = [];

  if (Array.isArray(fluff.entries)) {
    entries = [...fluff.entries];
  }

  if (!entries.length && fluff._copy) {
    const base = monsterFluff.find(f =>
      f.name === fluff._copy.name &&
      f.source === fluff._copy.source
    );

    if (base?.entries) entries = [...base.entries];

    const mod = fluff._copy._mod?.entries;
    if (mod?.items) {
      let modEntries = [];

      if (Array.isArray(mod.items)) {
        modEntries = mod.items;
      } else if (Array.isArray(mod.items.entries)) {
        modEntries = mod.items.entries;
      }

      if (modEntries.length) {
        if (mod.mode === "prependArr") {
          entries = [...modEntries, ...entries];
        } else if (mod.mode === "appendArr") {
          entries = [...entries, ...modEntries];
        }
      }
    }
  }

  if (!entries.length) return null;

  entries = cleanFluffEntries(entries);
  entries = labelHabitatAndTreasure(entries);

  return { name, entries };
}



function cleanFluffEntries(entries) {
  if (!Array.isArray(entries)) return entries;

  return entries.map(entry => {
    if (typeof entry === "string") return stripDnDMarkup(entry);

    if (entry.type === "section") {
      return { ...entry, name: stripDnDMarkup(entry.name || ""), entries: cleanFluffEntries(entry.entries) };
    }

    if (entry.type === "list" && Array.isArray(entry.items)) {
      return { ...entry, items: entry.items.map(i => ({ ...i, name: i.name ? stripDnDMarkup(i.name) : i.name, entry: i.entry ? stripDnDMarkup(i.entry) : i.entry })) };
    }

    return entry;
  });
}

function renderFluffEntries(entries) {
  if (!entries) return "";
  return entries.map(entry => {
    if (typeof entry === "string") return `<p>${entry}</p>`;
    if (entry.type === "item") return `<p><strong>${entry.name}</strong> ${entry.entry}</p>`;
    if ((entry.type === "section" || entry.type === "entries") && Array.isArray(entry.entries)) {
      const title = entry.name ? `<h3>${entry.name}</h3>` : "";
      return title + renderFluffEntries(entry.entries);
    }
    if (entry.type === "list" && Array.isArray(entry.items)) {
      return `<ul>${entry.items.map(i => `<li>${i.name ? `<strong>${i.name}</strong> ` : ""}${i.entry || ""}</li>`).join("")}</ul>`;
    }
    if (entry.type === "table" && Array.isArray(entry.rows)) {
      const caption = entry.caption ? `<caption>${entry.caption}</caption>` : "";
      const header = entry.colLabels ? `<thead><tr>${entry.colLabels.map(c => `<th>${c}</th>`).join("")}</tr></thead>` : "";
      const body = `<tbody>${entry.rows.map(r => `<tr>${r.map(cell => `<td>${cell}</td>`).join("")}</tr>`).join("")}</tbody>`;
      return `<table>${caption}${header}${body}</table>`;
    }
    return "";
  }).join("");
}

function stripDnDMarkup(text) {
  if (!text) return text;
  let cleaned = text;
  const markupPattern = /\{@[a-zA-Z]+ ([^{}|]+)(\|[^{}]+)?\}/g;
  while (markupPattern.test(cleaned)) cleaned = cleaned.replace(markupPattern, "$1");
  cleaned = cleaned.split("|")[0];
  return cleaned.trim();
}

function labelHabitatAndTreasure(entries) {
  if (!Array.isArray(entries)) return entries;
  return entries; // Optionally implement label logic if needed
}


function attachSpellLinkListeners() {
  document.querySelectorAll(".spell-link").forEach(link => {
    link.onclick = e => {
      e.preventDefault();
      const spellName = link.dataset.spell;
      const spell = spells.find(s => s.name === spellName);
      if (!spell) return;

      // Dispatch custom event to select spell
      document.dispatchEvent(new CustomEvent("spellSelected", { detail: spell }));

      // Optionally switch view to spell tab
      const monsterTab = document.getElementById("statblock-content");
      const spellStatblock = document.getElementById("spell-statblock");
      const monsterStatblock = document.getElementById("monster-statblock");

      if (monsterStatblock && spellStatblock) {
        monsterStatblock.style.display = "none";
        spellStatblock.style.display = "block";
      }
    };
  });
}

// ==================== TABS ====================

function setupTabs() {
  const header = document.getElementById("statblock-header");
  const content = document.getElementById("statblock-content");

  if (!header || !content) return;

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



export { renderMonster };
export { getMonsterImagePath };
