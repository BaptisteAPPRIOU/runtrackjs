document.getElementById("button").addEventListener("click", function addOne(){ 
    let cpt = document.getElementById("compteur").textContent;
    cpt++;
    document.getElementById("compteur").textContent = cpt;
    console.log(cpt);
});