import styled from 'styled-components';

export const Container = styled.section`
    text-align: center;
    padding: 0 15px;
    line-height: 2rem;
    background-color: red;

    & > img {
        width: 20%;
        max-width: 45px;
        margin-bottom: 15px;
    }
`;
