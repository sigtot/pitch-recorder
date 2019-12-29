export const getAudioContext = () => {
    AudioContext = window.AudioContext || window.webkitAudioContext;
    return new AudioContext();
};

export const playSound = (audioCtx, freq) => {
    const oscNode = audioCtx.createOscillator();
    oscNode.frequency.value = freq;
    oscNode.start(0);
    const gainNode = audioCtx.createGain();
    gainNode.gain.value = 1;
    oscNode.connect(gainNode);
    gainNode.gain.setTargetAtTime(0, audioCtx.currentTime, 0.2);
    gainNode.connect(audioCtx.destination);
    window.setTimeout(() => gainNode.disconnect(), 3000);
};
