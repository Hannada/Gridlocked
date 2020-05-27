
this.CYCLE_LOOP = [1, 2, 3, 4];

this.WIDTH = 45;
this.HEIGHT = 72;
// this.SCALED_WIDTH = SCALE * WIDTH;
// this.SCALED_HEIGHT = SCALE * HEIGHT;
this.CYCLE_LOOP = [1, 2, 3, 4];
this.FRAME_LIMIT = 6;
this.MOVEMENT_SPEED = 2;


this.keyPresses = {};
this.currentLoopIndex = 1;
this.frameCount = 0;
this.positionX = 0;
this.positionY = 0;
this.img = new Image();
this.img.src = './assets/images/killercross.gif';
// this.img.onload = this.bind(this.img.onload)
this.hasMoved = false;

    }

// loadImage() {
//     img.onload = function init() { window.requestAnimationFrame(gameLoop) }
// };


loadImage() {
    img.src = './assets/images/killercross.gif';
    img.onload = function () {
        window.requestAnimationFrame(megaLoop);
    };
}

drawFrame(frameX, frameY, canvasX, canvasY) {
    this.ctx.drawImage(img, frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT, canvasX, canvasY, SCALE * WIDTH, SCALE * HEIGHT);

}



// gameLoop() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
// }

// Make a function that will start the animations

gameStart() {
    this.fps = 1000 / 60;
    this.then = Date.now();

}

// Uses a separate function to how hasmoved so it can request and animation frame

playerRender() {


    if (hasMoved) {
        frameCount++;
        if (frameCount >= FRAME_LIMIT) {
            frameCount = 0;
            currentLoopIndex++;
            if (currentLoopIndex >= CYCLE_LOOP.length) {
                currentLoopIndex = 0;
            }
        }
    }
    // if (!hasMoved) {
    //     currentLoopIndex = 0;
    // }

    window.requestAnimationFrame(this.playerRender)
}

move() {
    if (keyPresses.w) {
        moveCharacter(0, -MOVEMENT_SPEED);
        hasMoved = true;
    } else if (keyPresses.s) {
        moveCharacter(0, MOVEMENT_SPEED);
        hasMoved = true;
    }

    if (keyPresses.a) {
        moveCharacter(-MOVEMENT_SPEED, 0);
        hasMoved = true;
    } else if (keyPresses.d) {
        moveCharacter(MOVEMENT_SPEED, 0);
        hasMoved = true;
    }
}

// drawFrame(CYCLE_LOOP[currentLoopIndex], 0, positionX, positionY);
//     window.requestAnimationFrame(gameLoop);
// }

// Need to restructure this to include player

moveCharacter(deltaX, deltaY, direction) {
    if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
        positionX += deltaX;
    }
    if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
        positionY += deltaY;
    }
}

    // render(){
    //     this.loadImage();
    //     this.player
    // }
    // this.player.render();

    // Right now only the canvas is showing in index