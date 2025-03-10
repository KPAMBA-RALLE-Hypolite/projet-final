// Creation d'une fonction permettant d'ouvrir les onglets
function openOnglet(evnt, name) {
    var i, tabcontent, tablink;

    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    tablink = document.getElementsByClassName('tablink');
    for (i = 0; i < tablink.length; i++) {
        tablink[i].className = tablink[i].className.replace(" active", "");  // Make sure to remove the extra space
    }
    document.getElementById(name).style.display = 'block';
    evnt.currentTarget.className += " active"; // Make sure to add " active" with a space
}

// Automatically open the "home" tab by default
window.onload = function() {
    document.querySelector('.tablink.active').click(); // This simulates a click on the active button
};