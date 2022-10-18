import { memo } from 'react'
import { pipe } from 'ramda'
import { v4 as uuidv4 } from 'uuid'

import { ModalSm } from '..'
import { useActions, useAppSelector, useClickAway } from '../../hooks'
import { useModalContent } from './useModalContent'
import { selectNotes } from '../../store/data/selectors'
import styles from './ColumnHeaderModal.module.css'

interface ColumnHeaderModalProps {
	onClose: VoidFunction
}

function ColumnHeaderModal({ onClose }: ColumnHeaderModalProps) {
	const { removeColumnAction, copyColumnAction } = useActions()
	const notes = useAppSelector(selectNotes)
	const onCloseModal = pipe(onClose, () => setVariant(0))
	const onRemoveColumnAction = pipe(removeColumnAction, onCloseModal)
	const onCopyColumnAction = pipe(copyColumnAction, onCloseModal)
	const modalRef = useClickAway<HTMLDivElement>(onCloseModal)

	const { titleModal, ContentModal, setVariant } = useModalContent({
		onCancel: onCloseModal,
		onConfirm: onRemoveColumnAction,
		onCopy: (title: string) =>
			onCopyColumnAction({
				id: uuidv4(),
				title,
				notes: notes.map((el) => ({ ...el, id: uuidv4() })),
			}),
	})

	return (
		<ModalSm
			className={styles.modal}
			ref={modalRef}
			onClose={onCloseModal}
			titleModal={titleModal}
		>
			{ContentModal}
		</ModalSm>
	)
}

export default memo(ColumnHeaderModal)
