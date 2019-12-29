import React from 'react';
import WhiteKey from './WhiteKey'
import BlackKey from "./BlackKey";
import styled from 'styled-components';
import {getC, relKeyNum, numOctaves} from "../piano";

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

const addBorderIfSelected = (Key, sel) => (
    sel ? styled(Key)`&& {border: 4px solid rgba(129, 199, 132, 0.6);}` : Key
);

const KeyInput = ({currentKey, onKeyUpdate, cNum, onCNumUpdate}) => {
    const numberedPiano = (startNum) => (
        <Piano>
            <FlexDiv>
                {keys.map((Key, i) => {
                    const StyledKey = addBorderIfSelected(Key,
                        relKeyNum(currentKey, cNum) === i);
                    return <StyledKey key={i}
                                      onClick={() => onKeyUpdate(startNum + i)}/>
                })}
            </FlexDiv>
        </Piano>
    );

    const movePiano = (diff) => {
        const newCNum = cNum + diff;
        if (0 <= newCNum && newCNum <= numOctaves) {
            onCNumUpdate(newCNum)
        }
    };

    return (
        <div>
            <PianoContainer>
                {numberedPiano(getC(cNum))}
            </PianoContainer>
            <button onClick={() => movePiano(-1)}>Left
            </button>
            <button onClick={() => movePiano(1)}>Right
            </button>
        </div>
    )
};

export default KeyInput;