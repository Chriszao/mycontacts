import type { ReactNode } from 'react';
import { Spinner } from '@components/Spinner';
import * as S from './styles';

interface FormGroupProps {
	children: ReactNode;
	error?: string;
	isLoading?: boolean;
}

export default function FormGroup({
	children,
	error,
	isLoading = false,
}: FormGroupProps) {
	return (
		<S.Container>
			<div className="form-item">
				{children}

				{isLoading && (
					<div className="loader">
						<Spinner size={18} />
					</div>
				)}
			</div>

			{error && <small>{error}</small>}
		</S.Container>
	);
}
