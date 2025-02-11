import CONFIG from "./config.js";

fetch(`${CONFIG.API_ENDPOINT}/posts`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Erreur lors de la récupération des données :", error));
