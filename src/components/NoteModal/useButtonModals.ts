import { useCallback, useState } from 'react'
import { useToggle } from 'react-use'
import { pipe } from 'ramda'

import { useActions } from '../../hooks'

export const useButtonModal = (index: number) => {
	const { moveNoteAction, copyNoteAction, removeNoteAction, toggleNoteModal } =
		useActions()
	const [isOpen, setIsOpen] = useToggle(false)
	const [variant, setVariant] = useState(0)

	const onOpenModal = useCallback(
		pipe(() => setVariant(index), setIsOpen),
		[index]
	)
	const onCloseModal = useCallback(() => setIsOpen(false), [setIsOpen])
	const onReplace = useCallback(pipe(moveNoteAction, onCloseModal), [])
	const onCopy = useCallback(pipe(copyNoteAction, onCloseModal), [])
	const onCancel = useCallback(onCloseModal, [])
	const onConfirm = useCallback(
		pipe(removeNoteAction, () => toggleNoteModal(false)),
		[]
	)

	return {
		onCloseModal,
		onReplace,
		onCopy,
		onCancel,
		onConfirm,
		isOpen,
		variant,
		onOpenModal,
	}
}
