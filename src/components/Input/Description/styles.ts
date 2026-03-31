import styled, { css } from 'styled-components';
import type { CommonInputProps } from '../transientsProps';

export const Container = styled.p<CommonInputProps>`
    ${({ $type }) => {
            switch ($type) {
                case 'radio':
                    return css`
                        .plan &:first-of-type {
                            color: ${props => props.theme.colors.neutral.first};
                            font-size: 1.2rem;
                            font-weight: ${props => props.theme.font.weight.secundary};
                        }

                        .plan &:last-of-type {
                            color: ${props => props.theme.colors.primary.first};
                            font-size: 1rem;
                            font-weight: ${props => props.theme.font.weight.terciary};
                            text-shadow: 1px 1px 1px #022a5a4d;
                            margin-top: 2px;
                        }
                    `;         
                case 'checkbox':
                    return css`
                    `;
                default:
                    break;
            }
        }}
`;
