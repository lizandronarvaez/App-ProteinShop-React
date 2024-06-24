import React, { useEffect, useState } from 'react';
import "./OrderProducts.css";
import { useCart } from '../context/CartTrolleyContext';

export const OrderProducts = () => {
  const { cartProducts, setCartProducts } = useCart();
  console.log(cartProducts)
  useEffect(() => { }, [cartProducts])

  const totalOrder = cartProducts.reduce((a, b) => { return a + b.price; }, 0);

  return (
    <div className='container orders'>
      {
        !cartProducts.length ?
          (
            <div className='cart-is-out'>
              <h1>Mi carrito esta vacío</h1>
            </div>
          )
          :
          (
            <>
              <h1>Mi carrito</h1><div className='list-order'>
                <div className='list-order-product'>
                  <div className='head-products-list'>
                    <p>Producto</p>
                    <p>Cantidad</p>
                    <p>Total</p>
                  </div>
                  <div className='body-products-list'>
                    {cartProducts.map((product, item) => (
                      <div className='product-list-item' key={item}>
                        <div>
                          <img src={product.imageProduct} alt={product.imageProduct} />
                          <p>{product.fullname}</p>
                        </div>
                        <div>
                          <input type="number" name="quantity" defaultValue={1} min={1} />
                        </div>
                        <div>
                          <p>{product.price}€</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="list-order-checkout">
                  <h2>Total: <span>{(totalOrder).toFixed(2)}€</span></h2>
                  <div className='check-total'>
                    <button>Pagar</button>
                  </div>
                </div>
              </div>
            </>
          )
      }

    </div>
  )
}
