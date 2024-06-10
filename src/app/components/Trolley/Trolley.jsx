import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Trolley.css";
import cartout from "../../../../public/svg/cart_out.svg";
import { useCart } from '../../context/CartTrolleyContext';
export const Trolley = ({ trolleyIsOpen, setTrolleyIsOpen }) => {
  const navigate = useNavigate();
  const { cartProducts, setCartProducts } = useCart();
  const [totalProductsCart, setTotalProductsCart] = useState(0);

  const closeDivCart = () => setTrolleyIsOpen(false);
  // Eliminar productos del carrito
  const deleteProductCartList = (id) => {
    const filterProductList = cartProducts.filter(product => product.id !== id);
    setCartProducts(filterProductList);
  }
  // Calculo de los productos del carrito
  const totalProducts = cartProducts.reduce((a, b) => { return a + b.price }, 0);
  useEffect(() => { }, [cartProducts])

  const makeOrder = () => {
    navigate("/submit-order")
  }
  return (
    <div className={trolleyIsOpen ? "trolley" : "trolley-remove"}>
      {/* Titulo */}
      <div className='title'>
        <p onClick={closeDivCart}>x</p>
        <h2>Carrito</h2>
      </div>
      {/* Fin titulo */}
      {
        cartProducts.map((product, i) => (
          <div className='trolley_products' key={i}>
            <div className='trolley_product_item'>
              <h3>{product.fullname}</h3>
              <p className='product_img_price'>
                <img className='img_cart' src={product.imageProduct} alt="" />
                {product.price}€
              </p>
            </div>
            <p onClick={() => deleteProductCartList(product.id)}>x</p>
          </div>
        ))
      }
      {
        !cartProducts.length
          ?
          (
            <div className='trolley_out'>
              <h3>Carrito vacío</h3>
              <img src={cartout} alt="" />
            </div>
          )
          : (
            <div className='trolley_total'>
              <div>
                <p>Envio:</p>
                {totalProductsCart > 30 ? <p>Gratuito</p> : <p>5,99€</p>}
              </div>
              <div>
                <p>Total</p>
                {
                  totalProductsCart < 30 && totalProductsCart
                    ?
                    (
                      <p>{(totalProductsCart + 5.99).toFixed(2)}€</p>
                    )
                    : <p>{totalProducts.toFixed(2)}€</p>
                }
              </div>
              <button onClick={makeOrder}>Realizar Pedido</button>
            </div>
          )
      }

    </div>
  )
}
