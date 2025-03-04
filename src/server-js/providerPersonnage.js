import CONFIG from "./config.js";


export default class providerPersonnage{
    static fetchPersonnages = async (limit = 10) => {
        const options = {
           method: 'GET',
           headers: {
               'Content-Type': 'application/json'
           }
       };
       try {
           const response = await fetch(`${ENDPOINT}?_limit=${limit}`, options)
           const json = await response.json();
           return json
       } catch (err) {
           console.log('Error getting documents', err)
       }
    }
}
fetch(`${CONFIG.API_ENDPOINT}/posts`)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error("Erreur lors de la récupération des données :", error));
