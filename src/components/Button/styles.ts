import styled from 'styled-components';

export const Container = styled.button`
    font-size: 1rem;
    font-weight: ${props => props.theme.font.weight.primary};
    text-transform: capitalize;
    letter-spacing: .2px;

    @media screen and (min-width: 768px) {
        font-size: 1.2rem;
        cursor: pointer;
    }

    &[data-variant='prev'] {
        color: ${props => props.theme.colors.neutral.first};
        background-color: transparent;
        border: none;
        outline: none;
        margin-right: auto;       

        @media screen and (min-width: 768px) {
            transition: filter .5s ease-in-out, text-shadow .5s ease-in-out;
            
            &:hover,
            &:focus {
                filter: brightness(.4);
                text-shadow: 2px -2px 3px #022a5a67;
            }
        }
    }
    &[data-variant='next'] {
        color: ${props => props.theme.colors.neutral.second};
        padding: 8px 10px;
        border-radius: 5px;
        border: 1px solid ${props => props.theme.colors.neutral.first};
        background-color: ${props => props.theme.colors.primary.first};
        outline: 3px ridge transparent;
        transition: filter .5s ease-in-out, outline-color .5s ease-in-out;

        @media screen and (min-width: 768px) {
            padding: 10.5px 18px;
            border-radius: 7px;
            
            &:hover,
            &:focus {
                outline-color: ${props => props.theme.colors.primary.first};
                filter: saturate(2.6);
            }
        }
    }
    &[data-variant='send'] {
        color: ${props => props.theme.colors.neutral.fourth};
        padding: 10px 18px;
        border-radius: 5px;
        border: 1px solid ${props => props.theme.colors.primary.fourth};
        background-color: ${props => props.theme.colors.primary.second};
        outline: 3px ridge transparent;
        
        @media screen and (min-width: 768px) {
            padding: 10px 22px;
            border-radius: 7px;
            border: none;
            box-shadow: inset 1px 1px 5px #0707074a;
            transition: filter .5s ease-in-out, outline-color .5s ease-in-out;

            &:hover,
            &:focus {
                outline-color: ${props => props.theme.colors.primary.first};
                filter: opacity(.7);
            }
        }
    }
`;
