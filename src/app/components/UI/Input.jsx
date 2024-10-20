import React from 'react';

export const Input = ({ label, type, name, placeholder, value, onchange, classStyle, extraClassInput, icon }) => {
    return (
        <div className={classStyle ? classStyle : 'flex flex-col items-start mt-5'}>
            <label className='mb-2' htmlFor={name}>{label}</label>
            <div className="relative w-full">
                {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">{icon}</div>}
                <input className={`w-full p-3 pl-10 border ${extraClassInput}`} type={type} name={name} placeholder={placeholder} value={value} onChange={onchange} />
            </div>
        </div>
    );
}
