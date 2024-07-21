import React, { createContext, useContext, useEffect, useState } from 'react'

export const CartTrolleyContext = createContext();

export const CartTrolleyProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState(() => {
        const savedCart = localStorage.getItem('cart');
        return savedCart ? JSON.parse(savedCart) : [];
    });

    const removeProduct = (productId) => {
        setCartProducts(cartProducts.filter(product => product.id !== productId));
    }
    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(cartProducts));
    }, [cartProducts]);

    return (
        <CartTrolleyContext.Provider value={{ cartProducts, setCartProducts,removeProduct }}>
            {children}
        </CartTrolleyContext.Provider >
    )
}


export const useCart = () => {
    const context = useContext(CartTrolleyContext);
    return context;
}