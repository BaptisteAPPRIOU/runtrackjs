$(document).ready(function (){
    async function afficher_texte(){
        const reponse = await fetch("C:\Users\tiste\Documents\Cours\Js Runtrack\runtrackjs\jour04\job01\expression.txt");
        const expression = await reponse.text();
        let article = $("<article></article>").text(expression);
        $("body").append(article);
    };
    $("button").click(async function(){
        await afficher_texte();
    });
});