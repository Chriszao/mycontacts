import type { InputHTMLAttributes } from 'react';
import styled, { css } from 'styled-components';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
	$error?: string;
}

export default styled.input<InputProps>`
	width: 100%;
	background: #fff;
	border: 2px solid #fff;
	border-radius: 4px;
	box-shadow: 0 4px 10px rgba(0, 0, 0, 0.04);
	height: 52px;
	outline: none;
	padding: 0 16px;
	font-size: 16px;
	transition: border-color 0.2s ease-in;
	appearance: none;

	&:focus {
		border-color: ${({ theme }) => theme.colors.primary.main};
	}

	${({ theme, $error }) =>
		$error &&
		css`
			color: ${theme.colors.danger.main};
			border-color: ${theme.colors.danger.main} !important;
		`}

	&[disabled] {
		background-color: ${({ theme }) => theme.colors.gray[100]};
		border-color: ${({ theme }) => theme.colors.gray[200]};
	}
`;
