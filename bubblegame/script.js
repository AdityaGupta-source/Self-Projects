let timer = 60;
let score = 0;
let target;
let timerint;

function runTimer() {
        timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector(".js-timer").textContent = timer;
        }
        else {
            clearInterval(timerint);
            document.querySelector("#panelbottom").innerHTML = `
            <div class="Game-Over-Screen">
            <h1 class="game-over">Game Over</h1>
            <p class="score-display">Your final Score is <span class="score-color">${score}</span></p>
            <button onclick="playAgain()" class="playagainbutton" >Play Again</button>
            </div>
            `;
            let tl = gsap.timeline();
            tl.from(".game-over",{
                opacity: 0,
                scale: 0.2,
                duration: 0.6,
                ease: "power2.out",
            })
            tl.from(".score-display",{
                opacity: 0,
                scale: 0.2,
                duration: 0.7,
                ease: "power2.out",
                color: "yellow",
            })
            tl.from(".playagainbutton",{
                color: "yellow",
                duration: 1,
                repeat: -1,
                yoyo: true,
            })
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
function resetTimer(){
    clearInterval(timerint);
    timer = 60;
    runTimer();
}
function playAgain(){
    resetTimer();
    makebubble();
    newHit();
    score = 0;
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
