import React, { useEffect, useState } from 'react';
import { useCart } from '../context/CartTrolleyContext';
import Swal from "sweetalert2/dist/sweetalert2.all";

export const ProductItem = ({ product }) => {
    const { imageProduct, quantity, fullname, price, description } = product;
    const quantityStockProduct = quantity > 0;
    const stockProduct = quantity > 0 ? 'En stock' : "Sin Stock";
    const statusProductColor = quantity > 0 ? "text-green-500 font-semibold" : "text-red-500 font-semibold";
    const tagNameImg = imageProduct?.split("/")[8];
    const { cartProducts, setCartProducts } = useCart();

    const addProductCartList = (product) => {

        const isProductInCart = cartProducts.some(item => item.id === product.id);
        if (isProductInCart) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Ya está en tu carrito",
                showConfirmButton: false,
                timer: 1200
            });
            return;
        }
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Agregado a carrito",
            showConfirmButton: false,
            timer: 1200
        });
        setCartProducts([...cartProducts, product])
    };
    return (

        <div className='flex flex-col justify-between h-full'>
            <div className='my-10'>
                <img className='w-40 h-40 mx-auto object-contain' src={imageProduct} alt={tagNameImg} />
            </div>

            <div className='flex flex-col'>
                <p className='text-xl uppercase text-stone-500 mb-3 border-b-2'>{fullname}</p>
                <div className='flex justify-between items-center my-5'>
                    <p className={`text-1xl md:text-3xl ${statusProductColor}`}>{stockProduct}</p>
                    <p className='text-1xl md:text-3xl text-stone-800800'>{price}€</p>
                </div>
            </div>
            <div className='mb-5'>
                <p className='uppercase text-lg text-stone-500'>{description}</p>
                <div className='mt-5'>
                    {quantityStockProduct && <button className=' bg-orange-400 hover:bg-orange-600 py-4 px-3 w-full text-white font-semibold rounded-lg' onClick={() => addProductCartList(product)} >Añadir al carrito</button>}
                    {!quantityStockProduct && <button className='bg-stone-400 py-4 px-3 w-full text-white line-through cursor-default rounded-lg'>No disponible</button>}
                </div>
            </div>
        </div >
    )
}
