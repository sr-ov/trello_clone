import { memo, useCallback, MouseEvent } from 'react'
import { Draggable, DraggableProvidedDragHandleProps } from 'react-beautiful-dnd'
import { v4 as uuidv4 } from 'uuid'

import { AddNewItem, ColumnHeader, Notes } from '..'
import { useActions } from '../../hooks'
import { IColumn } from '../../types'
import styles from './Column.module.css'

interface ColumnInnerProps extends IColumn {
	dragHandleProps: DraggableProvidedDragHandleProps
	index: number
}

function ColumnInner({
	id,
	title,
	notes,
	dragHandleProps,
	index: indexCol,
}: ColumnInnerProps) {
	const { addNewNoteAction, setCurrentItem } = useActions()

	const onSetCurrentColumn = useCallback(
		(e: MouseEvent<HTMLDivElement>) => {
			if (!e.currentTarget.contains(e.target as HTMLDivElement)) return

			setCurrentItem({ indexCol })
		},
		[indexCol, setCurrentItem]
	)

	const addNewNote = useCallback(
		(value: string) => {
			addNewNoteAction({ id: uuidv4(), title: value, description: '' })
		},
		[addNewNoteAction]
	)

	return (
		<div className={styles['column-inner']} onMouseEnter={onSetCurrentColumn}>
			<ColumnHeader title={title} dragHandleProps={dragHandleProps} />
			<Notes notes={notes} indexCol={indexCol} id={id} />
			<div className={styles['column-footer']}>
				<AddNewItem btnText="заметку" minRows={2} onAddNewItem={addNewNote} />
			</div>
		</div>
	)
}

const MemoizedColumnInner = memo(ColumnInner)

interface ColumnProps extends IColumn {
	index: number
}

function Column(props: ColumnProps) {
	return (
		<Draggable draggableId={props.id} index={props.index}>
			{({ innerRef, draggableProps, dragHandleProps }) => {
				return (
					<div className={styles.column} ref={innerRef} {...draggableProps}>
						<MemoizedColumnInner dragHandleProps={dragHandleProps!} {...props} />
					</div>
				)
			}}
		</Draggable>
	)
}

export default memo(Column)
