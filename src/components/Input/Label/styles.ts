import styled, { css } from 'styled-components';
import type { CommonInputProps } from '../transientsProps';

// interface StyledLabelElementProps extends CommonInputProps {}
// ${props => props.theme.};
export const LabelElement = styled.label<CommonInputProps>`
	/* mudar o email precisa disso tbm */

	${({ $type }) => {
		if ($type === 'text' || $type === 'email') {
			return css``;
		} else if ($type === 'radio') {
			return css``;
		} else if ($type === 'checkbox') {
			return css``;
		}
	}}
`;
