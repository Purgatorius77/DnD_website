const FEATS_PATH = "data/feats.json";

const SOURCE_NAMES = {
  PHB: "Player's Handbook",
  XPHB: "Player's Handbook 2024",
  TCE: "Tasha's Cauldron of Everything",
  EFA: "Eberron: Rising from the Last War",
  ERLW: "Eberron: Rising from the Last War",
  DMG: "Dungeon Master's Guide",
  SCAG: "Sword Coast Adventurer's Guide",
  MTF: "Mordekainen's Tome of Foes",
  XGE: "Xanathar's Guide to Everything",
  FRHoF: "Forggotten Realms: Heroes of Feyrun",
  DSotDQ: "Dragonlance: Shadows of the Dragon Queen",
   	SatO: "Sigil and the outlands",
    ABH: "Astarion's book of hungers",
    BMT: "Book of many things",
    LFL: "Lowryn first light",
    BGG: "Glory of the giants",
    FTD: "Fizban's treasury of dragons",
    TDCSR: "Tal'dorei campaign setting reloaded",
    SCC: "Strixhaven: curriculum of chaos",
  // Add more as needed
};

let allFeats = []; // Store all feats in memory

const CATEGORY_NAMES = {
  D: "Dragonmark",
  G: "General",
  FS: "Fighting Style",
  O: "Origin",
  "FS:P": "Fighting Style Replacement (Paladin) ",
  "FS:R": "Fighting Style Replacement (Ranger) ",
  EB: "Epic Boon",
  // Add more categories as needed
};


async function fetchFeats() {
  const res = await fetch(FEATS_PATH);
  if (!res.ok) throw new Error("Failed to load feats.json");
  const data = await res.json();
  return data.feat || [];
}

function renderFeatsTable(feats) {
  if (!feats.length) return "<p>No feats available.</p>";

  let html = `
    <table border="1">
      <thead>
        <tr>
          <th>Name</th>
          <th>Source</th>
          <th>Category</th>
          <th>Prerequisites</th>
          <th>Entries</th>
        </tr>
      </thead>
      <tbody>
  `;

  feats.forEach(f => {
    const sourceName = f.source ? (SOURCE_NAMES[f.source] || f.source) : "N/A";
    const categoryName = f.category ? (CATEGORY_NAMES[f.category] || f.category) : "N/A";
    const prerequisites = f.prerequisite
      ? f.prerequisite.map(p => Object.entries(p).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join("; ")).join(" | ")
      : "None";

const entriesHTML = f.entries
  ? f.entries.map(e => typeof e === "string" ? parseInlineTags(e) : renderFeatEntry(e)).join("")
  : "None";


    html += `
      <tr>
        <td>${f.name}</td>
        <td>${sourceName}</td>
        <td>${categoryName}</td>
        <td>${renderPrerequisite(f.prerequisite)}</td>
        <td>${entriesHTML}</td>

      </tr>
    `;
  });

  html += `</tbody></table>`;
  return html;
}

function renderPrerequisite(prereq) {
  if (!prereq) return "None";

  return prereq.map(p => {
    // handle ability arrays
    if (p.ability) {
      return p.ability.map(a => Object.entries(a).map(([k, v]) => `${k.toUpperCase()} ≥ ${v}`).join(", ")).join("; ");
    }
    // handle other fields
    return Object.entries(p).map(([k, v]) => `${k}: ${JSON.stringify(v)}`).join("; ");
  }).join(" | ");
}


function parseInlineTags(text) {
  if (!text) return "";

  return text.replace(/\{@(\w+)\s+([^}]+)\}/g, (match, type, content) => {
    switch (type) {
      case "status":
        return `<span class="status">${content}</span>`;
      case "variantrule":
        return `<em>${content}</em>`;
      case "dice":
        return `<strong>${content}</strong>`;
      case "filter":
        return content; // can enhance later
      case "book":
        return content; // or make a link if needed
      case "chance":
        return `${content}% chance`; // e.g., {@chance 10}
      default:
        return content; // fallback: show plain
    }
  });
}


function renderFeatEntry(entry) {
  if (typeof entry === "string") return `<p>${entry}</p>`;

  switch (entry.type) {
    case "entries":
      return entry.name
        ? `<h4>${entry.name}</h4>${entry.entries.map(renderFeatEntry).join("")}`
        : entry.entries.map(renderFeatEntry).join("");
    case "list":
      return `<ul>${entry.items.map(i => `<li>${i}</li>`).join("")}</ul>`;
    case "table":
      return `
        <table border="1">
          ${entry.caption ? `<caption>${entry.caption}</caption>` : ""}
          <thead>
            <tr>${entry.colLabels.map(l => `<th>${l}</th>`).join("")}</tr>
          </thead>
          <tbody>
            ${entry.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("")}
          </tbody>
        </table>
      `;
    case "section":
      return entry.entries.map(renderFeatEntry).join("");
    default:
      return ""; // fallback for unknown types
  }
}


function renderFeatsFilters() {
  // Build options for source
  const sourceOptions = Object.entries(SOURCE_NAMES)
    .map(([key, name]) => `<option value="${key}">${name}</option>`)
    .join("");

  // Build options for category
  const categoryOptions = Object.entries(CATEGORY_NAMES)
    .map(([key, name]) => `<option value="${key}">${name}</option>`)
    .join("");

  return `
    <div style="margin-bottom: 1em;">
      <label>Source:
        <select id="featsSourceFilter">
          <option value="">All</option>
          ${sourceOptions}
        </select>
      </label>
      <label style="margin-left: 1em;">Category:
        <select id="featsCategoryFilter">
          <option value="">All</option>
          ${categoryOptions}
        </select>
      </label>
    </div>
  `;
}


function applyFeatsFilters() {
  const sourceFilter = document.getElementById("featsSourceFilter").value;
  const categoryFilter = document.getElementById("featsCategoryFilter").value;

  let filtered = allFeats;

  if (sourceFilter) filtered = filtered.filter(f => f.source === sourceFilter);
  if (categoryFilter) filtered = filtered.filter(f => f.category === categoryFilter);

  document.getElementById("featsTableContainer").innerHTML = renderFeatsTable(filtered);
}


export function initFeats() {
  const characterStatblock = document.getElementById("character-statblock");
  const featsBtn = document.getElementById("featsBtn");

  if (!characterStatblock || !featsBtn) return;

  featsBtn.addEventListener("click", async () => {
    characterStatblock.innerHTML = "<p>Loading feats...</p>";
    try {
      allFeats = await fetchFeats();

      // Render filters + table container
      characterStatblock.innerHTML = `
        ${renderFeatsFilters()}
        <div id="featsTableContainer">${renderFeatsTable(allFeats)}</div>
      `;

      // Attach filter event listeners
      document.getElementById("featsSourceFilter").addEventListener("change", applyFeatsFilters);
      document.getElementById("featsCategoryFilter").addEventListener("change", applyFeatsFilters);

    } catch (err) {
      console.error("Failed to load feats:", err);
      characterStatblock.innerHTML = "<p>Error loading feats.</p>";
    }
  });
}
