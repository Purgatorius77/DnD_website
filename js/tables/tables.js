// /js/tables/tables.js
// /js/tables/tables.js
import { loadJSON } from "../data/dataloader.js";

export async function initTables() {
  const tablePaths = await loadJSON("../data/index.json");  // For github this should be /DnD_website/data/index.json
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


export function renderTableStatblock(table) {
  const container = document.getElementById("tables-statblock");
  container.style.display = "block";

  const colHeaders = table.colLabels.map(cl => `<th>${cl}</th>`).join("");
  const rowsHtml = table.rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join("")}</tr>`).join("");

  container.innerHTML = `
    <h2>${table.name} (${table.source})</h2>
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

