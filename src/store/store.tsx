import { configureStore } from '@reduxjs/toolkit'
import { paintingsAPI } from '../services/PaintingsServices'


export const store = configureStore({
  reducer: {
    [paintingsAPI.reducerPath]: paintingsAPI.reducer
  },
  middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(paintingsAPI.middleware)
}) 

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch