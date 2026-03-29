import styled from 'styled-components';

export const Container = styled.div`
	& > div {
		display: none;

		p {
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

	#current & {
		color: ${(props) => props.theme.colors.primary.first};
		font-weight: ${(props) => props.theme.font.weight.primary};
		border: 1px solid ${(props) => props.theme.colors.primary.third};
		background-color: ${(props) => props.theme.colors.primary.fourth};
	}
`;

export const Name = styled.h3``;
