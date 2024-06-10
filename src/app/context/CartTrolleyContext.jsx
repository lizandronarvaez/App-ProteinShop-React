import React, { createContext, useContext, useState } from 'react'

export const CartTrolleyContext = createContext();

export const CartTrolleyProvider = ({ children }) => {
    const [cartProducts, setCartProducts] = useState([]);

    return (
        <CartTrolleyContext.Provider value={{ cartProducts, setCartProducts }}>
            {children}
        </CartTrolleyContext.Provider >
    )
}


export const useCart = () => {
    const context=useContext(CartTrolleyContext);
    return context;
}