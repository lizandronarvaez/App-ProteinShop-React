import React, { useState } from 'react'
import "./FormDiscounts.css";
import Swal from 'sweetalert2/dist/sweetalert2.all';

const form = { suscription: "" }
export const FormDiscounts = () => {
    const [dataForm, setDataForm] = useState(form);

    const inputValueForm = ({ target: { name, value } }) => setDataForm({ ...dataForm, [name]: value });

    const onSubmitForm = (e) => {
        e.preventDefault();
        if (dataForm.suscription.length === 0) {
            Swal.fire({
                title: "Debes introducir un email válido",
                icon: "error"
            })
            return;
        }
        Swal.fire({
            title: "Desea suscribirse a promociones y descuentos?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "¡Te haz suscrito a nuestras promociones!",
                    text: "¡Recibirás en tu email, ofertas, descuentos y promociones sobre nuestros productos!",
                    icon: "success"
                });
            }
        });

        // todo:realizar logica para registrar cliente suscripto a promociones
        // TODO:ENVIAR AL BACKEND!!
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
