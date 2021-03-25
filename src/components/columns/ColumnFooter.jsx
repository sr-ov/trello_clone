import { memo } from 'react'

import { addNewNoteAction } from '../../store/reducers/dataReducer'

import { AddNewItemModal } from '../modals/addNewItemModal'

function ColumnFooter({ handler, ...props }) {
	return (
		<div className="column-footer">
			<AddNewItemModal
				{...{
					func: () => handler(addNewNoteAction),
					btnText: 'карточку',
					placeholder: 'Ввести заголовок карточки',
					style: { backgroundColor: '#fff', height: 50 },
					focus: true,
					stop: true,
					...props,
				}}
			/>
		</div>
	)
}

export default memo(ColumnFooter, (prev, cur) => {
	return cur.openAddNewModal === prev.openAddNewModal
})
