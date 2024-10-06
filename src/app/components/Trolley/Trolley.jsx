import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cartout from "../../../../public/svg/cart_out.svg";
import { FaTimes } from 'react-icons/fa';
import { TrolleyItem } from './TrolleyItem';
import { GiConfirmed } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux';
import { clearCart } from '../../store/CartTrolleySlice';

export const Trolley = ({ trolleyIsOpen, setTrolleyIsOpen }) => {
    const navigate = useNavigate();
    const closeDivCart = () => setTrolleyIsOpen(false);
    const dispatch = useDispatch();
    const { listProductCart, total } = useSelector(state => state.cart);
    const makeOrder = () => {
        closeDivCart();
        navigate("/submit-order");
    }

    const clearMarkeOrder = () => {
        dispatch(clearCart());
        closeDivCart();
        navigate("/products");
    }

    return (
        <div className={`${trolleyIsOpen ? "fixed bg-white shadow-lg right-0 top-0 bottom-0 w-full md:w-1/4 overflow-y-auto h-auto z-50 transition-transform duration-300 transform translate-x-0" : "hidden"}`}>
            <div className="flex justify-between items-center bg-gray-100 p-4 shadow-md">
                <button className="text-2xl" onClick={closeDivCart}><FaTimes /></button>
                <h2 className="text-lg md:text-2xl font-semibold">Carrito de Compras</h2>
            </div>
            <TrolleyItem cartProducts={listProductCart} />

            {listProductCart.length > 0 && (
                <div className="px-4 py-2">
                    <div className="flex justify-between mb-4">
                        <p className="font-semibold text-stone-600">Total:</p>
                        <p className='font-semibold text-stone-600'>{total}€</p>
                    </div>
                    <button className="flex justify-center items-center bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded shadow-md transition duration-300 w-full mb-2"
                        onClick={makeOrder}
                    >
                        Confirmar compra
                        <GiConfirmed className='ml-2' />
                    </button>
                    <button className="bg-white hover:bg-red-500 text-red-500 hover:text-white font-bold py-3 px-6 rounded border border-red-500 w-full"
                        onClick={clearMarkeOrder}
                    >
                        Vaciar carrito
                    </button>
                </div>
            )}
        </div>
    );
}

// gastos de envios
// const shippingCosts = totalProducts > 20 ? "Gratuito" : "5,99€";

{/* <div className="flex justify-between p-4 rounded-lg mb-4">
    <p className='font-semibold text-stone-500'>Envio:</p>
    <p>{shippingCosts}</p>
</div> */}