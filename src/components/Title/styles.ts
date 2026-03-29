import styled from 'styled-components';

export const Container = styled.h1`
	color: ${(props) => props.theme.colors.neutral.black};
	font-size: 2.2rem;
	font-weight: ${(props) => props.theme.font.weight.primary};
	margin-bottom: 10px;
`;
