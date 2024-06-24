import React, { useEffect, useState } from 'react'
import { springBootAxios } from '../../../api/axios';
import Swal from 'sweetalert2/dist/sweetalert2.all';

const formData = {
    fullname: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    postalcode: ""
}
export const ProfileForm = ({ user = {} }) => {
    const [updateClient, setUpdateClient] = useState(formData);
    const onChangeInput = ({ target: { name, value } }) => { setUpdateClient({ ...updateClient, [name]: value }) }

    const onSubmitForm = async (e) => {
        e.preventDefault();
        const { id } = user;
        try {
            const { data } = await springBootAxios.put(`/clients/${id}`, updateClient)
            Swal.fire({
                title: "¡Datos actualizados!",
                text: data.message,
                icon: "success"
            });
        } catch ({ response }) {
            Swal.fire({
                title: "Hubo un error",
                text: response.data,
                icon: "error"
            });
        }
    }

    useEffect(() => {
        if (user) {
            setUpdateClient({
                fullname: user.fullname || "",
                email: user.email || "",
                phone: user.phone || "",
                address: user.address || "",
                city: user.city || "",
                country: user.country || "",
                postalcode: user.postalcode || ""
            });
        }
    }, [user])
    return (
        <>

            <form onSubmit={onSubmitForm}>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="fullname" value={updateClient.fullname} onChange={onChangeInput} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" value={updateClient.email} onChange={onChangeInput} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text" name="password" placeholder='contraseña' onChange={onChangeInput} />
                </div>
                <div>
                    <label htmlFor="">Teléfono</label>
                    <input type="text" name="phone" value={updateClient.phone} onChange={onChangeInput} />
                </div>
                <div>
                    <label htmlFor="">Dirección</label>
                    <input type="text" name="address" value={updateClient.address} onChange={onChangeInput} />
                </div>
                <div>
                    <label htmlFor="">Ciudad</label>
                    <input type="text" name="city" value={updateClient.city} onChange={onChangeInput} />
                </div>
                <div>
                    <label htmlFor="">País</label>
                    <input type="text" name="country" value={updateClient.country} onChange={onChangeInput} />
                </div>
                <div>
                    <label htmlFor="">Código Postal</label>
                    <input type="text" name="postalcode" value={updateClient.postalcode} onChange={onChangeInput} />
                </div>
                <div>
                    <button type='submit'>Guardar Cambios</button>
                </div>
            </form>
        </>
    )
}
