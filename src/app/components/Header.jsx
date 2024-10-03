import React from 'react';
import { FaPhoneAlt, FaShippingFast, FaClock } from 'react-icons/fa'; 

export const Header = () => {
    return (
        <div className='bg-gray-100 flex flex-col md:flex-row justify-between md:justify-around items-center text-stone-800 text-lg md:text-2xl font-light p-4 shadow-md'>
            <div className='flex items-center space-x-2'>
                <FaPhoneAlt className='text-xl' />
                <p>Contacto: <strong>926 123 456</strong></p>
            </div>
            <div className='flex items-center space-x-2'>
                <FaShippingFast className='text-xl' />
                <p className='text-center'>Envíos gratis a partir de <strong>20€</strong></p>
            </div>
            <div className='flex items-center space-x-2'>
                <FaClock className='text-xl' />
                <p>Lunes a Viernes: <strong>9:00 - 17:00</strong></p>
            </div>
        </div>
    );
};
