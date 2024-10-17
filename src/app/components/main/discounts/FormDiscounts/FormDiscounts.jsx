import React, { useState } from 'react'
import Swal from 'sweetalert2/dist/sweetalert2.all';

const form = { suscription: "" }
export const FormDiscounts = () => {
    const [dataForm, setDataForm] = useState(form);

    const inputValueForm = ({ target: { name, value } }) => setDataForm({ ...dataForm, [name]: value });

    const onSubmitForm = (e) => {
        e.preventDefault();
        const emailSuscription = dataForm.suscription;

        if (!emailSuscription.length) {
            Swal.fire({
                title: "El campo no puede estar vacío",
                icon: "error"
            })
            return;
        }
        if (!suscription.includes("@")) {
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
        <div>
            <form className='mt-5' onSubmit={onSubmitForm}>
                <div className='md:w-1/2 mx-auto'>
                    <div>
                        <label htmlFor="suscription"></label>
                        <input className='bg-stone-100 outline-none  text-stone-600  w-full py-3 px-5' type="text" onChange={inputValueForm} name="suscription" id='suscription' placeholder='Introduce tu email' />
                    </div>
                    <button className='bg-orange-400 hover:bg-orange-500 rounded-lg font-semibold text-white w-full py-3 mt-1' type="submit">Suscribirse</button>
                </div>
            </form>
        </div>
    )
}
