import styled from 'styled-components';

export const Container = styled.ol`
	display: flex;
	justify-content: center;
	padding-top: 8%;
	gap: 15px;
	list-style: none;
	background: ${(props) => props.theme.colors.neutral.first}
		url('/images/bg-sidebar-mobile.svg') top no-repeat;
	aspect-ratio: 3.5 / 1.5;
	background-size: cover;
	width: 100%;

	@media screen and (min-width: 769px) {
		flex-direction: column;
		justify-content: flex-start;
		padding-top: 5%;
		padding-left: 25px;
		gap: 30px;
		background-image: url('/images/bg-sidebar-desktop.svg');
		aspect-ratio: 9.75 / 19;
		width: 30%;
		border-radius: 10px;
	}
`;
