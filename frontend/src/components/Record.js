import React from 'react';
import {keyName} from '../piano';
import styled from 'styled-components';

const Wrapper = styled.div`
    border-top: solid 1px #d9e0e7;
    padding: 10px 0;
    color: #333;
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

export default function Record({id, guess, actual, time}) {
    return (
        <li>
            <Wrapper key={id}>
                <div>
                    <ErrorSpan>
                        {Math.abs(guess - actual) / 2}
                    </ErrorSpan>&nbsp;
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
