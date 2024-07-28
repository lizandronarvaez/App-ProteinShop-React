import React, { createContext, useEffect, useReducer, useState } from "react";
import { authReducer } from "./authReducer";
import { types } from "../types/types";

// Crear el contexto
export const AuthContext = createContext();

// estado inicial
const initialState = () => {
    const token = localStorage.getItem("token");
    const userLogin = JSON.parse(localStorage.getItem("cliente"));
    return {
        logged: !!token,
        token,
        userLogin
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
