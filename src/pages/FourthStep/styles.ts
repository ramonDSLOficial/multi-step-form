import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.section``;

export const Clause = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;

    @media screen and (min-width: 769px) {
        &.plan > div {
            display: flex;
            flex-direction: column;
            gap: 3px;
        }
    }
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

	@media screen and (min-width: 769px) {
		& > section,
		& > ${Clause} {
			padding: 20px;
		}

		& > section {
			& > ${Clause}:first-child {
				padding-bottom: 20px;
			}
		}
	}
`;

export const ChangePlanbtn = styled(Link)`
	color: ${(props) => props.theme.colors.neutral.first};
	font-size: 1.2rem;
	font-weight: ${(props) => props.theme.font.weight.secundary};
	text-decoration-color: ${(props) => props.theme.font.weight.secundary};
    
    @media screen and (min-width: 769px) {
        transition: color .5s ease-in-out, text-decoration-color .5s ease-in-out;

        &:hover {
            color: ${(props) => props.theme.colors.primary.second};
            text-decoration-color: ${(props) => props.theme.colors.primary.second};
        }
    }
`;

export const Term = styled.p`
	color: ${(props) => props.theme.colors.neutral.first};
	font-size: 1.2rem;
	font-weight: ${(props) => props.theme.font.weight.secundary};
    
	${Clause}.plan & {
        color: ${(props) => props.theme.colors.primary.first};
        font-weight: ${(props) => props.theme.font.weight.primary};
	}

	@media screen and (min-width: 769px) {
		font-size: 1.1rem;

		${Clause}.plan & {
			font-size: 1.3rem;
		}
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

	@media screen and (min-width: 769px) {
        ${Clause}.plan & {
            font-size: 1.3rem;
        }
		&.total {
			font-size: 1.6rem;
		}
	}
`;
