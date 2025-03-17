window.onload = init;
function changeImages(sectionId) {
    let images = document.querySelectorAll(`#${sectionId} img`);
    let index = 0;

    setInterval(() => {
        images[index].classList.remove('active'); // Retire la classe active de l’image actuelle
        index = (index + 1) % images.length; // Passe à l’image suivante
        images[index].classList.add('active'); // Ajoute la classe active à la nouvelle image
    }, 3000); // Change toutes les 3 secondes
}

// Lancer l'animation pour chaque section
function init() {
    changeImages("jeux-video");
    changeImages("manga");
    changeImages("cuisine");
    changeImages("dessin");
};