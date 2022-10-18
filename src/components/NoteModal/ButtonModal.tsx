import { FC } from 'react'
import { DivProps } from 'react-html-props'

import { Button, ModalSm, ModalSmRemoveContent } from '..'
import { useClickAway } from '../../hooks'
import ModalContent from './ModalContent'
import Copy from './Copy'
import Replace from './Replace'
import styles from './ButtonModal.module.css'
import { useButtonModal } from './useButtonModals'

interface ButtonModalProps extends DivProps {
	index: number
}

const titleModalVariants = [
	'Переместить карточку',
	'Копировать карточку',
	'Удалить карточку',
]

const ButtonModal: FC<ButtonModalProps> = ({ children, index }) => {
	const {
		onCloseModal,
		onOpenModal,
		isOpen,
		variant,
		onCancel,
		onConfirm,
		onCopy,
		onReplace,
	} = useButtonModal(index)
	const modalRef = useClickAway<HTMLDivElement>(onCloseModal)

	return (
		<div className={styles.wrapper}>
			<Button className={styles.button} onClick={onOpenModal}>
				{children}
			</Button>
			{isOpen && (
				<ModalSm
					className={styles.modal}
					ref={modalRef}
					titleModal={titleModalVariants[variant]}
					onClose={onCloseModal}
				>
					<ModalContent variant={variant}>
						<Replace onReplace={onReplace} />
						<Copy onCopy={onCopy} />
						<ModalSmRemoveContent onCancel={onCancel} onConfirm={onConfirm} />
					</ModalContent>
				</ModalSm>
			)}
		</div>
	)
}

export default ButtonModal
