const firstCOffset = 3; // A = 0, A# = 1, B = 2, C = 3;
export const octaveLength = 12;
export const numOctaves = 7;
const nA4 = 48; // A is (zero indexed) 48
const tuningFreq = 440; // A = 440Hz

export const getC = cNum => firstCOffset + octaveLength * cNum;

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
    "B",
    "C"];

export const frequency = (keyNum) =>
    Math.pow(Math.pow(2, 1/octaveLength), keyNum - nA4) * tuningFreq;

export const relKeyNum = (keyNum, cNum) => keyNum - getC(cNum);
export const keyName = keyNum => keyMap[(keyNum - firstCOffset) % octaveLength];
