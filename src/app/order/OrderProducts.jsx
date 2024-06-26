import React, { useEffect, useState } from 'react';
import "./OrderProducts.css";
import { useCart } from '../context/CartTrolleyContext';
import { CartIsOut } from './CartIsOut';
import { springBootAxios } from '../../api/axios';
import Swal from 'sweetalert2/dist/sweetalert2.all';
import { Navigate, useNavigate } from 'react-router-dom';

export const OrderProducts = () => {
  const { cartProducts } = useCart();
  const navigate = useNavigate();
  const { id, email, fullname } = JSON.parse(localStorage.getItem("cliente"));
  const [quantities, setQuantities] = useState({});

  const totalOrder = cartProducts.reduce((total, { id, price }) => {
    const quantity = quantities[id] || 1;
    return total + price * quantity;
  }, 0);

  const handleQuantityChange = (productId, { target: { name, value } }) => {
    setQuantities({
      ...quantities,
      [productId]: Number(value)
    });
  };

  const client = { id, email, fullname };
  const orderProducts = cartProducts.map(({ id, fullname, price }) => {
    const quantity = quantities[id] || 1
    return {
      id, fullname, price, quantity
    }
  });

  const orderClientSubmit = {
    client,
    order: orderProducts,
    total: totalOrder.toFixed(2)
  }
  const onSubmitOrder = async (e) => {
    e.preventDefault();

    try {
      const { status } = await springBootAxios.post("/orders", orderClientSubmit)
      if (status === 200) {
        localStorage.removeItem("cart");
        await Swal.fire({
          position: "center",
          icon: "success",
          title: "Pedido realizado correctamente",
          showConfirmButton: false,
          timer: 2000
        });
        navigate("/", { replace: true })
      }
    } catch (error) {
      Swal.fire("Hubo un error al crear el pedido", error.response, "error")
    }
  }

  useEffect(() => {
    const initialQuantities = cartProducts.reduce((acc, { id }) => {
      acc[id] = 1;
      return acc;
    }, {});
    setQuantities(initialQuantities);
  }, [cartProducts]);

  return (
    <div className='container orders'>
      {
        !cartProducts.length ? <CartIsOut />
          :
          (
            <>
              <h1>Mi carrito</h1>
              <form onSubmit={onSubmitOrder} className='list-order'>
                <div className='list-order-product'>
                  <div className='head-products-list'>
                    <p>Producto</p>
                    <p>Cantidad</p>
                    <p>Total</p>
                  </div>
                  <div className='body-products-list'>
                    {cartProducts.map(({ id, fullname, imageProduct, price }) => (
                      <div className='product-list-item' key={id}>
                        <div>
                          <img src={imageProduct} alt={imageProduct} />
                          <p>{fullname}</p>
                        </div>
                        <div>
                          <input
                            type="number"
                            name="quantity"
                            value={quantities[id] || 1}
                            min={1}
                            onChange={(e) => handleQuantityChange(id, e)}
                          />
                        </div>
                        <div>
                          <p>{(price * (quantities[id] || 1)).toFixed(2)}€</p>
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
              </form>
            </>
          )
      }

    </div>
  )
}
