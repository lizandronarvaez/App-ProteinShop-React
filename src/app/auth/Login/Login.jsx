import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { springBootAxios } from '../../../api/axios';
import Swal from "sweetalert2/dist/sweetalert2.all";
import { useContext } from 'react';
import { AuthContext } from '../context/authContext';
const formValues = { email: "", password: "" }
export const Login = () => {

    const navigate = useNavigate();
    const [formData, setFormData] = useState(formValues);
    const { loginUser } = useContext(AuthContext);
    const onInputChange = ({ target: { value, name } }) => {
        if (name === "email") {
            value = value.toLowerCase().trim();
        }
        setFormData({ ...formData, [name]: value })
    };

    const onSumbitFormData = async (e) => {
        e.preventDefault();

        if (!formData.email.toLowerCase().includes("@")) {
            Swal.fire({ title: "El correo no es válido", text: "Introduce un correo válido", icon: "error" });
            return;
        }

        if (!formData.password) {Swal.fire({title: "Introduce una contraseña",text: "",icon: "error"});
            return;
        }

        try {
            // Inicio de sesion
            const { data: { token, client, message, status } } = await springBootAxios.post("/clients/login", formData)
            localStorage.setItem("token", token);
            localStorage.setItem("cliente", JSON.stringify(client));
            // Realiza la accion por debajo 
            loginUser(localStorage.getItem("token"));
            if (status === 200) {
                Swal.fire({ title: message, timer: 1500 });
                navigate("/profile/user", { replace: true })
            }
        } catch ({ response: { data } }) {
            Swal.fire({
                title: "Email o password incorrectos" || data,
                text: "",
                icon: "error"
            });
        }
    }

    return (
        <div className='container'>
            <div className='form'>
                <form className='form-login' onSubmit={onSumbitFormData}>
                    <h2>Conectarme a mi cuenta</h2>
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
