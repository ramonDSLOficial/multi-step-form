import styled from 'styled-components';
import type { CommonInputProps } from '../transientsProps';

interface StyledErrorElementProps extends CommonInputProps {}

export const ErrorElement = styled.p<StyledErrorElementProps>`
	color: ${(props) => props.theme.colors.primary.fifth};
	font-size: 1rem;
	font-weight: ${(props) => props.theme.font.weight.primary};
	text-transform: capitalize;
	letter-spacing: 0.6px;

	@media screen and (min-width: 769px) {
		grid-area: error;
		justify-self: flex-end;
	}
`;
