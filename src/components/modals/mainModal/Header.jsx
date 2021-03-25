import { memo, useRef } from 'react'
import title from '../../../icons/title.svg'
import { BtnClose } from '../../btns'
import { TextArea } from '../../textArea'

function Header({ titleNote, payload, closeModal }) {
	const textAreaRef = useRef()

	return (
		<div className="main-modal-header">
			<div className="main-modal-header-wrapper">
				<h3 className="main-modal-desc-title">
					<img src={title} alt="title" height="16" />
					Заголовок
				</h3>
				<BtnClose func={closeModal} />
			</div>
			<TextArea
				payload={payload}
				value={titleNote}
				textAreaRef={textAreaRef}
				className="main-modal-title-fz"
				placeholder="Добавить заголовок"
			/>
		</div>
	)
}

export default memo(Header, (prev, cur) => prev.titleNote === cur.titleNote)
