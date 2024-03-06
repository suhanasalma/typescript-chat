import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChatChannelBody, ChatChannelResponse, ChatIndexList } from '../../Interfaces/Interfaces';
interface ChatListQuery {
    chat_index_status?: string;
    searchTextName?:string;
    filter?:string;
    group_type?:string
};

const getUserEmailFromLocalStorage = (): string | null => {
    const userDataString = localStorage.getItem('communicator-auth');
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
        getAllTypeChatChannels: builder.query({
            query: (query) => {
                const userEmail: string | null = getUserEmailFromLocalStorage();
                console.log("userEmail", userEmail);
                return `chat?email=${userEmail}&group_type=${query.group_type}&searchTextName=${query.searchTextName}`;
            },
        }),
        getChatChannelsByEmailAndIndexType: builder.query<ChatIndexList[],ChatListQuery>({
            query: (query) => {
                const userEmail = getUserEmailFromLocalStorage();
                // console.log("getChatList",query);
                return `chat/channels?email=${userEmail}&chat_index_status=${query.chat_index_status}&searchTextName=${query.searchTextName}&filter=${query.filter}&group_type=${query.group_type}`;
            },
        }),
        getChatIndexDetailsById: builder.query({
            query: (query) => {
                // console.log("getChatIndexDetailsById", query.id);
                return `chat/${query.id}`;
            },
        }),
        createChatChannel: builder.mutation<ChatChannelResponse,ChatChannelBody>({
            query: (data) => {
                // console.log("New User Data:", data);
                return {
                    url: 'chat',
                    method: 'POST',
                    body: data,
                };
            },
        }),
    }),
});


export const { useGetAllTypeChatChannelsQuery, useGetChatChannelsByEmailAndIndexTypeQuery, useGetChatIndexDetailsByIdQuery, useCreateChatChannelMutation } = chatApi
