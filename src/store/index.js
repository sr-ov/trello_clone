import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './reducers/dataReducer';
import anyReducer from './reducers/anyReducer';

export const store = configureStore({
	reducer: {
		dataReducer,
		anyReducer,
	},
});
