import styled, { css } from 'styled-components';
import type { CommonInputProps } from '../transientsProps';

export const Container = styled.div<CommonInputProps>`
	${({ $type, $yearModality }) => {
		if ($type === 'text' || $type === 'email' || $type === 'tel') {
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
				padding: 10px;
				max-height: ${!$yearModality ? '50px' : '65px'};
				overflow-y: hidden;
				border: 1px solid ${(props) => props.theme.colors.neutral.second};
				border-radius: 5px;
				transition: border-color 0.5s ease-in-out,
					background-color 0.5s ease-in-out, max-height 1s ease-in-out;

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
					max-height: ${!$yearModality ? '105px' : '122px'};
					align-items: flex-start;

					&:hover {
						cursor: pointer;
					}

					&:not(.selected):hover {
						border-color: ${(props) =>
							props.theme.colors.primary.second};
					}

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
					transition: border-color .5s ease-in-out, background-color .5s ease-in-out;

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

					@media screen and (min-width: 769px) {
						padding: 15px;

						&:hover {
							cursor: pointer;
						}

						&:not(.selected):hover {
							border-color: ${(props) =>
								props.theme.colors.primary.second};
						}
					}
				}
			`;
		}
	}}
`;
