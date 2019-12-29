import React, {useState} from 'react';
import styled from 'styled-components';
import {keyName, getOctave} from '../piano'
import KeyInput from './KeyInput'

const Sub = styled.span`
    font-size: 15px;
`;

export default function Guess() {
    const [guess, setGuess] = useState(-1);
    const [cNo, setCNo] = useState(3);
    return (
        <div>
            <h1>{keyName(guess)}<Sub>({getOctave(guess) + 1})</Sub></h1>
            <KeyInput
                key={guess} onKeyUpdate={key => setGuess(key)}
                cNo={cNo} onCNoUpdate={cNo => setCNo(cNo)}
            />
        </div>
    )
}
