import React from 'react'

export const Input = ({ label, type, name, placeholder, value, onchange, classStyle, extraClassInput }) => {
    return (
        <div className={classStyle ? classStyle : 'flex flex-col items-start mt-5'}>
            <label className='mb-2' htmlFor={name}>{label}</label>
            <input className={`w-full p-3 border ${extraClassInput}`} type={type} name={name} placeholder={placeholder} value={value} onChange={onchange} />
        </div>
    )
}
