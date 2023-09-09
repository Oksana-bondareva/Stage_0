console.log('200/200')

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

let formRegister = document.querySelector('.form-register');  
let formFiledRegister = document.querySelectorAll('.form-register-input');  
let formRegisterSubmit = formRegister.querySelector('[type="submit"]');
let firstName = localStorage.getItem('first-name-register-input'); 
let lastName = localStorage.getItem('last-name-register-input'); 
let iconProfileRegister = document.querySelector('.icon-profile-register');
let countVisits = document.querySelector('.count-number-visits');

for (let i = 0; i < formFiledRegister.length; i++) {
  formFiledRegister[i].addEventListener('change', changeHandler)
};

function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let numberCard = document.querySelector('.card-number-div').textContent = Number(getRandomNumber(1111111111, 9999999999)).toString(16);
if (numberCard.length < 9) {numberCard + '0'};

let booksArr = [];

function changeHandler() {
  localStorage.setItem(this.name, this.value);
  localStorage.setItem('isAuth', true);
  localStorage.setItem('countVisits', 1);
  localStorage.setItem('countBooks', 0);
  localStorage.setItem('number-card', numberCard);
  localStorage.setItem('books', JSON.stringify(booksArr));
};

let profileName = document.querySelector('.dropmenu-h2-profile').textContent = localStorage.getItem('number-card'); 
let iconName = document.querySelector('.icon-name').textContent = (firstName[0] + lastName[0]); 
let isAuth = localStorage.getItem('isAuth');

if (isAuth === 'true') {
  iconProfileRegister.style.display = "block";
  iconProfile.style.display = "none";
}
else {
  iconProfileRegister.style.display = "none";
};

let modal6 = document.querySelector('.modal6');
let closeModal6 = document.querySelector('.close-modal-buy-card');
let modal6Open = document.querySelector('.buy-library-card');
let btnBuyLibraryCard = document.querySelector('.buy-btn-library-card');
let btnBuy = document.querySelectorAll('.buy');

closeModal6.addEventListener('click', function(){
	modal6.classList.remove('open-modal6');
  modal6Open.classList.remove('modal-buy-card-open');
});

window.addEventListener('click', e => {
  const target = e.target 
  if (!target.closest('.modal6') && !target.closest('.buy')) {
    modal6.classList.remove('open-modal6'); 
    modal6Open.classList.remove('modal-buy-card-open');
  }
});

if (isAuth === 'false') { Array.from(document.querySelectorAll('.buy'), function(el){
  el.onclick = function(){
    modal4.classList.add('open-modal4');
    modalLogin.classList.add('modal-login-open');
  }
})
}
 else { Array.from(document.querySelectorAll('.buy'), function(el){
  el.onclick = function(){
    modal6.classList.add('open-modal6');
    modal6Open.classList.add('modal-buy-card-open');
  }
})
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

let book1 = document.querySelector('.book-01');
let book2 = document.querySelector('.book-02');
let book3 = document.querySelector('.book-03');
let book4 = document.querySelector('.book-04');
let book5 = document.querySelector('.book-05');
let book6 = document.querySelector('.book-06');
let book7 = document.querySelector('.book-07');
let book8 = document.querySelector('.book-08');
let book9 = document.querySelector('.book-09');
let book10 = document.querySelector('.book-10');
let book11 = document.querySelector('.book-11');
let book12 = document.querySelector('.book-12');
let book13 = document.querySelector('.book-13');
let book14 = document.querySelector('.book-14');
let book15 = document.querySelector('.book-15');
let book16 = document.querySelector('.book-16');

btnBuyLibraryCard.addEventListener('click', function(){
	localStorage.setItem('buy-abonement', true);
  localStorage.setItem('book1', 'buy');
  localStorage.setItem('book2', 'buy');
  localStorage.setItem('book3', 'buy');
  localStorage.setItem('book4', 'buy');
  localStorage.setItem('book5', 'buy');
  localStorage.setItem('book6', 'buy');
  localStorage.setItem('book7', 'buy');
  localStorage.setItem('book8', 'buy');
  localStorage.setItem('book9', 'buy');
  localStorage.setItem('book10', 'buy');
  localStorage.setItem('book11', 'buy');
  localStorage.setItem('book12', 'buy');
  localStorage.setItem('book13', 'buy');
  localStorage.setItem('book14', 'buy');
  localStorage.setItem('book15', 'buy');
  localStorage.setItem('book16', 'buy');
});

let buyAbonement = localStorage.getItem('buy-abonement');
let countBooks = localStorage.getItem('countBooks');

let buyBooksList = document.querySelector('.rnted-books-ul');

const booksListArr = [
  "The Book Eaters, Sunyi Dean",
  "Cackle, Rachel Harrison",
  "Dante: Poet of the Secular World, Erich Auerbach",
  "The Last Queen, Clive Irving",
  "The Body, Stephen King",
  "Carry: A Memoir of Survival on Stolen Land, Toni Jenson",
  "Days of Distraction, Alexandra Chang",
  "Dominicana, Angie Cruz",
  "Crude: A Memoir, Pablo Fajardo & Sophie Tardy-Joubert",
  "Let My People Go Surfing, Yvon Chouinard",
  "The Octopus Museum: Poems, Brenda Shaughnessy",
  "Shark Dialogues: A Novel, Kiana Davenport",
  "Casual Conversation, Renia White",
  "The Great Fire, Lou Ureneck",
  "Rickey: The Life and Legend, Howard Bryant",
  "Slug: And Other Stories, Megan Milks"
];

if (buyAbonement === 'true') {
  if (localStorage.getItem('book1') === 'own') {
    book1.classList.add('own');
    book1.setAttribute('disabled', '');
    book1.textContent = 'Own';
    book1.style.background = 'white';
    let li1 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li1.innerHTML = "&bull; The Book Eaters, Sunyi Dean";
    li1.className ='rnted-books-li';
    ul.prepend(li1);
  };
  if (localStorage.getItem('book2') === 'own') {
    book2.classList.add('own');
    book2.setAttribute('disabled', '');
    book2.textContent = 'Own';
    book2.style.background = 'white';
    let li2 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li2.innerHTML = "&bull; Cackle, Rachel Harrison";
    li2.className ='rnted-books-li';
    ul.prepend(li2);
  };
  if (localStorage.getItem('book3') === 'own') {
    book3.classList.add('own');
    book3.setAttribute('disabled', '');
    book3.textContent = 'Own';
    book3.style.background = 'white';
    let li3 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li3.innerHTML = "&bull; Dante: Poet of the Secular World, Erich Auerbach";
    li3.className ='rnted-books-li';
    ul.prepend(li3);
  };
  if (localStorage.getItem('book4') === 'own') {
    book4.classList.add('own');
    book4.setAttribute('disabled', '');
    book4.textContent = 'Own';
    book4.style.background = 'white';
    let li4 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li4.innerHTML = "&bull; The Last Queen, Clive Irving";
    li4.className ='rnted-books-li';
    ul.prepend(li4);
  };
  if (localStorage.getItem('book5') === 'own') {
    book5.classList.add('own');
    book5.setAttribute('disabled', '');
    book5.textContent = 'Own';
    book5.style.background = 'white';
    let li5 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li5.innerHTML = "&bull; The Body, Stephen King";
    li5.className ='rnted-books-li';
    ul.prepend(li5);
  };
  if (localStorage.getItem('book6') === 'own') {
    book6.classList.add('own');
    book6.setAttribute('disabled', '');
    book6.textContent = 'Own';
    book6.style.background = 'white';
    let li6 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li6.innerHTML = "&bull; Carry: A Memoir of Survival on Stolen Land, Toni Jenson";
    li6.className ='rnted-books-li';
    ul.prepend(li6);
  };
  if (localStorage.getItem('book7') === 'own') {
    book7.classList.add('own');
    book7.setAttribute('disabled', '');
    book7.textContent = 'Own';
    book7.style.background = 'white';
    let li7 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li7.innerHTML = "&bull; Days of Distraction, Alexandra Chang";
    li7.className ='rnted-books-li';
    ul.prepend(li7);
  };
  if (localStorage.getItem('book8') === 'own') {
    book8.classList.add('own');
    book8.setAttribute('disabled', '');
    book8.textContent = 'Own';
    book8.style.background = 'white';
    let li8 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li8.innerHTML = "&bull; Dominicana, Angie Cruz";
    li8.className ='rnted-books-li';
    ul.prepend(li8);
  };
  if (localStorage.getItem('book9') === 'own') {
    book9.classList.add('own');
    book9.setAttribute('disabled', '');
    book9.textContent = 'Own';
    book9.style.background = 'white';
    let li9 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li9.innerHTML = "&bull; Crude: A Memoir, Pablo Fajardo & Sophie Tardy-Joubert";
    li9.className ='rnted-books-li';
    ul.prepend(li9);
  };
  if (localStorage.getItem('book10') === 'own') {
    book10.classList.add('own');
    book10.setAttribute('disabled', '');
    book10.textContent = 'Own';
    book10.style.background = 'white';
    let li10 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li10.innerHTML = "&bull; Let My People Go Surfing, Yvon Chouinard";
    li10.className ='rnted-books-li';
    ul.prepend(li10);
  };
  if (localStorage.getItem('book11') === 'own') {
    book11.classList.add('own');
    book11.setAttribute('disabled', '');
    book11.textContent = 'Own';
    book11.style.background = 'white';
    let li11 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li11.innerHTML = "&bull; The Octopus Museum: Poems, Brenda Shaughnessy";
    li11.className ='rnted-books-li';
    ul.prepend(li11);
  };
  if (localStorage.getItem('book12') === 'own') {
    book12.classList.add('own');
    book12.setAttribute('disabled', '');
    book12.textContent = 'Own';
    book12.style.background = 'white';
    let li12 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li12.innerHTML = "&bull; Shark Dialogues: A Novel, Kiana Davenport";
    li12.className ='rnted-books-li';
    ul.prepend(li12);
  };
  if (localStorage.getItem('book13') === 'own') {
    book13.classList.add('own');
    book13.setAttribute('disabled', '');
    book13.textContent = 'Own';
    book13.style.background = 'white';
    let li13 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li13.innerHTML = "&bull; Casual Conversation, Renia White";
    li13.className ='rnted-books-li';
    ul.prepend(li13);
  };
  if (localStorage.getItem('book14') === 'own') {
    book14.classList.add('own');
    book14.setAttribute('disabled', '');
    book14.textContent = 'Own';
    book14.style.background = 'white';
    let li14 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li14.innerHTML = "&bull; The Great Fire, Lou Ureneck";
    li14.className ='rnted-books-li';
    ul.prepend(li14);
  };
  if (localStorage.getItem('book15') === 'own') {
    book15.classList.add('own');
    book15.setAttribute('disabled', '');
    book15.textContent = 'Own';
    book15.style.background = 'white';
    let li15 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li15.innerHTML = "&bull; Rickey: The Life and Legend, Howard Bryant";
    li15.className ='rnted-books-li';
    ul.prepend(li15);
  };
  if (localStorage.getItem('book16') === 'own') {
    book16.classList.add('own');
    book16.setAttribute('disabled', '');
    book16.textContent = 'Own';
    book16.style.background = 'white';
    let li16 = document.createElement('li');
    let ul = document.querySelector('.rnted-books-ul');
    li16.innerHTML = "&bull; Slug: And Other Stories, Megan Milks";
    li16.className ='rnted-books-li';
    ul.prepend(li16);
  };
  Array.from(document.querySelectorAll('.buy'), function(el){
    el.onclick = function(){
      let countBooks = (Number(localStorage.getItem('countBooks')) + 1);
      localStorage.setItem('countBooks', countBooks);
      booksArr = JSON.parse(localStorage.getItem('books')); 
      if (el === book1) {
        booksArr.push(booksListArr[0]);
        localStorage.setItem('book1', 'own');
      };
      if (el === book2) {
        booksArr.push(booksListArr[1]);
        localStorage.setItem('book2', 'own');
      };
      if (el === book3) {
        booksArr.push(booksListArr[2]);
        localStorage.setItem('book3', 'own');
      };
      if (el === book4) {
        booksArr.push(booksListArr[3]);
        localStorage.setItem('book4', 'own');
      };
      if (el === book5) {
        booksArr.push(booksListArr[4]);
        localStorage.setItem('book5', 'own');
      };
      if (el === book6) {
        booksArr.push(booksListArr[5]);
        localStorage.setItem('book6', 'own');
      };
      if (el === book7) {
        booksArr.push(booksListArr[6]);
        localStorage.setItem('book7', 'own');
      };
      if (el === book8) {
        booksArr.push(booksListArr[7]);
        localStorage.setItem('book8', 'own');
      };
      if (el === book9) {
        booksArr.push(booksListArr[8]);
        localStorage.setItem('book9', 'own');
      };
      if (el === book10) {
        booksArr.push(booksListArr[9]);
        localStorage.setItem('book10', 'own');
      };
      if (el === book11) {
        booksArr.push(booksListArr[10]);
        localStorage.setItem('book11', 'own');
      };
      if (el === book12) {
        booksArr.push(booksListArr[11]);
        localStorage.setItem('book12', 'own');
      };
      if (el === book13) {
        booksArr.push(booksListArr[12]);
        localStorage.setItem('book13', 'own');
      };
      if (el === book14) {
        booksArr.push(booksListArr[13]);
        localStorage.setItem('book14', 'own');
      };
      if (el === book15) {
        booksArr.push(booksListArr[14]);
        localStorage.setItem('book15', 'own');
      };
      if (el === book16) {
        booksArr.push(booksListArr[15]);
        localStorage.setItem('book16', 'own');
      };
      localStorage.setItem('books', JSON.stringify(booksArr));
      location.reload();
    }
  })
};


let countBooksNumber = document.querySelector('.count-number-books').textContent = localStorage.getItem('countBooks');
let countBooksNumberProfile = document.querySelector('.count-number-books-profile').textContent = localStorage.getItem('countBooks');


let btnFormLogin = document.querySelector('.form-login-submit');
let userEmail = localStorage.getItem('e-mail-register-input');
let userPassword = localStorage.getItem('password-register-input');
let loginEmail = document.querySelector('.e-mail-login-input');
let loginPassword = document.querySelector('.password-login-input');

btnFormLogin.addEventListener('click', function(){
  let loginEmailValue = loginEmail.value;
  let loginPasswordValue = loginPassword.value;
  if (userEmail === loginEmailValue && userPassword === loginPasswordValue) {
    modal2.classList.remove('open-modal2');
    localStorage.setItem('isAuth', true);
    let countVisits = (Number(localStorage.getItem('countVisits')) + 1);
    localStorage.setItem('countVisits', countVisits);
    location.reload();
  }
});

let countNumberVisits = document.querySelector('.count-number-visits').textContent = localStorage.getItem('countVisits');
let countNumberVisitsProfile = document.querySelector('.count-number-visits-profile').textContent = localStorage.getItem('countVisits');

let logOut = document.querySelector('.logout');

logOut.addEventListener('click', function(){
	modal2.classList.remove('open-modal2');
  localStorage.setItem('isAuth', false);
  location.reload();
});

let myProfile = document.querySelector('.my-profile');
let modalMyProfile = document.querySelector('.modal5');
let closeModal5 = document.querySelector('.close-modal-profile');
let myProfileConteiner = document.querySelector('.modal-profile');
let nameAvatarModalProfile = document.querySelector('.profile-name-avatar-letters').textContent = firstName[0] + lastName[0];
let nameNameModalProfile = document.querySelector('.profile-name-name-letters').textContent = firstName + " " + lastName;
let numberCardModalProfile = document.querySelector('.div-card-number-modal-profile').textContent = localStorage.getItem('number-card');
let iconCopy = document.querySelector('.icon-copy-modal-profile');
let btnProfile = document.querySelector('.btn-profile');

myProfile.addEventListener('click', function(){
	modalMyProfile.classList.add('open-modal5');
  modal2.classList.remove('open-modal2');
  myProfileConteiner.classList.add('modal-profile-open');
});

closeModal5.addEventListener('click', function(){
	modalMyProfile.classList.remove('open-modal5');
  myProfileConteiner.classList.remove('modal-profile-open');
});

window.addEventListener('click', e => {
  const target = e.target 
  if (!target.closest('.modal2') && !target.closest('.modal5') && !target.closest('.btn-profile')) {
    modalMyProfile.classList.remove('open-modal5'); 
    myProfileConteiner.classList.remove('modal-profile-open');
  }
});

iconCopy.addEventListener('click', function(){
	navigator.clipboard.writeText(numberCardModalProfile)
});

btnProfile.addEventListener('click', function(){
	modalMyProfile.classList.add('open-modal5');
  myProfileConteiner.classList.add('modal-profile-open');
});

let checkTheCard = document.querySelector('.check-the-card'); 
let librarycard = document.querySelector('.librarycard');
let librarycard2 = document.querySelector('.librarycard2');
let userNameDigitalCard = document.querySelector('.name-value').textContent = firstName + " " + lastName;
let numberCardDigitalCard = document.querySelector('.card-number-value').textContent = localStorage.getItem('number-card'); 
let userNameLibraryCard = document.querySelector('.user-name-librarycard');
let numberCardLibraryCard = document.querySelector('.card-number-name-librarycard');

if (isAuth === 'true') {
  librarycard.style.position = 'static';
  librarycard2.style.display = 'block'; 
};

checkTheCard.addEventListener('click', function(){
  let loginNameValue = userNameLibraryCard.value;
  let loginNumberCardValue = numberCardLibraryCard.value;
  if (userNameDigitalCard === loginNameValue && numberCardDigitalCard === loginNumberCardValue) {
    librarycard.style.position = 'static';
    librarycard2.style.display = 'block'; 
    setTimeout(function() {
      librarycard2.style.display = 'none'; 
      location.reload();
   }, 10000);
  } 
});














