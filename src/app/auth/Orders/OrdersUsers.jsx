import React, { useContext, useEffect } from 'react';
import "./OrdersUsers.css";
import { springBootAxios } from '../../../api/axios';
import { useState } from 'react';
import Pdf from "../../../../public/svg/pdf.svg";
import { AuthContext } from '../context/authContext';
export const OrdersUsers = () => {
  const { user } = useContext(AuthContext);
  const [ordersClientDb, setOrdersClientDb] = useState([]);
  // TODO: REALIZAR CONSULTA PARA VER LOS PEDIDOS DEL CLIENTE!
  const getOrderByUserId = async () => {
    const { data: { orderList } } = await springBootAxios.get(`/orders/${user?.id}`);
    setOrdersClientDb(orderList)
  }
  const orderViewPdf = () => {
    // TODO: REALIZAR PDF PARA VISIONAR EL PDF CON EL PEDIDO DEL CLIENTE
    window.open("", "_blank")
  }
  useEffect(() => { getOrderByUserId(); }, [user]);
  return (
    <div className='order-users'>
      {
        ordersClientDb.map((order, i) => (
          <div key={order.id}>
            <ul>
              <li>Nº Pedido: <span>{order.id}</span></li>
              <li>Fecha Pedido: <span>{order.createdAt}</span> </li>
              <li>Total Pedido: <span>{order.total}€</span> </li>
              <li>Ver Pedido:<img src={Pdf} alt={Pdf} onClick={orderViewPdf} /></li>
            </ul>
          </div>
        ))
      }
    </div>
  )
}
