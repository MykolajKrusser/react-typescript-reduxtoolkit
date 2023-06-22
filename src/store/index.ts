import { configureStore } from '@reduxjs/toolkit'

import counterSlice from '@store/counter'
import authSlice from '@store/auth'
import listSlice from '@store/list'

const store = configureStore({
  reducer: {
    counter: counterSlice,
    auth: authSlice,
    list: listSlice
  }
})

export default store
