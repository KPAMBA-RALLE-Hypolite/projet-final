function appendToDisplay(value) {
    document.getElementById('display').value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
}

function deleteLast() {
    const display = document.getElementById('display');
    display.value = display.value.slice(0, -1); // Supprime le dernier caractère
}

function calculatePercentage() {
    const display = document.getElementById('display');
    try {
        const result = eval(display.value) / 100;
        display.value = result;
    } catch (error) {
        display.value = 'Erreur';
    }
}

function calculateResult() {
    try {
        const result = eval(document.getElementById('display').value);
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Erreur';
    }
}


//chargement des projets dans le content: 
document.querySelectorAll('.sidebar nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault(); // Empêche le rechargement de la page

        const project = this.getAttribute('data-project'); // Récupère l'identifiant du projet
        const mainContent = document.getElementById('main-content');

        // Charge le contenu du projet depuis son dossier
        fetch(`projects/${project}/index.html`)
            .then(response => response.text())
            .then(data => {
                mainContent.innerHTML = data; // Injecte le contenu dans la section centrale
            })
            .catch(error => {
                mainContent.innerHTML = `<p>Erreur de chargement du projet.</p>`;
                console.error(error);
            });
    });
});