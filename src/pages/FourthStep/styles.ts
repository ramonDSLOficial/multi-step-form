import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section``;

export const Clause = styled.div`
	display: flex;
	justify-content: space-between;
    align-items: center;
`;

export const PlanDetails = styled.section`
	margin-top: 15px;

	& > section,
    & > ${Clause} {
        padding: 15px 10px;
	}
    & > section {
        display: flex;
        flex-direction: column;
        gap: 15px;
        background-color: ${(props) => props.theme.colors.neutral.fourth};
		border-radius: 7px;

        & > ${Clause}:first-child {
            border-bottom: 1px solid ${(props) => props.theme.colors.neutral.second};
            padding-bottom: 10px;
        }
    }

    & > ${Clause} {
        margin-top: 5px;
    }
`;

export const ChangePlanbtn = styled(Link)`
	color: ${(props) => props.theme.colors.neutral.first};
	font-size: 1.2rem;
	font-weight: ${(props) => props.theme.font.weight.secundary};
    text-decoration-color: gray;
`;

export const Term = styled.p`
	color: ${(props) => props.theme.colors.neutral.first};
	font-size: 1.2rem;
	font-weight: ${(props) => props.theme.font.weight.secundary};
    
    ${Clause}.plan & {
        color: ${(props) => props.theme.colors.neutral.black};
    }
`;

export const Price = styled.p`
	color: ${(props) => props.theme.colors.neutral.black};
	font-size: 1.2rem;
	font-weight: ${(props) => props.theme.font.weight.secundary};
    
    &.total,
    ${Clause}.plan & {
        font-weight: ${(props) => props.theme.font.weight.primary};
    }

    &.total {
	    color: ${(props) => props.theme.colors.primary.second};
        font-size: 1.4rem;
    }
`;
