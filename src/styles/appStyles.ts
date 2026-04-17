import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 100vh;
    @media screen and (min-width: 769px) {
        align-items: center;
    }
`;

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: inherit;
    height: 90%;
    
    @media screen and (min-width: 769px) {
        flex-direction: row;
        gap: 25px;
        background-color: red;
        max-width: 660px;
        margin-top: 20px;
        padding: 20px;
        justify-content: center;
        height: 80%;
    }
`;

