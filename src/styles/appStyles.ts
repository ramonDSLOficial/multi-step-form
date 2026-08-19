import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100vh;

	@media screen and (min-width: 769px) {
		padding: 12px;
		align-items: center;
		background-color: ${(props) => props.theme.colors.neutral.third};
	}
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: inherit;
	height: 86%;

	@media screen and (min-width: 769px) {
		flex-direction: row;
		align-items: stretch;
		gap: 60px;
		max-width: 65%;
		margin-top: 5svh;
		padding: 15px 35px 15px 15px;
		justify-content: flex-start;
		border-radius: 12px;
	    background-color: ${(props) => props.theme.colors.neutral.white};
		box-shadow: -1px 1px 10px #00000039;
	}
`;
