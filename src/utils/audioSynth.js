// audioSynth.js - Efeitos sonoros realistas gerados por Web Audio API
// Não requer arquivos de áudio externos; funciona 100% offline em qualquer navegador moderno.

class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && typeof window !== "undefined") {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        this.ctx = new AudioContext();
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume();
    }
  }

  // Som mecânico de clique de armar relé (comutação física eletromecânica)
  playRelayClick(isOn = true) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const now = this.ctx.currentTime;

      // Pulso 1: Impacto mecânico metálico da armadura do relé
      const osc1 = this.ctx.createOscillator();
      const gain1 = this.ctx.createGain();

      osc1.type = "square";
      osc1.frequency.setValueAtTime(isOn ? 180 : 140, now);
      osc1.frequency.exponentialRampToValueAtTime(30, now + 0.035);

      gain1.gain.setValueAtTime(0.35, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

      osc1.connect(gain1);
      gain1.connect(this.ctx.destination);

      osc1.start(now);
      osc1.stop(now + 0.045);

      // Pulso 2: Ressonância curta do invólucro plástico (módulo relé 5V)
      const osc2 = this.ctx.createOscillator();
      const gain2 = this.ctx.createGain();

      osc2.type = "sine";
      osc2.frequency.setValueAtTime(isOn ? 750 : 620, now + 0.005);
      osc2.frequency.exponentialRampToValueAtTime(100, now + 0.06);

      gain2.gain.setValueAtTime(0.2, now + 0.005);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.07);

      osc2.connect(gain2);
      gain2.connect(this.ctx.destination);

      osc2.start(now + 0.005);
      osc2.stop(now + 0.075);
    } catch {
      // Audio fallback silencioso caso bloqueado
    }
  }

  // Som suave de transição de slide
  playSlideTransition() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(420, now);
      osc.frequency.exponentialRampToValueAtTime(640, now + 0.08);

      gain.gain.setValueAtTime(0.06, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.09);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.1);
    } catch {
      // Silencioso
    }
  }

  // Bipe suave de alerta / sucesso
  playBeep() {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = "triangle";
      osc.frequency.setValueAtTime(880, now);

      gain.gain.setValueAtTime(0.1, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.13);
    } catch {
      // Silencioso
    }
  }
}

export const sound = new SoundFX();
