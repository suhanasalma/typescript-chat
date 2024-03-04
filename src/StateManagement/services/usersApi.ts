import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UsersOnCommunicator } from '../../Interfaces/Interfaces';

interface UserQuery {
    country: string | null | undefined ,
    email: string | null | undefined ,
    name: string | null | undefined ,
};

const getUserFromLocalStorage = ():UserQuery | null => {
    const userDataString = localStorage.getItem('communicator-auth');
    if (userDataString) {
        try {
            const userData = JSON.parse(userDataString);
            return userData.user;
        } catch (error) {
            console.error('Error parsing user data from local storage:', error);
        }
    }
    return null;
};

export const users = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getCommunicatorUsers: builder.query<UsersOnCommunicator[], {name:string}>({
            query: (query) => {
                const user: UserQuery | null = getUserFromLocalStorage();
                return `users/communicator-users?country=${user?.country}&email=${user?.email}&name=${query.name}`;
            },
        }),
        getUserDetailsById: builder.query({
            query: (query) => {
                return `users/${query.email}`;
            },
        }),
    }),
});



export const { useGetCommunicatorUsersQuery, useGetUserDetailsByIdQuery } = users ;