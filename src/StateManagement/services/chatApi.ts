import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChatIndexList } from '../../Interfaces/Interfaces';

interface ChatListQuery {
    chat_index_status:string
}

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

export const chatApi = createApi({
    reducerPath: 'chatList',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getChatList: builder.query<ChatIndexList[],ChatListQuery>({
            query: (query) => {
                const userEmail = getUserEmailFromLocalStorage();
                return `chat/list?email=${userEmail}&chat_index_status=${query.chat_index_status}`;
            },
        }),
        getChatIndexDetailsById: builder.query({
            query: (query) => {
                console.log("query", query.id);
                return `chat/${query.id}`;
            },
        }),
        createChatChannel: builder.mutation({
            query: (data) => {
                console.log("New User Data:", data);
                return {
                    url: 'chat',
                    method: 'POST',
                    body: data,
                };
            },
        }),
    }),
});


export const { useGetChatListQuery, useGetChatIndexDetailsByIdQuery, useCreateChatChannelMutation } = chatApi
