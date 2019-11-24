import { html, render } from 'https://unpkg.com/lit-html?module';
import { styleMap } from 'https://unpkg.com/lit-html/directives/style-map.js?module';
import { Effect } from './Effect.js';

export class RPGCharaView {
    constructor(imgSrc) {
        this.width = 240;
        this.height = 240;
        this.img = new Image(this.width, this.height);
        this.img.src = imgSrc;
        this.img.style.position = 'absolute';
        this.img.style.objectFit = 'contain';

        this.effect = new Effect(this.width, this.height);
        this.audio = new Audio('./RPGCharaView/resource/battle.mp3');
    }

    attack(playSound) {
        this.img.style.visibility = 'hidden';
        this.effect.renderEffect();
        if (playSound) this.audio.play();
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

        const displayStyle = {
            width: this.width + 'px',
            height: this.height + 'px',
        };

        let playSound = false;
        // language=HTML
        const applicationHTML = html`
            <div id="displayCharacters" style="${styleMap(displayStyle)}">
                ${this.img}
                ${this.effect.getCanvasElement()}
            </div>
            <div>
                <button @click=${() => this.attack(playSound)}>攻撃</button>
                <input type="checkbox" id="playSound" @change=${e => playSound = e.currentTarget.checked}>
                <lavel for="playSound">Sound</lavel>
            </div>
        `;

        render(applicationHTML, divElement);
    }
}
