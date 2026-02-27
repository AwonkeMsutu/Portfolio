// 1. Generate the random secret number (1-100)
let secretNumber = Math.floor(Math.random() * 30) + 1;
// 2. Variable to keep track of tries
let count = 0;

/**
 * Function called when the 'GUESS' button is clicked
 */
function checkGuess() {
    // Get the values from the HTML
    const inputField = document.getElementById("userGuess");
    const feedback = document.getElementById("feedback");
    const attemptDisplay = document.getElementById("attempts");
    
    // Convert the input text into a real number
    const guess = parseInt(inputField.value);

    // Validation: Check if the user actually typed a number
    if (isNaN(guess) || guess < 1 || guess > 30) {
        feedback.innerHTML = "⚠️ Enter a number (1-30)";
        feedback.style.color = "red";
        return;
    }

    // Add to the counter
    count++;
    attemptDisplay.innerHTML = "Attempts: " + count;

    // Logic: Compare the guess to the secret number
    if (guess === secretNumber) {
        feedback.innerHTML = "🎯 WINNER! You got it!";
        feedback.style.color = "green";
    } else if (guess > secretNumber) {
        feedback.innerHTML = "📉 Too high! Go lower.";
        feedback.style.color = "orange";
    } else {
        feedback.innerHTML = "📈 Too low! Go higher.";
        feedback.style.color = "orange";
    }

    // Clear the input box for the next guess automatically
    inputField.value = "";
    inputField.focus();
}

/**
 * Resets the entire game state
 */
function resetGame() {
    secretNumber = Math.floor(Math.random() * 30) + 1;
    count = 0;
    document.getElementById("feedback").innerHTML = "";
    document.getElementById("attempts").innerHTML = "Attempts: 0";
    document.getElementById("userGuess").value = "";
}