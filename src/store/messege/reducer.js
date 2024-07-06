import { createSlice } from '@reduxjs/toolkit'

const messegeSlice = createSlice({
	name: 'messege',
	initialState: {
		messegeList: [],
		gptMessegeList: [],
	},
	reducers: {
		setUserInMessege: (state, action) => {
			state.messegeList.push(action.payload)
		},
		setGptInMessege: (state, action) => {
			state.gptMessegeList.push(action.payload)
		},
	},
})

export const { setUserInMessege, setGptInMessege } = messegeSlice.actions
export default messegeSlice.reducer
