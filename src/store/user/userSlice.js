import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: "auth",
    initialState: {
        user: false,
       
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
        },
        logout: (state) => {
            state.user = false;
        },
    },
});

export const userActions = UserSlice.actions;
export default UserSlice.reducer;
