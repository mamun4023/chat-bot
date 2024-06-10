import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ROUTES } from "../constants/route";
import Cookies from "js-cookie";


export const applicationAPI = createApi({
    reducerPath: "API",
    baseQuery: fetchBaseQuery({
        baseUrl: import.meta.env.VITE_API_URL,
        prepareHeaders : (headers)=>{
            const token = Cookies.get('authToken')
            if (token) {
              headers.set('Authorization', `Bearer ${token}`);
            }
            return headers
        }
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
        addConversation: builder.mutation({
            query: (data) => ({
                url: ROUTES.CONVERSATION,
                method: "POST",
                body: data,
            }),
        }),
        getConversations: builder.query({
            query: () => ({
                url: ROUTES.CONVERSATION,
                method: "GET",
            }),
        }),
        getConversation: builder.query({
            query: (id) => ({
                url:  `${ROUTES.CONVERSATION}/${id}` ,
                method: "GET"
            }),
        }),
        removeConversation: builder.mutation({
            query: (id) => ({
                url: `${ROUTES.CONVERSATION}/${id}`,
                method: "DELETE",
                
            }),
        }),
        chat: builder.mutation({
            query: (data) => ({
                url: ROUTES.CHAT,
                method: "POST",
                body: data,
            }),
        }),
        
    }),
});

export const { 
    useSignUpMutation, 
    useSignInMutation, 
    useMeQuery, 
    useAddConversationMutation,
    useGetConversationsQuery,
    useGetConversationQuery,
    useRemoveConversationMutation,
    useChatMutation, 
} =
    applicationAPI;
