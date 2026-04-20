import styled from 'styled-components';

export const Container = styled.section``;

export const FormContanier = styled.section`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-top: 15px;
    
    & > section:first-of-type {
        display: flex;
        flex-direction: column;
        gap: 10px;

        @media screen and (min-width: 769px) {
            flex-direction: row;
            justify-content: space-between;
            gap: unset;
        }
    }

    & > section:last-of-type {
        background-color: ${props => props.theme.colors.neutral.fourth};
        padding: 10px;
        border-radius: 5px;
    }
`;
