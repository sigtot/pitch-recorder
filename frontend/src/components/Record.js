import React from 'react';
import {keyName} from '../piano';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-top: solid 1px #d4d9e0;
    padding: 10px 0;
    color: #333;
    display: flex;
    justify-content: space-between;
`;

const ErrorSpan = styled.span`
    font-weight: bold;
    font-size: 20px;
`;

const KeyComp = styled.span`
    color: #555;
    font-size: 16px;
`;

const TimeSpan = styled.span`
    color: #777;
    font-size: 12px;
`;

const PerfectSpan = styled(ErrorSpan)`
    color: #4caf50;
    text-shadow: 0 1px 2px rgba(76, 175, 80, 0.4);
`;

const DiffText = ({guess, actual}) => {
    const diff = Math.abs(guess - actual);
    const halfToneDiff = diff / 2;
    if (diff === 0) {
        return <PerfectSpan>Perfect!</PerfectSpan>;
    } else {
        return <ErrorSpan>{halfToneDiff} off</ErrorSpan>;
    }
};

export default function Record({id, guess, actual, time}) {
    return (
        <li>
            <Wrapper key={id}>
                <div>
                    <DiffText guess={guess} actual={actual}/>&nbsp;
                    <KeyComp>
                        ({keyName(guess)}/{keyName(actual)})
                    </KeyComp>
                </div>
                <div>
                    <TimeSpan>{time}</TimeSpan>
                </div>
            </Wrapper>
        </li>
    )
}
