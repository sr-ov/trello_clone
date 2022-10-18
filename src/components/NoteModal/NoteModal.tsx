import { FC, useState } from 'react'
import cn from 'classnames'

import { ButtonClose, ModalLg, TextArea } from '..'
import ButtonModal from './ButtonModal'
import { ReactComponent as TitleIcon } from '../../icons/title.svg'
import { ReactComponent as DescIcon } from '../../icons/product-description.svg'
import { ReactComponent as RightArrowIcon } from '../../icons/right-arrow.svg'
import { ReactComponent as CopyIcon } from '../../icons/copy.svg'
import { ReactComponent as DeleteIcon } from '../../icons/delete.svg'
import { useActions, useAppSelector } from '../../hooks'
import { selectNoteInModal } from '../../store/data/selectors'
import styles from './NoteModal.module.css'

interface NoteModalProps {
	onClose: VoidFunction
}

const buttons = [
	{
		Icon: RightArrowIcon,
		text: 'Переместить',
	},
	{
		Icon: CopyIcon,
		text: 'Копировать',
	},
	{
		Icon: DeleteIcon,
		text: 'Удалить',
	},
]

const NoteModal: FC<NoteModalProps> = ({ onClose }) => {
	const { changeNoteTextAction } = useActions()
	const note = useAppSelector(selectNoteInModal)
	const [title, setTitle] = useState(note.title)
	const [desc, setDesc] = useState(note.description)

	const onChangeNoteText = (value: string, key: 'title' | 'description') => {
		changeNoteTextAction({ key, value })
	}

	return (
		<ModalLg onClick={onClose}>
			<div className={styles.header}>
				<div className={styles.top}>
					<h3 className={styles.title}>
						<TitleIcon height="16" width="16" />
						Заголовок
					</h3>
					<ButtonClose onClick={onClose} />
				</div>
				<TextArea
					value={title}
					onChange={(e) => setTitle(e.currentTarget.value)}
					onBlur={(e) => onChangeNoteText(e.currentTarget.value, 'title')}
					placeholder="Добавить заголовок"
				/>
			</div>

			<div className={styles.body}>
				<div className={styles.wrapper}>
					<h3 className={cn(styles.title, styles.titleSm)}>
						<DescIcon height="15" width="15" />
						Описание
					</h3>

					<TextArea
						value={desc}
						onChange={(e) => setDesc(e.currentTarget.value)}
						onBlur={(e) => onChangeNoteText(e.currentTarget.value, 'description')}
						placeholder="Добавить описание"
						minRows={5}
					/>
				</div>

				<aside>
					<h3 className={cn(styles.title, styles.titleSm)}>Действия</h3>
					{buttons.map(({ Icon, text }, index) => {
						return (
							<ButtonModal key={text} index={index}>
								<Icon height="16" width="16" />
								{text}
							</ButtonModal>
						)
					})}
				</aside>
			</div>
		</ModalLg>
	)
}

export default NoteModal
