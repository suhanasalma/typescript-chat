import { configureStore } from '@reduxjs/toolkit'
import { setupListeners } from '@reduxjs/toolkit/query'
import { users } from '../services/usersApi'
import { authApi } from '../services/authApi'
import { chatApi } from '../services/chatApi'
import { messagesApi } from '../services/messageApi'
import authSliceReducer from '../slices/authSlice'
import membersSliceReducer from '../slices/membersSlice'
import timeSliceReducer from '../slices/timeSlice'

export const store = configureStore({
    reducer: {
        [users.reducerPath]: users.reducer,
        [authApi.reducerPath]: authApi.reducer,
        [chatApi.reducerPath]: chatApi.reducer,
        [messagesApi.reducerPath]: messagesApi.reducer,
        auth: authSliceReducer,
        members: membersSliceReducer,
        time: timeSliceReducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(users.middleware, authApi.middleware, chatApi.middleware, messagesApi.middleware),
})

setupListeners(store.dispatch)
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
