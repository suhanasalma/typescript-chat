import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Registration,RegistrationResponse } from '../../Interfaces/Interfaces';
import { userLoggedIn } from '../slices/authSlice';


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/' }),
    endpoints: (builder) => ({
        register: builder.mutation< RegistrationResponse, Partial<Registration>>({
            query: (newUser) => {
                console.log("New User Data:", newUser);
                return {
                    url: 'auth',
                    method: 'POST',
                    body: newUser,
                };
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;

                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            user: result.data.data,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            user: result.data.data,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
    }),
});



export const { useRegisterMutation } = authApi