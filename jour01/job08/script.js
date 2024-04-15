function sommeNombresPremiers(num1, num2) {
    if (nombresPremiers(num1) && nombresPremiers(num2)) {
        let val = Number(num1) + Number(num2);
        console.log(val);
        alert("La somme de " + num1 + " et " + num2 + " est : " + val);
        return num1 + num2;
    } else {
        return false;
    }
}

function nombresPremiers(num) {
    if (num <= 1) {
        return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {     // Math.sqrt(num) pour optimiser la boucle
        if (num % i === 0) {
            alert(num + " n'est pas un nombre premier");
            return false;
        }
    }
    return true;
}

sommeNombresPremiers(prompt("Entrez un nombre : "), prompt("Entrez un autre nombre : "));