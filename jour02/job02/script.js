var button_created = false

function showhide() {
    if (button_created == false) {
    var article = document.createElement("article");
    var content = document.createTextNode("L'important n'est pas la chute, mais l'atterrissage.");
    article.setAttribute("id", "article");
    article.appendChild(content);
    document.body.appendChild(article);
    button_created = true;
    } else{
        document.getElementById("article").remove();
        button_created = false;
    }
}