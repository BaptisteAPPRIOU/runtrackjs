function tri(Liste_to_sort,order) {
    let cpt = 0;
    let L = Liste_to_sort;
    let sorted = false;
    while (!sorted) {
        sorted = true;
        for (let k = 0; k < L.length - 1; k++) {
            if (order === "asc" && L[k] > L[k + 1]) {
                let a = L[k];
                L[k] = L[k + 1];
                L[k + 1] = a;
                cpt++;
                console.log(L);
                sorted = false;
            } else if (order === "desc" && L[k] < L[k + 1]) {
                let a = L[k];
                L[k] = L[k + 1];
                L[k + 1] = a;
                cpt++;
                console.log(L);
                sorted = false;
            }
        }
    }
    console.log("Nombre total de coups nécessaires pour trier la liste : " + cpt);
    console.log("Liste triée : " + L);
}
let numbers = [12, 45, 26, 1, 4, 89, 0, 7, 96, 88];
let order = "asc";
tri(numbers, order);
order = "desc";
tri(numbers, order);