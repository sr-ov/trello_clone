import { createSelector } from '@reduxjs/toolkit'

import { RootState } from '..'
import { addLastOption } from '../../utils'

export const selectColumns = ({ data }: RootState) => {
	console.log('selectColumns')
	return data.columns
}
export const selectCurrentItem = ({ data }: RootState) => data.currentItem

export const selectNotes = createSelector(
	selectColumns,
	selectCurrentItem,
	(columns, currentItem) => {
		const { indexCol } = currentItem
		return columns[indexCol].notes
	}
)

export const selectOptionsColumns = createSelector(
	selectColumns,
	selectCurrentItem,
	(columns, currentItem) => {
		const { indexCol } = currentItem

		return columns.map(({ id, title }, index) => ({
			id,
			title: index === indexCol ? `${title} (текущий)` : title,
		}))
	}
)

export const selectOptionsNotes =
	(selectedColumn: number) =>
	({ data: { currentItem, columns } }: RootState) => {
		const { indexNote, indexCol } = currentItem
		const notes = columns[selectedColumn].notes
		const isEqCols = indexCol === selectedColumn
		const lastOption = addLastOption(notes.length)

		return notes
			.map(({ id }, index) => {
				const title = String(index + 1)
				const isEqNotes = index === indexNote

				return {
					id,
					title: isEqNotes && isEqCols ? `${title} (текущая)` : title,
				}
			})
			.concat(lastOption)
	}

export const selectNoteInModal = createSelector(
	selectColumns,
	selectCurrentItem,
	(columns, currentItem) => {
		const { indexCol, indexNote } = currentItem
		return columns[indexCol].notes[indexNote]
	}
)
