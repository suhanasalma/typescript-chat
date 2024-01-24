import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UsersOnWhatsApp } from '../../Interfaces/Interfaces';

interface UserQuery {
    country: string | null | undefined ,
    email: string | null | undefined ,
}
const getUserEmailFromLocalStorage = (): UserQuery | null => {
    const userDataString = localStorage.getItem('auth');
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


const user: UserQuery | null | undefined = getUserEmailFromLocalStorage();

export const users = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        getCommunicatorUsers: builder.query<UsersOnWhatsApp[], void>({
            query: () => {
                return `users/communicator-users?country=${user?.country}&email=${user?.email}`;
            },
        }),
        getUserDetailsById: builder.query({
            query: (query) => {
                return `users/${query.email}`;
            },
        }),
    }),
});



export const { useGetCommunicatorUsersQuery, useGetUserDetailsByIdQuery } = users