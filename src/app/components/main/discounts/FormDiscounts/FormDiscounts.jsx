import React, { useState } from 'react'
import "./FormDiscounts.css";

const form = {
    suscription: ""
}
export const FormDiscounts = () => {
    const [dataForm, setDataForm] = useState(form);

    const inputValueForm = ({ target: { name, value } }) => setDataForm({...dataForm,[name]: value});
    
    const onSubmitForm = (e) => {
        e.preventDefault();

        // todo:realizar logica para registrar cliente suscripto a promociones
        console.log(dataForm)
    }
    return (
        <div className='discounts-form'>
            <form onSubmit={onSubmitForm}>
                <div className='discounts-form-box'>
                    <label htmlFor="suscription"></label>
                    <input type="text" onChange={inputValueForm} name="suscription" id='suscription' placeholder='Introduce tu email' />
                </div>
                <div className='discounts-form-box discounts-form-box_submit'>
                    <button type="submit">Suscribirse</button>
                </div>
            </form>
        </div>
    )
}
