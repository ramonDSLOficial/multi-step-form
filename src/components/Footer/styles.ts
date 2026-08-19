import styled from 'styled-components';

export const Container = styled.footer`
    width: 100%;
    text-align: center;

    & > p {
        color: ${props => props.theme.colors.neutral.first};
        font-size: 1rem;
        font-weight: ${props => props.theme.font.weight.secundary};
        
        
        & > a {
            color: ${props => props.theme.colors.primary.second};
            font-weight: ${props => props.theme.font.weight.primary};
        }
    }

    @media screen and (min-width: 486px) {
        margin-top: 8dvh;
    }
    @media screen and (min-width: 568px){
        margin-top: 15dvh;
    }
    @media screen and (min-width: 700px){
        margin-top: 20vh;
    }
    @media screen and (min-width: 768px){
        margin-top: 0;
    }
`;
