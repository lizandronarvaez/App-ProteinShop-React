import { createSlice } from "@reduxjs/toolkit";

// estado inicial
const initialState = {
    isLogged: false,
    user: null,
    token: null,
    loading: false
};


export const AuthSlice = createSlice({
    name: "auth",
    initialState,
    // funciones para controlar el login o logout
    reducers: {
        loginUser: (state, action) => {
            state.isLogged = true;
            state.token = action.payload.token
            state.user = action.payload.client
        },
        logoutUser: (state, action) => {
            state.isLogged = false;
            state.token = null;
            state.user = null;
        }
    }
})

export const { loginUser, logoutUser } = AuthSlice.actions;
