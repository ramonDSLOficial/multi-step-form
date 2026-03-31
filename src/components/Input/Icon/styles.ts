import styled from 'styled-components';
import type { CommonInputProps } from '../transientsProps';


export const IconField = styled.div<CommonInputProps>`
    & > img {
        min-width: 32px;
        width: 80%;
    }
`;

