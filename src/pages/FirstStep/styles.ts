import styled from 'styled-components';

export const Container = styled.section`
    & > section {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 15px;

        @media screen and (min-width: 769px) {
            gap: 25px;
            margin-top: 10%;
        }
    }
`;

