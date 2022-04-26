let firstCard = 10
let secondCard = 11
let sum = firstCard + secondCard
let hasBlackjack = false
let isALive = true

console.log(sum)

if (sum <= 20) {
    console.log("Do you want to draw another card? 😁")
} else if (sum === 21) {
    console.log("Woohoo! You've got Blackjack! 🎉")
    hasBlackjack = true
} else {
    console.log("You're out of the game. 🤮")
    isALive = false
}

// CASH OUT
console.log(hasBlackjack)

// ALIVE
console.log(isALive)