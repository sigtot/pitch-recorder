import React from 'react';
import Key from './Key'
import BlackKey from "./BlackKey";
import styled from 'styled-components';
import {getC} from "../piano";

const Piano = styled.div`
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
    display: inline-block;
    border-radius: 5px;
    overflow: hidden;
`;

const FlexDiv = styled.div`
    display: flex;
`;

const PianoContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const KeyInput = (props) => {
    function numberedPiano(startNum) {
        return (
            <Piano>
                <FlexDiv>
                    <Key onClick={() => props.onKeyUpdate(startNum + 0)}/>
                    <BlackKey onClick={() => props.onKeyUpdate(startNum + 1)}/>
                    <Key onClick={() => props.onKeyUpdate(startNum + 2)}/>
                    <BlackKey onClick={() => props.onKeyUpdate(startNum + 3)}/>
                    <Key onClick={() => props.onKeyUpdate(startNum + 4)}/>
                    <Key onClick={() => props.onKeyUpdate(startNum + 5)}/>
                    <BlackKey onClick={() => props.onKeyUpdate(startNum + 6)}/>
                    <Key onClick={() => props.onKeyUpdate(startNum + 7)}/>
                    <BlackKey onClick={() => props.onKeyUpdate(startNum + 8)}/>
                    <Key onClick={() => props.onKeyUpdate(startNum + 9)}/>
                    <BlackKey onClick={() => props.onKeyUpdate(startNum + 10)}/>
                    <Key onClick={() => props.onKeyUpdate(startNum + 11)}/>
                    <Key onClick={() => props.onKeyUpdate(startNum + 12)}/>
                </FlexDiv>
            </Piano>
        )
    }

    return (
        <div>
            <PianoContainer>
                {numberedPiano(getC(props.cNo))}
            </PianoContainer>
            <button onClick={() => props.onCNoUpdate(props.cNo - 1)}>Left
            </button>
            <button onClick={() => props.onCNoUpdate(props.cNo + 1)}>Right
            </button>
        </div>
    )
};

export default KeyInput;