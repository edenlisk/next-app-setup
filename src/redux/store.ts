import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "@/redux/slices/apiSlice";
import postsSlice from "@/redux/slices/postsSlice";
import authReducer from '@/redux/slices/auth';

export const store = configureStore({
    reducer: {
        posts: postsSlice,
        auth: authReducer,
        [apiSlice.reducerPath]: apiSlice.reducer
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({serializableCheck: false}).concat(apiSlice.middleware)
})