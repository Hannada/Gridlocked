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

    playerRender() {
        this.player.render();
        // This should trigger the render method in player 
    }

    renderGame() {
        // This function should collect the sprites to draw them.
        const now = Date.now();

        // Make the renders conditional based on the move? Unsure if that should go here
        if (this.hasMoved) {
            // this.player.render; 
            this.currentLoopIndex += 1
            // window.requestAnimationFrame(this.player.render)
        } else {
            this.currentLoopIndex = 0
        }

        // The actual assets still need to be rendered in here to pass over to index.
        this.player.playerRender();
        return 
        ctx.clearRect(0, 0, 0, 0);
        // window.requestAnimationFrame(this.renderGame)

    }

    // Move logic might need to be here since game rules are here?

    move() {
        if (keyPresses.w) {
            moveCharacter(0, -MOVEMENT_SPEED);
            hasMoved = true;
            this.player.render;

            // Need to clean the slate?
            // May need to clear for size of player model
            // ctx.clearRect(0, 0, 0, 0);

            // Place render here?
        } else if (keyPresses.s) {
            moveCharacter(0, MOVEMENT_SPEED);
            hasMoved = true;
            this.player.render;

        }

        if (keyPresses.a) {
            moveCharacter(-MOVEMENT_SPEED, 0);
            hasMoved = true;
            this.player.render;

        } else if (keyPresses.d) {
            moveCharacter(MOVEMENT_SPEED, 0);
            hasMoved = true;
            this.player.render;

        }
    }

    // move() {
    //     if (keyPresses.w) {
    //         moveCharacter(0, -MOVEMENT_SPEED);
    //         hasMoved = true;
    //     } else if (keyPresses.s) {
    //         moveCharacter(0, MOVEMENT_SPEED);
    //         hasMoved = true;
    //     }

    //     if (keyPresses.a) {
    //         moveCharacter(-MOVEMENT_SPEED, 0);
    //         hasMoved = true;
    //     } else if (keyPresses.d) {
    //         moveCharacter(MOVEMENT_SPEED, 0);
    //         hasMoved = true;
    //     }
    // }

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