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
let modal2 = document.querySelector('.modal2');

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

let register = document.querySelector('.register');
let modal3 = document.querySelector('.modal3');
let closeRegister = document.querySelector('.close-modal-register');
let modalRegister = document.querySelector('.modal-register');
let signUp = document.querySelector('.sign-up');
let hrefRegister = document.querySelector('.href-form-register-have-account');
let hrefLogin = document.querySelector('.href-form-login-have-account');

register.addEventListener('click', function(){
	modal3.classList.add('open-modal3');
  modal1.classList.remove('open-modal1');
  modalRegister.classList.add('modal-register-open');
});

closeRegister.addEventListener('click', function(){
	modal3.classList.remove('open-modal3');
  modalRegister.classList.remove('modal-register-open');
});

window.addEventListener('click', e => {
  const target = e.target 
  if (!target.closest('.modal1') && !target.closest('.modal3') && !target.closest('.sign-up')) {
    modal3.classList.remove('open-modal3'); 
    modalRegister.classList.remove('modal-register-open');
  }
});

signUp.addEventListener('click', function(){
	modal3.classList.add('open-modal3');
  modalRegister.classList.add('modal-register-open');
});

let logIn = document.querySelector('.login');
let modal4 = document.querySelector('.modal4');
let closeLogin = document.querySelector('.close-modal-login');
let modalLogin = document.querySelector('.modal-login');
let logInButton = document.querySelector('.log-in');

logIn.addEventListener('click', function(){
	modal4.classList.add('open-modal4');
  modal1.classList.remove('open-modal1');
  modalLogin.classList.add('modal-login-open');
});

closeLogin.addEventListener('click', function(){
	modal4.classList.remove('open-modal4');
  modalLogin.classList.remove('modal-login-open');
});

window.addEventListener('click', e => {
  const target = e.target 
  if (!target.closest('.modal1') && !target.closest('.modal4') && !target.closest('.log-in') && !target.closest('.buy')) {
    modal4.classList.remove('open-modal4'); 
    modalLogin.classList.remove('modal-login-open');
  }
});

logInButton.addEventListener('click', function(){
	modal4.classList.add('open-modal4');
  modalLogin.classList.add('modal-login-open');
});

Array.from(document.querySelectorAll('.buy'), function(el){
  el.onclick = function(){
    modal4.classList.add('open-modal4');
    modalLogin.classList.add('modal-login-open');
  }
})

let formRegister = document.querySelector('.form-register');  
let formFiledRegister = document.querySelectorAll('.form-register-input');  
let formRegisterSubmit = formRegister.querySelector('[type="submit"]');
let firstName = localStorage.getItem('first-name-register-input'); 
let lastName = localStorage.getItem('last-name-register-input'); 
let iconProfileRegister = document.querySelector('.icon-profile-register');
let iconName = document.querySelector('.icon-name').textContent = firstName[0] + lastName[0];
let iconNameTitle = document.querySelector('.icon-name').title = firstName + " " + lastName;

for (let i = 0; i < formFiledRegister.length; i++) {
  formFiledRegister[i].addEventListener('change', changeHandler)
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min
}

const numberCard = Number(getRandomNumber(111111111, 999999999)).toString(16);

function changeHandler() {
  localStorage.setItem(this.name, this.value);
  localStorage.setItem('isAuth', true);
  localStorage.setItem('number-card', numberCard);
};

let isAuth = localStorage.getItem('isAuth');

if (isAuth === 'true') {
  iconProfileRegister.style.display = "block";
}
else {
  iconProfileRegister.style.display = "none";
};

iconProfileRegister.addEventListener('click', function(){
	modal2.classList.toggle('open-modal2');
  menuNav.classList.remove('open');
});

window.addEventListener('click', e => {
  const target = e.target 
  if (!target.closest('.modal2') && !target.closest('.icon-profile-register')) {
    modal2.classList.remove('open-modal2'); 
  }
});

let logOut = document.querySelector('.logout');

logOut.addEventListener('click', function(){
	modal2.classList.remove('open-modal2');
  localStorage.setItem('isAuth', false);
  location.reload();
});









