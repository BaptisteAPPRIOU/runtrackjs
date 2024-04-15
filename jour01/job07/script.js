function jourTravaille(date){
    let jours = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
    let joursFeries = ["2024-01-01", "2024-04-01", "2024-05-01", "2024-05-08", "2024-05-20", "2024-07-14", "2024-08-15", "2024-11-01", "2024-11-11", "2024-12-25"];
    let dateJour = new Date(date);
    let jour = jours[dateJour.getDay()];
    if(joursFeries.includes(date)){
        console.log("Le " + jour + " " + dateJour.getDate() + "/" + (dateJour.getMonth() + 1) + "/" + dateJour.getFullYear() + " est un jour férié.");
        alert("Le " + jour + " " + dateJour.getDate() + "/" + (dateJour.getMonth() + 1) + "/" + dateJour.getFullYear() + " est un jour férié.");
    } else
    if(jour === "samedi" || jour === "dimanche"){
        console.log("Non, " + jour + " " + dateJour.getDate() + "/" + (dateJour.getMonth() + 1) + "/" + dateJour.getFullYear() + " n'est pas un jour travaillé.");
        alert("Non, " + jour + " " + dateJour.getDate() + "/" + (dateJour.getMonth() + 1) + "/" + dateJour.getFullYear() + " n'est pas un jour travaillé.");
    } else {
        console.log("Oui, " + jour + " " + dateJour.getDate() + "/" + (dateJour.getMonth() + 1) + "/" + dateJour.getFullYear() + " est un jour travaillé.");
        alert("Oui, " + jour + " " + dateJour.getDate() + "/" + (dateJour.getMonth() + 1) + "/" + dateJour.getFullYear() + " est un jour travaillé.");
    }
}
const date = prompt("Entrez une date au format yyyy-mm-dd : ");
jourTravaille(date);