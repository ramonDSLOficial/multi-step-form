import styled from 'styled-components';

export const Container = styled.section`
    text-align: center;
    line-height: 2rem;
    
    form > && {
        padding: 90px 20px;
    }

    & > img {
        width: 20%;
        max-width: 45px;
        margin-bottom: 15px;
    }
`;
