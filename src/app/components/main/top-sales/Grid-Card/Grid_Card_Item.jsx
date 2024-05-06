import React from 'react'
import "./Grid_Card_Item.css";
export const Grid_Card_Item = ({ productsTop }) => {
    return (
        productsTop.map((product, i) => (
            <div className='grid-card' key={i}>
                <div className='grid-card-img'>
                    <img src={product.imageProduct} alt={product.imageProduct} />
                </div>
                <div className='product-info'>
                    <div className='product-info-details'>{product.fullname}</div>
                    <div className='product-info-price'>{product.price}€</div>
                </div>
                <div className='product-cart'>
                    <p>Añadir a carrito</p>
                </div>
            </div>
        ))
    )
}
