import React from 'react';
import "./ProductItem.css";
export const ProductItem = ({ product }) => {
    const productInfo = {
        id: product.id,
        fullname: product.fullname,
        description: product.description,
        category: product.category.name.toLowerCase(),
        imageProduct: product.imageProduct,
        price: product.price,
        quantity: product.quantity
    }
    return (

        <div className='product-item'>
            <img
                src={product.imageProduct ?
                    ` http://localhost:3000/api/uploads/products/${product.imageProduct}`
                    : "../../../../public/productos/life-pro-meno-pause-120-vegancaps.jpg"} alt={product.imageProduct} />

            <div className='product-item-info'>
                <p>{product.fullname}</p>
                <p>{product.price}€</p>
            </div>
            <div className='product-item-description'>
                <p>{product.description}</p>
            </div>
            <div className='product-add-cart'>
                <p>Añadir a carrito</p>
            </div>
        </div>
    )
}
