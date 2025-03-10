// Récupération des éléments
var nbr1 = document.querySelector('.nbr1');
var nbr2 = document.querySelector('.nbr2');
var sign = document.querySelector('.op');
var resultat = document.querySelector('.incremente'); // Utiliser la classe "incremente"
var message = document.querySelector('.message'); // Pour les messages de résultats
var compteurAffiche = document.querySelector('.result'); // Utiliser l'élément pour afficher le compteur
var recommencer = document.createElement('a'); // Créer un élément lien pour "Recommencer"
var compteur = 0;

// Configuration de l'élément "Recommencer"
recommencer.textContent = "Recommencer";
recommencer.className = "recommencer"; // Appliquer la classe pour le style
document.body.appendChild(recommencer); // Ajouter l'élément au DOM

// Ajouter un événement pour recommencer le jeu
recommencer.addEventListener('click', function() {
    compteur = 0;
    compteurAffiche.textContent = compteur; // Réinitialiser l'affichage du compteur
    message.textContent = ""; // Réinitialiser le message
    recommencer.style.display = "none"; // Cacher le mot "Recommencer"
    genererOperation();
});

// Fonction pour générer des nombres aléatoires et une opération
function genererOperation() {
    let a = Math.floor(Math.random() * 10) + 1;
    let b = Math.floor(Math.random() * 10) + 1;
    let operations = ['+', '-', '*', '/'];
    let op = operations[Math.floor(Math.random() * operations.length)];

    // Mettre à jour les éléments HTML avec les nouveaux nombres et opération
    nbr1.textContent = a;
    nbr2.textContent = b;
    sign.textContent = op;

    // Calcul du résultat correct
    let result;
    switch (op) {
        case '+':
            result = a + b;
            break;
        case '-':
            result = a - b;
            break;
        case '*':
            result = a * b;
            break;
        case '/':
            result = (b !== 0) ? (a / b).toFixed(2) : "NaN"; // Prévenir la division par zéro
            break;
    }
    message.dataset.result = result; // Stocke le résultat dans un data attribute
}

// Fonction pour vérifier la réponse de l'utilisateur
function verifierReponse(event) {
    event.preventDefault(); // Empêche le rechargement de la page
    let userAnswer = parseFloat(resultat.value);
    let correctAnswer = parseFloat(message.dataset.result); // Utiliser le bon attribut

    if (userAnswer === correctAnswer) {
        compteur++; // Incrémenter le compteur si la réponse est correcte
        message.textContent = "Correct !";
        message.style.color = "green"; // Changer la couleur en vert
        recommencer.style.display = "none"; // Assurez-vous que "Recommencer" est caché
    } else {
        compteur = 0; // Réinitialiser le compteur si la réponse est incorrecte
        message.textContent = "Incorrect. La bonne réponse était " + correctAnswer + ".";
        message.style.color = "red"; // Changer la couleur en rouge
        recommencer.style.display = "inline"; // Afficher l'élément "Recommencer"
    }

    // Mettre à jour l'affichage du compteur (sans texte descriptif)
    compteurAffiche.textContent = compteur;

    // Réinitialiser le champ de saisie
    resultat.value = '';
    genererOperation();
}

// Événement pour le bouton de vérification
document.querySelector('.check-btn').addEventListener('click', verifierReponse);

// Démarrer le jeu au chargement
genererOperation();