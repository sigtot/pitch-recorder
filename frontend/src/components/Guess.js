import React, {useState} from 'react';
import styled from 'styled-components';
import KeyInput from './KeyInput'
import NeuButton from "./NeuButton";
import {Link, Route, Switch} from "react-router-dom";
import GuessResult from "./GuessResult";

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

const postGuess = (guess, actual) => {
    console.log("Not implemented", guess, actual);
};

export default function Guess() {
    const [guess, setGuess] = useState(-1);
    const [actual, setActual] = useState(-1);
    const [cNum, setCNum] = useState(3);
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
                        currentKey={actual} onKeyUpdate={key => setActual(key)}
                        cNum={cNum} onCNumUpdate={cNum => setCNum(cNum)}/>
                    {
                        actual !== -1 && guess !== -1
                            ? (
                                <GuessButtonContainer>
                                    <GuessButton
                                        onClick={postGuess(guess, actual)}>
                                        Save this guess
                                    </GuessButton>
                                </GuessButtonContainer>)
                            : ''
                    }
                </Route>
            </Switch>
        </div>
    )
}
