//Haut, haut, bas, bas, gauche, droite, gauche, droite, B, A
var code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65],
n = 0;
let image = document.createElement('img');
image.src = "logo_laplateforme.png";
document.addEventListener('keydown', function (e) {
    if (e.keyCode === code[n++]) {
        if (n === code.length) {
            // alert('Konami code activé');
            document.body.style.backgroundColor = "#2ea3f2";
            document.body.appendChild(image);
            n = 0;
            return false;
        }
    }
    else {
        n = 0;
        document.body.removeChild(image);
        document.body.style.backgroundColor = "white";
    }
});