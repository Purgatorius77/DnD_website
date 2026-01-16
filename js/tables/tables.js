// /js/tables/tables.js
// /js/tables/tables.js
import { loadJSON } from "../data/dataloader.js";

// For github this should be /DnD_website/data/index.json

export async function initTables() {
  const tablePaths = await loadJSON("/DnD_website/data/index.json");
  const tables = [];

  for (const path of tablePaths) {
    try {
      const data = await loadJSON(path);
      if (!data?.table) continue;

      // Inject top_category and sub_category into each table
      data.table.forEach(t => {
        t.top_category = data.top_category ?? "Uncategorized";
        t.sub_category = data.sub_category ?? "Uncategorized";
        tables.push(t);
      });
    } catch (err) {
      console.warn("Failed to load table", path, err);
    }
  }

  console.log("initTables(): returning", tables.length, "tables");
  return tables;
}

/**
 * Cleans inline annotations from 5e-tools-style text.
 * Returns readable text.
 */
export function cleanText(text) {
  if (!text) return "";

  // @item NAME (optional source)
  text = text.replace(/\{@item ([^|}]+)(?:\|[^}]+)?\}/g, "$1");

  // @creature NAME (optional source)
  text = text.replace(/\{@creature ([^|}]+)(?:\|[^}]+)?\}/g, "$1");


  // 🧩 FIX: @table NAME|SRC|DISPLAY
  text = text.replace(/\{@table ([^|}]+)(?:\|[^|}]+)?(?:\|([^}]+))?\}/g, (_, name, display) => display || name);

  // 🧩 FIX: @book NAME|SRC
  text = text.replace(/\{@book ([^|}]+)(?:\|[^}]+)?\}/g, "$1");

  // @variantrule
  text = text.replace(/\{@variantrule ([^|}]+)(?:\|[^}]+)?\}/g, "$1");

  // @action
  text = text.replace(/\{@action ([^|}]+)(?:\|[^}]+)?\}/g, "$1");

  // @skill
  text = text.replace(/\{@skill ([^|}]+)(?:\|[^}]+)?\}/g, "$1");

  // @condition
  text = text.replace(/\{@condition ([^|}]+)(?:\|[^}]+)?\}/g, "$1");

      // @dice
  text = text.replace(/\{@dice ([^|}]+)(?:\|[^}]+)?\}/g, "$1");


    // @deity
  text = text.replace(/\{@deity ([^|}]+)(?:\|[^}]+)?\}/g, "$1");


      // @spell
  text = text.replace(/\{@spell ([^|}]+)(?:\|[^}]+)?\}/g, "$1");

      // @vehicle
  text = text.replace(/\{@vehicle ([^|}]+)(?:\|[^}]+)?\}/g, "$1");

  text = text.replace(/\{@race ([^|}]+)(?:\|[^}]+)?\}/g, "$1");
  
  return text;
}




import { tableSourceNames } from "../filters/tablesfilter.js";

// tables renderer

// tables renderer

/**
 * Cleans 5e-tools-style inline tags for table headers and cells
 * Returns HTML-safe text with formatting
 */
export function cleanTableText(text) {
  if (typeof text !== "string") return text ?? "";

  return text
    // Handle @class: take the 4th field if present, otherwise fallback to the first
    .replace(/\{@class\s+([^|}]+)\|([^|}]+)\|([^|}]+)\|([^|}]+)(?:\|[^}]*)?\}/gi, "$4")
    // Existing replacements
    .replace(/\{@dice\s*([^\}]+)\}/gi, "<strong>$1</strong>")
    .replace(/\{@dc\s+([^}]+)\}/gi, "DC $1")
    .replace(/\{@italic\s+([^|}]+)\}/gi, "<em>$1</em>")
    .replace(/\{@bold\s+([^|}]+)\}/gi, "<strong>$1</strong>")
    .replace(/\{@skill\s+([^|}]+)(?:\|[^}]*)?\}/gi, "$1")
    .replace(/\{@condition\s+([^|}]+)(?:\|[^}]*)?\}/gi, "$1")
    .replace(/\{@sense\s+([^|}]+)(?:\|[^}]*)?\}/gi, "$1")
    .replace(/\{@(spell|item|creature|feat|background|action|vehicle|race)\s+([^|}]+)(?:\|[^}]*)?\}/gi, "$2")
    .replace(/\{@table\s+([^|}]+)(?:\|[^|}]+)?(?:\|([^}]+))?\}/gi, (_, name, display) => display || name)
    .replace(/\{@book\s+([^|}]+)(?:\|[^}]*)?\}/gi, "$1")
    .replace(/\{@variantrule\s+([^|}]+)(?:\|[^}]*)?\}/gi, "<em>$1</em>")
    .replace(/\{@chance\s+(\d+)\}/gi, "$1% chance")
    .replace(/\{@itemProperty\s+[^|}]+\|[^|}]+\|([^}]+)\}/gi, "$1")
    .replace(/\{@itemMastery\s+([^}]+)\}/gi, "$1")
    .replace(/\{@[^}]+\}/g, "");
}

function renderRow(r, colCount) {
  // --- 1️⃣ Single cell object → subheader ---
  if (r?.type === "cell" && r.entry) {
    return `<tr class="table-subheader"><td colspan="${r.width ?? colCount}"><em>${cleanTableText(r.entry)}</em></td></tr>`;
  }

  // --- 2️⃣ Array of cells (subheader row) ---
  if (Array.isArray(r) && r.some(c => c?.type === "cell" && c.entry)) {
    return r
      .filter(c => c?.type === "cell" && c.entry)
      .map(c => `<tr class="table-subheader"><td colspan="${c.width ?? colCount}"><em>${cleanTableText(c.entry)}</em></td></tr>`)
      .join("");
  }

  // --- 3️⃣ Standard row object ---
  if (r?.type === "row" && Array.isArray(r.row)) {
    return `<tr class="${r.style ?? ""}">${r.row.map(c => `<td>${cleanTableText(c)}</td>`).join("")}</tr>`;
  }

  // --- 4️⃣ Simple array row (strings) ---
  if (Array.isArray(r)) {
    return `<tr>${r.map(c => `<td>${cleanTableText(c)}</td>`).join("")}</tr>`;
  }

  return "";
}

export function renderTableStatblock(table) {
  const container = document.getElementById("tables-statblock");
  container.style.display = "block";

  const sourceFull = tableSourceNames[table.source] || table.source;
  const chapterStr = table.chapter?.name
    ? table.chapter.ordinal?.identifier
      ? `, Chapter ${table.chapter.ordinal.identifier}: ${table.chapter.name}`
      : `, ${table.chapter.name}`
    : "";
  const pageStr = table.page ? `, p.${table.page}` : "";
  const sourceLabel = `Source: ${sourceFull}${chapterStr}${pageStr}`;

const catSub = [];
if (table.top_category) catSub.push(`Category: ${table.top_category}`);
if (table.sub_category) catSub.push(`Subcategory: ${table.sub_category}`);

  const catSubStr = catSub.join(", ");

  const colCount = table.colLabels?.length ?? 1;
  const rowsHtml = table.rows.map(r => renderRow(r, colCount)).join("");

  container.innerHTML = `
    <h2>${table.name}</h2>
    ${catSubStr ? `<p>${catSubStr}</p>` : ""}
    <p>${sourceLabel}</p>
    <table border="1">
      ${table.colLabels?.length ? `<thead><tr>${table.colLabels.map(cl => `<th>${cleanTableText(cl)}</th>`).join("")}</tr></thead>` : ""}
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>
  `;
}

