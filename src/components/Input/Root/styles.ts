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
				display: flex;
				align-items: center;
				gap: 10px;
				padding: 12px;
				border: 1px solid ${props => props.theme.colors.neutral.second};
				border-radius: 5px;

				&.plan.selected {
					border-color: ${props => props.theme.colors.primary.second};
					background-color: ${props => props.theme.colors.neutral.fourth};
				}
			`;
		} else if ($type === 'checkbox') {
			return css`
			`;
		}
	}}
`;
