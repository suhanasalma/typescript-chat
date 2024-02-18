import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Registration,RegistrationResponse } from '../../Interfaces/Interfaces';
import { userLoggedIn } from '../slices/authSlice';


interface Login {
    email:string;
    password:string
}

export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    endpoints: (builder) => ({
        register: builder.mutation< RegistrationResponse, Partial<Registration>>({
            query: (newUser) => {
                // console.log("New User Data:", newUser);
                return {
                    url: 'auth/register',
                    method: 'POST',
                    body: newUser,
                };
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    // console.log("result",result.data.data);
                    // console.log("result",result.data.data?.user);

                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            user: result.data.data?.user,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            user: result.data.data?.user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        login: builder.mutation< RegistrationResponse, Partial<Login>>({
            query: (user) => {
                // console.log("login User Data:", user);
                return {
                    url: 'auth/login',
                    method: 'POST',
                    body: user,
                };
            },
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    // console.log("result",result.data.data);
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            user: result.data.data?.user,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            user: result.data.data?.user,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
    }),
});



export const { useRegisterMutation, useLoginMutation } = authApi