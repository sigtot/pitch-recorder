import React from 'react';
import {keyName, getOctave} from '../piano';
import styled from 'styled-components';

const Sub = styled.span`
    font-size: 15px;
`;

const TransitionDiv = styled.div`
    transition: 0.2s;
    display:flex;
    justify-content: center;
`;

const KeyName = ({daKey}) =>
    <span>{keyName(daKey)}<Sub>({getOctave(daKey) + 1})</Sub></span>;

export default function GuessResult({guess, actual}) {
    return (
        <TransitionDiv>
            <h1>
                {
                    guess !== -1
                        ? (
                            <span>
                                <KeyName daKey={guess}/>
                                {actual !== -1 ? <span>/<KeyName daKey={actual}/></span> : ''}
                            </span>)
                        : 'Make a guess'}
            </h1>
        </TransitionDiv>
    )
}
