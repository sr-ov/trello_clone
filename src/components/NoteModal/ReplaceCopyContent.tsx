import { FC, memo, useCallback } from 'react'
import { DivProps } from 'react-html-props'

import { Select, Button } from '..'
import { OnChangeSelectFunction } from './useSelect'
import styles from './ReplaceCopyContent.module.css'

interface IOption {
	id: string
	title: string
}

interface ReplaceCopyContentProps extends DivProps {
	onAction: (payload: { idxCol: number; idxNote: number }) => void
	buttonText: string
	isCopy?: boolean
	notesOptions: IOption[]
	columnsOptions: IOption[]
	onSelectedColumn: OnChangeSelectFunction
	onSelectedNote: OnChangeSelectFunction
	selectedColumn: number
	selectedNote: number
}

const ReplaceCopyContent: FC<ReplaceCopyContentProps> = ({
	onAction,
	children,
	buttonText,
	notesOptions,
	columnsOptions,
	onSelectedColumn,
	onSelectedNote,
	selectedColumn,
	selectedNote,
}) => {
	const onClick = useCallback(() => {
		onAction({ idxCol: selectedColumn, idxNote: selectedNote })
	}, [selectedColumn, selectedNote, onAction])

	return (
		<>
			{children}

			<Select
				label="Список"
				options={columnsOptions}
				value={selectedColumn}
				onChange={onSelectedColumn}
			/>
			<Select
				label="Позиция"
				options={notesOptions}
				value={selectedNote}
				onChange={onSelectedNote}
			/>
			<Button className={styles.button} onClick={onClick}>
				{buttonText}
			</Button>
		</>
	)
}

export default memo(ReplaceCopyContent)
