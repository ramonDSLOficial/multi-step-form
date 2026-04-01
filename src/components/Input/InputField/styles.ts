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
			
		}
	}
`;
