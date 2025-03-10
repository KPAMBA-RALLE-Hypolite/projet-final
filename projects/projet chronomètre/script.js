// Déclaration des variables
var sp, btn_start, btn_stop, t, h, ms, s, min;

// Chargement de la page et initialisation des variables
window.onload = function() {
    sp = document.getElementsByTagName('span');
    btn_start = document.getElementById('start');
    btn_stop = document.getElementById('stop');
    t = null; // Initialiser t à null pour éviter des erreurs
    ms = 0, s = 0, min = 0, h = 0;
}

// Mise en place du compteur du chronomètre
function update_chrono() {
    ms += 1; // Incrémente les millisecondes
    if (ms == 10) { // Quand les millisecondes atteignent 10 (100 ms)
        ms = 0; // Réinitialise les millisecondes
        s += 1; // Incrémente les secondes
    }
    
    if (s == 60) { // Si les secondes atteignent 60
        s = 0; // Réinitialise les secondes
        min += 1; // Incrémente les minutes
    }
    if (min == 60) { // Si les minutes atteignent 60
        min = 0; // Réinitialise les minutes
        h += 1; // Incrémente les heures
    }

    // Injection des valeurs dans les span
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = min + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}

// Fonction pour le démarrage du chrono par le bouton start
function start() {
    if (t === null) { // Vérifie si le chrono n'est pas déjà en cours
        t = setInterval(update_chrono, 100); // Démarre la mise à jour toutes les 100 ms
        btn_start.disabled = true; // Désactive le bouton start
    }
}

// Fonction stop pour arrêter le chronomètre
function stop() {
    clearInterval(t); // Arrête l'intervalle
    t = null; // Réinitialise t à null
    btn_start.disabled = false; // Réactive le bouton start
}

// Fonction reset pour réinitialiser le chrono
function reset() {
    clearInterval(t); // Arrête l'intervalle
    t = null; // Réinitialise t à null
    btn_start.disabled = false; // Réactive le bouton start
    ms = 0, s = 0, min = 0, h = 0; // Réinitialise toutes les variables
    
    // Injection des nouvelles valeurs dans le span
    sp[0].innerHTML = h + "h";
    sp[1].innerHTML = min + "min";
    sp[2].innerHTML = s + "s";
    sp[3].innerHTML = ms + "ms";
}
