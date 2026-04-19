import styled from 'styled-components';
import type { CommonInputProps } from '../transientsProps';

export const Input = styled.input<Omit<CommonInputProps, '$type'>>`
	&[type='text'],
	&[type='email'] {
		color: ${(props) => props.theme.colors.primary.first};
		font-size: 1.2rem;
		font-weight: ${(props) => props.theme.font.weight.primary};
		padding: 10px;
		border: 1px solid ${(props) => props.theme.colors.neutral.second};
		border-radius: 5px;
		outline: none;

		&::placeholder {
			color: ${(props) => props.theme.colors.neutral.first};
		}

		&:focus-within {
			border-color: ${(props) => props.theme.colors.primary.second};
		}

		&:invalid {
			border-color: ${(props) => props.theme.colors.primary.fifth};
		}

		@media screen and (min-width: 769px) {
			grid-area: input;
		}
	}

	&[type='radio'] {
		display: none;
	}

	&[type='checkbox'] {
		&.toggle {
			position: relative;
			appearance: none;
			-webkit-appearance: none;
			padding: 7px 14px;
			border: 1px solid ${(props) => props.theme.colors.primary.first};
			background-color: ${(props) => props.theme.colors.primary.first};
			border-radius: 8px;

			&::after {
				display: block;
				position: absolute;
				content: '';
				top: 3px;
				right: 8%;
				width: 8.5px;
				height: 8.5px;
				border-radius: 50%;
				background-color: ${(props) => props.theme.colors.neutral.white};
				transition: right 0.5s ease-in-out;
			}

			&:checked::after {
				right: 58.5%;
			}
		}

		&.aditions {
			position: relative;
			appearance: none;
			-webkit-appearance: none;
			width: 18px;
			height: 18px;
			border: 1px solid ${(props) => props.theme.colors.neutral.second};
			border-radius: 3px;
			transition: all 0.3s ease-in-out;

			&:checked {
				border-color: ${(props) => props.theme.colors.primary.second};
				background-color: ${(props) => props.theme.colors.primary.second};
			}
			&::after,
			&::before {
				position: absolute;
				display: block;
				content: '';
				height: 2px;
				background-color: ${(props) => props.theme.colors.neutral.white};
				transform: rotate(90deg);
				transition: all 0.3s ease-in-out;
			}
			&::after {
				width: 9px;
				top: 40%;
				right: 25%;
			}
			&::before {
				bottom: 30%;
				left: 35%;
				width: 5px;
			}
			&:checked::after {
				transform: rotate(125deg);
				right: 3px;
				bottom: 6px;
			}
			&:checked::before {
				transform: rotate(45deg);
				bottom: 5.5px;
				left: 3px;
			}
		}
	}
`;
