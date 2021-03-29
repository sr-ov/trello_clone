import { memo, useRef } from 'react'
import { Droppable } from 'react-beautiful-dnd'
import { Note } from '.'
import { getStyles } from '../../helpers'
import './style.css'

function Notes({ id, notes, openMainModal }) {
	const ref = useRef()

	return (
		<Droppable droppableId={id} type="notes">
			{(
				{ innerRef, droppableProps, placeholder },
				{ isDraggingOver, draggingOverWith, draggingFromThisWith }
			) => {
				return (
					<div ref={ref} className="column-notes">
						<div
							style={{
								minHeight: isDraggingOver
									? getStyles(draggingOverWith, draggingFromThisWith, ref)
									: 15,
							}}
							{...droppableProps}
							ref={innerRef}
						>
							{notes.map((el, iNote) => (
								<Note key={el.id} {...{ ...el, iNote, openMainModal }} />
							))}
							{placeholder}
						</div>
					</div>
				)
			}}
		</Droppable>
	)
}

export default memo(Notes, (cur, prev) => {
	return cur.notes === prev.notes
})
