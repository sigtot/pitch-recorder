import React, {useState} from 'react';
import Key from './Key'
import BlackKey from "./BlackKey";
import styled from 'styled-components';
import {getC, keyName, getOctave} from '../piano'

const PianoContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const Piano = styled.div`
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
    display: inline-block;
    border-radius: 5px;
    overflow: hidden;
`;

const FlexDiv = styled.div`
    display: flex;
`;

const Sub = styled.span`
    font-size: 15px;
`;

export default function Guess() {
    const [guess, setGuess] = useState(-1);
    const [cNo, setCNo] = useState(3);
    function numberedPiano(startNum) {
        return (
            <Piano>
                <FlexDiv>
                    <Key onClick={() => setGuess(startNum + 0)}/>
                    <BlackKey onClick={() => setGuess(startNum + 1)}/>
                    <Key onClick={() => setGuess(startNum + 2)}/>
                    <BlackKey onClick={() => setGuess(startNum + 3)}/>
                    <Key onClick={() => setGuess(startNum + 4)}/>
                    <Key onClick={() => setGuess(startNum + 5)}/>
                    <BlackKey onClick={() => setGuess(startNum + 6)}/>
                    <Key onClick={() => setGuess(startNum + 7)}/>
                    <BlackKey onClick={() => setGuess(startNum + 8)}/>
                    <Key onClick={() => setGuess(startNum + 9)}/>
                    <BlackKey onClick={() => setGuess(startNum + 10)}/>
                    <Key onClick={() => setGuess(startNum + 11)}/>
                    <Key onClick={() => setGuess(startNum + 12)}/>
                </FlexDiv>
            </Piano>
        )
    }

    return (
        <div>
            <h1>{keyName(guess)}<Sub>({getOctave(guess) + 1})</Sub></h1>
            <PianoContainer>
                {numberedPiano(getC(cNo))}
            </PianoContainer>
            <button onClick={() => setCNo(cNo - 1)}>Left</button>
            <button onClick={() => setCNo(cNo + 1)}>Right</button>
        </div>
    )
}
