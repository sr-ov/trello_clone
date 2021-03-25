import React from 'react'

import { addNewColAction } from '../../store/reducers/dataReducer'
import { AddNewItemModal } from '../modals/addNewItemModal'

function AddCol({ handler, ...props }) {
	return (
		<div className="add-col">
			<AddNewItemModal
				{...{
					func: () => handler(addNewColAction),
					addPadding: true,
					focus: true,
					stop: true,
					btnText: 'колонку',
					placeholder: 'Ввести заголовок списка',
					style: { backgroundColor: ' #fff', height: 50 },
					...props,
				}}
			/>
		</div>
	)
}

export default React.memo(AddCol)
