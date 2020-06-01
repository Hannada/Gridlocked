import Player from "./player";
import Board from "./canvasBoard";

class Game {
    constructor(ctx){
        this.ctx = ctx;
        this.player = new Player; // This is the player sprite
        this.board =  new Board; // Canvas board
        this.playerRender = this.playerRender.bind(this);
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


}

export default Game;