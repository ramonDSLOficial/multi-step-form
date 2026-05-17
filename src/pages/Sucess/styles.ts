import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section`
	text-align: center;
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
			padding: 90px 0px;
		}
		& > img {
			max-width: 64.75px;
		}
	}
`;

export const RestartForm = styled(Link)`
	color: inherit;
	font-size: inherit;
	font-weight: inherit;
	text-decoration: none;
`
