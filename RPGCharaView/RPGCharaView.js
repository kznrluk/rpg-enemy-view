import { SpriteEffect } from './SpriteEffect.js';

export class RPGCharaView {
    constructor(imgSrc) {
        this.width = 240;
        this.height = 240;
        this.img = new Image(this.width, this.height);
        this.img.src = imgSrc;
        this.img.style.position = 'absolute';
        this.img.style.objectFit = 'contain';

        this.effect = new SpriteEffect('./RPGCharaView/sprite/effect.png', this.width, this.height);
    }

    attack() {
        this.img.style.visibility = 'hidden';
        this.effect.renderEffect();
        let i = 0;
        const intervalId = setInterval(() => {
            this.img.style.visibility = (this.img.style.visibility === 'visible') ? 'hidden' : 'visible';
            i++;
            if (i >= 3) {
                clearInterval(intervalId);
                this.img.style.visibility = 'visible';
            }
        }, 160);
    }

    render(divElement) {
        divElement.innerHTML = '';
        divElement.style.width = this.width;
        divElement.style.height = this.height;

        const displayCharacters = document.createElement('div');
        const controllers = document.createElement('div');

        const attackButton = document.createElement('button');
        attackButton.textContent = '攻撃';
        attackButton.addEventListener('click', () => this.attack());
        attackButton.style.position = 'absolute';
        attackButton.style.top = this.height + 20 + 'px';

        displayCharacters.append(this.img, this.effect.getCanvasElement());
        controllers.append(attackButton);

        divElement.append(
            displayCharacters,
            controllers,
        );
    }
}
