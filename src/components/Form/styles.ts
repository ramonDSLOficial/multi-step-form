import styled from 'styled-components';

export const Container = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	width: inherit;
	height: inherit;
	background-color: ${(props) => props.theme.colors.neutral.third};

	@media screen and (min-width: 768px) {
		width: 75%;
		background-color: transparent;
		justify-content: flex-end;
	}

	& > section:first-child {
		width: 90%;
		padding: 25px 20px;
		border-radius: 5px;
		box-shadow: -1px 1px 10px #00000024;
		margin-top: -16.5%;
		background-color: ${(props) => props.theme.colors.neutral.white};
		max-width: 600px;

		@media screen and (min-width: 768px) {
			margin-top: unset;
			padding: 0;
			width: 100%;
			height: unset;
			max-width: unset;
			box-shadow: unset;
			border-radius: 0;
		}
	}
`;
