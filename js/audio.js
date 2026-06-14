/**
 * audio.js
 * Module de design sonore utilisant l'API Web Audio pour ne pas dépendre de fichiers externes.
 */

const AudioEngine = {
    ctx: null,
    enabled: true,

    init() {
        this.enabled = Storage.getSoundEnabled();
        // Création paresseuse du contexte audio au premier clic pour respecter les règles des navigateurs
        document.addEventListener('click', () => {
            if (!this.ctx) {
                this.ctx = new (window.AudioContext || window.webkitAudioContext)();
            }
        }, { once: true });
    },

    toggle() {
        this.enabled = !this.enabled;
        Storage.setSoundEnabled(this.enabled);
        return this.enabled;
    },

    playTone(freq, type, duration, vol=0.1) {
        if (!this.enabled || !this.ctx) return;

        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();

        osc.type = type;
        osc.frequency.setValueAtTime(freq, this.ctx.currentTime);
        
        gain.gain.setValueAtTime(vol, this.ctx.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.001, this.ctx.currentTime + duration);

        osc.connect(gain);
        gain.connect(this.ctx.destination);

        osc.start();
        osc.stop(this.ctx.currentTime + duration);
    },

    playCorrect() {
        // Double bip aigu
        this.playTone(600, 'sine', 0.1);
        setTimeout(() => this.playTone(800, 'sine', 0.2), 100);
    },

    playIncorrect() {
        // Bip grave
        this.playTone(200, 'triangle', 0.3, 0.15);
    },

    playSelect() {
        // Petit clic
        this.playTone(400, 'sine', 0.05, 0.05);
    }
};
