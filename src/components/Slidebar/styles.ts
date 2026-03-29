import styled from 'styled-components';

export const Container = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 15px;
    width: 100%;
    height: 20vh;
    /* color img pos repe attachement */
    /* size */
    background: ${props => props.theme.colors.neutral.first} url("/public/images/bg-sidebar-mobile.svg") ;
    aspect-ratio: 16 / 9;
    object-fit: cover;
`;
