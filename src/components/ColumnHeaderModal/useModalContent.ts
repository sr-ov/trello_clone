import { useMemo, createElement, useState } from 'react'

import Copy from './Copy'
import { ModalSmRemoveContent } from '..'
import Default from './Default'

interface Params {
	onCopy(value: string): void
	onCancel: VoidFunction
	onConfirm: VoidFunction
}

export const useModalContent = ({ onCancel, onCopy, onConfirm }: Params) => {
	const [variant, setVariant] = useState<0 | 1 | 2>(0)

	const titleModal = useMemo(
		() => ['Действия со списком', 'Копировать список', 'Удалить список'][variant],
		[variant]
	)
	const ContentModal = useMemo(() => {
		return [
			createElement(Default, {
				setCopy: () => setVariant(1),
				setRemove: () => setVariant(2),
			}),
			createElement(Copy, { onCopy }),
			createElement(ModalSmRemoveContent, { onCancel, onConfirm }),
		][variant]
	}, [variant])

	return {
		titleModal,
		ContentModal,
		setVariant,
	}
}
