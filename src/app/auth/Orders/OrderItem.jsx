import React from 'react';
import Pdf from "../../../../public/svg/pdf.svg";

const orderViewPdf = () => {
    // TODO: REALIZAR PDF PARA VISIONAR EL PDF CON EL PEDIDO DEL CLIENTE
    window.open("", "_blank");
}

export const OrderItem = ({ order }) => {
    const { id, createdAt, total } = order;

    return (
        <div className="bg-white shadow-md rounded-lg p-6 mb-6 transition duration-300 hover:shadow-lg hover:transform hover:scale-105 border border-gray-200">
            <ul className="flex flex-col md:flex-row justify-between items-center list-none space-y-4">
                <li className="text-xl font-semibold text-blue-700">
                    <span className="bg-blue-100 text-blue-700 rounded-full px-2 py-1">Nº Pedido:</span> 
                    <span className="font-normal text-gray-800">{id}</span>
                </li>
                <li className="text-lg text-gray-800">
                    Fecha Pedido: 
                    <span className="font-normal text-gray-600"> {new Date(createdAt).toLocaleDateString()}</span>
                </li>
                <li className="text-lg">
                    Total Pedido: 
                    <span className="font-bold text-green-600">{total.toFixed(2)}€</span>
                </li>
                <li className="flex items-center space-x-3">
                    <span className="text-lg">Ver Pedido:</span>
                    <img 
                        src={Pdf} 
                        alt="Ver PDF" 
                        className="cursor-pointer w-10 h-10 hover:opacity-80 transition duration-200" 
                        onClick={orderViewPdf} 
                    />
                </li>
            </ul>
        </div>
    );
}
