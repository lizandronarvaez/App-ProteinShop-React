import { createSlice } from '@reduxjs/toolkit';

// Estado inicial
const initialState = {
    listProductCart: [],
    total: 0
};

const updateProductTotal = (product) => {
    product.total = product.price * product.quantity;
};

const updateCartTotal = (state) => {
    state.total = state.listProductCart.reduce((acc, product) => acc + product.total, 0);
};

export const CartTrolleySlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProductCart(state, action) {
            const newProduct = action.payload;
            const existingProductCart = state.listProductCart.find(pro => pro.id === newProduct.id);

            if (!existingProductCart) {
                state.listProductCart.push({
                    id: newProduct.id,
                    fullname: newProduct.fullname,
                    imageProduct: newProduct.imageProduct,
                    description: newProduct.description,
                    price: newProduct.price,
                    quantity: 1,
                    total: newProduct.price
                });
            }

            updateCartTotal(state); 
        },
        deleteProductCart(state, action) {
            state.listProductCart = state.listProductCart.filter(pro => pro.id !== action.payload);
            updateCartTotal(state);
        },
        clearCart(state) {
            state.listProductCart = [];
            state.total = 0;
        },
        incrementQuantity(state, action) {
            const product = state.listProductCart.find(pro => pro.id === action.payload);
            if (product) {
                product.quantity += 1;
                updateProductTotal(product);
            }
            updateCartTotal(state);
        },
        decrementQuantity(state, action) {
            const product = state.listProductCart.find(pro => pro.id === action.payload);
            if (product && product.quantity > 1) {
                product.quantity -= 1;
                updateProductTotal(product);
            }
            updateCartTotal(state);
        }
    }
});

export const { addProductCart, deleteProductCart, clearCart, incrementQuantity, decrementQuantity } = CartTrolleySlice.actions;
export default CartTrolleySlice.reducer;

