var bouton_created = false;
$(document).ready(function() {
    $("#button").click(function() {
        if (bouton_created == false) {
            $("#button_delete").show();
            bouton_created = true;
        };
        let article = $("<article></article>").text("“Les logiciels et les cathédrales, c'est un peu la même chose - d'abord, on les construit, ensuite, on prie.”");
        $("body").append(article);
    });
    $("#button_delete").click(function() {
        $("*").hide();
    });
});