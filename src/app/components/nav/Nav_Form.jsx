import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../UI/Input'
const formInput = { description: "" }
export const Nav_Form = () => {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState(formInput)
    const searchProduct = ({ target: { name, value } }) => {
        setInputValue({
            ...inputValue, [name]: value
        })
    };
    const submitForm = (e) => {
        e.preventDefault();
        const searchProduct = inputValue.description.toLowerCase().trim();
        navigate(`/products/search-products?description=${searchProduct}`)
        setInputValue(formInput)
    }
    return (
        <form className='order-1 md:order-none md:w-3/5 md:px-5' onSubmit={submitForm}>
            <Input
                extraClassInput="bg-gray-50 border-orange-100 outline-orange-300 hover:border-orange-300 rounded-lg"
                type="text"
                value={inputValue.description}
                name="description"
                placeholder="Buscar un producto"
                onchange={searchProduct}
            />
        </form>
    )
}
