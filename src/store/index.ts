import { createSlice, configureStore } from '@reduxjs/toolkit'
import type { InitCounterState } from '@interfaces/InitState'

const initCounterState: InitCounterState = {
  count: 0,
  showCounter: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initCounterState,
  reducers: {
    increment (state) {
      state.count++
    },
    decrement (state) {
      state.count--
    },
    incrementBy (state, action: { payload: { payload: number } }) {
      state.count = state.count + action.payload.payload
    },
    toggle (state) {
      state.showCounter = !state.showCounter
    }
  }
})

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuth: false
  },
  reducers: {
    login (state) {
      state.isAuth = true
    },
    logout (state) {
      state.isAuth = false
    }
  }
})

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    auth: authSlice.reducer
  }
})

export const counterActions = counterSlice.actions
export const authActions = authSlice.actions

export default store
