import React, { createContext, useEffect, useReducer, useState } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// Crear el contexto
export const AuthContext = createContext();

// estado inicial
const initialState = () => {
    const token = localStorage.getItem("token");
    return {
        logged: !!token, token
    };
};

export const AuthProvider = ({ children }) => {
    const [isLogged, actionTask] = useReducer(authReducer, {}, initialState);

    const loginUser = (token) => {
        const action = { type: types.login, payload: token };
        actionTask(action);
    };
    const logoutUser = () => {
        localStorage.clear();
        const action = { type: types.logout };
        actionTask(action);
    };

    return (
        <AuthContext.Provider value={{ ...isLogged, loginUser, logoutUser }}>
            {children}
        </AuthContext.Provider>
    );
};
