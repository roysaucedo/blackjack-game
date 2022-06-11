let cards = [] //array - ordered list
let sum = 0
let hasBlackjack = false;
let isALive = false;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


function getRandomCard() {

  let randomNumber = Math.floor( Math.random()*13 ) + 1
  if (randomNumber > 10){
    return 10
  }
  else if (randomNumber === 1) {
    return 11
  }
  else {
    return randomNumber
  }
}



function startGame() {
  let isALive = false;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard

  renderGame()
}

function renderGame() {
  cardsEl.textContent = "Cards: "

  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + " "
  }

  sumEl.textContent = "Sum: " + sum
  if (sum <= 20) {
    message = "Do you want to draw another card?";
  } else if (sum === 21) {
    message = "Woohoo! You've got Blackjack!";
    hasBlackjack = true;
  } else {
    message = "You're out of the game.";
    isALive = false;
  }

  messageEl.textContent = message
}

function newCard() {
  
  let card = getRandomCard()
  sum += card
  cards.push(card)
  console.log(cards)
  renderGame()
}
