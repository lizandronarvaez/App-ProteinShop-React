import React from 'react'
import "./Nav_Form.css"
export const Nav_Form = () => {
    return (
        <>
            {/* Formulario para buscar productos */}
            <form className='form'>
                <div className='box'>
                    <label htmlFor="search"></label>
                    <input
                        type="text"
                        name="search"
                        id='search'
                        placeholder='Buscar un producto, una marca'
                    />
                    
                </div>
            </form>
        </>
    )
}
