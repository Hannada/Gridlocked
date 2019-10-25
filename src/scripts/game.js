import Player from "./player";
import Board from "./canvasBoard";

export default class Game {
    constructor(ctx){
        this.player = new Player; 
        this.board =  new Board;
    }
    render(){
        this.player.loadImage();
    }
}