import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../feature/AuthSlice";



export const store = configureStore({
    reducer: {
        auth: authReducer,

    },
});
