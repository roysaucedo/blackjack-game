let firstCard = 10;
let secondCard = 11;
let sum = firstCard + secondCard;
let hasBlackjack = false;
let isALive = true;
let message = "";

console.log(sum);

function startGame() {
  if (sum <= 20) {
    message = "Do you want to draw another card? 😁";
  } else if (sum === 21) {
    message = "Woohoo! You've got Blackjack! 🎉";
    hasBlackjack = true;
  } else {
    message = "You're out of the game. 🤮";
    isALive = false;
  }

  // CASH OUT
  console.log(hasBlackjack);

  // ALIVE
  console.log(isALive);

  console.log(message);
}
