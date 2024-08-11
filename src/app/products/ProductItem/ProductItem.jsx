import React, { useEffect, useState } from 'react';
import "./ProductItem.css";
export const ProductItem = ({ product, addProductListCart }) => {
    const [isCart, setIsCart] = useState(false);
    const handleAddToCart = () => { addProductListCart(product); setIsCart(true); }

    const { imageProduct, quantity, fullname, price, description } = product;
    const imgExist = imageProduct && imageProduct;
    const stockProduct = quantity > 0 ? 'Disponible' : "No disponible";
    const statusProductColor = quantity > 0 ? "status-avaliable" : "status-no-avaliable";
    const tagNameImg = imageProduct.split("/")[8];

    useEffect(() => { }, [isCart]);
    return (

        <div className='product-item'>
            <div>
                <img src={imgExist} alt={tagNameImg} />
            </div>

            <div className='product-item-info'>
                <div>
                    <p>{fullname}</p>
                </div>
                <div>
                    <p><span className={statusProductColor}></span>{stockProduct}</p>
                    <p>{price}€</p>
                </div>
            </div>
            <div className='product-item-description'>
                <p>{description}</p>
            </div>
            <div className='product-add-cart'>
                <p className='productAddCart'
                    onClick={handleAddToCart}
                >
                    Añadir al carrito
                </p>
            </div>
        </div >
    )
}
