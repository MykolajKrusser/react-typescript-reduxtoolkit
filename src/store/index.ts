import { createSlice, configureStore } from '@reduxjs/toolkit'
import type { InitState } from '@interfaces/InitState'

const initState: InitState = {
  counter: 0,
  showCounter: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initState,
  reducers: {
    increment (state) {
      state.counter++
    },
    decrement (state) {
      state.counter--
    },
    incrementBy (state, action: { payload: { payload: number } }) {
      state.counter = state.counter + action.payload.payload
    },
    toggle (state) {
      state.showCounter = !state.showCounter
    }
  }
})

const store = configureStore({
  reducer: counterSlice.reducer
})

export const counterActions = counterSlice.actions

export default store
