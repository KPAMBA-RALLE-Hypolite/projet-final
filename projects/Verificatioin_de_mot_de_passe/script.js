// Récupération des éléments
var mypassword = document.getElementById('password');
var majuscule = document.getElementById('majuscule');
var lettre = document.getElementById('lettre');
var chiffre = document.getElementById('chiffre');
var minimum = document.getElementById('minimum');
var cantenaireVerification = document.getElementById('cantenaire_verification');

// Ajout des événements au clic sur le champ mot de passe
mypassword.onfocus = function() {
    cantenaireVerification.style.display = "block";
}

// Lorsque l'utilisateur clique en dehors du champ, masquer le champ
mypassword.onblur = function() {
    cantenaireVerification.style.display = "none"; 
}

// Lorsque l'utilisateur commence à saisir le mot de passe
mypassword.onkeyup = function() {
    
    // Récupération de la valeur du mot de passe
    var password = mypassword.value;

    // Vérification des conditions
    var hasUpperCase = /[A-Z]/.test(password);
    var hasLowerCase = /[a-z]/.test(password);
    var hasNumber = /\d/.test(password);
    var hasMinimumLength = password.length >= 8;

    // Mise à jour des messages de vérification et de la couleur
    majuscule.innerText = hasUpperCase ? '✅ Une lettre majuscule' : '❌ Une lettre majuscule';
    majuscule.style.color = hasUpperCase ? 'green' : 'red';

    lettre.innerText = hasLowerCase ? '✅ Une lettre minuscule' : '❌ Une lettre minuscule';
    lettre.style.color = hasLowerCase ? 'green' : 'red';

    chiffre.innerText = hasNumber ? '✅ Un chiffre' : '❌ Un chiffre';
    chiffre.style.color = hasNumber ? 'green' : 'red';

    minimum.innerText = hasMinimumLength ? '✅ 8 caractères minimum' : '❌ 8 caractères minimum';
    minimum.style.color = hasMinimumLength ? 'green' : 'red';
}