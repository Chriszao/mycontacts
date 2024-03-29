import ReactPortal from '@components/ReactPortal';
import useAnimatedUnmount from '@hooks/useAnimatedUnmount';
import { type ReactNode } from 'react';
import Button from '../Button';
import * as S from './styles';

interface ModalProps {
	danger?: boolean;
	title: string;
	children: ReactNode;
	cancelLabel?: string;
	confirmLabel?: string;
	onCancel: () => void;
	onConfirm: () => void;
	open: boolean;
	isLoading?: boolean;
}

export default function Modal({
	danger = false,
	isLoading = false,
	open,
	title,
	children,
	cancelLabel = 'Cancelar',
	confirmLabel = 'Confirmar',
	onCancel,
	onConfirm,
}: ModalProps) {
	const { elementRef, shouldRender } = useAnimatedUnmount(open);

	return shouldRender ? (
		<ReactPortal containerId="modal-root">
			<S.Overlay $isLeaving={!open} ref={elementRef}>
				<S.Container $danger={danger} $isLeaving={!open}>
					<h1>{title}</h1>

					<div className="modal-body">{children}</div>

					<S.Footer>
						<button
							onClick={onCancel}
							className="cancel-button"
							type="button"
							disabled={isLoading}
						>
							{cancelLabel}
						</button>
						<Button
							isLoading={isLoading}
							onClick={onConfirm}
							danger={danger}
							type="button"
						>
							{confirmLabel}
						</Button>
					</S.Footer>
				</S.Container>
			</S.Overlay>
		</ReactPortal>
	) : null;
}
