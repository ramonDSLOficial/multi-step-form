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

                        .plan &.advantage {
                            color: ${props => props.theme.colors.neutral.first};
                            font-size: 1rem;
                            font-weight: ${props => props.theme.font.weight.terciary};
                            margin-top: 2px;
                            
                            .hidden {
                                pointer-events: none;
                                margin-top: 4px;
                            }
                            
                            @media screen and (min-width: 769px) {
                                color: ${props => props.theme.colors.primary.first};
                                font-size: 1rem;
                                text-shadow: -1px 1px 1px #022a5a64;
                                margin-top: unset;
                            }
                        }
                    `;         
                case 'checkbox':
                    return css`
                        &.price {
                            color: ${props => props.theme.colors.primary.second};
                            font-size: 1.2rem;
                            font-weight: ${props => props.theme.font.weight.secundary};
                            margin-left: auto;
                        }

                        &.additionDesc {
                            color: ${props => props.theme.colors.neutral.first};
                            font-size: 1rem;
                            font-weight: ${props => props.theme.font.weight.secundary};
                            
                            @media screen and (min-width: 769px) {
                                font-size: 1.2rem;
                            }
                        }
                    `;
                default:
                    break;
            }
        }}
`;
