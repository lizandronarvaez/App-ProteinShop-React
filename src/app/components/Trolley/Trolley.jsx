import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import cartout from "../../../../public/svg/cart_out.svg";
import { useCart } from '../../context/CartTrolleyContext';
import { FaTimes } from 'react-icons/fa';

export const Trolley = ({ trolleyIsOpen, setTrolleyIsOpen }) => {
    const navigate = useNavigate();
    const { cartProducts, setCartProducts } = useCart();

    const closeDivCart = () => setTrolleyIsOpen(false);
    const deleteProductCartList = (id) => {
        const filterProductList = cartProducts.filter(product => product.id !== id);
        setCartProducts(filterProductList);
    }

    const totalProducts = cartProducts.reduce((a, b) => a + b.price, 0);

    const makeOrder = () => {
        closeDivCart();
        navigate("/submit-order");
    }

    const clearMarkeOrder = () => {
        setCartProducts([]);
        closeDivCart();
        navigate("/products");
    }

    useEffect(() => { }, [cartProducts]);

    return (
        <div className={`${trolleyIsOpen ? "fixed bg-white shadow-lg right-0 top-0 bottom-0 w-full md:w-1/4 overflow-y-auto h-auto z-50 transition-transform duration-300 transform translate-x-0" : "hidden"}`}>
            {/* Titulo */}
            <div className="flex justify-between items-center bg-gray-900 text-white p-4 shadow-md">
                <button className="text-2xl" onClick={closeDivCart}><FaTimes /></button>
                <h2 className="text-lg font-semibold">Carrito de Compras</h2>
            </div>
            {/* Fin titulo */}

            <div className="p-4">
                {cartProducts.length > 0 ? (
                    cartProducts.map((product, i) => (
                        <div className="flex justify-between items-center bg-gray-50 border-b border-gray-300 p-3 rounded-lg mb-2" key={i}>
                            <div className="flex items-center">
                                <img className="w-16 h-16 object-cover rounded-md" src={product.imageProduct} alt={product.fullname} />
                                <div className="ml-4">
                                    <h3 className="text-md font-medium text-gray-800 capitalize">{product.fullname}</h3>
                                    <p className="text-sm text-gray-600">{product.price.toFixed(2)}€</p>
                                </div>
                            </div>
                            <button className="text-red-600 hover:text-red-800 font-semibold" onClick={() => deleteProductCartList(product.id)}>Eliminar</button>
                        </div>
                    ))
                ) : (
                    <div className="text-center py-10">
                        <h3 className="text-lg font-semibold text-gray-600">Tu carrito está vacío</h3>
                        <img src={cartout} alt="Carrito vacío" className="mx-auto mt-4 w-24" />
                    </div>
                )}
            </div>

            {cartProducts.length > 0 && (
                <div className="px-4 py-2">
                    <div className="flex justify-between bg-gray-100 border-t border-gray-300 p-4 rounded-lg mb-4">
                        <p>Envio:</p>
                        {totalProducts > 20 ? <p>Gratuito</p> : <p>5,99€</p>}
                    </div>
                    <div className="flex justify-between mb-4">
                        <p className="font-semibold">Total:</p>
                        {totalProducts < 20 ? <p>{(totalProducts + 5.99).toFixed(2)}€</p> : <p>{totalProducts.toFixed(2)}€</p>}
                    </div>
                    <button className="bg-gray-900 text-white py-3 px-6 rounded-lg shadow-md hover:bg-gray-700 transition duration-300 w-full mb-2" onClick={makeOrder}>Realizar Pedido</button>
                    <button className="bg-red-500 text-white py-3 px-6 rounded-lg shadow-md hover:bg-red-400 transition duration-300 w-full" onClick={clearMarkeOrder}>Vaciar carrito</button>
                </div>
            )}
        </div>
    );
}
