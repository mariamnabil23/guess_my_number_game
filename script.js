'use strict';

let secretNum = Math.trunc(Math.random() * 20 ) + 1;
console.log(secretNum)
const checkBtn = document.querySelector('.check');
let score = 20;
document.querySelector('.score').textContent = score;
let highScore = 0;
document.querySelector('.highscore').textContent = highScore;
const againBtn = document.querySelector('.again');


// func for displaying message content
const displayMessageContent = function(msg){
    document.querySelector('.message').textContent = msg;
}

checkBtn.addEventListener('click', ()=>{
    const guessNum = Number(document.querySelector(".guess").value);
    console.log(guessNum, typeof guessNum)
    if(score > 1){
        score --;
        //  no number is entered to the input
        if(!guessNum){
            displayMessageContent("No Number Entered! 🤔");
            document.querySelector('.score').textContent = score;

        // the player enter the corrected number and win
        } else if(guessNum === secretNum){
            displayMessageContent("Correct Number 🤩");
            document.querySelector('.number').textContent = secretNum;
            document.querySelector('body').style.backgroundColor = '#60b347';
            
            if(score > highScore){
                highScore = score+1;
                document.querySelector('.highscore').textContent = highScore;
            }

        // the guessNum is entered not equal the secretNum [higher || lower]
        } else if (guessNum !== secretNum){
            displayMessageContent(guessNum > secretNum ? "😥 Too High" : "😥 Too Low");
            document.querySelector('.score').textContent = score;
        }

        // =================> using refactoring technique instead it to DRY Principle
        // else if(guessNum > secretNum){
        //     document.querySelector('.message').textContent = "😥 Too High"
        //     document.querySelector('.score').textContent = score;
        // } else if(guessNum < secretNum){
        //     document.querySelector('.message').textContent = "😥 Too Low"
        //     document.querySelector('.score').textContent = score;
        // }

    }else{
        displayMessageContent("You Lost The Game 💔");
        document.querySelector('.score').textContent = 0;
    }
    
})

againBtn.addEventListener('click', ()=>{
    secretNum = Math.trunc(Math.random() * 20 ) + 1;
    console.log(secretNum);
    score = 20 ;
    
    document.querySelector('.score').textContent = score;

    document.querySelector('.guess').value = '';

    document.querySelector('.number').textContent = '?';

    displayMessageContent('Start Guessing Again ...');

    document.querySelector('body').style.backgroundColor ='#222';

})
