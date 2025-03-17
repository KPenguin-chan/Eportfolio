window.onload = init;

function affiche() {
    let div_affichage = document.getElementById("principal");
    let bouton = document.getElementById("affiche_principal");
    let bienvenue = document.getElementById("bienvenue");

    // Disparition des éléments initiaux
    bienvenue.style.display = "none";
    bouton.style.display = "none";
    div_affichage.style.backgroundImage = "none";
    div_affichage.style.paddingTop = "0%";

    // Image de profil
    let img = document.createElement("img");
    img.src = "./images/julie.png";
    img.style.width = "25%";
    img.style.maxHeight = "25%";
    img.classList.add("fade-in");

    // Bloc d’informations
    let presentation = document.createElement("ul");
    presentation.classList.add("fade-in", "presentation");

    let infos = [
        "Bonjour, je m'appelle Julie Leroy, bienvenue sur mon Eportfolio !",
        "Voici mes informations accessibles rapidement :",
        "Numéro de téléphone : Me contacter par email d'abord",
        "Date de naissance : 5 février 2005 (20 ans)",
        "Lien LinkedIn : <a href='https://www.linkedin.com/in/julie-leroy-82872b2aa/' target='_blank'>Mon LinkedIn</a>"
    ];

    infos.forEach(text => {
        let li = document.createElement("li");
        li.innerHTML = text;
        presentation.appendChild(li);
    });

    // Ajout de l'email avec affichage au clic
    let liEmail = document.createElement("li");
    liEmail.innerHTML = `Adresse email : <span id="email_protected">[Cliquez pour afficher]</span>`;
    liEmail.onclick = afficherEmail;
    presentation.appendChild(liEmail);

    div_affichage.appendChild(img);
    div_affichage.appendChild(presentation);
    div_affichage.style.alignContent = "center";

    // Apparition progressive
    setTimeout(() => {
        img.classList.add("show");
        presentation.classList.add("show");
    }, 200);
}

// Fonction pour révéler l'email
function afficherEmail() {
    let emailElement = document.getElementById("email_protected");
    emailElement.textContent = "julie.leroy02pr@hotmail.com";
    emailElement.classList.add("email-visible"); // Applique le style visible
}

// Initialisation du bouton
function init() {
    let bouton = document.getElementById("affiche_principal");
    bouton.onclick = affiche;
}
