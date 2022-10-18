import { memo } from 'react'
import { Droppable } from 'react-beautiful-dnd'

import { Note } from '..'
import { INote } from '../../types'
import styles from './Notes.module.css'

interface NotesProps {
	id: string
	notes: INote[]
	indexCol: number
}

function Notes({ id, notes, indexCol }: NotesProps) {
	return (
		<Droppable droppableId={id} type="notes">
			{({ innerRef, droppableProps, placeholder }) => {
				return (
					<div className={styles['column-notes']}>
						<div className={styles.notesWrapper} ref={innerRef} {...droppableProps}>
							{notes.map((el, indexNote) => (
								<Note
									key={el.id}
									indexNote={indexNote}
									indexCol={indexCol}
									{...el}
								/>
							))}
							{placeholder}
						</div>
					</div>
				)
			}}
		</Droppable>
	)
}

export default memo(Notes)
