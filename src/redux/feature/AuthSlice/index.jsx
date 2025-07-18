import { createSlice } from "@reduxjs/toolkit";

const name = JSON.parse(localStorage.getItem("name"));

const initialState = {
    isLoggedIn: false,
    name: name ? name : "",
    user: {
        name: "",
        email: "",
        phone: "",
        bio: "",
        photo: "",
    },
    csrfToken: null
};

const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {
        SET_LOGIN(state, action) {
            state.isLoggedIn = action.payload;
        },
        SET_NAME(state, action) {
            localStorage.setItem("name", JSON.stringify(action.payload));
            state.name = action.payload;
        },
        SET_USER(state, action) {
            const profile = action.payload;
            state.user.name = profile.name;
            state.user.email = profile.email;
            state.user.phone = profile.phone;
            state.user.bio = profile.bio;
            state.user.photo = profile.photo;
        },
        CSRF_TOKEN_VALUE(state, action) {
            const token = action.payload;
            state.csrfToken = token;
        },
    },
});

export const { SET_LOGIN, SET_NAME, SET_USER, CSRF_TOKEN_VALUE } = authSlice.actions;
export const selectCsrfToken = (state) => state.auth.csrfToken;
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectName = (state) => state.auth.name;
export const selectUser = (state) => state.auth.user;

export default authSlice.reducer;
