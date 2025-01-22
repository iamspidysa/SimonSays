let gameSeq = [];
let userSeq = [];
let btns = ["red", "yellow", "blue", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");
let flashDiv = document.querySelectorAll(".box");

// To start the game.
document.addEventListener("keydown", function () {
    // console.log("Game Started");
    if (started == false) {
        // console.log("Game Running");
        started = true;
        levelup();
    }
});
//Level up and change the h2 text to current level.
function levelup() {
    userSeq = [];

    level++;
    h2.innerText = `Level ${level}`;

    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);

    //Pushing randomColor to gameSeq Array to store the pattern.
    gameSeq.push(randomColor);
    console.log(gameSeq);

    //Flashing button which are randomly generated
    flash(randomBtn);

}

function checkAns(idx) {
    // console.log(`Current lvl : ${level}`);
    // Didnt Understood this if block ( JS mini project/Matching sequence)
    // let idx = level - 1;
    if (userSeq[idx] === gameSeq[idx]) {
        // console.log("Same Level");
        if (userSeq.length === gameSeq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h2.innerHTML = `Game Over ! Your Score was ${level} <br>Please press any key to start`;
        document.querySelector("body").style.backgroundColor = "red";
        setTimeout(function(){
        document.querySelector("body").style.backgroundColor = "white";
        },200);
        reset();
    }
}

// Flash Buttons
function flash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}




//Function for buttton pressed
function btnPressed() {
    // console.log(this);
    let btn = this;
    flash(btn);

    //Get Color of individual boxes
    userColor = btn.getAttribute("id");
    // console.log(userColor);    
    userSeq.push(userColor);
    checkAns(userSeq.length - 1);

}
// Adding Event on All buttons
let allBtns = document.querySelectorAll(".box");
for (const el of allBtns) {
    el.addEventListener("click", btnPressed);

}

function reset() {
    gameSeq = [];
    userSeq = [];
    started = false;
    level = 0;
}