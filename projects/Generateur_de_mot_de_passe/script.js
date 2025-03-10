// Appel des éléments de la page HTML
var btn_copy = document.getElementById('copier');
var btn_generer = document.getElementById('generer');
var motdepasseInput = document.getElementById('psw');

// Fonction pour générer un mot de passe aléatoire
function genererMotDePasse() {
    var chars = "0123456789abcdefghijklmnopkrstvwxyz,;:!?.><&~#{'[|`/§=àç()ABCDEFGHIJKLMNOPRSTVWXYZ*-+%µù";
    var pswLength = 16;
    var password = "";
    
    for (var i = 0; i < pswLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);
        password += chars[randomNumber];
    }

    motdepasseInput.value = password; // Affiche le mot de passe dans l'input
}

// Ajout des événements sur les éléments
btn_generer.addEventListener('click', genererMotDePasse);

// Fonction pour copier le mot de passe dans le presse-papiers
btn_copy.addEventListener('click', function() {
    motdepasseInput.select(); // Sélectionne le contenu de l'input
    document.execCommand('copy'); // Copie le contenu sélectionné
    alert("Mot de passe copié: " + motdepasseInput.value); // Alerte pour confirmation
});
