'use strict';

let secretnumber = Math.trunc(Math.random()*20) + 1;
let score = 20; //keep a score variable to hold a score instead of relying on DOM
let highScore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

const changeWidth = function(width) {
    document.querySelector('.number').style.width = width;
}

const changeBg = function(bgColor) {
    document.querySelector('body').style.backgroundColor  = bgColor;
}

const changeScore = function(score) {
    document.querySelector('.score').textContent = score;
}



document.querySelector('.again').addEventListener('click', function() {
    score  = 20;
    secretnumber = Math.trunc(Math.random()*20) + 1;

    changeBg('#222');
    document.querySelector('.number').textContent = '?';
    changeScore(score);
    document.querySelector('.guess').value = '';
    changeWidth('15rem');
    displayMessage('Start guessing...');


});

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value); //Converted to number

    if (score > 0) {

    if (!guess) {
        displayMessage('No number!');

    }

    else if (guess === secretnumber) {
        displayMessage('Yay! You win');
        changeBg('#60b347');
        changeWidth('30rem');

        document.querySelector('.number').textContent =  secretnumber;

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } 

    else if (guess !== secretnumber) {
        if (score >  1) {

            displayMessage(guess > secretnumber ? 'Too high' : 'Too low');
            score--;
            Number(changeScore(score));

        }
    
        else {
            displayMessage("You lost the game!");
            changeBg('red');
            changeScore('0');
        }
    }

} 

});


