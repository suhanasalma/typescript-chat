import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { UsersOnWhatsApp } from '../../Interfaces/Interfaces';

interface query {
    country: string,
    email: string
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

export const users = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getWhatsAppUsers: builder.query<UsersOnWhatsApp[], query>({
            query: (query) => {
                const userEmail = getUserEmailFromLocalStorage();
                return `users/whatsapp-users?country=${query.country}&email=${userEmail}`;
            },
        }),
        getUserDetailsById: builder.query({
            query: (query) => {
                return `users?email=${query.email}`;
            },
        }),
    }),
});



export const { useGetWhatsAppUsersQuery, useGetUserDetailsByIdQuery } = users