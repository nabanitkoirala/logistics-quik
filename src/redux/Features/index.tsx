import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    navSelectedRouteId: 1
};

const blogSlice = createSlice({
    name: "blog",
    initialState,
    reducers: {
        NAV_SELECTED_ROUTE_ID(state, action) {
            state.navSelectedRouteId = action.payload
        }
    }
})


export const { NAV_SELECTED_ROUTE_ID } = blogSlice.actions
export const selectNavRouteId = (state: { blog: { navSelectedRouteId: any; }; }) => state.blog.navSelectedRouteId;

export default blogSlice.reducer