window.onload = init;

function affiche() {
    let div_affichage = document.getElementById("principal")
    div_affichage.style.backgroundImage =  "url('../images/julie.jpg')";
    let presentation1 = document.createElement("p");
    presentation1.setAttribute("id", "paragraphe1")
    presentation1.appendChild(document.createTextNode("Bonjour, je m'appelle Julie Leroy "));
    let espace = document.createElement("br");
    let presentation2 = document.createElement("p");
    presentation2.setAttribute("id", "paragraphe2")
    presentation2.appendChild(document.createTextNode("Je vous souhaite la bienvenue sur mon Eporfolio"));
    div_affichage.appendChild(presentation1);
    div_affichage.appendChild(espace);
    div_affichage.appendChild(presentation2);
}

function init(){
    let bouton = document.getElementById("affiche_principal");
    bouton.onclick = affiche;
}