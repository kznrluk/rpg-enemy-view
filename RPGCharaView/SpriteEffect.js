export class SpriteEffect {
    constructor(effectSrc, width, height) {
        this.tickRate = 40;
        this.sprite = new Image(width, height);
        this.sprite.src = effectSrc;

        this.canvas = document.createElement('canvas');
        this.canvas.width = width;
        this.canvas.height = height;
        this.canvas.style.width = width + 'px';
        this.canvas.style.height = height + 'px';
        this.canvas.style.position = 'absolute';

        this.ctx = this.canvas.getContext('2d');
        this.ctx.clearRect(0, 0, width, height);
    }

    renderEffect() {
        let i = 0;
        const intervalId = setInterval(() => {
            this.ctx.clearRect(0, 0, 240, 240);
            this.ctx.drawImage(this.sprite, i*400, 0, 400, 400, -10, -10, 280, 280);
            i++;
            if (i >= 9) {
                clearInterval(intervalId);
            }
        }, this.tickRate);
    }


    getCanvasElement() {
        return this.canvas;
    }
}
