import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { users } from '../services/usersApi'
import { authApi } from '../services/authApi'
import { chatList } from '../services/chatListApi'

export const store = configureStore({
    reducer: {
        [users.reducerPath]: users.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [chatList.reducerPath]: chatList.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(users.middleware, authApi.middleware,chatList.middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
