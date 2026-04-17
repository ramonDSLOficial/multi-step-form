import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    text-align: center;

    & > p {
        color: ${props => props.theme.colors.neutral.first};
        font-size: 1rem;
        font-weight: ${props => props.theme.font.weight.terciary};


        & > a {
            color: ${props => props.theme.colors.primary.second};
        }
    }

    @media screen and (min-width: 486px) {
        margin-top: 12%;
    }
    @media screen and (min-width: 672px) and (max-width: 768px) {
        margin-top: 15%;
    }
`;
