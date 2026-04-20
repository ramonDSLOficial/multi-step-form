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
