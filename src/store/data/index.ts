import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IColumn, INote } from '../../types'
import { initialState } from './initialState'
import { CurrentItem } from './types'
import { removeFrom, addTo } from './utils'

const dataSlice = createSlice({
	name: 'data',
	initialState,
	reducers: {
		setCurrentItem(
			state,
			{
				payload: { indexCol, indexNote = -1 },
			}: PayloadAction<{ indexCol: number; indexNote?: number }>
		) {
			state.currentItem = { indexCol, indexNote }
		},

		addNewColumnAction({ columns }, { payload: column }: PayloadAction<IColumn>) {
			columns.push(column)
		},

		addNewNoteAction(
			{ columns, currentItem: { indexCol } },
			{ payload: note }: PayloadAction<INote>
		) {
			columns[indexCol].notes.push(note)
		},

		changeColumnTitleAction(
			{ columns, currentItem: { indexCol } },
			{ payload: value }: PayloadAction<string>
		) {
			columns[indexCol].title = value
		},

		changeNoteTextAction(
			{ columns, currentItem: { indexCol, indexNote } },
			{
				payload: { key, value },
			}: PayloadAction<{
				key: 'title' | 'description'
				value: string
			}>
		) {
			columns[indexCol].notes[indexNote][key] = value
		},

		moveNoteAction(
			{ columns, currentItem },
			{
				payload: { idxCol, idxNote },
			}: PayloadAction<{
				idxCol: number
				idxNote: number
			}>
		) {
			const { indexCol, indexNote } = currentItem

			const moveItem = removeFrom(columns[indexCol].notes).byIndex(indexNote)
			addTo(columns[idxCol].notes).byIndex(idxNote, moveItem)

			currentItem.indexCol = idxCol
			currentItem.indexNote = idxNote
		},

		copyColumnAction(
			{ columns, currentItem: { indexCol } },
			{
				payload: { title, id, notes },
			}: PayloadAction<{ title: string; id: string; notes: INote[] }>
		) {
			const copy: IColumn = { id, title, notes }
			addTo(columns).byIndex(indexCol + 1, copy)
		},

		copyNoteAction(
			{ columns, currentItem },
			{
				payload: { idxCol, idxNote, title, id },
			}: PayloadAction<{
				idxCol: number
				idxNote: number
				title: string
				id: string
			}>
		) {
			const { indexCol, indexNote } = currentItem

			const copyItem = columns[indexCol].notes[indexNote]
			const copy: INote = { ...copyItem, title, id }
			addTo(columns[idxCol].notes).byIndex(idxNote, copy)
		},

		removeColumnAction({ columns, currentItem: { indexCol } }) {
			removeFrom(columns).byIndex(indexCol)
		},

		removeNoteAction({ columns, currentItem: { indexCol, indexNote } }) {
			removeFrom(columns[indexCol].notes).byIndex(indexNote)
		},

		dragAction(
			{ columns },
			{
				payload,
			}: PayloadAction<{
				type: string
				start: CurrentItem
				end: CurrentItem
			}>
		) {
			const { type, start, end } = payload

			if (type === 'columns') {
				const column = removeFrom(columns).byIndex(start.indexCol)
				addTo(columns).byIndex(end.indexCol, column)
			} else {
				const notesRemove = columns[start.indexCol].notes
				const notesAdd = columns[end.indexCol].notes
				const note = removeFrom(notesRemove).byIndex(start.indexNote)
				addTo(notesAdd).byIndex(end.indexNote, note)
			}
		},
	},
})

export default dataSlice.reducer
export const dataSliceActions = dataSlice.actions
