//Selecting all the memory cards.
  const cards = document.querySelectorAll('.memory-card');

  let hasFlippedCard = false;
  let firstCard, secondCard;
  let lockBoard = false;

  function flipCard(){
    if (lockBoard) return;
    this.classList.add('flip');
    this.classList.add('wiggle');
    if (!hasFlippedCard){
      hasFlippedCard = true;
      firstCard = this;
      return;
    }

    secondCard = this;
    hasFlippedCard=false;

    checkForMatch();
  }

  function checkForMatch(){
    let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;
    isMatch? disableCards():unflipCards();
  }

  function disableCards(){
    firstCard.removeEventListener('click',flipCard);
    secondCard.removeEventListener('click',flipCard);
  }

  function unflipCards(){
    lockBoard = true;
    setTimeout(()=>{
      firstCard.classList.remove('flip');
      secondCard.classList.remove('flip');
      lockBoard = false;
    },1500);
  }

  cards.forEach(card =>card.addEventListener('click', flipCard));
