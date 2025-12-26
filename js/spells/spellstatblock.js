// spellstatblock.js

let spells = [];

const spellSchoolNames = {
  A: "Abjuration",
  C: "Conjuration",
  D: "Divination",
  E: "Enchantment",
  V: "Evocation",
  I: "Illusion",
  N: "Necromancy",
  T: "Transmutation"
};

export function initSpellStatblock(spellData) {
  spells = spellData;

  document.addEventListener("spellSelected", e => {
    renderSpell(e.detail);
  });
}

// =================== RENDER CORE ===================

function renderSpell(spell) {
  if (!spell) return;

  document.getElementById("spell-statblock").style.display = "block";

  renderSpellHeader(spell);
  renderSpellContent(spell);
}

// =================== HEADER ===================

function renderSpellHeader(spell) {
  const header = document.getElementById("spell-header");

  header.innerHTML = `
    <div class="stat-block">
      <div class="monster-header-wrapper">
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
}

// =================== CONTENT ===================

function renderSpellContent(spell) {
  const content = document.getElementById("spell-content");

  const castingTime = spell.time.map(t => `${t.number} ${t.unit}`).join(", ");
  const range = formatSpellRange(spell.range);

  const mainEntries = spell.entries.map(renderEntry).join("");

  const higher = spell.entriesHigherLevel?.map(e => {
    const txt = e.entries.map(cleanSpellText).join("<br>");
    return `<p><strong>${e.name}:</strong> ${txt}</p>`;
  }).join("") ?? "";

  content.innerHTML = `
    <div class="stat-block">
      <p><strong>Casting Time:</strong> ${castingTime}</p>
      <p><strong>Range:</strong> ${range}</p>
      <p><strong>Components:</strong> ${formatComponents(spell.components)}</p>
      <p><strong>Duration:</strong> ${formatDuration(spell.duration)}</p>
      <hr>
      ${mainEntries}
      ${higher ? `<hr>${higher}` : ""}
    </div>
  `;
}

// =================== HELPERS ===================

function renderEntry(entry) {
  if (typeof entry === "string") {
    return `<p>${cleanSpellText(entry)}</p>`;
  }

  if (entry.type === "table") {
    return renderTable(entry);
  }

  return "";
}

function renderTable(table) {
  const head = table.colLabels.map(c => `<th>${cleanSpellText(c)}</th>`).join("");
  const rows = table.rows.map(row =>
    `<tr>${row.map(c => `<td>${cleanSpellText(c)}</td>`).join("")}</tr>`
  ).join("");

  return `<table><thead><tr>${head}</tr></thead><tbody>${rows}</tbody></table>`;
}

function cleanSpellText(text) {
  return text.replace(/\{@\w+\s+([^}|]+)(?:\|[^}]*)*\}/g, (_, c) => c);
}

function formatSpellRange(range) {
  if (!range?.distance) return range?.type ?? "Unknown";

  const d = range.distance;
  return d.amount ? `${d.amount} ${d.type}` : d.type;
}

function formatComponents(c) {
  if (!c) return "None";
  return [
    c.v && "Verbal",
    c.s && "Somatic",
    c.m && `Material (${c.m})`
  ].filter(Boolean).join(", ");
}

function formatDuration(arr) {
  return arr.map(d => {
    if (d.type === "instant") return "Instant";
    let txt = `${d.duration.amount} ${d.duration.type}`;
    if (d.concentration) txt += " (Concentration)";
    return txt;
  }).join(", ");
}
