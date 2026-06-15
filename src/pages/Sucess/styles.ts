import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	align-items: center;
	text-align: center;
	gap: 15px;
	line-height: 2rem;

	form > && {
		padding: 90px 20px;
	}

	& > img {
		width: 18%;
		max-width: 45px;
		margin-bottom: 15px;
	}

	@media screen and (min-width: 769px) {
		form > && {
			padding: 70px 0px;
		}
		& > img {
			max-width: 64.75px;
		}
	}
`;

export const RestartForm = styled(Link)`
	color: ${(props) => props.theme.colors.primary.first};
	font-size: 1.2rem;
	font-weight: ${(props) => props.theme.font.weight.secundary};
	transition: filter .5s ease-in-out;

	&:hover {
		filter: brightness(1.8);
	}
`
