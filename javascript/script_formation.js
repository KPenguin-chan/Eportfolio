window.onload = init;

function vers_gauche() {
    console.log("gauche")
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
function init() {

    let bGauche = document.getElementById("bGauche");

    bGauche.onclick = vers_gauche;
}
