import { useRef, useCallback } from 'react'
import { DropResult } from 'react-beautiful-dnd'

import { useActions, useAppSelector } from '../../hooks'
import { selectCurrentItem } from '../../store/data/selectors'

export const useDragDrop = () => {
	const { dragAction } = useActions()
	const currentItem = useAppSelector(selectCurrentItem)
	const cur = useRef(currentItem)

	const onDragStart = useCallback(() => {
		cur.current = currentItem
	}, [currentItem])

	const onDragEnd = useCallback(
		(dropResult: DropResult) => {
			const { destination: endEl, source: startEl, type } = dropResult

			if (!endEl) return
			if (startEl.index === endEl.index && startEl.droppableId === endEl.droppableId) {
				return
			}

			dragAction({
				type,
				start: cur.current,
				end:
					type === 'notes'
						? { indexCol: currentItem.indexCol, indexNote: endEl.index }
						: { indexCol: endEl.index, indexNote: -1 },
			})
		},
		[dragAction, currentItem.indexCol]
	)

	return {
		onDragStart,
		onDragEnd,
	}
}
