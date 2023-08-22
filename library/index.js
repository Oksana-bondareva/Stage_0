let menuBtn = document.querySelector('.menu-btn');
let menuNav = document.querySelector('.nav-menu');
menuBtn.addEventListener('click', function(){
	menuNav.classList.toggle('open');
})

function burgerMenu(icon) {
    icon.classList.toggle('open');
}

if (document.body.clientWidth <= 1024) {
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
  }
  
  function currentSlide(n) {
    showSlides(slideIndex = n);
  }
  
  function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("img-slaider");
    let dots = document.getElementsByClassName("pagination");
    if (n > slides.length) {slideIndex = slides.length}    
    if (n < 1) {slideIndex = 1}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
      }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" activ-pagination", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " activ-pagination";
  }
}
  else {
    
};
