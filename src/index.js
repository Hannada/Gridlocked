// import Game from "./scripts/player";
// import Player from "./scripts/player";
import "./styles/index.scss";
// import axios from "axios";

// window.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("app").innerText = "Hello World!";
//     axios.get("./search?").then(res => console.log(res));
// });


document.addEventListener('DOMContentLoaded', () => {

    const canvas = document.getElementById("myCanvas");
    canvas.width = 720;
    canvas.height = 480;
    const ctx = canvas.getContext("2d");

    const background = new Image();
    background.src = "../assets/images/image79.jpg"

    background.onload = function () {
        ctx.drawImage(background, 0, 0);
    }


    // axios.get("./search?").then(res => console.log(res));


    // const play = () => {
    //     const game = new Player(ctx)
    //     game.startAnimating();
    // }
});
