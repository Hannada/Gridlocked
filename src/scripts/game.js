import Player from "./player";
import Board from "./canvasBoard";

class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.player = new Player; // This is the player sprite
        this.board =  new Board; // Canvas board
        this.playerRender = this.playerRender.bind(this);

        // Likely have to replace image with specific render or object?

        // this.img = new Image();

    }

    // Make sure the assets are being drawn on the canvas

    drawFrames(frameX, frameY, canvasX, canvasY){
        this.ctx.drawImage(img,
            frameX * PlayerWidth, frameY * PlayerHeight, PlayerWidth, PlayerHeight,
            canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT 
        )
    }

    // Manages the frames

    gameStart() {
        this.fps = 1000 / 60;
        this.then = Date.now();

    }

    renderGame() {
        // This function should collect the sprites to draw them.
        this.player.render; 
    }


}

export default Game;