// Effet d'apparition de la section présentation
document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        document.getElementById("presentation_a_propos").classList.add("show");
    }, 200);
});

// Fonction pour révéler l'email au clic
function afficherEmail() {
    let emailElement = document.getElementById("email_protected");
    emailElement.textContent = "julie.leroy02pr@hotmail.com";
    emailElement.classList.add("email-visible");
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("email_protected").onclick = afficherEmail;
});
