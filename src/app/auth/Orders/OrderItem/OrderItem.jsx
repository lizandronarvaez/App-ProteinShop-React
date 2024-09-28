import React from 'react'
import Pdf from "../../../../../public/svg/pdf.svg";

const orderViewPdf = () => {
    // TODO: REALIZAR PDF PARA VISIONAR EL PDF CON EL PEDIDO DEL CLIENTE
    window.open("", "_blank")
}
export const OrderItem = ({ order }) => {
    const { id, createdAt, total } = order;
    return (
        <div>
            <ul>
                <li>Nº Pedido: <span>{id}</span></li>
                <li>Fecha Pedido: <span>{createdAt}</span> </li>
                <li>Total Pedido: <span>{total}€</span> </li>
                <li>Ver Pedido:<img src={Pdf} alt={Pdf} onClick={orderViewPdf} /></li>
            </ul>
        </div>
    )
}
