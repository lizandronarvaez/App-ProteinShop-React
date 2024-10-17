import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { springBootAxios } from '../../../api/axios';
import Swal from "sweetalert2/dist/sweetalert2.all";
import { SpinnerLoading } from '../spinner/SpinnerLoading';
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from '../../store/AuthSlice';
import axios from 'axios';
import { Input } from '../../components/UI/Input';
import { ButtonAuth } from '../UI/ButtonAuth';
import { jwtDecode } from "jwt-decode";
const formValues = { email: "", password: "" }
export const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [formData, setFormData] = useState(formValues);
    const [isLoading, setIsLoading] = useState(false);

    const onInputChange = ({ target: { value, name } }) => {
        if (name === "email") value = value.toLowerCase().trim();
        setFormData({ ...formData, [name]: value })
    };

    const onSumbitFormData = async (e) => {
        e.preventDefault();
        const { email, password } = formData;
        const emailIsValid = email.toLowerCase().includes("@");
        if (!email.length && !password.length) {
            Swal.fire({ title: "", text: "Los campos no pueden estar vacíos", icon: "error" });
            return;
        }
        if (!emailIsValid) {
            Swal.fire({ title: "El correo no es válido", text: "Introduce un correo válido", icon: "error" });
            return;
        }

        if (!password.length) {
            Swal.fire({ title: "Introduce una contraseña", text: "", icon: "error" });
            return;
        }
        setIsLoading(true);
        try {
            // Inicio de sesion
            const { data: { token, client, message, status } } = await springBootAxios.post("/clients/login", formData)
            dispatch(loginUser({ token, client }));
            setIsLoading(true);
        } catch (error) {
            console.log(error)
            Swal.fire({
                title: "Email o password incorrectos" || data,
                text: "",
                icon: "error"
            });
        } finally {
            setIsLoading(false);
        }
    }

    return (
        <div>
            <form className='flex flex-col' onSubmit={onSumbitFormData}>
                <h2 className='md:text-5xl'>Conectarme a mi cuenta</h2>
                <div>
                    <Input label="Email" type="email" name="email" placeholder="Ingresa tu email" onchange={onInputChange} />
                    <Input label="Password" type="password" name="password" placeholder="Ingresa tu contraseña" onchange={onInputChange} />
                </div>
                {isLoading && <SpinnerLoading />}
                {!isLoading && <ButtonAuth type="Login" />}
            </form>
        </div>
    )
}
