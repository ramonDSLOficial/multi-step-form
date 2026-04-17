import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	justify-content: center;
	padding-top: 30px;
	gap: 15px;
	/* height: 23vh; */
	background: ${(props) => props.theme.colors.neutral.first}
		url('/images/bg-sidebar-mobile.svg') top no-repeat;
	aspect-ratio: 3.5 / 1.5;
	background-size: cover;
	width: 100%;

	@media screen and (min-width: 350px) and (max-width: 390px) {
	}

	@media screen and (min-width: 390px) and (max-width: 438px) {
	}

	@media screen and (min-width: 524px) {
	}

	@media screen and (min-width: 438px) and (max-width: 584px) {
	}

	@media screen and (min-width: 584px) and (max-width: 769px) {
	}

	@media screen and (min-width: 769px) {
		background-image: url('/images/bg-sidebar-desktop.svg');
		height: auto;
		aspect-ratio: 8 / 24;
		/* height: 100%; */
	}
	/* 516 */
	// tablet 481 - 769
`;
