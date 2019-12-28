import React from 'react';
import styled from 'styled-components';

const KeyBody = styled.div`
    width: 12px;
    height: 70px;
    margin: 1px;
    background: #eee;
    display: inline-block;
    background-color:#E0E5EC;
    border-radius: 2px;
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
}
`;

export default function Key() {
    return (
        <KeyBody/>
    )
}
