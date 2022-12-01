import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser } from '@core/types/IUser'

export interface UserState {
  user: Partial<IUser>
}

const initialState: UserState = {
  user: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState['user']>) => {
      state.user = action.payload
    },
    clearUser: (state) => {
      state.user = {}
    }
  }
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer
