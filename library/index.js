let menuBtn = document.querySelector('.menu-btn');
let menuNav = document.querySelector('.nav-menu');

menuBtn.addEventListener('click', function(){
	menuNav.classList.toggle('open');
})

function burgerMenu(icon) {
  icon.classList.toggle('open');
}

menuNav.addEventListener('click', e => {
  const target = e.target 
  if (!target.closest('.menu-btn')) {
    menuNav.classList.remove('open');
    menuBtn.classList.remove('open');
  }
});

window.addEventListener('click', e => {
  const target = e.target 
  if (!target.closest('.menu-btn') && !target.closest('.nav-menu')) {
    menuNav.classList.remove('open');
    menuBtn.classList.remove('open');
  }
});


if (document.body.clientWidth > 1024) {
  let position = 0;
  let slider = document.querySelector(".img-slaider-conteiner");
  let dots1 = document.querySelector(".pagination1");
  let dots2 = document.querySelector(".pagination2");
  let dots3 = document.querySelector(".pagination3");
  
  dots1.addEventListener('click', () => {
    position = 480;
    position -= 480;
    slider.style.left = -position + 'px';
    if(position = 1920) {
      position = 0;
    }
  });

  dots2.addEventListener('click', () => {
    position = 480;
    slider.style.left = -position + 'px';
    if(position  = 0) {
      position += 960;
    } 
    if(position  = 960) {
      position -= 480;
    }
  });
  
  dots3.addEventListener('click', () => {
    position = 480;
    position += 480;
    slider.style.left = -position + 'px';
    if(position = 0) {
      position = 1920;}
      if(position  = 480) {
        position = 0;
      }
      if(position  <= 480) {
        position = 960;
      }
  });

    dots1.onclick = function(){
    this.className ="activ-pagination";
    dots2.className ="pagination2";
    dots3.className ="pagination3";
};

  dots2.onclick = function(){
  this.className ="activ-pagination";
  dots1.className ="pagination1";
  dots3.className ="pagination3";
};

  dots3.onclick = function(){
  this.className ="activ-pagination";
  dots1.className ="pagination1";
  dots2.className ="pagination2";
};
}
  else {
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
};

let radioWinter = document.getElementById('winter');
let radioSpring = document.getElementById('spring');
let radioSummer = document.getElementById('summer');
let radioAutumn = document.getElementById('autumn');
let booksWinter = document.querySelector('.books-winter');
let booksSpring = document.querySelector('.books-spring');
let booksSummer = document.querySelector('.books-summer');
let booksAutumn = document.querySelector('.books-autumn');

radioWinter.addEventListener('click', function(){
	booksWinter.classList.add('book-visible');
  booksSpring.classList.remove('book-visible');
  booksSummer.classList.remove('book-visible');
  booksAutumn.classList.remove('book-visible');
  booksSpring.classList.add('books-hidden');
  booksSummer.classList.add('books-hidden');
  booksAutumn.classList.add('books-hidden');
});

radioSpring.addEventListener('click', function(){
	booksSpring.classList.add('book-visible');
  booksWinter.classList.remove('book-visible');
  booksSummer.classList.remove('book-visible');
  booksAutumn.classList.remove('book-visible');
  booksWinter.classList.add('books-hidden');
  booksSummer.classList.add('books-hidden');
  booksAutumn.classList.add('books-hidden');
});

radioSummer.addEventListener('click', function(){
	booksSummer.classList.add('book-visible');
  booksSpring.classList.remove('book-visible');
  booksWinter.classList.remove('book-visible');
  booksAutumn.classList.remove('book-visible');
  booksWinter.classList.add('books-hidden');
  booksSpring.classList.add('books-hidden');
  booksAutumn.classList.add('books-hidden');
});

radioAutumn.addEventListener('click', function(){
	booksAutumn.classList.add('book-visible');
  booksSpring.classList.remove('book-visible');
  booksSummer.classList.remove('book-visible');
  booksWinter.classList.remove('book-visible');
  booksWinter.classList.add('books-hidden');
  booksSpring.classList.add('books-hidden');
  booksSummer.classList.add('books-hidden');
});

let iconProfile = document.querySelector('.icon-profile');
let modal1 = document.querySelector('.modal1');

iconProfile.addEventListener('click', function(){
	modal1.classList.toggle('open-modal1');
  menuNav.classList.remove('open');
});

window.addEventListener('click', e => {
  const target = e.target 
  if (!target.closest('.modal1') && !target.closest('.icon-profile')) {
    modal1.classList.remove('open-modal1'); 
  }
});

  




