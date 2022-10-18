import { memo, useCallback, useRef } from 'react'
import { DragDropContext, Droppable, DropResult } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'

import { AddNewItem, Column, NoteModal } from '..'
import { useActions, useAppSelector } from '../../hooks'
import { selectIsOpenNoteModal } from '../../store/noteModal/selectors'
import { selectColumns, selectCurrentItem } from '../../store/data/selectors'
import styles from './Columns.module.css'
import { useDragDrop } from './useDragDrop'

function Columns() {
	const { addNewColumnAction, toggleNoteModal } = useActions()
	const columns = useAppSelector(selectColumns)
	const isOpenNoteModal = useAppSelector(selectIsOpenNoteModal)
	const { onDragEnd, onDragStart } = useDragDrop()

	const addNewColumn = useCallback((title: string) => {
		addNewColumnAction({
			id: uuidv4(),
			title,
			notes: [],
		})
	}, [])

	const onClose = useCallback(() => {
		toggleNoteModal(false)
	}, [])

	return (
		<>
			{isOpenNoteModal && <NoteModal onClose={onClose} />}

			<DragDropContext onDragStart={onDragStart} onDragEnd={onDragEnd}>
				<Droppable droppableId="columns" direction="horizontal" type="columns">
					{({ innerRef, droppableProps, placeholder }) => (
						<div className={styles.columns} {...droppableProps} ref={innerRef}>
							{columns.map((el, index) => (
								<Column key={el.id} index={index} {...el} />
							))}
							{placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>

			<div className={styles['add-col']}>
				<AddNewItem
					btnText="колонку"
					withPadding
					minRows={2}
					onAddNewItem={addNewColumn}
				/>
			</div>
		</>
	)
}

export default memo(Columns)
