var wordLetters = ['F', 'O', 'X'];
var guessedLetters = [];
var reward = 0;

function guessLetter(guessedLetter) {
    console.log(guessedLetters);
    let thisReward = Math.floor(Math.random() * 100 + 1);
    let inWord = false;

    for (let i = 0; i < wordLetters.length; i++) {
        if (guessedLetter === wordLetters[i]) {
            guessedLetters[i] = guessedLetter;
            console.log(
                `congratulations, you guessed a letter.\n ${guessedLetters}`
            );
            inWord = true;
        }
    }
    
    if(inWord) reward += thisReward;
    else reward -= thisReward;
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

console.log(`You guessed the word: ${wordLetters} and got $${reward}`);
