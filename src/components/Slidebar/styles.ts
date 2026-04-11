import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	justify-content: center;
	padding-top: 25px;
	gap: 15px;
	height: 23vh;
	background: ${(props) => props.theme.colors.neutral.first}
		url('/images/bg-sidebar-mobile.svg') top no-repeat;
	aspect-ratio: 24 / 9;
	background-size: cover;

	@media screen and (min-width: 350px) and (max-width: 390px) {
		aspect-ratio: 27 / 9;
	}

	@media screen and (min-width: 390px) and (max-width: 438px) {
		height: 26vh;
		aspect-ratio: 36 / 12;
	}

	@media screen and (min-width: 438px) and (max-width: 584px) {
		aspect-ratio: 48 / 12;
	}
	@media screen and (min-width: 584px) and (max-width: 769px) {
		aspect-ratio: 72 / 15;
		height: 30vh;
	}
	/* 516 */
	// tablet 481 - 769
`;
