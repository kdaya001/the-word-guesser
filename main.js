var wordLetters = ['F', 'O', 'X'];
var guessedLetters = [];

function guessLetter(guessedLetter) {
    console.log(guessedLetters);

    for (let i = 0; i < wordLetters.length; i++) {
        if (guessedLetter === wordLetters[i]) {
            guessedLetters[i] = guessedLetter;
            console.log(
                `congratulations, you guessed a letter.\n ${guessedLetters}`
            );
        }
    }
}

function setup(wordLetters) {
    for (let i = 0; i < wordLetters.length; i++) {
        guessedLetters.push('-');
    }
}

setup(wordLetters);

while (guessedLetters.includes(`-`)) {
    let guess = prompt('Guess a letter');
    guessLetter(guess);
}
