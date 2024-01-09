import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChatIndexList } from '../../Interfaces/Interfaces';

const getUserEmailFromLocalStorage = (): string | null => {
    const userDataString = localStorage.getItem('auth');
    if (userDataString) {
        try {
            const userData = JSON.parse(userDataString);
            return userData.user.email;
        } catch (error) {
            console.error('Error parsing user data from local storage:', error);
        }
    }
    return null;
};

export const chatList = createApi({
    reducerPath: 'chatList',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getChatList: builder.query<ChatIndexList[],string>({
            query: () => {
                const userEmail = getUserEmailFromLocalStorage();
                return `chat/list?email=${userEmail}`;
            },
        }),
    }),
});


export const {useGetChatListQuery} = chatList
