import { memo, useRef, useState } from 'react'
import { Draggable } from 'react-beautiful-dnd'
import { useDispatch, useSelector } from 'react-redux'
import { ColumnFooter, ColumnHeader } from '.'
import { getCoords } from '../../App'
import { useTextArea } from '../../customHooks/useTextArea'
import {
	setComponentIdAction,
	setCoordsAction,
	toggleModalsAction,
} from '../../store/reducers/anyReducer'
import {
	openAddNewModalAction,
	setItemInModalAction,
	setSelectsAction,
} from '../../store/reducers/dataReducer'
import { Notes } from '../notes'

function ColumnInner({ id, titleCol, notes, dragHandleProps }) {
	const dispatch = useDispatch()
	const [maskClick, setMaskClick] = useState(false)
	const openAddNewModal = useSelector(
		({ dataReducer }) => dataReducer.openAddNewModal === id,
		(cur, prev) => cur === prev
	)

	const openMainModal = (idNote) => {
		dispatch(setItemInModalAction(idNote))
		dispatch(toggleModalsAction({ val: true, key: 'main' }))
		dispatch(setSelectsAction({ idCol: id, idNote }))
	}

	const openSecModal = (e) => {
		dispatch(setCoordsAction(getCoords(e)))
		dispatch(setComponentIdAction({ name: 'colActions', i: 0 }))
		dispatch(toggleModalsAction({ val: true, key: 'sec' }))
		dispatch(setItemInModalAction(id))
	}

	const show = () => setMaskClick(true)
	const hide = (e) => {
		if (maskClick && !e.target.classList.contains('textarea')) {
			setMaskClick(false)
		}
	}

	return (
		<div className="column-inner">
			<ColumnHeader
				{...{
					openSecModal,
					dragHandleProps,
					maskClick,
					show,
					hide,
					refMask: useRef(),
					textAreaProps: {
						payload: { id, key: 'titleCol' },
						value: titleCol,
						textAreaRef: useRef(),
					},
				}}
			/>

			<Notes {...{ openMainModal, notes, id }} />

			<ColumnFooter
				{...{
					open: () => dispatch(openAddNewModalAction(id)),
					close: () => dispatch(openAddNewModalAction(null)),
					openAddNewModal,
					refModal: useRef(),
					...useTextArea(),
				}}
			/>
		</div>
	)
}

const MemoizedColumnInner = memo(ColumnInner)

function Column(props) {
	return (
		<Draggable draggableId={props.id} index={props.index}>
			{({ innerRef, draggableProps, dragHandleProps }) => {
				return (
					<div ref={innerRef} {...draggableProps} className="column">
						<MemoizedColumnInner {...{ ...props, dragHandleProps }} />
					</div>
				)
			}}
		</Draggable>
	)
}

export default memo(Column, (prev, cur) => {
	return JSON.stringify(cur) === JSON.stringify(prev)
})
