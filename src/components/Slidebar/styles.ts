import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    padding-top: 25px;
    gap: 15px;
    height: 23vh;
    max-height: 130px;
    background: ${props => props.theme.colors.neutral.first} url("/images/bg-sidebar-mobile.svg") top no-repeat;
    aspect-ratio: 24 / 9;
    background-size: cover;
`; 
