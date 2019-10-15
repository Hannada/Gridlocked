var x = canvas.width / 2;
var y = canvas.height - 30;
var dx = 2;
var dy = -2;



document.addEventListener("keydown", keyDownHandler, false);
document.addEventListener("keyup", keyUpHandler, false);

function keyDownHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = true;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = true;
    }
}

function keyUpHandler(e) {
    if (e.key == "Right" || e.key == "ArrowRight") {
        rightPressed = false;
    }
    else if (e.key == "Left" || e.key == "ArrowLeft") {
        leftPressed = false;
    }
}

// if (rightPressed) {
//     playerX += 7;
//     if (playerX + paddleWidth > canvas.width) {
//         playerX = canvas.width - paddleWidth;
//     }
// }
// else if (leftPressed) {
//     playerX -= 7;
//     if (playerX < 0) {
//         playerX = 0;
//     }
// }

function drawTestPlayer() {
    ctx.beginPath();
    ctx.rect(playerX, playerY, 50, 50);
    ctx.fillStyle = "#FF0000";
    ctx.fill();
    ctx.closePath();
}

// class Player {
//     constructor(){

//     }


// }