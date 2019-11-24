import { SpriteEffect } from './SpriteEffect.js';

export class Effect {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.sprite = new SpriteEffect('./RPGCharaView/resource/effect.png', this.width, this.height);
        this.damage = null;
    }

    renderEffect() {
        this.sprite.renderEffect();
    }

    getCanvasElement() {
        return this.sprite.getCanvasElement();
    }
}
