let randomNumber = Math.ceil(Math.random() * 100);

let userInput = document.getElementById("userInput");
let statusMessage = document.getElementById("status");
let chancesLeftText = document.getElementById("chancesLeft");

let chances = 5;
let gameOver = false;

function onCheck() {

    if (gameOver) return;

    let value = parseInt(userInput.value);

    if (isNaN(value) || value < 1 || value > 100) {
        statusMessage.textContent = "Enter valid number!";
        statusMessage.style.color = "red";
        return;
    }

    chances--;
    chancesLeftText.textContent = chances;

    if (value === randomNumber) {
        statusMessage.textContent = "🎉 You Won!";
        statusMessage.style.color = "green";
        gameOver = true;
        return;
    }

    if (chances === 0) {
        statusMessage.textContent = "💀 Game Over!";
        statusMessage.style.color = "red";

        document.getElementById("answer").textContent =
            "Answer: " + randomNumber;

        gameOver = true;
        return;
    }

    if (value > randomNumber)
        statusMessage.textContent = "Try smaller number!";
    else
        statusMessage.textContent = "Try bigger number!";
}