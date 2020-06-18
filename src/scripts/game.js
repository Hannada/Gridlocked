import Player from "./player";
import Board from "./canvasBoard";

class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.player = new Player; // This is the player sprite
        this.board =  new Board; // Canvas board
        this.playerRender = this.playerRender.bind(this);

        this.hasMoved = false; 
        this.currentLoopIndex = 1;


        // Likely have to replace image with specific render or object?

        // this.img = new Image();

    }

    // Make sure the assets are being drawn on the canvas. Frames should be drawn on their models?

    // drawFrames(frameX, frameY, canvasX, canvasY){
    //     this.ctx.drawImage(img,
    //         frameX * PlayerWidth, frameY * PlayerHeight, PlayerWidth, PlayerHeight,
    //         canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT 
    //     )
    // }

    // Manages the frames

    gameStart() {
        this.fps = 1000 / 60;
        this.then = Date.now();
        this.renderGame();

    }

    renderGame() {
        // This function should collect the sprites to draw them.
        const now = Date.now();

        // Make the renders conditional based on the move? Unsure if that should go here
        if (this.hasMoved) {
            this.player.render; 
            this.currentLoopIndex += 1
        } else {
            this.currentLoopIndex = 0
        }
    }

    // Move logic might need to be here since game rules are here?

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

    // if (hasMoved) {
    //     frameCount++;
    //     if (frameCount >= FRAME_LIMIT) {
    //         frameCount = 0;
    //         currentLoopIndex++;
    //         if (currentLoopIndex >= CYCLE_LOOP.length) {
    //             currentLoopIndex = 0;
    //         }
    //     }
    // }

    // if (!hasMoved) {
    //     currentLoopIndex = 0;
    // }


}

export default Game;