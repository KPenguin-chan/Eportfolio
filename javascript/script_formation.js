window.onload = init;

function vers_gauche() {

    let interrieur = document.getElementById("carrousel_int");
    let exterrieur = document.getElementById("carrousel_ext");

    let activ_elmt = interrieur.firstElementChild;
    let suivant = exterrieur.firstElementChild;

    if (activ_elmt && suivant) {
        interrieur.removeChild(activ_elmt);
        exterrieur.appendChild(activ_elmt);
        exterrieur.removeChild(suivant);
        interrieur.appendChild(suivant);
    }
}

function vers_droite() {

    let interrieur = document.getElementById("carrousel_int");
    let exterrieur = document.getElementById("carrousel_ext");

    let activ_elmt = interrieur.firstElementChild;
    let precedent = exterrieur.lastChild;

    if (activ_elmt && precedent) {
        interrieur.removeChild(activ_elmt);
        exterrieur.appendChild(activ_elmt);
        exterrieur.removeChild(precedent);
        interrieur.appendChild(precedent);
    }
}
function init() {

    let bGauche = document.getElementById("bGauche");
    let bDroite = document.getElementById("bDroite");

    bDroite.onclick = vers_droite;
    bGauche.onclick = vers_gauche;
}
