import React, {useState} from 'react';
import styled from 'styled-components';
import {keyName, getOctave} from '../piano'
import KeyInput from './KeyInput'
import NeuButton from "./NeuButton";

const Sub = styled.span`
    font-size: 15px;
`;

const GuessButton = styled(NeuButton)`
    font-size: 20px;
    color: #4caf50;
    text-shadow: 0 1px 2px rgba(76, 175, 80, 0.3);
`;

const GuessButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
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
            <GuessButtonContainer>
                <GuessButton>Make this guess</GuessButton>
            </GuessButtonContainer>
        </div>
    )
}
