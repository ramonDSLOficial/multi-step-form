import styled from 'styled-components';

export const Container = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: inherit;
	height: inherit;
	background-color: ${(props) => props.theme.colors.neutral.third};

	& > section:first-child {
		width: 90%;
		padding: 25px 20px;
		border-radius: 5px;
		box-shadow: -1px 1px 10px #00000024;
		margin-top: -12%;
		background-color: ${(props) => props.theme.colors.neutral.white};

		@media screen and (min-width: 350px) {
			margin-top: -8%;
		}
		@media screen and (min-width: 438px) and (max-width: 584px) {
			margin-top: -5%;
		}
		@media screen and (min-width: 584px) and (max-width: 769px) {
			max-width: 550px;
		}
	}
`;
