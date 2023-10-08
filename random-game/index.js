const cards = [
   '<img width="100" height="100" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-love-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" alt="external-love-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev"/>',
   '<img width="100" height="100" src="https://img.icons8.com/officel/80/year-of-rat.png" alt="year-of-rat"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-color-line-collection-vinzence-studio/64/external-animal-mid-autumn-festival-color-line-collection-vinzence-studio.png" alt="external-animal-mid-autumn-festival-color-line-collection-vinzence-studio"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-app-icons-royyan-wijaya/64/external-animal-animal-hehe-app-icons-royyan-wijaya-2.png" alt="external-animal-animal-hehe-app-icons-royyan-wijaya-2"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-line-icons-royyan-wijaya/64/external-animal-hana-emojis-panda-edition-line-line-icons-royyan-wijaya-3.png" alt="external-animal-hana-emojis-panda-edition-line-line-icons-royyan-wijaya-3"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-color-line-collection-vinzence-studio/64/external-animal-mid-autumn-festival-color-line-collection-vinzence-studio.png" alt="external-animal-mid-autumn-festival-color-line-collection-vinzence-studio"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-line-icons-vinzence-studio/64/external-animal-mid-autumn-festival-line-icons-vinzence-studio.png" alt="external-animal-mid-autumn-festival-line-icons-vinzence-studio"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-app-icons-royyan-wijaya/64/external-animal-animalist-app-icons-royyan-wijaya-4.png" alt="external-animal-animalist-app-icons-royyan-wijaya-4"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-line-icons-royyan-wijaya/64/external-animal-hana-emojis-panda-edition-line-line-icons-royyan-wijaya-3.png" alt="external-animal-hana-emojis-panda-edition-line-line-icons-royyan-wijaya-3"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-flat-amoghdesign/64/external-animal-chinese-zodiac-flat-amoghdesign-2.png" alt="external-animal-chinese-zodiac-flat-amoghdesign-2"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-filled-outline-icons-maxicons/85/external-animal-life-of-amazon-filled-outline-filled-outline-icons-maxicons-3.png" alt="external-animal-life-of-amazon-filled-outline-filled-outline-icons-maxicons-3"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-flat-amoghdesign/64/external-animal-chinese-zodiac-flat-amoghdesign-2.png" alt="external-animal-chinese-zodiac-flat-amoghdesign-2"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-filled-outline-icons-maxicons/85/external-animal-life-of-amazon-filled-outline-filled-outline-icons-maxicons-3.png" alt="external-animal-life-of-amazon-filled-outline-filled-outline-icons-maxicons-3"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-vitaliy-gorbachev-lineal-color-vitaly-gorbachev/60/external-love-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev.png" alt="external-love-bull-emoji-vitaliy-gorbachev-lineal-color-vitaly-gorbachev"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-filled-outline-geotatah/64/external-animal-spring-color-filled-outline-geotatah.png" alt="external-animal-spring-color-filled-outline-geotatah"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-app-icons-royyan-wijaya/64/external-animal-animal-hehe-app-icons-royyan-wijaya-2.png" alt="external-animal-animal-hehe-app-icons-royyan-wijaya-2"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-app-icons-royyan-wijaya/64/external-animal-animalist-app-icons-royyan-wijaya-4.png" alt="external-animal-animalist-app-icons-royyan-wijaya-4"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-filled-outline-geotatah/64/external-animal-spring-color-filled-outline-geotatah.png" alt="external-animal-spring-color-filled-outline-geotatah"/>',
   '<img width="100" height="100" src="https://img.icons8.com/officel/80/year-of-rat.png" alt="year-of-rat"/>',
   '<img width="100" height="100" src="https://img.icons8.com/external-line-icons-vinzence-studio/64/external-animal-mid-autumn-festival-line-icons-vinzence-studio.png" alt="external-animal-mid-autumn-festival-line-icons-vinzence-studio"/>'
 ]
  
  let flippedCards = [];
  let cardsEl = document.getElementsByClassName('game-box');
  for (let i = 0; i < cardsEl.length; i++) {
    cardsEl[i].addEventListener('click', flipCards);
  }
 
  function flipCards() {
    if (!this.classList.contains('flipped') && flippedCards.length < 2) {
        this.innerHTML = cards[Array.prototype.indexOf.call(cardsEl, this)];
        this.classList.add('flipped');
        flippedCards.push(this);
    }
 
    if (flippedCards.length === 2) {
        let firstCard = flippedCards[0];
        let secondCard = flippedCards[1];
 
        if (firstCard.innerHTML === secondCard.innerHTML) {
            flippedCards = [];
        } else {
            setTimeout(function() {
                firstCard.innerHTML = '';
                secondCard.innerHTML = '';
                firstCard.classList.remove('flipped');
                secondCard.classList.remove('flipped');
                flippedCards = [];
            }, 500);
        }
     }
  }

  