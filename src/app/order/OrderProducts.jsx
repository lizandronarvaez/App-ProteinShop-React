import React, { useEffect, useState } from 'react';
import { CartIsOut } from './CartIsOut';
import { springBootAxios } from '../../api/axios';
import Swal from 'sweetalert2/dist/sweetalert2.all';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { decrementQuantity, deleteProductCart, incrementQuantity } from '../store/CartTrolleySlice';
import { FaShoppingCart, FaShippingFast, FaCheck, FaMinus, FaPlus, FaTrash } from 'react-icons/fa';

export const OrderProducts = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  
  const { isLogged, user } = useSelector(state => state?.auth);
  const { listProductCart, total: TotalCart } = useSelector(state => state.cart);

  const removeProductListOrder = async (productId) => {
    dispatch(decrementQuantity(productId));
    const product = listProductCart.find(product => product.id === productId);
    if (product && product.quantity === 1) {
      const { isConfirmed } = await Swal.fire({
        title: "¿Eliminar producto del carrito?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Eliminar",
        cancelButtonText: "Cancelar"
      });

      if (isConfirmed) dispatch(deleteProductCart(productId));
    }
  };
  const shippingCostWhithProducts = TotalCart > 0 ? (parseFloat(TotalCart) + 5).toFixed(2) : TotalCart.toFixed(2);
  const shippingCost = TotalCart > 20 ? "Gratis" : "5€";
  
  const orderClientSubmit = {
    client: { id: user?.id, email: user?.email, fullname: user?.fullname },
    order: listProductCart,
    total: TotalCart
  };

  const paymentOrder = () => {
    const urlPayment = "https://buy.stripe.com/test_5kAg0K4ieelR2DC288";
    window.open(urlPayment, "_blank");
    return { status: "Processing payment" };
  };

  const onSubmitOrder = async (e) => {
    e.preventDefault();
    if (!isLogged) {
      await Swal.fire({
        icon: "error",
        title: "Para realizar la compra, debes acceder a tu cuenta",
        timer: 2000
      });
      navigate("/account");
      return;
    }

    const { status } = paymentOrder();
    console.log(status);

    // Aquí puedes implementar el manejo del pedido y la llamada a la API.
  };

  return (
    <div className='w-4/5 mx-auto my-10'>
      {
        !listProductCart.length ? <CartIsOut />
          :
          (
            <>
              <h1 className='text-5xl py-10 text-center'>Mi Carrito</h1>
              <form onSubmit={onSubmitOrder} className='grid lg:grid-cols-[80%_auto] gap-20'>
                {/* Lista de productos */}
                <div className='border rounded-lg shadow-lg'>
                  <div className='flex justify-around py-4 bg-gray-100'>
                    <p className='font-semibold'>Producto</p>
                    <p className='font-semibold'>Precio</p>
                    <p className='font-semibold'>Cantidad</p>
                    <p className='font-semibold'>Total</p>
                  </div>
                  <div className='border-t w-full text-center'>
                    {listProductCart.map(({ id, fullname, imageProduct, price, quantity, total }) => (
                      <div className='grid md:grid-cols-4 items-center px-4 py-6 space-y-5 border-b hover:bg-gray-50 transition-all duration-300' key={id}>
                        {/* Producto */}
                        <div className='mx-4'>
                          <img className='mx-auto w-24 object-cover rounded-md shadow-md' src={imageProduct} alt={fullname} />
                          <p className='text-lg md:text-xl capitalize font-semibold text-stone-600 mt-4'>{fullname}</p>
                        </div>

                        {/* Precio */}
                        <div>
                          <p className='text-lg md:text-xl capitalize font-semibold text-gray-700'>{price}€</p>
                        </div>

                        {/* Cantidad */}
                        <div className='flex items-center justify-center space-x-2'>
                          <button
                            type='button'
                            className='h-10 w-10 bg-gray-300 rounded-full flex justify-center items-center hover:bg-gray-400 transition duration-200'
                            onClick={() => removeProductListOrder(id)}
                          >
                            <FaMinus className='text-lg text-gray-700' />
                          </button>
                          <input
                            className='h-10 w-12 text-lg md:text-xl text-center border rounded-md'
                            type="text"
                            name="quantity"
                            value={quantity}
                            readOnly
                          />
                          <button
                            type='button'
                            className='h-10 w-10 bg-gray-300 rounded-full flex justify-center items-center hover:bg-gray-400 transition duration-200'
                            onClick={() => dispatch(incrementQuantity(id))}
                          >
                            <FaPlus className='text-lg text-gray-700' />
                          </button>
                        </div>

                        {/* Total */}
                        <div>
                          <p className='text-lg md:text-xl font-bold text-gray-700'>{total.toFixed(2)}€</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Resumen del pedido */}
                <div className="p-4 rounded-lg bg-white flex flex-col text-center space-y-4">
                  {/* Total del Carrito */}
                  <div className="space-y-2">
                    <div className="text-lg md:text-2xl font-semibold text-[#14213d] flex items-center justify-center space-x-2">
                      <FaShoppingCart className="text-green-500 w-5 h-5" />
                      <h2>Total Carrito: <span className="text-green-600">{TotalCart?.toFixed(2)}€</span></h2>
                    </div>

                    {/* Gastos de envío */}
                    <span className="text-sm md:text-2xl text-gray-600 flex items-center justify-center space-x-2">
                      <FaShippingFast className="text-blue-500 w-5 h-5" />
                      <span>Gastos de envío: <span className="font-semibold">{shippingCost}</span></span>
                    </span>
                  </div>

                  <hr className="my-2 border-t-2 border-gray-200" />

                  {/* Total de la compra */}
                  <div className="flex flex-col space-y-3">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-700">Total compra: <span className="text-red-500">{shippingCostWhithProducts}€</span></h3>
                    <button className="w-full py-3 rounded-lg bg-[#14213d] text-white font-semibold hover:bg-[#355496] hover:shadow-lg transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2">
                      <FaCheck className="w-5 h-5" />
                      <span>Completar pago</span>
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
