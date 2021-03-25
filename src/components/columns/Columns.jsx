import { memo, useCallback, useRef, useState } from 'react'
import { DragDropContext, Droppable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'

import { dragAction } from '../../store/reducers/dataReducer'
import { AddCol, Column } from '.'

import './style.css'
import { useTextArea } from '../../customHooks/useTextArea'

function Columns() {
	const dispatch = useDispatch()
	const [openAddNewModal, setOpenAddNewModal] = useState(false)
	const columns = useSelector(({ dataReducer }) => dataReducer.columns)

	const onDragEnd = useCallback(
		(drags) => {
			const { destination: hoverEl, source: startEl, type } = drags

			if (!hoverEl) {
				return
			}

			if (startEl.index === hoverEl.index && startEl.droppableId === hoverEl.droppableId) {
				return
			}

			const payload = {
				type,
				startI: startEl.index,
				hoverI: hoverEl.index,
				startDropId: startEl.droppableId,
				hoverDropId: hoverEl.droppableId,
			}

			dispatch(dragAction(payload))
		},
		[dispatch]
	)

	return (
		<>
			<DragDropContext onDragEnd={onDragEnd}>
				<Droppable droppableId="columns" direction="horizontal" type="columns">
					{({ innerRef, droppableProps, placeholder }) => (
						<div {...droppableProps} ref={innerRef} className="columns">
							{columns.map((el, index) => (
								<Column key={el.id} {...{ ...el, index }} />
							))}
							{placeholder}
						</div>
					)}
				</Droppable>
			</DragDropContext>
			<AddCol
				{...{
					refModal: useRef(),
					openAddNewModal,
					open: () => setOpenAddNewModal(true),
					close: () => setOpenAddNewModal(false),
					...useTextArea(),
				}}
			/>
		</>
	)
}

export default memo(Columns)
