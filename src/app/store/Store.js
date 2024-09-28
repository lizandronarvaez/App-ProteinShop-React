import React from 'react'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { AuthSlice } from './AuthSlice';
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import { thunk } from "redux-thunk";
import { ProductsDbSlice } from './ProductsDbSlice';

// configuracion de la persistencia de la data
const persistConfig = {
    key: "protein-shop",
    storage
}

// conbinacion de los reducers
const reducers = combineReducers({
    auth: AuthSlice.reducer,
    products:ProductsDbSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducers)

// configuracion del store
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: { ignoredActions: ["persist/PERSIST"] },
        }).concat(thunk),
})

// crea el persistor
export const persistor = persistStore(store);