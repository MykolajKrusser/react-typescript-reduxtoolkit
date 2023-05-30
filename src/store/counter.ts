import type { InitCounterState } from '@interfaces/InitState'
import { createSlice } from '@reduxjs/toolkit'

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

export const counterActions = counterSlice.actions
export default counterSlice.reducer
