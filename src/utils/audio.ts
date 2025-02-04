export class TimerAudio {
  private static instance: TimerAudio;
  private audioContext: AudioContext | null = null;
  private oscillator: OscillatorNode | null = null;
  private gainNode: GainNode | null = null;
  private isPlaying: boolean = false; // Track whether audio is playing

  private constructor() {}

  static getInstance(): TimerAudio {
    if (!TimerAudio.instance) {
      TimerAudio.instance = new TimerAudio();
    }
    return TimerAudio.instance;
  }

  private async initializeAudioContext(): Promise<void> {
    if (!this.audioContext) {
      this.audioContext = new AudioContext();
    }

    if (this.audioContext.state === 'suspended') {
      await this.audioContext.resume();
    }
  }

  async play(): Promise<void> {
    if (this.isPlaying) return; // Prevent multiple instances of sound
    this.isPlaying = true;

    try {
      await this.initializeAudioContext();
      if (!this.audioContext) throw new Error('AudioContext not initialized');

      this.oscillator = this.audioContext.createOscillator();
      this.gainNode = this.audioContext.createGain();

      this.oscillator.type = 'sine'; // Choose sine wave
      this.oscillator.frequency.setValueAtTime(880, this.audioContext.currentTime); // A5 note

      this.gainNode.gain.setValueAtTime(0.5, this.audioContext.currentTime); // Volume

      this.oscillator.connect(this.gainNode);
      this.gainNode.connect(this.audioContext.destination);

      this.oscillator.start(); // Start sound
    } catch (error) {
      console.error('Failed to play audio:', error);
    }
  }

  stop(): void {
    if (!this.isPlaying) return; // Prevent stopping if not playing
    this.isPlaying = false;

    if (this.oscillator) {
      try {
        this.oscillator.stop(); // Stop oscillator
        this.oscillator.disconnect(); // Disconnect
      } catch (error) {
        console.error(error);
      }
      this.oscillator = null;
    }

    if (this.gainNode) {
      this.gainNode.disconnect();
      this.gainNode = null;
    }
  }
}
