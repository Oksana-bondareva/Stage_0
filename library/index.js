let menuBtn = document.querySelector('.menu-btn');
let menuNav = document.querySelector('.nav-menu');
menuBtn.addEventListener('click', function(){
	menuNav.classList.toggle('open');
})

function burgerMenu(icon) {
    icon.classList.toggle('open');
}

console.log(' 50/50 \nВёрстка соответствует макету. Ширина экрана 768px +26 \nНи на одном из разрешений до 640px включительно не появляется горизонтальная полоса прокрутки. Весь контент страницы при этом сохраняется: не обрезается и не удаляется +12 \nНа ширине экрана 768рх реализовано адаптивное меню +12 ' )
