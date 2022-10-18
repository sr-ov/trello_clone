import { useState, useCallback, ChangeEvent } from 'react'
import { useUpdateEffect } from 'react-use'

import { useAppSelector } from '../../hooks'
import {
	selectOptionsColumns,
	selectOptionsNotes,
	selectCurrentItem,
} from '../../store/data/selectors'

export type OnChangeSelectFunction = (e: ChangeEvent<HTMLSelectElement>) => void

export const useSelect = (isReplace: boolean = false) => {
	const { indexCol, indexNote } = useAppSelector(selectCurrentItem)
	const [selectedColumn, setSelectedColumn] = useState(indexCol)
	const [selectedNote, setSelectedNote] = useState(indexNote)
	const columnsOptions = useAppSelector(selectOptionsColumns)
	const notesOptions = useAppSelector(selectOptionsNotes(selectedColumn))

	useUpdateEffect(() => {
		const isSelectedCurrentNote = selectedColumn === indexCol
		const selectedNote = isSelectedCurrentNote ? indexNote : notesOptions.length - 1
		setSelectedNote(selectedNote)
	}, [selectedColumn, indexCol])

	const onSelectedColumn: OnChangeSelectFunction = useCallback((e) => {
		setSelectedColumn(e.currentTarget.selectedIndex)
	}, [])

	const onSelectedNote: OnChangeSelectFunction = useCallback((e) => {
		setSelectedNote(e.currentTarget.selectedIndex)
	}, [])

	return {
		columnsOptions,
		notesOptions:
			isReplace && selectedColumn === indexCol
				? notesOptions.slice(0, -1)
				: notesOptions,
		onSelectedColumn,
		onSelectedNote,
		selectedColumn,
		selectedNote,
	}
}
