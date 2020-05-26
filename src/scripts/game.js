import Player from "./player";
import Board from "./canvasBoard";

export default class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.player = new Player; // This is the player sprite
        this.board =  new Board; // Canvas board


        this.CYCLE_LOOP = [1, 2, 3, 4];

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

    if(hasMoved) {
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

    // drawFrame(CYCLE_LOOP[currentLoopIndex], 0, positionX, positionY);
    //     window.requestAnimationFrame(gameLoop);
    // }

    // function moveCharacter(deltaX, deltaY, direction) {
    //     if (positionX + deltaX > 0 && positionX + SCALED_WIDTH + deltaX < canvas.width) {
    //         positionX += deltaX;
    //     }
    //     if (positionY + deltaY > 0 && positionY + SCALED_HEIGHT + deltaY < canvas.height) {
    //         positionY += deltaY;
    //     }

    render(){
        // this.player.loadImage();
        this.player
    }

    // Right now only the canvas is showing in index
}