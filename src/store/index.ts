import { configureStore } from '@reduxjs/toolkit'

import dataSlice from './data'
import noteModalSlice from './noteModal'

export const store = configureStore({
	reducer: {
		data: dataSlice,
		noteModal: noteModalSlice,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
