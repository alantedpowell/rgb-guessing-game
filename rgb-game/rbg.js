var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init() {
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function() {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numSquares = 3) : (numSquares = 6);
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //   Add Click Event Listeners to squares
    squares[i].addEventListener("click", function() {
      // Grab color of clicked square
      var clickedColor = this.style.backgroundColor;
      if (clickedColor === pickedColor) {
        messageDisplay.textContent = "Correct!";
        resetButton.textContent = "Play Again?";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
      } else {
        this.style.backgroundColor = "#232323";
        messageDisplay.textContent = "Try Again";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numSquares);
  // Pick new random color from array
  pickedColor = pickColor();
  // Change display colorDisplay to pickedColor
  colorDisplay.textContent = pickedColor;
  resetButton.textContent = "New Colors";
  messageDisplay.textContent = "";
  // Change colors of squares on page
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function() {
  reset();
});

function changeColors(color) {
  // Loop through all squares
  for (var i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = color;
  }
  // Change Each color to match given color
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  // Make an array
  var arr = [];
  // Repeat num times
  for (var i = 0; i < num; i++) {
    // Get Random Color and Push Into Array
    arr.push(randomColor());
  }
  // Return that array
  return arr;
}

function randomColor() {
  // Pick a "red" from 0 - 255
  var r = Math.floor(Math.random() * 256);
  // Pick a "green" from 0 - 255
  var g = Math.floor(Math.random() * 256);
  // Pick a "blue" from 0 - 255
  var b = Math.floor(Math.random() * 256);
  return "rgb(" + r + ", " + g + ", " + b + ")";
}
