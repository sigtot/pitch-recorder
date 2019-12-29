import {frequency, getOctave, numOctaves} from "./piano";

const harmonicFalloff = 0.3;
const A4Gain = 0.5;

export const getAudioContext = () => {
    AudioContext = window.AudioContext || window.webkitAudioContext;
    return new AudioContext();
};

export const playSound = (audioCtx, freq, gain) => {
    const oscNode = audioCtx.createOscillator();
    oscNode.frequency.value = freq;
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = gain;
    oscNode.connect(gainNode);
    gainNode.gain.setTargetAtTime(0, audioCtx.currentTime, 0.2);
    gainNode.connect(audioCtx.destination);
    oscNode.start(0);
    window.setTimeout(() => {
        gainNode.disconnect();
        oscNode.disconnect();
        oscNode.stop();
    }, 3000);
};

export const playPianoNote = (audioCtx, key) => {
    const numOvertones = numOctaves - getOctave(key);
    for (let i = 1; i <= numOvertones + 1; i++) {
        playSound(audioCtx, i * frequency(key), A4Gain*Math.exp(-(i - 1)*harmonicFalloff));
    }
};
