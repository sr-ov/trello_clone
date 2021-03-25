import React from 'react'
import { Button } from '../../btns'
import { TextArea } from '../../textArea'

function CopyColInner({ textAreaRef, func }) {
	const props = {
		placeholder: 'Введите название',
		style: { backgroundColor: '#fff', height: 50 },
		textAreaRef,
		focus: true,
		stop: true,
	}

	return (
		<div>
			<TextArea {...props} />
			<Button
				onClickFn={func}
				style={{ paddingTop: 8, paddingBottom: 8, width: '50%' }}
			>
				Копировать
			</Button>
		</div>
	)
}

export default CopyColInner
