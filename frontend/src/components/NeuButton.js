import styled from 'styled-components';

export default styled.button`
    box-shadow: 9px 9px 16px rgb(163,177,198,0.6), -9px -9px 16px  rgba(255,255,255, 0.5);
    background-color: #E0E5EC;
    outline: none;
    border: none;
    border-radius: 5px;
    padding: 15px 20px;
    font-size: 25px;
    font-weight: bold;
    margin: 0 10px;
    &:active {
        box-shadow: 6px 6px 12px rgb(163,177,198,0.6), -6px -6px 12px rgba(255,255,255, 0.5);
    }
`;
