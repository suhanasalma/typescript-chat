import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChatChannelBody, ChatChannelResponse, ChatIndexList } from '../../Interfaces/Interfaces';

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
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getChatChannelUsers: builder.query({
            query: (query) => {
                const userEmail = getUserEmailFromLocalStorage();
                console.log("getChatChannelUsers",query);
                return `chat?email=${userEmail}&group_type=${query.group_type}`;
            },
        }),
        getChatChannels: builder.query<ChatIndexList[],ChatListQuery>({
            query: (query) => {
                const userEmail = getUserEmailFromLocalStorage();
                console.log("getChatList",query);
                return `chat/channels?email=${userEmail}&chat_index_status=${query.chat_index_status}`;
            },
        }),
        getChatIndexDetailsById: builder.query({
            query: (query) => {
                console.log("getChatIndexDetailsById", query.id);
                return `chat/${query.id}`;
            },
        }),
        createChatChannel: builder.mutation<ChatChannelResponse,ChatChannelBody>({
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


export const { useGetChatChannelsQuery, useGetChatIndexDetailsByIdQuery, useCreateChatChannelMutation, useGetChatChannelUsersQuery } = chatApi
