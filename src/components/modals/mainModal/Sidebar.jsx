import React from 'react'

import copyIcon from '../../../icons/copy.svg'
import deleteIcon from '../../../icons/delete.svg'
import moveIcon from '../../../icons/rightArrow.svg'

import { Button } from '../../btns'

export const list = [
	{
		text: 'Переместить',
		icon: moveIcon,
	},
	{
		text: 'Копировать',
		icon: copyIcon,
	},
	{
		text: 'Удалить',
		icon: deleteIcon,
	},
]

function Sidebar({ openSecModal }) {
	return (
		<aside className="sidebar">
			<div className="sidebar-btns">
				<h3 className="sidebar-title">ДЕЙСТВИЯ</h3>
				{list.map(({ text, icon }, i) => (
					<Button
						onClickFn={openSecModal(i)}
						key={text}
						className="btn-primary"
						style={{ justifyContent: 'start' }}
					>
						<img src={icon} className="icon-btn" alt="icon" />
						{text}
					</Button>
				))}
			</div>
		</aside>
	)
}

export default React.memo(Sidebar)
