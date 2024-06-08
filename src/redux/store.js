import { configureStore } from '@reduxjs/toolkit'
import {setupListeners} from '@reduxjs/toolkit/query'
import {applicationAPI} from './API'

export const reduxStore = configureStore({
  reducer: {
    [applicationAPI.reducerPath] : applicationAPI.reducer,
  },
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware().concat(applicationAPI.middleware),
})

setupListeners(reduxStore.dispatch)