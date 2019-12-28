import React from 'react';
import Key from './Key'
import BlackKey from "./BlackKey";
import styled from 'styled-components';

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

export default function Guess() {
    return (
        <PianoContainer>
            <Piano>
                <FlexDiv>
                    <Key/>
                    <BlackKey/>
                    <Key/>
                    <BlackKey/>
                    <Key/>
                    <Key/>
                    <BlackKey/>
                    <Key/>
                    <BlackKey/>
                    <Key/>
                    <BlackKey/>
                    <Key/>
                    <Key/>
                </FlexDiv>
            </Piano>
        </PianoContainer>
    )
}
