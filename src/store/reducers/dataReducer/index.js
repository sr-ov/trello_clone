import { createSlice } from '@reduxjs/toolkit'
import { v4 as uuidv4 } from 'uuid'

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
				selectCols: idCol,
				selectNotes: idNote,
				indexNote,
				indexCol,
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

			array(i, arr).del().addTo(indexNote, notes)

			state.selects = {
				...state.selects,
				idCol: selectCols,
				selectNotes: idNote,
				notes,
			}
		},

		dragAction: ({ columns }, { payload }) => {
			const { type, startI, hoverI, startDropId, hoverDropId } = payload

			if (type === 'columns') {
				array(startI, columns).del().addTo(hoverI)
			} else {
				const curNotes = getFound(columns, startDropId).el.notes
				const { notes } = getFound(columns, hoverDropId).el

				array(startI, curNotes).del().addTo(hoverI, notes)
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

const array = (i, arr = []) => ({
	saveEl: arr[i],
	del(iDel = i, arrDel = arr) {
		arrDel.splice(iDel, 1)
		return this
	},
	addTo(iAdd = i, arrAdd = arr, addEl = this.saveEl) {
		arrAdd.splice(iAdd, 0, addEl)
		return this
	},
})

export const getFound = (arr, id, found = []) => {
	for (let i = 0; i < arr.length; i++) {
		if (id === arr[i].id) {
			found.push({ i, arr, el: arr[i] })
		}

		if (arr[i].notes) {
			getFound(arr[i].notes, id, found)
		}

		if (found.length) {
			return found[0]
		}
	}
}
