var timer = 60;
let score = 0;
let target;

function runTimer() {
    let timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector(".js-timer").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#panelbottom").innerHTML = `<h1 class="game-over">Game Over</h1>`
        }
    }, 1000)
}

function newHit(){
    target = Math.floor(Math.random()*10);
    document.querySelector(".js-hit").textContent = target;
}

function makebubble() {
    var container = "";
    for (let i = 1; i <= 126; i++) {
        let random = Math.floor(Math.random() * 10);
        container += `<div class="bubble">${random}</div>`
    }
    document.querySelector("#panelbottom").innerHTML = container;
}

function increaseScore(){
    score+=10;
    document.querySelector(".js-score").textContent = score;
}

document.querySelector("#panelbottom").addEventListener("click",function(dets){
    let clickedNumber = Number(dets.target.textContent);
    if(clickedNumber == target){
        increaseScore();
        makebubble();
        newHit();
    }
})
makebubble();
runTimer();
newHit();


