import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    /* align-items: center; */
    padding-top: 25px;
    gap: 15px;
    width: 100%;
    height: 23vh;
    max-height: 130px;
    background: ${props => props.theme.colors.neutral.first} url("/images/bg-sidebar-mobile.svg") top no-repeat;
    background-size: cover;
    aspect-ratio: 16 / 9;
`; 
