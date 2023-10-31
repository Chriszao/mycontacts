import styled, { css } from 'styled-components';
import type { ToastMessageProps } from '.';

const containerVariants = {
	default: css`
		background: ${({ theme }) => theme.colors.primary.main};
	`,
	success: css`
		background: ${({ theme }) => theme.colors.success.main};
	`,
	danger: css`
		background: ${({ theme }) => theme.colors.danger.main};
	`,
};

export const Container = styled.div<Pick<ToastMessageProps, 'type'>>`
	${({ type = 'default' }) => css`
		padding: 16px 32px;
		color: #fff;
		border-radius: 4px;
		box-shadow: 0px 20px 20px -16px rgba(0, 0, 0, 0.25);
		display: flex;
		align-items: center;
		justify-content: center;

		${containerVariants[type] || containerVariants.default};

		& + & {
			margin-top: 12px;
		}

		strong {
			margin-left: 8px;
		}
	`}
`;
