import styled, { css } from 'styled-components';
import type { CommonInputProps } from '../transientsProps';

// interface StyledLabelElementProps extends CommonInputProps {}
// ${props => props.theme.};
export const LabelElement = styled.label<CommonInputProps>`
	/* mudar o email precisa disso tbm */
	${({ $type }) => {
		if ($type === 'text' || $type === 'email') {
			return css`
				color: ${props => props.theme.colors.primary.first};
				font-size: 1.2rem;
				font-weight: ${props => props.theme.font.weight.secundary};
				text-transform: capitalize;
			`;
		} else if ($type === 'radio') {
			return css`
				color: ${props => props.theme.colors.primary.first};
				font-size: 1.2rem;
				font-weight: ${props => props.theme.font.weight.primary};
				letter-spacing: .2px;
				text-transform: capitalize;
			`;
		} else if ($type === 'checkbox') {
			return css``;
		}
	}}
`;
