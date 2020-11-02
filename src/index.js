import Game from "./scripts/game";
import Player from "./scripts/player";
import all from "./scripts/test";
import "./styles/index.scss";

// Curently none of the imports outside of styling are actually working.

// import axios from "axios";

//What is axios?

// window.addEventListener("DOMContentLoaded", () => {
//     document.getElementById("app").innerText = "Hello World!";
//     axios.get("./search?").then(res => console.log(res));
// });

// Can potentially have a specialized draw function that goes over each object to render

// See asteroids for collision and packaging 

document.addEventListener('DOMContentLoaded', () => {

    // The below is animating the mega sprite by itself

    const canvas = document.getElementById("myCanvas");
    canvas.width = 720;
    canvas.height = 480;
    const ctx = canvas.getContext("2d");
    document.body.appendChild(canvas);




    const SCALE = 2;
    const WIDTH = 45;
    const HEIGHT = 72;
    const SCALED_WIDTH = SCALE * WIDTH;
    const SCALED_HEIGHT = SCALE * HEIGHT;
    const CYCLE_LOOP = [1, 2, 3, 4];
    const FRAME_LIMIT = 6;
    const MOVEMENT_SPEED = 2;



    const SHOT_WIDTH = 45;
    const SHOT_HEIGHT = 140;
    const SHOT_LOOP = [1, 2, 3, 4]


  
    let keyPresses = {};
    let currentLoopIndex = 1;
    let frameCount = 0;
    let positionX = 0;
    let positionY = 0;
    let img = new Image();
    var lastTime;


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
            window.requestAnimationFrame(megaLoop);
        };
    }


    function drawFrame(frameX, frameY, canvasX, canvasY) {
        ctx.drawImage(img,
            frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,
            canvasX, canvasY, SCALED_WIDTH, SCALED_HEIGHT);
    }

    loadImage();



    function megaLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

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

        // if (keyPresses.b) {

        // }

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
        window.requestAnimationFrame(megaLoop);
    }

    function buster() {
        let hasShot = false; 

        if (hasShot) {
            frameCount++;


        }
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

    



    
    
    
// });

// axios.get("./search?").then(res => console.log(res));



// ctx not being provided anywhere here



// Current version below

// document.addEventListener('DOMContentLoaded', () => {

//     const canvas = document.getElementById("myCanvas");
//     canvas.width = 720;
//     canvas.height = 480;
//     const ctx = canvas.getContext("2d");

//     // document.body.appendChild(canvas);

//     // debugger 

//     // Current playgame is not being hit

    const playGame = () => {
            // debugger
            const game = new Game(ctx);
            canvas.classList = '';
            game.gameStart();

        }
        
        // this.playGame();

});


// Looking to copy current version below