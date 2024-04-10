import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";

// "http://localhost:5000/api/v1/"

export const apiSlice = createApi({
    reducerPath: "adminApi",
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.API_URL,
    }),
    tagTypes: ['projects'],
    endpoints: (builder) => ({
        getAllProjects: builder.query({
            query: () => `/projects`,
            providesTags: ['projects']
        }),
    })
});

export const { useGetAllProjectsQuery } = apiSlice;