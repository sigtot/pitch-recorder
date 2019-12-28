const firstCOffset = 3; // A = 0, A# = 1, B = 2, C = 3;
const octaveLength = 12;

export const getC = CNumber => firstCOffset + octaveLength * CNumber;

export const getOctave = keyNumber =>
    Math.floor((keyNumber - firstCOffset) / octaveLength);

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

export const keyName = keyNo => keyMap[(keyNo - firstCOffset) % octaveLength];

