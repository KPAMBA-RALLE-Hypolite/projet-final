// Récupération des différents éléments du HTML
var person = document.getElementById('person')
var boule = document.getElementById('obstacle')
var btn_sauter = document.getElementById('sauter')
var jumpCounterDisplay = document.getElementById('jumpCounter')
var jumpCount = 0;

// Ajout des événements
function sauter() {
    if (person.classList != "person_saut") {
        person.classList.add("person_saut");
        jumpCount++; // Incrémenter le compteur de sauts
        updateJumpCounter(); // Mettre à jour l'affichage du compteur
    }
    setTimeout(function () {
        person.classList.remove("person_saut")
    }, 500)
}
btn_sauter.addEventListener("click", sauter);

// Condition de la fin du jeu
var condition = setInterval(function () {
    var person_position = parseInt(window.getComputedStyle(person).getPropertyValue('top'));
    var obstacle_position = parseInt(window.getComputedStyle(boule).getPropertyValue('left'));

    if (obstacle_position < 20 && obstacle_position > 0 && person_position >= 10) {
        boule.style.animation = "none";
        alert("La partie est terminée!!!");
    }
}, 10); // Assurez-vous que l'intervalle est court pour une animation fluide.

function updateJumpCounter() {
    jumpCounterDisplay.innerText = `💰 ${jumpCount}`;
}