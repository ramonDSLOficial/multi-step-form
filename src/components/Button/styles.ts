import styled from 'styled-components';

export const Container = styled.button`
    font-size: 1rem;
    font-weight: ${props => props.theme.font.weight.primary};
    text-transform: capitalize;
    letter-spacing: .2px;

    &[data-variant='prev'] {
        color: ${props => props.theme.colors.neutral.first};
        background-color: transparent;
        border: none;
        margin-right: auto;
    }
    &[data-variant='next'] {
        color: ${props => props.theme.colors.neutral.second};
        padding: 8px 10px;
        border-radius: 5px;
        border: 1px solid ${props => props.theme.colors.neutral.first};
        background-color: ${props => props.theme.colors.primary.first};
    }
    &[data-variant='send'] {
        color: ${props => props.theme.colors.neutral.fourth};
        padding: 10px 18px;
        border-radius: 5px;
        border: 1px solid ${props => props.theme.colors.primary.fourth};
        background-color: ${props => props.theme.colors.primary.second};
    }
`;
