import styled, { css } from 'styled-components';
import type { CommonInputProps } from '../transientsProps';

// interface StyledRootProps extends CommonInputProps {}

export const Container = styled.div<CommonInputProps>`
	${({ $type }) => {
		if ($type === 'text' || $type === 'email') {
			return css`
			`;
		} else if ($type === 'radio') {
			return css`
			`;
		} else if ($type === 'checkbox') {
			return css`
			`;
		}
	}}
`;
