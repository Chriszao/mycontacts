import type { OrderBy } from '@services/ContactsService';
import styled, { css } from 'styled-components';

export const Container = styled.div`
	margin-top: 32px;
`;

export const InputSearchContainer = styled.div`
	margin-bottom: 32px;
	width: 100%;

	input {
		width: 100%;
		background: #fff;
		border: none;
		border-radius: 25px;
		height: 50px;
		box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);
		outline: 0;
		padding: 0 16px;

		&::placeholder {
			color: #bcbcbc;
		}
	}
`;

export const Header = styled.header<{ justifyContent: string }>`
	${({ theme, justifyContent }) => css`
		display: flex;
		align-items: center;
		justify-content: ${justifyContent};

		border-bottom: 2px solid ${theme.colors.gray[100]};
		padding-bottom: 16px;

		strong {
			font-size: 24px;
		}

		a {
			text-decoration: none;
			font-weight: bold;
			font-size: 16px;
			color: ${theme.colors.primary.main};
			padding: 8px 16px;
			border: 2px solid ${theme.colors.primary.main};
			border-radius: 4px;
			transition: all 0.2s ease-in;

			&:hover {
				background: ${theme.colors.primary.main};
				color: #fff;
			}
		}
	`};
`;

export const ListHeader = styled.header<{ orderBy: OrderBy }>`
	margin-top: 24px;
	margin-bottom: 8px;

	button {
		background: transparent;
		border: none;
		display: flex;
		align-items: center;

		span {
			margin-right: 8px;
			font-weight: bold;
			color: ${({ theme }) => theme.colors.primary.main};
		}

		img {
			transform: ${({ orderBy }) =>
				orderBy === 'asc' ? 'rotate(180deg)' : 'rotate(0deg)'};
			transition: transform 0.2s ease-in;
		}
	}
`;

export const Card = styled.div`
	background: #fff;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
	padding: 16px;
	border-radius: 4px;

	display: flex;
	align-items: center;
	justify-content: space-between;

	& + & {
		margin-top: 16px;
	}

	.info {
		.contact-name {
			display: flex;
			align-items: center;

			small {
				background: ${({ theme }) => theme.colors.primary.lighter};
				color: ${({ theme }) => theme.colors.primary.main};
				font-weight: bold;
				text-transform: uppercase;
				padding: 4px;
				border-radius: 4px;
				margin-left: 8px;
			}
		}

		span {
			display: block;
			font-size: 14px;
			color: ${({ theme }) => theme.colors.gray[200]};
		}
	}

	.actions {
		display: flex;
		align-items: center;

		button {
			background: transparent;
			border: none;
			margin-left: 8px;
		}

		a {
			text-decoration: none;
		}
	}
`;

export const ErrorContainer = styled.div`
	margin-top: 16px;
	display: flex;
	align-items: center;

	.details {
		margin-left: 24px;

		strong {
			font-size: 22px;
			color: ${({ theme }) => theme.colors.danger.main};
			display: block;
			margin-bottom: 8px;
		}
	}
`;

export const EmptyListContainer = styled.div`
	margin-top: 16px;
	display: flex;
	flex-direction: column;
	align-items: center;

	p {
		color: ${({ theme }) => theme.colors.gray[200]};
		margin-top: 8px;
		text-align: center;

		strong {
			color: ${({ theme }) => theme.colors.primary.main};
		}
	}
`;