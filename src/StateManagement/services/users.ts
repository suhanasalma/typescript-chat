import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Registration, UsersOnWhatsApp,RegistrationResponse } from '../../Interfaces/Interfaces';


export const users = createApi({
    reducerPath: 'users',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        getWhatsAppUsers: builder.query<UsersOnWhatsApp[], string>({
            query: (country) => {
                console.log("Country:", country);
                return `users/whatsapp-user-by-country?country=${country}`;
            },
        }),
        register: builder.mutation< RegistrationResponse, Partial<Registration>>({
            query: (newUser) => {
                console.log("New User Data:", newUser);
                return {
                    url: 'users',
                    method: 'POST',
                    body: newUser,
                };
            },
        }),
    }),
});



export const { useGetWhatsAppUsersQuery , useRegisterMutation} = users