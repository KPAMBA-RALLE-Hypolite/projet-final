// Appel des éléments de la page HTML
const player_ordinateur = document.getElementById('ordinateur');
const player_vous = document.getElementById('vous');
const tirage_result = document.getElementById('result');
const resultat_message = document.getElementById('resultat'); // Élément pour afficher le résultat
var choix_joueur;

// Récupération des boutons
const btn_choix = document.querySelectorAll('button');

// Ajout des événements dans le cas d'un clic sur un bouton
btn_choix.forEach(btn => btn.addEventListener('click', (e) => {
    // Récupérer le bouton sur lequel l'utilisateur a cliqué
    choix_joueur = e.target.id;

    // Indication du chemin de l'image
    const image_src_joueur = `images/${choix_joueur}.png`;
    
    // Affichage de l'image du joueur dans la div
    tirage_result.innerHTML = `<img src="${image_src_joueur}" class="image-size">`;
    
    // Appel de la fonction pour générer le choix de l'ordinateur
    choix_ordinateur();
}));

// Création d'une fonction pour générer le choix de l'ordinateur
function choix_ordinateur() {
    const random = Math.floor(Math.random() * 3); 
    let choix = ''; 

    if (random === 0) {
        choix = 'pierre';
    } else if (random === 1) {
        choix = 'papier';
    } else {
        choix = 'ciseaux';
    }

    // Affichage de l'image correspondante à l'ordinateur
    const image_src_ordinateur = `images/${choix}.png`;
    player_ordinateur.innerHTML = `<img src="${image_src_ordinateur}" class="image-size">`;

    // Vérification de la victoire après que l'ordinateur a fait son choix
    verif_victoire(choix);
}

// Fonction pour vérifier qui a gagné
function verif_victoire(choix_ordinateur) {
    if (choix_joueur === choix_ordinateur) {
        tirage_result.innerHTML += "<br>Match nul !"; 
    } else if (
        (choix_joueur === 'pierre' && choix_ordinateur === 'ciseaux') ||
        (choix_joueur === 'papier' && choix_ordinateur === 'pierre') ||
        (choix_joueur === 'ciseaux' && choix_ordinateur === 'papier')
    ) {
        tirage_result.innerHTML += "<br>Gagné!";
    } else {
        tirage_result.innerHTML += "<br>Perdu !"
    }
}