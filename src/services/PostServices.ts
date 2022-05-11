import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import {IPost} from "../models/IPost";

const BASE_URL: string = 'http://localhost:3001/';

export const postAPI = createApi({
    reducerPath:  'postAPI',
    tagTypes: ['Post'],
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL,
    }),
    endpoints: (build) => ({
        fetchAllPosts: build.query<IPost[], number>({
            query: (limit:number = 5) => `/posts?_limit=${limit}`,
            providesTags: ['Post']
        }),
        createPost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts`,
                method: 'POST',
                body: post,
            }),
            invalidatesTags: ['Post']
        }),
        updatePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'PUT',
                body: post,
            }),
            invalidatesTags: ['Post']
        }),
        deletePost: build.mutation<IPost, IPost>({
            query: (post) => ({
                url: `/posts/${post.id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Post']
        })
    }),
})
