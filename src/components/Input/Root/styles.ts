import styled, { css } from 'styled-components';
import type { CommonInputProps } from '../transientsProps';

// interface StyledRootProps extends CommonInputProps {}

export const Container = styled.div<CommonInputProps>`
	${({ $type }) => {
		if ($type === 'text' || $type === 'email') {
			return css`
				display: flex;
				flex-direction: column;
				gap: 5px;
			`;
		} else if ($type === 'radio') {
			return css`
				
				border: 1px solid ${props => props.theme.colors.neutral.second};
				border-radius: 5px;
			`;
		} else if ($type === 'checkbox') {
			return css`
			`;
		}
	}}
`;
