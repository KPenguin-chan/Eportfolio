window.onload = init;

function affiche() {
    let div_affichage = document.getElementById("principal")
    let bouton = document.getElementById("affiche_principal");
    bouton.style.display = "none";
    div_affichage.style.backgroundImage =  "url('images/julie.png')";
    div_affichage.style.paddingTop = "30%"
    let presentation1 = document.createElement("p");
    presentation1.setAttribute("id", "paragraphe1")
    presentation1.appendChild(document.createTextNode("Bonjour, je m'appelle Julie Leroy \n Je vous souhaite la bienvenue sur mon Eporfolio "));

    presentation1.style.textAlign = "center"

    presentation1.style.backgroundColor = "#a4ced5"

    div_affichage.appendChild(presentation1);

}

function init(){
    let bouton = document.getElementById("affiche_principal");
    bouton.onclick = affiche;
}