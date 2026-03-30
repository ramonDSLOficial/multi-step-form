import styled from 'styled-components';
import type { CommonInputProps } from '../transientsProps';

export const Input = styled.input<Omit<CommonInputProps, '$type'>>`
	&[type='text'],
	&[type='email'] {
		color: ${props => props.theme.colors.primary.first};
		font-size: 1.2rem;
		font-weight: ${props => props.theme.font.weight.primary};
		padding: 10px;
		border: 1px solid ${props => props.theme.colors.neutral.second};
		border-radius: 5px;
		outline: none;

		&::placeholder {
			color: ${props => props.theme.colors.neutral.first};
		}

		&:focus-within {
			border-color: ${props => props.theme.colors.primary.second};
		}
		
		&:invalid {
			border-color: ${props => props.theme.colors.primary.fifth};
		}
	}
`;
