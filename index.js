let firstCard = 10;
let secondCard = 4;
let cards = [firstCard, secondCard] //array - ordered list
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isALive = true;
let message = "";

let messageEl = document.getElementById("message-el");
// let sumEl = document.getElementById("sum-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

console.log(sumEl);


function startGame() {
  renderGame()
}

function renderGame() {
  sumEl.textContent = "Sum: " + sum
  cardsEl.textContent = "Cards: " + cards[0] + " + " + cards[1]
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
  let card = 6
  sum += card
  cards.push(card)
  console.log(cards)
  renderGame()
}
