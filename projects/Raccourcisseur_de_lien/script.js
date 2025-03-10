let message_error = document.querySelector('.message');
let resultLink = document.querySelector('.resultat a');
let raccourcir_lien = document.querySelector('.link');

async function Court_lien() {
    const longUrl = raccourcir_lien.value.trim();

    if (longUrl !== "") {
        message_error.innerHTML = ""; // Réinitialiser le message d'erreur

        const apiUrl = 'https://api-ssl.bitly.com/v4/shorten';
        const token = '1f35317a89d2ff47f9fc61cc43069e344b7f8ba5'; // Remplacez ceci avec votre propre token

        const data = {
            long_url: longUrl.startsWith('http') ? longUrl : 'http://' + longUrl // Assurez-vous d'ajouter le protocole
        };

        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (!response.ok) {
                const errorResponse = await response.json();
                // Afficher une erreur descriptive
                throw new Error(`Erreur ${response.status}: ${errorResponse.message || "Erreur inconnue"}`);
            }

            const resultData = await response.json();
            resultLink.href = resultData.link; // Mettre à jour le lien dans la balise <a>
            resultLink.textContent = resultData.link; // Mettre à jour le texte du lien
            document.querySelector('.resultat').style.display = 'block'; // Afficher le résultat

        } catch (error) {
            message_error.innerHTML = error.message; // Afficher les erreurs
        }
    } else {
        message_error.innerHTML = "Veuillez saisir un lien valide"; // Message d'erreur pour un champ vide
    }
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.submit-button').addEventListener('click', Court_lien);
});