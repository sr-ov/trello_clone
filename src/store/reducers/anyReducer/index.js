import { createSlice } from '@reduxjs/toolkit'

const anyReducer = createSlice({
	name: 'any',
	initialState: {
		modals: { sec: false, main: false },
		coords: null,
		componentId: {},
	},
	reducers: {
		toggleModalsAction: (state, { payload }) => {
			state.modals = { ...state.modals, ...payload }
		},

		setCoordsAction: (state, { payload }) => {
			state.coords = payload
		},

		setComponentIdAction: (state, { payload }) => {
			state.componentId = payload
		},
	},
})

export default anyReducer.reducer

export const { toggleModalsAction, setCoordsAction, setComponentIdAction } = anyReducer.actions
