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

const keys = [Key, BlackKey, Key, BlackKey, Key, Key, BlackKey, Key, BlackKey,
    Key, BlackKey, Key, Key];

const KeyInput = (props) => {
    const  numberedPiano = (startNum) => (
        <Piano>
            <FlexDiv>
                {keys.map((Boi, i) =>
                    <Boi key={i}
                         onClick={() => props.onKeyUpdate(startNum + i)}/>)}
            </FlexDiv>
        </Piano>
    );

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