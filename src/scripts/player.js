

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
// drawTestPlayer() {
//     ctx.beginPath();
//     ctx.rect(playerX, playerY, 50, 50);
//     ctx.fillStyle = "#FF0000";
//     ctx.fill();
//     ctx.closePath();
// }



class Player {
    constructor(ctx){
        this.ctx = ctx;

        this.x = x; 
        this.y = y; 
        this.dx = dx;
        this.dy = dy; 

        this.image = new Image();
        this.image.src = "./assets/images/killercross.gif"
    }

 
}

