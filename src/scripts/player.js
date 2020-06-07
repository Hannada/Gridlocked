export default class Player {
    constructor(ctx){

        // Going to alter the ctx and move some info to game

        this.ctx = ctx 
        this.SCALE = 2;

        // Altering width and height naming to match sprite?
        this.dw = 45;
        this.dh = 72;
        this.SCALED_WIDTH = SCALE * dw;
        this.SCALED_HEIGHT = SCALE * dh;

        this.CYCLE_LOOP = [1, 2, 3, 4];
        this.FRAME_LIMIT = 6;
        this.MOVEMENT_SPEED = 2;


        this.keyPresses = {};
        this.currentLoopIndex = 1;
        this.frameCount = 0;
        this.positionX = 0;
        this.positionY = 0;
        this.img = new Image();
        this.img.src = './assets/images/killercross.gif';
        this.sprite = new Sprite(this.image);
        // this.img.onload = this.bind(this.img.onload)
        this.hasMoved = false;
        
    }

    // move(){
        
    //     document.addEventListener('keydown', keyDownListener);
    //     function keyDownListener(event) {
    //         keyPresses[event.key] = true;
    //     }
        
    //     document.addEventListener('keyup', keyUpListener);
    //     function keyUpListener(event) {
    //         keyPresses[event.key] = false;
    //     }
    // }


    
    // loadImage() {
    //     img.onload =  function init() {window.requestAnimationFrame(gameLoop)}     
    // };

    // Looking to replace this with sprite function

    // drawFrame(frameX, frameY, canvasX, canvasY) {
    //     this.ctx.drawImage(img, frameX * WIDTH, frameY * HEIGHT, WIDTH, HEIGHT,canvasX, canvasY, SCALE * WIDTH, SCALE * HEIGHT);

    // }

    render() {
        // This should call rendersprite
        this.sprite.renderSprite(sx, sy, sw, sh, dx, dy, dh, ctx)
    }

    // Try incorparating sprite.renderSprite for multiple sources



    gameLoop() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }

    // move (){
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

    // }        
}
