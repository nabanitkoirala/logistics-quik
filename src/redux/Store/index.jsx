import { configureStore } from "@reduxjs/toolkit";
import blogSliceReducer from '../features'

export const store = configureStore({
    reducer: {
        blog: blogSliceReducer
    },
});
