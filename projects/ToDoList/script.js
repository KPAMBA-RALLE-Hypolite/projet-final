//Declaration et appel des elements dans le script
var ajouter= document.getElementById('ajouter');
var tache= document.getElementById('ToDoList');
var agenda= document.getElementById('listToDoList');

//ajout des evenement
ajouter.onclick = function(){
    //passer par une condition pour verifier afin de valider le contenu du champ ajouter une tache
    if(tache.value != ""){

        var paragraph= document.createElement('p')// si le champ n'est pas vide, on crée un paragraphe
    }
    //une fois le paragraphe créée, on la valorise ( sauvegarder)
    paragraph.innerHTML = tache.value;

    //il faut donner un style css au paragraphe
    paragraph.classList.add('paragraph_style')

    //une fois l'entrée prise en compte, après avoir appuyer sur la touche ajouter, on sauvegarde la tache  dans l'agenda
    agenda.appendChild(paragraph)

    //il faut vider le champ apres avoir sauvegarder la tache
    tache.value = ""

    //on veut que quand on clique, la tache se backgroundRepeat: 
    paragraph.addEventListener('click', function(){
        paragraph.classList.add('tache_style')
    })

    //et si on clique deux fois, on supprime la tache
    paragraph.addEventListener('dblclick', function(){
        agenda.removeChild(paragraph);
    })
}


