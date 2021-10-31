var wordLetters = ['F', 'O', 'X'];
var correctGuessedLetters = [];
var guessedLetters = [];
var reward = 0;

function guessLetter(guessedLetter) {
    let thisReward = Math.floor(Math.random() * 100 + 1);
    let inWord = false;

    if(guessedLetters.includes(String(guessedLetter))) {
        console.log(guessedLetters);
        console.log(`you already guessed this ${guessedLetter}`);
    } else {
        for (let i = 0; i < wordLetters.length; i++) {
            if (guessedLetter === wordLetters[i]) {
                correctGuessedLetters[i] = guessedLetter;
                console.log(
                    `congratulations, you guessed a letter.\n ${correctGuessedLetters}`
                );
                inWord = true;
                guessedLetters.push(guessedLetter);
            }
        }
    }

    if(inWord) reward += thisReward;
    else reward -= thisReward;
}

function setup(wordLetters) {
    for (let i = 0; i < wordLetters.length; i++) {
        correctGuessedLetters.push('-');
    }
}

setup(wordLetters);

while (correctGuessedLetters.includes(`-`)) {
    let guess = prompt('Guess a letter').toUpperCase();
    guessLetter(guess);
}

console.log(`You guessed the word: ${wordLetters} and got $${reward}`);
