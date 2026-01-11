// /js/tables/tables.js
import { initTableFilters } from "../filters/tablesfilter.js";
import { loadJSON } from "../data/dataloader.js";

export async function initTables() {
  // Load index.json
  const tablePaths = await loadJSON("../data/index.json");

  const tables = [];

  for (const path of tablePaths) {
    try {
      const data = await loadJSON(path);
      // flatten each "table" entry
      data.table.forEach(t => tables.push(t));
    } catch (err) {
      console.warn("Failed to load table", path, err);
    }
  }

  console.log("Loaded tables:", tables);
  initTableFilters(tables);

  // Listen for table selection
  document.addEventListener("tableSelected", e => {
    renderTableStatblock(e.detail);
  });
}

function renderTableStatblock(table) {
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


