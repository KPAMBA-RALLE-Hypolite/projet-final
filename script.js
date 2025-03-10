// Afficher le profil dans l'iframe au clic sur l'image du profil
document.getElementById('profileImage').addEventListener('click', function () {
    const iframe = document.getElementById('main-iframe');
    iframe.src = 'profil.html'; // Charge le profil dans l'iframe
});

// Charger les projets dans l'iframe
document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le rechargement de la page

        const project = this.getAttribute('data-project'); // Récupère le chemin du projet
        const iframe = document.getElementById('main-iframe');

        // Charge le projet dans l'iframe
        iframe.src = project;
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.getElementById('sidebar');
    const menuItems = sidebar.querySelectorAll('ul li a'); // Sélectionnez tous les liens du menu

    // Gérer l'ouverture/fermeture du menu
    menuToggle.addEventListener('click', function() {
        sidebar.classList.toggle('active');
    });

    // Masquer le menu lorsqu'un élément est cliqué
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            sidebar.classList.remove('active'); // Masquer le menu
        });
    });
});