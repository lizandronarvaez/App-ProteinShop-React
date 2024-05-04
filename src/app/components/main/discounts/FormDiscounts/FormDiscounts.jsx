import React from 'react'
import "./FormDiscounts.css";
export const FormDiscounts = () => {
    return (
        <div className='discounts-form'>
            <form>
                <div className='discounts-form-box'>
                    <label htmlFor="suscription"></label>
                    <input type="text" name="suscription" id='suscription' placeholder='Introduce tu email' />
                </div>
                <div className='discounts-form-box discounts-form-box_submit'>
                    <button type="submit">Suscribirse</button>
                </div>
            </form>
        </div>
    )
}
