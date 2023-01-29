const ball = document.getElementById("ball") as HTMLDivElement
const lPaddle = document.getElementById("left-paddle") as HTMLDivElement
const rPaddle = document.getElementById("right-paddle") as HTMLDivElement
const wall = document.getElementById("pong-canvas") as HTMLElement;

let isBallMovingL = true;
let hasHitLWall = false;
let hasHitRWall = false;

addEventListener("keydown", function({key}) {
    switch(key){
        case "ArrowUp":
            // Functionality
            break;
        case "ArrowDown":
            // Functionality
            break;
        case "ArrowLeft":
            // Functionality
            break;
        case "ArrowRight":
            // Functionality
            break;
        default:
            // Functionality
            break;
    }
})

function startGame() {
    setInterval(moveBall,10);  
}

function moveBall() {
    hasHitLWall = ball.offsetLeft < lPaddle.offsetWidth + lPaddle.offsetLeft;
    hasHitRWall = ball.offsetLeft > (screen.width - (screen.width - rPaddle.offsetLeft) - rPaddle.offsetWidth);
    
    isBallMovingL = hasHitLWall || hasHitRWall ? !isBallMovingL : isBallMovingL; 

    ball.style.left = `${(ball.offsetLeft + (isBallMovingL ? -2 : 2)).toString()}px`;
}

function hasCollidedWithTopWall(){}

function hasCollidedWithBottomWall(){}

function hasCollidedWithLeftWall(){}

startGame()