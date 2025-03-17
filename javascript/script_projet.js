window.onload = init;

function init() {
    // Récupérer tous les boutons
    let boutons = document.getElementsByTagName("button");

    for (let i = 0; i < boutons.length; i++) {
        boutons[i].onclick = rediriger;
    }
}

function rediriger() {

    let boutonId = this.id;

    let url = boutonId + ".html";

    window.location.href = url;
}