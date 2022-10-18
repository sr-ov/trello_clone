import { createSlice, PayloadAction } from '@reduxjs/toolkit'

const noteModalSlice = createSlice({
	name: 'noteModal',
	initialState: {
		isOpenNoteModal: false,
	},
	reducers: {
		toggleNoteModal(state, { payload }: PayloadAction<boolean>) {
			state.isOpenNoteModal = payload
		},
	},
})

export default noteModalSlice.reducer
export const noteModalSliceActions = noteModalSlice.actions
