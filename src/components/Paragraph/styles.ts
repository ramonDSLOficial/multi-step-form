import styled from 'styled-components';

export const Container = styled.p`
    color: ${(props) => props.theme.colors.neutral.first};
	font-size: 1.4rem;
	font-weight: ${(props) => props.theme.font.weight.terciary};

	@media screen and (min-width: 769px) {
		margin-bottom: 35px;
	}
`;
