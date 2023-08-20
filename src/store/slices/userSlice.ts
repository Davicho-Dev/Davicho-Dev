import { createSlice } from '@reduxjs/toolkit'

interface UserInformationInterface {
	name: string
}

const INITIAL_STATE = {} as UserInformationInterface

export const userSlice = createSlice({
	name: 'user',
	initialState: INITIAL_STATE,
	reducers: {
		setUser: (state, action) => {
			state = action.payload
		},
	},
})

export const { setUser } = userSlice.actions
