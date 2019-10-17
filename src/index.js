import Game from "./scripts/player";
import Player from "./scripts/player";

document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById("myCanvas");
    canvas.width = 720;
    canvas.height = 480;
    const ctx = canvas.getContext("2d");

    const play = () => {
        const game = new Player(ctx)
        game.startAnimating();
    }
});
