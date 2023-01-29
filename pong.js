var ball = document.getElementById("ball");
var lPaddle = document.getElementById("left-paddle");
var rPaddle = document.getElementById("right-paddle");
var wall = document.getElementById("pong-canvas");
var isBallMovingL = true;
var hasHitLWall = false;
var hasHitRWall = false;
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
    setInterval(moveBall, 10);
}
function moveBall() {
    hasHitLWall = ball.offsetLeft < lPaddle.offsetWidth + lPaddle.offsetLeft;
    hasHitRWall = ball.offsetLeft > (screen.width - (screen.width - rPaddle.offsetLeft) - rPaddle.offsetWidth);
    isBallMovingL = hasHitLWall || hasHitRWall ? !isBallMovingL : isBallMovingL;
    ball.style.left = "".concat((ball.offsetLeft + (isBallMovingL ? -2 : 2)).toString(), "px");
}
function hasCollidedWithTopWall() { }
function hasCollidedWithBottomWall() { }
function hasCollidedWithLeftWall() { }
startGame();
