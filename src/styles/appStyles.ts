import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	height: 100vh;

	@media screen and (min-width: 769px) {
		padding: 10px;
		align-items: center;
		background-color: ${(props) => props.theme.colors.neutral.third};
	}
`;

export const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: inherit;
	height: 90%;

	@media screen and (min-width: 769px) {
		flex-direction: row;
		gap: 50px;
		max-width: 750px;
		padding: 10px;
		padding-right: 8%;
		justify-content: center;
		border-radius: 12px;
	    background-color: ${(props) => props.theme.colors.neutral.white};
		box-shadow: -1px 1px 10px #00000039;
	}
`;
