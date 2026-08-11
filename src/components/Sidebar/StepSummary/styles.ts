import styled from 'styled-components';

export const Container = styled.li`
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

		& > div > p {
			font-size: 1.2rem;
		}
	}
`;

export const Stage = styled.p`
	color: ${(props) => props.theme.colors.neutral.white};
	font-size: 1.2rem;
	font-weight: ${(props) => props.theme.font.weight.secundary};
	border: 1px solid ${(props) => props.theme.colors.neutral.third};
	padding: 4.8px 9px;
	border-radius: 50%;
	transition: all .5s ease-in-out;

	#current & {
		color: ${(props) => props.theme.colors.primary.first};
		font-weight: ${(props) => props.theme.font.weight.primary};
		border: 1px solid ${(props) => props.theme.colors.primary.third};
		background-color: ${(props) => props.theme.colors.primary.fourth};
	}

	@media screen and (min-width: 769px) {
		font-size: 1.4rem;
		padding: 5.6px 11px;
	}
`;

export const Name = styled.h3`
	color: ${(props) => props.theme.colors.neutral.white};
	font-size: 1.1rem;
	font-weight: ${(props) => props.theme.font.weight.primary};
	text-transform: uppercase;
	letter-spacing: 1px;

	@media screen and (min-width: 769px) {
		font-size: 1.3rem;
	}
`;
