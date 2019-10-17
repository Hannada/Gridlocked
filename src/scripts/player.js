

class Player {
    constructor(ctx){
        this.ctx = ctx;

        // this.x = x; 
        // this.y = y; 
        // this.dx = dx;
        // this.dy = dy; 
        this.SCALE = 1.5;
        this.WIDTH = 45;
        const HEIGHT = 72;
        this.SCALED_WIDTH = SCALE * WIDTH;
        this.SCALED_HEIGHT = SCALE * HEIGHT;
        // const CYCLE_LOOP = [0, 1, 2, 3, 4];
        this.CYCLE_LOOP = [1, 2, 3, 4];
        this.FRAME_LIMIT = 6;
        this.MOVEMENT_SPEED = 2;
        this.keyPresses = {};
        // let currentLoopIndex = 0;
        this.currentLoopIndex = 1;
        this.frameCount = 0;
        this.positionX = 0;
        this.positionY = 0;

        this.image = new Image();
        this.image.src = "./assets/images/killercross.gif"
    }

    drawFrame(frameX, frameY, canvasX, canvasY) {
        ctx.drawImage(img,
            frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
            canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
    }
    // drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight) {

    // }

    gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        let hasMoved = false;

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

        if (!hasMoved) {
            currentLoopIndex = 0;
        }

        drawFrame(CYCLE_LOOP[currentLoopIndex], 0, positionX, positionY);
        window.requestAnimationFrame(gameLoop);
    }

    moveCharacter(deltaX, deltaY, direction) {
        if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
            positionX += deltaX;
        }
        if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
            positionY += deltaY;
        }
        currentDirection = direction;
    }


    loadImage() {
        // img.src = './killercross.gif';
        img.onload = function () {
            window.requestAnimationFrame(gameLoop);
        };
    }
}


export default Player;

