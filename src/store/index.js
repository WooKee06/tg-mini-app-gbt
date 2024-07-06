import { configureStore } from '@reduxjs/toolkit'
import messegeSlice from './messege/reducer'

export const store = configureStore({
	reducer: {
		messege: messegeSlice,
	},
})
