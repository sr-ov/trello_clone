import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'
import { array, getFound } from '../../../helpers'
import { initialState } from './initialState'

const dataReducer = createSlice({
	name: 'data',
	initialState,
	reducers: {
		addNewColAction: ({ columns }, { payload: val }) => {
			columns.push({
				id: uuidv4(),
				titleCol: val,
				notes: [],
			})
		},

		addNewNoteAction: (state, { payload: val }) => {
			const idCol = state.openAddNewModal
			getFound(state.columns, idCol).el.notes.push({
				id: uuidv4(),
				titleNote: val,
				descNote: '',
			})
		},

		openAddNewModalAction: (state, { payload: idCol }) => {
			state.openAddNewModal = idCol
		},

		changeTextAction: ({ columns }, { payload }) => {
			const { id, key, val } = payload
			getFound(columns, id).el[key] = val
		},

		setItemInModalAction: (state, { payload: id }) => {
			state.inModal = id
		},

		setSelectsAction: (state, { payload }) => {
			const { idCol, idNote } = payload

			const { arr: notes, i: indexNote } = getFound(state.columns, idNote)
			const { i: indexCol } = getFound(state.columns, idCol)

			state.selects = {
				idCol,
				idNote,
				notes,
				indexNote,
				indexCol,
				selectCols: idCol,
				selectNotes: idNote,
			}
		},

		changeColsSelectAction: (state, { payload }) => {
			const { val, index } = payload
			const check = state.selects.idCol === val
			const { notes } = getFound(state.columns, val).el

			state.selects = {
				...state.selects,
				notes,
				selectCols: val,
				selectNotes: check ? state.selects.idNote : 'bottom',
				indexCol: index,
				indexNote: check ? state.selects.indexNote : notes.length + 1,
			}
		},

		changeNotesSelectAction: (state, { payload }) => {
			const { val, index } = payload

			state.selects = {
				...state.selects,
				selectNotes: val,
				indexNote: index,
			}
		},

		copyNoteAction: ({ selects, columns }, { payload: val }) => {
			const { idNote, indexNote, selectCols } = selects
			const { el } = getFound(columns, idNote)
			const { notes } = getFound(columns, selectCols).el

			const noteCopy = { ...el, id: uuidv4(), titleNote: val }
			array().addTo(indexNote, notes, noteCopy)
		},

		moveNoteAction: (state) => {
			const { idNote, indexNote, selectCols } = state.selects
			const { arr, i } = getFound(state.columns, idNote)
			const { notes } = getFound(state.columns, selectCols).el

			array().del(i, arr).addTo(indexNote, notes)

			state.selects = {
				...state.selects,
				notes,
				idCol: selectCols,
				selectNotes: idNote,
			}
		},

		copyColAction: ({ inModal, columns }, { payload: val }) => {
			const { arr, el, i } = getFound(columns, inModal)

			const notes = el.notes.map((el) => ({ ...el, id: uuidv4() }))
			const colCopy = { id: uuidv4(), titleCol: val, notes }

			array().addTo(i + 1, arr, colCopy)
		},

		delAction: ({ columns, inModal }) => {
			const { arr, i } = getFound(columns, inModal)
			arr.splice(i, 1)
		},

		dragAction: ({ columns }, { payload }) => {
			const { type, startI, hoverI, startDropId, hoverDropId } = payload

			if (type === 'columns') {
				array().del(startI, columns).addTo(hoverI, columns)
			} else {
				const curNotes = getFound(columns, startDropId).el.notes
				const { notes } = getFound(columns, hoverDropId).el

				array().del(startI, curNotes).addTo(hoverI, notes)
			}
		},
	},
})

export default dataReducer.reducer

export const {
	addNewColAction,
	addNewNoteAction,
	openAddNewModalAction,
	setItemInModalAction,
	setSelectsAction,
	changeColsSelectAction,
	changeNotesSelectAction,
	changeTextAction,
	delAction,
	copyColAction,
	copyNoteAction,
	moveNoteAction,
	dragAction,
} = dataReducer.actions
