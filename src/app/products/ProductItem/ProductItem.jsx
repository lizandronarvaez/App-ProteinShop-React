import React, { useEffect, useState } from 'react';
import "./ProductItem.css";
import { useLocation, useParams } from "react-router-dom";
export const ProductItem = ({ product, addProductListCart }) => {
    const [isCart, setIsCart] = useState(false);

    const handleAddToCart = () => {
        addProductListCart(product);
        setIsCart(true);
    }
    useEffect(() => { }, [isCart])

    return (

        <div className='product-item'>
            <img src={product.imageProduct ? ` ${product.imageProduct}` : null} />

            <div className='product-item-info'>
                <p>{product.fullname}</p>
                <p>{product.price}€</p>
            </div>
            <div className='product-item-description'>
                <p>{product.description}</p>
            </div>
            <div className='product-add-cart'>

                {
                    !isCart
                        ? <p className='productAddCart' onClick={handleAddToCart}>Añadir a carrito</p>
                        : <p className='productIsCart'>Producto Añadido</p>
                }

            </div>
        </div >
    )
}
