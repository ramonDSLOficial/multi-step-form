import styled, { css } from 'styled-components';
import type { CommonInputProps } from '../transientsProps';

export const LabelElement = styled.label<CommonInputProps>`
	${({ $type }) => {
		if ($type === 'text' || $type === 'email') {
			return css`
				color: ${props => props.theme.colors.primary.first};
				font-size: 1.2rem;
				font-weight: ${props => props.theme.font.weight.secundary};
				text-transform: capitalize;

				@media screen and (min-width: 769px) {
					grid-area: label;
				}
			`;
		} else if ($type === 'radio') {
			return css`
				color: ${props => props.theme.colors.primary.first};
				font-size: 1.2rem;
				font-weight: ${props => props.theme.font.weight.primary};
				text-shadow: 1px 1px 1px #022a5a2c;
				letter-spacing: .2px;
				text-transform: capitalize;

				@media screen and (min-width: 769px) {
					.plan:hover & {
						cursor: pointer;
					}
				}
			`;
		} else if ($type === 'checkbox') {
			return css`
				.toggle & {
					color: ${props => props.theme.colors.neutral.first};
					font-size: 1.2rem;
					font-weight: ${props => props.theme.font.weight.primary};
					text-transform: capitalize;

					&.selected {
						color: ${props => props.theme.colors.primary.first};
					}
				}
				.aditions & {
					color: ${props => props.theme.colors.primary.first};
					font-size: 1.2rem;
					font-weight: ${props => props.theme.font.weight.primary};
					
					@media screen and (min-width: 769px) {
						font-size: 1.3rem;
					}
				}
			`;
		}
	}}
`;
