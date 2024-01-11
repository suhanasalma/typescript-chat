import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { users } from '../services/usersApi'
import { authApi } from '../services/authApi'
import { chatApi } from '../services/chatApi'
import authSliceReducer from '../slices/authSlice'

export const store = configureStore({
    reducer: {
        [users.reducerPath]: users.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [chatApi.reducerPath]: chatApi.reducer,
        auth: authSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(users.middleware, authApi.middleware, chatApi.middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
