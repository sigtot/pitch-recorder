import React, {useState} from 'react';
import styled from 'styled-components';
import KeyInput from './KeyInput'
import NeuButton from "./NeuButton";
import {Link, Route, Switch} from "react-router-dom";
import GuessResult from "./GuessResult";
import {frequency} from "../piano";

const GuessButton = styled(NeuButton)`
    font-size: 20px;
    color: #2196f3;
    text-shadow: 0 1px 2px rgba(33, 150, 243, 0.4);
`;

const GreenGuessButton = styled(GuessButton)`
    color: #4caf50;
    text-shadow: 0 1px 2px rgba(76, 175, 80, 0.4);
`;

const GuessButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

const postGuess = (guess, actual) => {
    fetch('http://localhost:3000/records', {
        method: 'POST',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({guess: guess, actual: actual}),
    })
        .then(res => res.json())
        .then(JSON.parse)
        .then(res => {
            if (res["ok"] !== undefined && res["ok"] === true) {
                console.log("Success")
            }
        })
        .catch(err => console.error(err))
};

const getAudioContext = () => {
    AudioContext = window.AudioContext || window.webkitAudioContext;
    return new AudioContext();
};

const playSound = (audioCtx, freq) => {
    const osc = audioCtx.createOscillator();
    osc.frequency.value = freq;
    osc.start(0);
    osc.connect(audioCtx.destination);
    window.setTimeout(() => osc.disconnect(), 1000);
};

export default function Guess() {
    const [guess, setGuess] = useState(-1);
    const [actual, setActual] = useState(-1);
    const [cNum, setCNum] = useState(3);
    const audioCtx = getAudioContext();

    const onCheckKeyUpdate = (key) => {
        setActual(key);
        playSound(audioCtx, frequency(key))
    };

    return (
        <div>
            <GuessResult guess={guess} actual={actual}/>
            <Switch>
                <Route exact path="/guess">
                    <KeyInput
                        currentKey={guess} onKeyUpdate={key => setGuess(key)}
                        cNum={cNum} onCNumUpdate={cNum => setCNum(cNum)}/>
                    {
                        guess !== -1
                            ? (
                                <GuessButtonContainer>
                                    <Link to="/guess/check">
                                        <GuessButton>Make this guess</GuessButton>
                                    </Link>
                                </GuessButtonContainer>)
                            : ''
                    }

                </Route>
                <Route exact path="/guess/check">
                    <KeyInput
                        currentKey={actual} onKeyUpdate={onCheckKeyUpdate}
                        cNum={cNum} onCNumUpdate={cNum => setCNum(cNum)}/>
                    {
                        actual !== -1 && guess !== -1
                            ? (
                                <GuessButtonContainer>
                                    <GreenGuessButton
                                        onClick={() => postGuess(guess, actual)}>
                                        Save
                                    </GreenGuessButton>
                                </GuessButtonContainer>)
                            : ''
                    }
                </Route>
            </Switch>
        </div>
    )
}
