const firstCOffset = 3; // A = 0, A# = 1, B = 2, C = 3;
export const octaveLength = 12;
export const numOctaves = 7;

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

export const relKeyNum = (keyNum, cNum) => keyNum - getC(cNum);
export const keyName = keyNum => keyMap[(keyNum - firstCOffset) % octaveLength];
