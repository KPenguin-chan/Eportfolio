window.onload = init;

function affiche() {
    console.log("aff")
    let div_affichage = document.getElementById("principal");
    let bouton = document.getElementById("affiche_principal");
    let bienvenue = document.getElementById("bienvenue");

    bienvenue.style.display = "none";
    bouton.style.display = "none";
    div_affichage.style.backgroundImage = "none";
    div_affichage.style.paddingTop = "0%";

    let img = document.createElement("img");
    img.src = "./images/julie.png";
    img.style.width = "50%";

    let presentation = document.createElement("ul");
    presentation.style.listStyle = "none";
    presentation.style.textAlign = "center";
    presentation.style.backgroundColor = "#a4ced5";
    presentation.style.width = "70%";
    presentation.style.borderRadius = "10px";

    let infos = [
        "Bonjour, je m'appelle Julie Leroy, je vous souhaite la bienvenue sur mon Eportfolio",
        "Voici mes informations accessibles rapidement :",
        "Adresse email : julie.leroy02pr@hotmail.com",
        "Numéro de téléphone : Me contacter par email d'abord",
        "Date de naissance : 5 février 2005 (20 ans)",
        "Lien LinkedIn : https://www.linkedin.com/in/julie-leroy-82872b2aa/"
    ];

    infos.forEach(text => {
        let li = document.createElement("li");
        li.textContent = text;
        presentation.appendChild(li);
    });

    div_affichage.appendChild(img);
    div_affichage.appendChild(presentation);
    div_affichage.style.alignContent = "center";
}



function init() {
    let bouton = document.getElementById("affiche_principal");

    bouton.onclick = affiche;

}


