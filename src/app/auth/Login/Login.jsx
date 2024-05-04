import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { Register } from '../Register/Register';
import { springBootAxios } from '../../../api/axios';
import Swal from "sweetalert2/dist/sweetalert2.all";
const formValues = {
    email: "",
    password: ""
}
export const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState(formValues);

    const onInputChange = ({ target: { value, name } }) => {
        setFormData({ ...formData, [name]: value })
    }

    const onSumbitFormData = async (e) => {
        e.preventDefault();
        if (!formData.email.toLowerCase().includes("@")) {
            Swal.fire({
                title: "El correo no es válido",
                text: "Introduce un correo válido",
                icon: "error"
            });
            return;
        }

        // TODO: ENVIAR LA PETICION AL BACKEND
        const { data: { token, client, message, status } } = await springBootAxios.post("/clients/login", formData)
        localStorage.setItem("token", token)
        localStorage.setItem("cliente", JSON.stringify(client))

        // todo: realizar el login y hacer el redireccionamiento al a la pagina principal
        if (status === 200) {
            Swal.fire({
                title: message,
                timer: 1500
            });
            return navigate("/profile")
        }
    }

    return (
        <div className='container'>
            <div className='form'>
                <form className='form-login' onSubmit={onSumbitFormData}>
                    <h2>Login</h2>
                    <div className='form-login-box'>
                        <label htmlFor="email"></label>
                        <input type="email" name="email" placeholder='Correo eléctronico' onChange={onInputChange} value={formData.email} />
                    </div>
                    <div className='form-login-box'>
                        <label htmlFor="password"></label>
                        <input type="password" name="password" placeholder='Password' onChange={onInputChange} value={formData.password} />
                    </div>
                    <div className='form-login-box button-submit-login'>
                        <button type="submit">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
