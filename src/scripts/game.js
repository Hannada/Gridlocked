import Player from "./player";
import Board from "./canvasBoard";

export default class Game {
    constructor(ctx){
        this.player = new Player; // This is the player sprite
        this.board =  new Board; // Canvas board
    }
    render(){
        this.player.loadImage();
    }
}