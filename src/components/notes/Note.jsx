import { memo } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import desc from '../../icons/product-description.svg'

function Note({ id, iNote, descNote, titleNote, openMainModal }) {
	return (
		<Draggable draggableId={id} index={iNote}>
			{({ innerRef, draggableProps, dragHandleProps }, snapshot) => {
				return (
					<div
						ref={innerRef}
						{...draggableProps}
						{...dragHandleProps}
						onClick={() => openMainModal(id)}
						className="note"
						data-id={id}
					>
						{descNote && (
							<img src={desc} alt="desciption" height="13" style={{ marginRight: 10 }} />
						)}
						{titleNote}
					</div>
				)
			}}
		</Draggable>
	)
}

export default memo(Note, (prev, cur) => {
	return JSON.stringify(cur) === JSON.stringify(prev)
})
