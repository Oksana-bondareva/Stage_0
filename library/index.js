let menuBtn = document.querySelector('.menu-btn');
let menuNav = document.querySelector('.nav-menu');
menuBtn.addEventListener('click', function(){
	menuNav.classList.toggle('open');
})

function burgerMenu(icon) {
    icon.classList.toggle('open');
}

