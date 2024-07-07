import React, { useEffect } from 'react';
import "./OrdersUsers.css";
import { springBootAxios } from '../../../api/axios';

export const OrdersUsers = () => {
  const { id } = JSON.parse(localStorage.getItem("cliente"));

  // TODO: REALIZAR CONSULTA PARA VER LOS PEDIDOS DEL CLIENTE!
  const getOrderByUserId = async () => {
    const getOrderDB = await springBootAxios.get(`/orders`);
    console.log(getOrderDB)
  }

  useEffect(() => {
    getOrderByUserId();
  }, []);
  return (
    <div className='order-users'>
      <div>
        <h2>Pedido 1</h2>
        <p>Info Pedido</p>
      </div>
      <div>
        <h2>Pedido 1</h2>
        <p>Info Pedido</p>
      </div>
      <div>
        <h2>Pedido 1</h2>
        <p>Info Pedido</p>
      </div>
      <div>
        <h2>Pedido 1</h2>
        <p>Info Pedido</p>
      </div>

    </div>
  )
}
