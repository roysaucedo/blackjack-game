let firstCard = getRandomCard();
let secondCard = getRandomCard();
let cards = [firstCard, secondCard] //array - ordered list
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isALive = true;
let message = "";
let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")


function getRandomCard() {
  return 5
}



function startGame() {
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
