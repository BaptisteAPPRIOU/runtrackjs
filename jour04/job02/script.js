$(document).ready(async function(){
    async function jsonValueKey(chain_json,key){
        let afficher_texte = chain_json[key];
        console.log(afficher_texte);
    }
    try {
        const reponse = await fetch("ecole.json");
        if (!reponse.ok) {
            throw new Error("Failed to fetch JSON data");
        }
        const ecole = await reponse.json();
        await jsonValueKey(ecole,"city");
    } catch (error) {
        console.error(error);
    }
});