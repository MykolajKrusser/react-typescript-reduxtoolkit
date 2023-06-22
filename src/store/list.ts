import type { ListState } from '@interfaces/InitState'
import { createSlice } from '@reduxjs/toolkit'
import type { List } from '@interfaces/interface'

const listState: ListState = {
  items: []
}

const listSlice = createSlice({
  name: 'counter',
  initialState: listState,
  reducers: {
    addItems (state, action: { payload: { list: List[] } }) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-expect-error
      state.items = action.payload.list
    },
    clearItems (state) {
      state.items = []
    }
  }
})

export const listAddActions = listSlice.actions
export default listSlice.reducer
