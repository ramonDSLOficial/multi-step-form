import styled from 'styled-components';

export const Container = styled.section``;

export const FormContanier = styled.section`
    display: flex;
    flex-direction: column;
    gap: 15px;
    
    & > section:first-of-type {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
`;
