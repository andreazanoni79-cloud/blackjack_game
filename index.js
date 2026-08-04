let player = {
  name: "Per",
  chips: 200,
};

let deck = [
  { value: 11, suit: "Hearts", image: "images/cards/AH.png" },
  { value: 2, suit: "Hearts", image: "images/cards/2H.png" },
  { value: 3, suit: "Hearts", image: "images/cards/3H.png" },
  { value: 4, suit: "Hearts", image: "images/cards/4H.png" },
  { value: 5, suit: "Hearts", image: "images/cards/5H.png" },
  { value: 6, suit: "Hearts", image: "images/cards/6H.png" },
  { value: 7, suit: "Hearts", image: "images/cards/7H.png" },
  { value: 8, suit: "Hearts", image: "images/cards/8H.png" },
  { value: 9, suit: "Hearts", image: "images/cards/9H.png" },
  { value: 10, suit: "Hearts", image: "images/cards/10H.png" },
  { value: 10, suit: "Hearts", image: "images/cards/JH.png" },
  { value: 10, suit: "Hearts", image: "images/cards/QH.png" },
  { value: 10, suit: "Hearts", image: "images/cards/KH.png" },
  { value: 11, suit: "Diamonds", image: "images/cards/AD.png" },
  { value: 2, suit: "Diamonds", image: "images/cards/2D.png" },
  { value: 3, suit: "Diamonds", image: "images/cards/3D.png" },
  { value: 4, suit: "Diamonds", image: "images/cards/4D.png" },
  { value: 5, suit: "Diamonds", image: "images/cards/5D.png" },
  { value: 6, suit: "Diamonds", image: "images/cards/6D.png" },
  { value: 7, suit: "Diamonds", image: "images/cards/7D.png" },
  { value: 8, suit: "Diamonds", image: "images/cards/8D.png" },
  { value: 9, suit: "Diamonds", image: "images/cards/9D.png" },
  { value: 10, suit: "Diamonds", image: "images/cards/10D.png" },
  { value: 10, suit: "Diamonds", image: "images/cards/JD.png" },
  { value: 10, suit: "Diamonds", image: "images/cards/QD.png" },
  { value: 10, suit: "Diamonds", image: "images/cards/KD.png" },
  { value: 11, suit: "Clubs", image: "images/cards/AC.png" },
  { value: 2, suit: "Clubs", image: "images/cards/2C.png" },
  { value: 3, suit: "Clubs", image: "images/cards/3C.png" },
  { value: 4, suit: "Clubs", image: "images/cards/4C.png" },
  { value: 5, suit: "Clubs", image: "images/cards/5C.png" },
  { value: 6, suit: "Clubs", image: "images/cards/6C.png" },
  { value: 7, suit: "Clubs", image: "images/cards/7C.png" },
  { value: 8, suit: "Clubs", image: "images/cards/8C.png" },
  { value: 9, suit: "Clubs", image: "images/cards/9C.png" },
  { value: 10, suit: "Clubs", image: "images/cards/10C.png" },
  { value: 10, suit: "Clubs", image: "images/cards/JC.png" },
  { value: 10, suit: "Clubs", image: "images/cards/QC.png" },
  { value: 10, suit: "Clubs", image: "images/cards/KC.png" },
  { value: 11, suit: "Spades", image: "images/cards/AS.png" },
  { value: 2, suit: "Spades", image: "images/cards/2S.png" },
  { value: 3, suit: "Spades", image: "images/cards/3S.png" },
  { value: 4, suit: "Spades", image: "images/cards/4S.png" },
  { value: 5, suit: "Spades", image: "images/cards/5S.png" },
  { value: 6, suit: "Spades", image: "images/cards/6S.png" },
  { value: 7, suit: "Spades", image: "images/cards/7S.png" },
  { value: 8, suit: "Spades", image: "images/cards/8S.png" },
  { value: 9, suit: "Spades", image: "images/cards/9S.png" },
  { value: 10, suit: "Spades", image: "images/cards/10S.png" },
  { value: 10, suit: "Spades", image: "images/cards/JS.png" },
  { value: 10, suit: "Spades", image: "images/cards/QS.png" },
  { value: 10, suit: "Spades", image: "images/cards/KS.png" },
];

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

playerEl.textContent = player.name + ": $" + player.chips;

// function getRandomCard() {
//   let randomNumber = Math.floor(Math.random() * 13) + 1;
//   if (randomNumber > 10) {
//     return 10;
//   } else if (randomNumber === 1) {
//     return 11;
//   } else {
//     return randomNumber;
//   }
// }

function getRandomCard() {
  let randomIndex = Math.floor(Math.random() * deck.length);
  let card = deck[randomIndex];
  return card;
}

function startGame() {
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  cards = [firstCard, secondCard];
  sum = firstCard.value + secondCard.value;
  renderGame();
}

function renderGame() {
  cardsEl.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    let img = document.createElement("img");
    img.src = cards[i].image;
    img.classList.add("card");
    cardsEl.appendChild(img);
  }

  sumEl.textContent = "Sum: " + sum;
  if (sum <= 20) {
    message = "Do you want to draw a new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You're out of the game!";
    isAlive = false;
  }
  messageEl.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let card = getRandomCard();
    sum += card.value;
    cards.push(card);
    renderGame();
  }
}
