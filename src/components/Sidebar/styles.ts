import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	justify-content: center;
	padding-top: 8%;
	gap: 15px;
	background: ${(props) => props.theme.colors.neutral.first}
		url('/images/bg-sidebar-mobile.svg') top no-repeat;
	aspect-ratio: 3.5 / 1.5;
	background-size: cover;
	width: 100%;

	@media screen and (min-width: 769px) {
		background-image: url('/images/bg-sidebar-desktop.svg');
		aspect-ratio: 9.75 / 19.95;
		width: 45%;
		border-radius: 10px;
	}
`;
