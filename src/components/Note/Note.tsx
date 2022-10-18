import { memo, useCallback } from 'react'
import { Draggable } from 'react-beautiful-dnd'

import { ReactComponent as DescIcon } from '../../icons/product-description.svg'
import { INote } from '../../types'
import styles from './Note.module.css'
import { useActions } from '../../hooks'

interface NoteProps extends INote {
	id: string
	indexNote: number
	indexCol: number
}

function Note({ id, indexNote, indexCol, description, title }: NoteProps) {
	const { setCurrentItem, toggleNoteModal } = useActions()

	const onSetCurrentNote = useCallback(() => {
		setCurrentItem({ indexNote, indexCol })
	}, [setCurrentItem, indexNote, indexCol])

	return (
		<Draggable draggableId={id} index={indexNote}>
			{({ innerRef, draggableProps, dragHandleProps }) => {
				return (
					<div
						className={styles.note}
						onClick={() => toggleNoteModal(true)}
						onMouseEnter={onSetCurrentNote}
						ref={innerRef}
						data-id={id}
						{...draggableProps}
						{...dragHandleProps}
					>
						{description && <DescIcon height="13" width="13" />}
						{title}
					</div>
				)
			}}
		</Draggable>
	)
}

export default memo(Note)
