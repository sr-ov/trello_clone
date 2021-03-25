import { memo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { CopyColInner, Header, Inner, InnerColActions, InnerDel } from '.'
import { useOnClickOutside } from '../../../customHooks/useOnClickOutside'
import { useTextArea } from '../../../customHooks/useTextArea'
import { setComponentIdAction, toggleModalsAction } from '../../../store/reducers/anyReducer'
import {
	changeColsSelectAction,
	changeNotesSelectAction,
	copyColAction,
	copyNoteAction,
	delAction,
	moveNoteAction,
} from '../../../store/reducers/dataReducer'
import './style.css'

function SecondaryModal() {
	const refModal = useRef()
	const dispatch = useDispatch()
	const coords = useSelector(({ anyReducer }) => anyReducer.coords)
	const { name, i } = useSelector(({ anyReducer }) => anyReducer.componentId)

	const close = () => dispatch(toggleModalsAction({ key: 'sec', val: false }))

	useOnClickOutside(refModal, close)

	const { textAreaRef, handler } = useTextArea()

	const action = (fn) => () => {
		close()
		fn()
	}

	const changeSelects = {
		changeSelectsCols: (payload) => dispatch(changeColsSelectAction(payload)),
		changeSelectsNotes: (payload) => dispatch(changeNotesSelectAction(payload)),
	}

	const components = {
		note: [
			{
				component: (
					<Inner
						func={action(() => dispatch(moveNoteAction()))}
						text="Переместить"
						{...changeSelects}
						move
					/>
				),
				headerText: 'Переместить карточку',
			},
			{
				component: (
					<Inner
						func={action(() => handler(copyNoteAction))}
						text="Копировать"
						textAreaRef={textAreaRef}
						{...changeSelects}
						showTextArea
					/>
				),
				headerText: 'Копировать карточку',
			},
			{
				component: (
					<InnerDel
						del={action(() => {
							dispatch(delAction())
							dispatch(toggleModalsAction({ key: 'main', val: false }))
						})}
						close={close}
					/>
				),
				headerText: 'Удалить карточку',
			},
		],
		col: [
			{
				component: (
					<CopyColInner
						func={action(() => handler(copyColAction))}
						textAreaRef={textAreaRef}
						text="Копировать"
					/>
				),
				headerText: 'Копировать список',
			},
			{
				component: <InnerDel del={action(() => dispatch(delAction()))} close={close} />,
				headerText: 'Удалить список',
			},
		],
		colActions: [
			{
				component: (
					<InnerColActions
						setComponent={(payload) => dispatch(setComponentIdAction(payload))}
					/>
				),
				headerText: 'Действия со списком',
			},
		],
	}

	const component = components[name][i].component
	const headerText = components[name][i].headerText

	return (
		<div ref={refModal} className="secondary-modal" style={coords}>
			<Header {...{ headerText, close }} />
			{component}
		</div>
	)
}

export default memo(SecondaryModal)
