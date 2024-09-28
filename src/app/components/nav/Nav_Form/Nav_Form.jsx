import React, { useState } from 'react'
import "./Nav_Form.css"
import { useNavigate } from 'react-router-dom'

const formData = { search: "" }

export const Nav_Form = () => {
    const navigate=useNavigate();

    const [inputValue, setInputValue] = useState(formData)
    const searchProduct = ({ target: { name, value } }) => {
        setInputValue({
            ...inputValue, [name]: value
        })
    };

    const submitForm = (e) => {
        e.preventDefault();

    }
    return (
        <>
            {/* Formulario para buscar productos */}
            <form className='form' onSubmit={submitForm}>
                <div className='box'>
                    <label htmlFor="search"></label>
                    <input
                        type="text"
                        name="search"
                        id='search'
                        placeholder='Buscar un producto, una marca'
                        onChange={searchProduct}
                    />
                    <button type="submit">Buscar</button>
                </div>
            </form>
        </>
    )
}
