//Variables and objects
nav        = document.getElementById('nav'),
toggleMenu = document.getElementById('toggle-menu'),
btnClose   = document.getElementById('button-close');

//Functions
var openMenu = function() {
    nav.classList.toggle('active');
}

//Asigning events

toggleMenu.addEventListener('click', openMenu);