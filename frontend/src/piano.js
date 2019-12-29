const firstCOffset = 3; // A = 0, A# = 1, B = 2, C = 3;
const octaveLength = 12;

export const getC = CNum => firstCOffset + octaveLength * CNum;

export const getOctave = keyNum =>
    Math.floor((keyNum - firstCOffset) / octaveLength);

export const keyMap = [
    "C",
    "C#",
    "D",
    "D#",
    "E",
    "F",
    "F#",
    "G",
    "G#",
    "A",
    "A#",
    "B"];

export const relativeKeyNum = keyNum => (keyNum - firstCOffset) % octaveLength;
export const keyName = keyNum => keyMap[relativeKeyNum(keyNum)];
