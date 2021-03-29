import React, { useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Header, Sidebar } from '.'
import { TextArea } from '../../textArea'
import { getCoords, getFound } from '../../../helpers'
import desc from '../../../icons/product-description.svg'
import {
	setComponentIdAction,
	setCoordsAction,
	toggleModalsAction,
} from '../../../store/reducers/anyReducer'
import './style.css'

function MainModal() {
	const textareaRef = useRef()
	const dispatch = useDispatch()
	const note = useSelector(({ dataReducer }) => {
		const id = dataReducer.inModal
		return getFound(dataReducer.columns, id).el
	})

	const openSecModal = (i) => (e) => {
		dispatch(setCoordsAction(getCoords(e)))
		dispatch(toggleModalsAction({ key: 'sec', val: true }))
		dispatch(setComponentIdAction({ name: 'note', i }))
	}

	const closeModal = (e) => {
		if (e.target === e.currentTarget) {
			dispatch(toggleModalsAction({ key: 'main', val: false }))
		}
	}

	return (
		<div onClick={closeModal} className="main-modal">
			<div className="main-modal-inner">
				<Header
					closeModal={closeModal}
					payload={{ id: note.id, key: 'titleNote' }}
					titleNote={note.titleNote}
				/>

				<div className="main-modal-body">
					<div className="main-modal-text">
						<h3 className="main-modal-desc-title">
							<img src={desc} alt="description" height="15" />
							Описание
						</h3>

						<TextArea
							payload={{ id: note.id, key: 'descNote' }}
							textAreaRef={textareaRef}
							value={note.descNote}
							placeholder="Добавить описание"
						/>
					</div>
					<Sidebar openSecModal={openSecModal} />
				</div>
			</div>
		</div>
	)
}

export default React.memo(MainModal)
