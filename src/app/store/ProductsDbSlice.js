import React from 'react'
import { createSlice } from "@reduxjs/toolkit";

const initialState = { productsDb: null, categories: null }
export const ProductsDbSlice = createSlice({

    name: "getProductsDb",
    initialState,
    reducers: {
        getProducts(state, action) {
            state.productsDb = action.payload;
        },
        getCategories(state, action) {
            state.categories = action.payload
        }
    }
});
export const { getProducts,getCategories } = ProductsDbSlice.actions;