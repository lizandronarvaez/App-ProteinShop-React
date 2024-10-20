import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Input } from '../UI/Input'
import { FaSearch } from 'react-icons/fa'
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

        <form className='order-1 md:order-none md:flex-1 md:px-5 md:max-w-7xl' onSubmit={submitForm}>
            <Input
                icon={<FaSearch className='text-gray-500'/>}
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
