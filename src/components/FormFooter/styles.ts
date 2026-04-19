import styled from 'styled-components';

export const Container = styled.section`
	display: flex;
	justify-content: flex-end;
	align-items: center;
	padding: 12px 10px;
	width: 100%;
	height: 15%;
	background-color: ${(props) => props.theme.colors.neutral.white};
	box-shadow: 2px 1px 10px #00000015;
	margin-top: 20px;

	@media screen and (min-width: 768px) {
		margin-top: 17.5%;
		height: auto;
		box-shadow: unset;
		padding: 0;
	}
`;
