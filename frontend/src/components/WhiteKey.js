import styled from 'styled-components';

export default styled.div`
    width: 40px;
    height: 161px;
    display: inline-block;
    background-color: #E0E5EC;
    border-radius: 2px;
    z-index: 1;
    box-sizing: border-box;
    &:not(:last-of-type) {
        border-right: 1px solid #bbb;
    }
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    color: #555;
    font-weight: bold;
    padding-bottom: 5px;
`;
