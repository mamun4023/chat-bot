import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ROUTES } from "../constants/route";

export const applicationAPI = createApi({
    reducerPath: "API",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        // credentials: "include",
    }),
    endpoints: (builder) => ({
        signUp: builder.mutation({
            query: (data) => ({
                url: ROUTES.SIGNUP,
                method: "POST",
                body: data,
            }),
        }),
        signIn: builder.mutation({
            query: (data) => ({
                url: ROUTES.SIGNIN,
                method: "POST",
                body: data,
            }),
        }),

        me: builder.query({
            query: () => ({
                url: ROUTES.ME,
                method: "GET",
            }),
        }),
        addHistory: builder.mutation({
            query: (data) => ({
                url: ROUTES.ADD_HISTORY,
                method: "POST",
                body: data,
            }),
        }),
    }),
});

export const { useSignUpMutation, useSignInMutation, useMeQuery, useAddHistoryMutation } =
    applicationAPI;
