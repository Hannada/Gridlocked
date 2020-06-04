import { text } from "express";

class Sprite {
    constructor(img) {
        this.image = image;
    }

    // Spite model should render sprite. Potentially carry over any other logic
    // Currently it should only draw sprite but might alter later.

    // Multiplying the dwidth and dheight alters the scale of the sprite 
    // Example in previous exercise on index

    // scale * dw and scale * dh 

    renderSprite( sx, sy, sw, sh, dx, dy, dw, dh, ctx) {
        ctx.drawImage(this.image, sx, sy, sw, sh, dx, dy, dw, dh);
    }
}

export default Sprite;