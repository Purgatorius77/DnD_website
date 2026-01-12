// /js/tables/tables.js
// /js/tables/tables.js
import { loadJSON } from "../data/dataloader.js";

export async function initTables() {
  const tablePaths = await loadJSON("/DnD_website/data/index.json");  // For github this should be /DnD_website/data/index.json
  const tables = [];

  for (const path of tablePaths) {
    try {
      const data = await loadJSON(path);
      if (!data?.table) continue;

      data.table.forEach(t => tables.push(t));
    } catch (err) {
      console.warn("Failed to load table", path, err);
    }
  }

  console.log("initTables(): returning", tables.length, "tables");
  return tables;   // 🔥 THIS is the missing piece
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
  
  return text;
}






import { tableSourceNames } from "../filters/tablesfilter.js";

export function renderTableStatblock(table) {
  const container = document.getElementById("tables-statblock");
  container.style.display = "block";

  // Full source string
  const sourceFull = tableSourceNames[table.source] || table.source;

  // Add chapter info if available
  let chapterStr = "";
  if (table.chapter?.name && table.chapter.ordinal?.identifier) {
    chapterStr = `, Chapter ${table.chapter.ordinal.identifier}: ${table.chapter.name}`;
  } else if (table.chapter?.name) {
    chapterStr = `, ${table.chapter.name}`; // fallback if number missing
  }


  // Add page if available
  const pageStr = table.page ? `, p.${table.page}` : "";

 const sourceLabel = `Source: ${sourceFull}${chapterStr}${pageStr}`;

  // Column headers
  const colHeaders = table.colLabels.map(cl => `<th>${cl}</th>`).join("");

  // Rows
// Rows
const rowsHtml = table.rows
  .map(r => `<tr>${r.map(c => `<td>${cleanText(c)}</td>`).join("")}</tr>`)
  .join("");


  // Render
  container.innerHTML = `
    <h2>${table.name} (${sourceLabel})</h2>
    <table border="1">
      <thead>
        <tr>${colHeaders}</tr>
      </thead>
      <tbody>
        ${rowsHtml}
      </tbody>
    </table>
  `;
}







