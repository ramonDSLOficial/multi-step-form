import styled from 'styled-components';

export const Container = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    width: inherit;
    height: inherit;
    background-color: ${props => props.theme.colors.neutral.third};
`;
