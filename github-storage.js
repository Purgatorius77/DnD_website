const owner = "Purgatorius77";
const repo = "DnD_website";
const branch = "main";

// Token is stored in the browser only (never committed)
const GITHUB_TOKEN = localStorage.getItem("github_token");

async function saveCharacterToGitHub(data, name) {
  if (!GITHUB_TOKEN) throw "Missing GitHub token";

  const path = `data/characters/${name}.json`;
  const content = btoa(unescape(encodeURIComponent(JSON.stringify(data, null, 2))));
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  let sha = null;
  const existing = await fetch(url, { headers: { Authorization: `token ${GITHUB_TOKEN}` } });
  if (existing.ok) sha = (await existing.json()).sha;

  const res = await fetch(url, {
    method: "PUT",
    headers: {
      Authorization: `token ${GITHUB_TOKEN}`,
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ message: `Save ${name}`, content, sha })
  });

  if (!res.ok) throw await res.text();
}

async function loadCharacterFromGitHub(name) {
  const path = `data/characters/${name}.json`;
  const url = `https://api.github.com/repos/${owner}/${repo}/contents/${path}`;

  const res = await fetch(url);
  if (!res.ok) throw "Not found";

  const j = await res.json();
  const data = JSON.parse(decodeURIComponent(escape(atob(j.content))));

  localStorage.setItem("character_" + name, JSON.stringify(data));
  populateCharacterForm(data);
}

