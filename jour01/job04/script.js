function bissextile(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
        return true;
    } else {
        return false;
    }
}

const year = prompt("Entrez une annee : ");
if (bissextile(year)) {
    console.log(year + " est une annee bissextile");
} else {
    console.log(year + " n'est pas une annee bissextile");
}