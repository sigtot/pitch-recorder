import React from 'react';
import WhiteKey from './WhiteKey'
import BlackKey from "./BlackKey";
import styled from 'styled-components';
import {getC, relKeyNum} from "../piano";

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

const keys = [WhiteKey, BlackKey, WhiteKey, BlackKey, WhiteKey, WhiteKey,
    BlackKey, WhiteKey, BlackKey, WhiteKey, BlackKey, WhiteKey, WhiteKey];

const addBorderIfSelected = (Key, selected) => (
    selected
        ? styled(Key)`&& {border: 4px solid rgba(129, 199, 132, 0.6);}`
        : Key
);

const KeyInput = (props) => {
    const numberedPiano = (startNum) => (
        <Piano>
            <FlexDiv>
                {keys.map((Key, i) => {
                    const StyledKey = addBorderIfSelected(Key,
                        relKeyNum(props.currentKey, props.cNo) === i);
                    return <StyledKey key={i}
                                      onClick={() => props.onKeyUpdate(startNum + i)}/>
                })}
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