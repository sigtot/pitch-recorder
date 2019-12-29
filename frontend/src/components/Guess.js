import React, {useState} from 'react';
import styled from 'styled-components';
import {keyName, getOctave} from '../piano'
import KeyInput from './KeyInput'

const Sub = styled.span`
    font-size: 15px;
`;

export default function Guess() {
    const [guess, setGuess] = useState(-1);
    const [cNum, setCNum] = useState(3);
    return (
        <div>
            <h1>{keyName(guess)}<Sub>({getOctave(guess) + 1})</Sub></h1>
            <KeyInput
                currentKey={guess} onKeyUpdate={key => setGuess(key)}
                cNum={cNum} onCNumUpdate={cNum => setCNum(cNum)}
            />
        </div>
    )
}
