function rollDice() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1-6
  var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png
  var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomImageSource);

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  updateResult(randomNumber1, randomNumber2);
}

function updateResult(number1, number2) {
  var resultHeading = document.querySelector("h1");
  if (number1 > number2) {
    resultHeading.innerHTML = "🚩 Player 1 Wins!";
  } else if (number2 > number1) {
    resultHeading.innerHTML = "Player 2 Wins! 🚩";
  } else {
    resultHeading.innerHTML = "Draw!";
  }
}

// Set initial dice values and result
document.querySelectorAll("img")[0].setAttribute("src", "images/dice1.png");
document.querySelectorAll("img")[1].setAttribute("src", "images/dice1.png");
document.querySelector("h1").innerHTML = "Refresh Me";

// Call rollDice function when the page loads
rollDice();
