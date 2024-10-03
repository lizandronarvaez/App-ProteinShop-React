import React, { useContext, useEffect, useState } from 'react';
import { useCart } from '../context/CartTrolleyContext';
import { CartIsOut } from './CartIsOut';
import { springBootAxios } from '../../api/axios';
import Swal from 'sweetalert2/dist/sweetalert2.all';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

export const OrderProducts = () => {
  const navigate = useNavigate();

  const { cartProducts, removeProduct } = useCart();
  const [quantities, setQuantities] = useState({});

  const { isLogged, user } = useSelector(state => state?.auth);
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

  const orderProducts = cartProducts.map(({ id, fullname, price, quantity }) => {
    const quantityNew = quantities[id] || 1;
    return { id, fullname, price, quantityNew };
  });

  const orderClientSubmit = {
    client: { id: user?.id, email: user?.email, fullname: user?.fullname },
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
    if (!isLogged) {
      await Swal.fire({
        position: "center",
        icon: "error",
        title: "Para realizar la compra, debes acceder a tu cuenta",
        showConfirmButton: false,
        timer: 2000
      });
      navigate("/account")
      return;
    }

    // TODO: Implementar stripe o cualquier api de terceros para pagos
    const { status } = paymentOrder();
    console.log(status);

    // navigate("/checkout")

    // DESPUES CREA LA ORDEN 
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
    <div className='w-4/5 mx-auto my-10'>
      {
        !cartProducts.length ? <CartIsOut />
          :
          (
            <>
              <h1 className='text-5xl py-10'>Mi carrito</h1>
              <form onSubmit={onSubmitOrder} className='grid lg:grid-cols-[80%_auto] gap-20'>
                {/* List of products */}
                <div className='border'>
                  <div className='flex justify-around py-4'>
                    <p className='font-semibold'>Producto</p>
                    <p className='font-semibold'>Cantidad</p>
                    <p className='font-semibold'>Total</p>
                  </div>
                  <div className='border-t w-full text-center py-8'>
                    {cartProducts.map(({ id, fullname, imageProduct, price }) => (
                      <div className='grid grid-cols-3 items-end px-2 py-10 border-b' key={id}>
                        <div className='mx-4'>
                          <img className='mx-auto max-w-[5rem]' src={imageProduct} alt={fullname} />
                          <p className='text-lg md:text-xl capitalize font-semibold text-stone-600 mt-5'>{fullname}</p>
                        </div>
                        <div className='flex flex-col-reverse items-center md:flex-row md:justify-center'>
                          <button type='button' className='h-12 w-16 bg-gray-300 text-4xl' onClick={() => handleQuantityChange(id, (quantities[id] || 1) - 1)}>
                            -
                          </button>
                          <input
                            className='h-12 w-20 text-xl text-center'
                            type="text"
                            name="quantity"
                            value={quantities[id] || 1}
                            readOnly
                          />
                          <button type='button' className='h-12 w-16 bg-gray-300 text-4xl' onClick={() => handleQuantityChange(id, (quantities[id] || 1) + 1)}>
                            +
                          </button>
                        </div>
                        <div>
                          <p>{(price * (quantities[id] || 1)).toFixed(2)}€</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Checkout summary */}
                <div className="border max-h-80 px-5 flex flex-col justify-around text-center">
                  <h2>Total: <span>{totalOrder.toFixed(2)}€</span></h2>
                  <div className='check-total'>
                    <button className="w-full py-6 rounded-md bg-[#14213d] text-white font-semibold mt-8 hover:bg-[#355496]" type='submit'>
                      Completar pago
                    </button>
                  </div>
                </div>
              </form>
            </>
          )
      }
    </div>
  );
};
