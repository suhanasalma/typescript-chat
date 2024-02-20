import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { ChatChannelBody, ChatChannelResponse, ChatIndexList, MessageInterface } from '../../Interfaces/Interfaces';

interface msgListQuery {
    channel_name:string
}


export const messagesApi = createApi({
    reducerPath: 'messages',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getAllMessages: builder.query({
            query: (query) => {
                // console.log("getChatChannelUsers",query);
                return `message?channel_name=${query.channel_name}`;
            },
        }),
        sendMessage: builder.mutation({
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


export const { useSendMessageMutation, useGetAllMessagesQuery } = messagesApi
