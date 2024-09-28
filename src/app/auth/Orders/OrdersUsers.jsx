import React, { useContext, useEffect } from 'react';
import "./OrdersUsers.css";
import { springBootAxios } from '../../../api/axios';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { OrderItem } from './OrderItem/OrderItem';
export const OrdersUsers = ({ user, token }) => {

  // ORDENES DEL CLIENTE
  const [ordersClientDb, setOrdersClientDb] = useState([]);
  // DATOS DEL USUARIO
  const { id } = user;
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getOrderByUserId = async () => {
      setIsLoading(true);
      const { data: { orderList } } = await springBootAxios.get(`/orders/${id}`);
      setOrdersClientDb(orderList)
      setIsLoading(false);
    }
    getOrderByUserId();
  }, [id]);
  return (
    <div className='order-users'>
      {isLoading && <p>Cargando lista de pedidos...</p>}
      {!isLoading && ordersClientDb.map((order, i) => <OrderItem order={order} key={i}/>)}
    </div>
  )
}
