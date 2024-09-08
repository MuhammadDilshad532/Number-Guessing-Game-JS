let button = document.getElementById("guess");
let restart = document.getElementById("restart");
let counter = document.getElementById("counter");
let hint = document.getElementById("hint");
let guessInput = document.getElementById("guessValue");
let randomValue = generateRandomValue();
let count = 0;
let won = false;
let val;

function generateRandomValue() {
  return Math.floor(Math.random() * 100) + 1;
}

button.onclick = function () {
  val = Number(guessInput.value);
  getHint(val);
  increaseCounter();
};

function getHint(val) {
  if (val >= 1 && val <= 100) {
    if (val == randomValue) {
      alert(`Congratulations, you won in ${count + 1} attempts!`);
      won = true;
      disableGame();
    } else if (randomValue - val > 10) {
      alert("Your guess is too low!");
    } else if (val - randomValue > 10) {
      alert("Your guess is too high!");
    } else if (randomValue - val <= 10 && randomValue > val) {
      alert("Your guess is slightly low!");
    } else if (val - randomValue <= 10 && val > randomValue) {
      alert("Your guess is slightly high!");
    }
  } else {
    alert("No hints for this value");
  }
}

function increaseCounter() {
  if (count < 9) {
    count++;
    counter.innerText = count;
  } else {
    counter.innerText = "Guesses Finished";
    if (!won) {
      hint.innerText = `You lost, the answer was ${randomValue}`;
      disableGame();
    }
  }
}

function disableGame() {
  guessInput.disabled = true;
  button.disabled = true;
}

restart.onclick = function () {
  resetGame();
};

function resetGame() {
  guessInput.disabled = false;
  button.disabled = false;
  count = 0;
  counter.innerText = count;
  hint.innerText = "*do the first guess to get a hint";
  randomValue = generateRandomValue();
  won = false;
  guessInput.value = '';
}
