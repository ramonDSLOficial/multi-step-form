import styled, { css } from 'styled-components';
import type { CommonInputProps } from '../transientsProps';

export const Container = styled.div<CommonInputProps>`
	${({ $type }) => {
		if ($type === 'text' || $type === 'email') {
			return css`
				display: grid;
				grid-template-columns: minmax(100px, 1fr);
				gap: 5px;

				@media screen and (min-width: 769px) {
					grid-template-columns: repeat(2, minmax(100px, 1fr));
					grid-template-rows: repeat(2, minmax(auto-fit, 1fr));
					grid-template-areas:
						'label error'
						'input input';
				}
			`;
		} else if ($type === 'radio') {
			return css`
				display: flex;
				gap: 10px;
				padding: 12px;
				border: 1px solid ${(props) => props.theme.colors.neutral.second};
				border-radius: 5px;

				&.selected {
					border-color: ${(props) => props.theme.colors.primary.second};
					background-color: ${(props) =>
						props.theme.colors.neutral.fourth};
				}

				& > div:last-child {
					display: flex;
					flex-direction: column;
					gap: 3px;
				}

				@media screen and (min-width: 769px) {
					flex-direction: column;
					gap: 30px;
					width: 30%;
					align-items: flex-start;

					& > div:last-child {
						gap: 2px;
					}
				}
			`;
		} else if ($type === 'checkbox') {
			return css`
				&.toggle {
					display: flex;
					justify-content: center;
					align-items: center;
					gap: 20px;
				}

				&.aditions {
					display: flex;
					align-items: center;
					gap: 20px;
					padding: 10px;
					border: 1.5px solid
						${(props) => props.theme.colors.neutral.second};
					border-radius: 5px;

					& > div {
						display: flex;
						flex-direction: column;
						gap: 2px;
					}

					&.selected {
						border-color: ${(props) =>
							props.theme.colors.primary.second};
						background-color: ${(props) =>
							props.theme.colors.neutral.third};
					}
				}
			`;
		}
	}}
`;
