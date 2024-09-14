import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        userDetails: null,
        isAuthenticated: false,
        
    },
    
    reducers: {
        addUser: (state, action) => {
            state.userDetails = action.payload;
            state.isAuthenticated = true;
        },
        removeUser: (state) => {
            state.userDetails = null;
            state.isAuthenticated = false;
        }
    }
})

export const {addUser,removeUser} = userSlice.actions

export default userSlice.reducer