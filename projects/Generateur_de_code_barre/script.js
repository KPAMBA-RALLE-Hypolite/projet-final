document.addEventListener('DOMContentLoaded', function () {
    var generer = document.querySelector('.generer');
    var champ = document.querySelector('.texte');
    var code_barres = document.querySelector('.code_barres');
    var message = document.querySelector('.message');
    var telecharger = document.querySelector('.telecharger');

    generer.addEventListener('click', function () {
        if (champ.value.length > 0) {
            // Effacer le message d'erreur
            message.innerHTML = "";

            // Afficher le canvas
            code_barres.style.display = 'block';

            // Génération du code-barres
            JsBarcode(code_barres, champ.value, {
                format: "CODE128",
                lineColor: "#000", // Changer la couleur à noir
                width: 2,
                height: 60,
                displayValue: true
            });

            // Afficher le bouton de téléchargement
            telecharger.style.display = 'block';

            // Vider le champ de texte
            champ.value = '';
        } else {
            message.innerHTML = "<p class='error'>Veuillez remplir le champ!</p>";
            code_barres.style.display = 'none';  // Cacher le canvas
            telecharger.style.display = 'none';   // Cacher le bouton de téléchargement
        }
    });

    telecharger.addEventListener('click', function () {
        const link = document.createElement('a');
        link.href = code_barres.toDataURL('image/png');
        link.download = 'code-barres.png'; 
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    });
});