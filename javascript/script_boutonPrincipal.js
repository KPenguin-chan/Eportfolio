window.onload = init;

function affiche() {
    let div_affichage = document.getElementById("principal")
    let bouton = document.getElementById("affiche_principal");
    let bienvenue = document.getElementById("bienvenue")
    bienvenue.style.display = "none"
    bouton.style.display = "none";
    div_affichage.style.backgroundImage =  "none";
    div_affichage.style.paddingTop = "30%"
    let img = document.createElement("img");
    img.src = "./images/julie.png";
    img.style.width = "50%";

    let presentation = document.createElement("ul");
    let elm1 = document.createElement("li")
    let elm2 = document.createElement("li")
    let elm3 = document.createElement("li")
    let elm4 = document.createElement("li");
    let elm5 = document.createElement("li");
    let elm6 = document.createElement("li");
    elm1.appendChild(document.createTextNode("Bonjour, je m'appelle Julie Leroy, je vous souhaite la bienvenue sur mon Eporfolio "));
    elm2.appendChild(document.createTextNode("Voici mes informations accésible rapidement: "));
    elm3.appendChild(document.createTextNode("Adresse email : julie.leroy02pr@hotmail.com "));
    elm4.appendChild(document.createTextNode("Numéro de téléphone : Me contacter par email d'abord"))
    elm5.appendChild(document.createTextNode("Date de naissance : 5 février 2005 (20 ans)"))
    elm6.appendChild(document.createTextNode("Lien LinkedIn : https://www.linkedin.com/in/julie-leroy-82872b2aa/"))
    presentation.style.listStyle = "none"
    presentation.style.textAlign = "center"

    presentation.style.backgroundColor = "#a4ced5"
    presentation.appendChild(elm1)
    presentation.appendChild(elm2)
    presentation.appendChild(elm5)
    presentation.appendChild(elm3)
    presentation.appendChild(elm4)
    presentation.appendChild(elm6)
    div_affichage.appendChild(img);
    div_affichage.appendChild(presentation);

}

function init(){
    let bouton = document.getElementById("affiche_principal");
    bouton.onclick = affiche;
}