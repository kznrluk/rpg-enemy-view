import { SpriteEffect } from './SpriteEffect.js';

export class RPGCharaView {
    constructor(imgSrc) {
        this.width = 240;
        this.height = 240;
        this.img = new Image(this.width, this.height);
        this.img.src = imgSrc;
        this.img.style.position = 'absolute';
        this.img.style.objectFit = 'contain';

        this.effect = new SpriteEffect('./RPGCharaView/resource/effect.png', this.width, this.height);
        this.audio = new Audio('./RPGCharaView/resource/battle.mp3');
    }

    attack(isPlaySound) {
        console.log(isPlaySound)
        this.img.style.visibility = 'hidden';
        this.effect.renderEffect();
        if (isPlaySound) this.audio.play();
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

        const displayCharacters = document.createElement('div');
        displayCharacters.style.width = this.width + 'px';
        displayCharacters.style.height = this.height + 'px';

        const controllers = document.createElement('div');

        // 音選択
        const soundCheckBox = document.createElement('input');
        soundCheckBox.type = 'checkbox';
        soundCheckBox.id = 'playSound';
        const soundLabel = document.createElement('label');
        soundLabel.textContent = 'Sound';
        soundLabel.setAttribute('for', soundCheckBox.id);

        // 攻撃ボタン
        const attackButton = document.createElement('button');
        attackButton.textContent = '攻撃';
        attackButton.addEventListener('click', () => this.attack(soundCheckBox.checked));

        displayCharacters.append(this.img, this.effect.getCanvasElement());
        controllers.append(attackButton, soundCheckBox, soundLabel);

        divElement.append(
            displayCharacters,
            controllers,
        );
    }
}
