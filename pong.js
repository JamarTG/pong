var ball = document.getElementById("ball");
var leftPaddle = document.getElementById("left-paddle");
var rightPaddle = document.getElementById("right-paddle");
addEventListener("keydown", function (_a) {
    var key = _a.key;
    switch (key) {
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
});
function startGame() {
    setInterval(moveBall, 50);
}
function moveBall() {
    BallHasCollidedWithRightPaddle();
    ball.style.left = "".concat((ball.offsetLeft + 10).toString(), "px");
}
function BallHasCollidedWithRightPaddle() {
    var hasCollided = Math.abs(ball.offsetLeft - rightPaddle.offsetLeft) < 10 && Math.abs(ball.offsetLeft - rightPaddle.offsetLeft) < 20;
    if (hasCollided) {
        // determine whether the player has died
        // in that case end the game and increment the score 
        // or the player caught the ball    
        // in which case you reverse the ball using physics
    }
}
startGame();
