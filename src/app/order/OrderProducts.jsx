import React, { useContext, useEffect, useState } from 'react';
import "./OrderProducts.css";
import { useCart } from '../context/CartTrolleyContext';
import { CartIsOut } from './CartIsOut';
import { springBootAxios } from '../../api/axios';
import Swal from 'sweetalert2/dist/sweetalert2.all';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../auth/context/authContext";

export const OrderProducts = () => {
  const { cartProducts, removeProduct } = useCart();
  const navigate = useNavigate();
  const clientStorage = JSON.parse(localStorage.getItem("cliente"));
  const [quantities, setQuantities] = useState({});
  const { logged } = useContext(AuthContext);

  // 
  const totalOrder = cartProducts.reduce((total, { id, price }) => {
    const quantity = quantities[id] || 1;
    return total + price * quantity;
  }, 0);

  // 
  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity < 1) {
      Swal.fire({
        title: "¿Eliminar producto del carrito?",
        text: "",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar"
      }).then((result) => { if (result.isConfirmed) removeProduct(productId); });
      return;
    }
    setQuantities({
      ...quantities,
      [productId]: newQuantity
    });
  };

  // 
  const client = { id: clientStorage?.id, email: clientStorage?.email, fullname: clientStorage?.fullname };
  const orderProducts = cartProducts.map((product) => {
    const quantity = quantities[product?.id] || 1;
    return {
      id: product?.id, fullname: product?.fullname, price: product?.price, quantity
    };
  });

  const orderClientSubmit = {
    client,
    order: orderProducts,
    total: totalOrder.toFixed(2)
  };

  const paymentOrder = () => {
    //TODO!!: Implementar el pago con stripe o paypal
    const urlPayment = "https://buy.stripe.com/test_5kAg0K4ieelR2DC288";
    window.open(urlPayment, "_blank");
    return {
      status: "hola"
    };
  };

  const onSubmitOrder = async (e) => {
    e.preventDefault();
    if (!logged) {
      await Swal.fire({
        position: "center",
        icon: "error",
        title: "Para realizar la compra, debes acceder a tu cuenta",
        showConfirmButton: false,
        timer: 2000
      });

      return;
    }

    // TODO: Implementar stripe o cualquier api de terceros para pagos
    const { status } = paymentOrder();
    console.log(status);

    // navigate("/checkout")
    // try {
    //   const { status } = await springBootAxios.post("/orders", orderClientSubmit)
    //   if (status === 200) {
    //     localStorage.removeItem("cart");
    //     await Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: "Pedido realizado correctamente",
    //       showConfirmButton: false,
    //       timer: 2000
    //     });
    //     navigate("/", { replace: true })
    //   }
    // } catch (error) {
    //   Swal.fire("Hubo un error al crear el pedido", error.response, "error")
    // }
  };

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
                        <div className='quantity-products'>
                          <button type='button' className='less'
                            onClick={() => handleQuantityChange(id, (quantities[id] || 1) - 1)}
                          // disabled={quantities[id] <= 1}
                          >-</button>
                          <input
                            type="text"
                            name="quantity"
                            value={quantities[id] || 1}
                            min={1}
                            readOnly
                          />
                          <button type='button' className='more'
                            onClick={() => handleQuantityChange(id, (quantities[id] || 1) + 1)}
                          >+</button>
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
                    <button type='submit'>Pagar</button>
                  </div>
                </div>
              </form>
            </>
          )
      }
    </div>
  );
};
