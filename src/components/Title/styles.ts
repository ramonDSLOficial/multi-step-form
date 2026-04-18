import styled from 'styled-components';

export const Container = styled.h1`
	color: ${(props) => props.theme.colors.neutral.black};
	font-size: 2.2rem;
	font-weight: ${(props) => props.theme.font.weight.primary};
	margin-bottom: 10px;
	
	@media screen and (min-width: 769px) {
		font-size: 2.6rem;
		color: ${(props) => props.theme.colors.primary.first};
		text-shadow: 1px 1px 0px #022a5a45;
	}
`;
