import styled from 'styled-components';

export const Container = styled.div`
	& > div {
		display: none;

		@media screen and (min-width: 769px) {
			display: flex;
			flex-direction: column;
			gap: 2px;

			& > p {
				color: ${(props) => props.theme.colors.neutral.first};
				font-size: 0.9rem;
				font-weight: ${(props) => props.theme.font.weight.secundary};
				text-transform: uppercase;
				letter-spacing: .2px;
			}
		}
	}

	@media screen and (min-width: 769px) {
		display: flex;
		align-items: center;
		gap: 14px;
	}
`;

export const Stage = styled.p`
	color: ${(props) => props.theme.colors.neutral.white};
	font-size: 1.2rem;
	font-weight: ${(props) => props.theme.font.weight.secundary};
	border: 1px solid ${(props) => props.theme.colors.neutral.third};
	padding: 4.8px 9px;
	border-radius: 50%;

	#current & {
		color: ${(props) => props.theme.colors.primary.first};
		font-weight: ${(props) => props.theme.font.weight.primary};
		border: 1px solid ${(props) => props.theme.colors.primary.third};
		background-color: ${(props) => props.theme.colors.primary.fourth};
	}
`;

export const Name = styled.h3`
	color: ${(props) => props.theme.colors.neutral.white};
	font-size: 1.1rem;
	font-weight: ${(props) => props.theme.font.weight.primary};
	text-transform: uppercase;
	letter-spacing: 1px;
`;
