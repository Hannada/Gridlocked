function player (ctx) {
    const SCALE = 2;
    const WIDTH = 45;
    const HEIGHT = 72;
    const SCALED_WIDTH = SCALE * WIDTH;
    const SCALED_HEIGHT = SCALE * HEIGHT;
    const CYCLE_LOOP = [1, 2, 3, 4];
    const FRAME_LIMIT = 6;
    const MOVEMENT_SPEED = 2;


    let keyPresses = {};
    let currentLoopIndex = 1;
    let frameCount = 0;
    let positionX = 0;
    let positionY = 0;
    let img = new Image();

    window.addEventListener('keydown', keyDownListener);
    function keyDownListener(event) {
        keyPresses[event.key] = true;
    }

    window.addEventListener('keyup', keyUpListener);
    function keyUpListener(event) {
        keyPresses[event.key] = false;
    }

    function loadImage() {
        img.src = './assets/images/killercross.gif';
        img.onload = function () {
            window.requestAnimationFrame(gameLoop);
        };
    }


    function drawFrame(frameX, frameY, canvasX, canvasY) {
        ctx.drawImage(img,
            frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
            canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
    }

    loadImage();

    function gameLoop(ctx) {
        // ctx.clearRect(0, 0, canvas.width, canvas.height);

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

    function moveCharacter(deltaX, deltaY, direction) {
        if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
            positionX += deltaX;
        }
        if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
            positionY += deltaY;
        }
        // currentDirection = direction;
    }
}

export default player(); 