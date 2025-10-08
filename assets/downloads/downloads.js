const versionPaths = [

  "/assets/downloads/latest.html",
  "/assets/downloads/4.html",
  "/assets/downloads/3.html",
  "/assets/downloads/2.html",
  "/assets/downloads/1.html",

];

const insertIds = [

  "latest",
  "v4",
  "v3",
  "v2",
  "v1"
  
];

document.addEventListener("DOMContentLoaded", () => {
	
  for (let i = 0; i < insertIds.length; i++) {

    const id = insertIds[i];
    const versionPath = versionPaths[i];

    const containerEl = document.getElementById(id);
    if (!containerEl) {
      console.error(`Can't find element with id « ${id} »`);
      continue;
    }

    fetch(versionPath)
      .then(response => {
        if (!response.ok) {
          throw new Error(`Error loading ${versionPath} : ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        containerEl.innerHTML = html;
      })
      .catch(error => {
        console.error("Fetch error :", error);
        containerEl.textContent = `Le projet ${versionPath} n'a pas pu être chargé.`;
      });
  }

});
