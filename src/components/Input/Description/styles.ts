import styled, { css } from 'styled-components';
import type { CommonInputProps } from '../transientsProps';

// interface DescriptionStyledProps extends CommonInputProps {}

export const Container = styled.p<CommonInputProps>`
    ${({ $type }) => {
            switch ($type) {
                case 'radio':
                    return css``;         
                case 'checkbox':
                    return css``;
                default:
                    break;
            }
        }}
`;
