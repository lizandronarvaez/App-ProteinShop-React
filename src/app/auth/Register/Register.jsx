import React, { useState } from 'react'
import { useNavigate } from "react-router";
import Swal from "sweetalert2/dist/sweetalert2.all";
import { Input } from '../../components/UI/Input';
import { ButtonAuth } from '../UI/ButtonAuth';

export const Register = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "" })
  // TODO: Validar que el correo es válido para seguir a la pagina de registro
  const handleValidEmailInput = ({ target: { name, value } }) => {
    console.log(name)
    if (name === "email") {
      value = value.toLowerCase().trim();
    }
    setForm({ ...form, [name]: value })
  }

  const handleConfirmForm = () => {
    const { email } = form;
    const emailIsValid = email.toLowerCase().includes("@")
    if (!email.length) {
      Swal.fire({
        title: "El campo no puede estar vacío",
        text: "",
        icon: "error"
      });
      return;
    }
    if (!emailIsValid) {
      Swal.fire({
        title: "Introduce un email válido para continuar",
        text: "",
        icon: "error"
      });
      return;
    }
    navigate("/account/form-register", { state: { data: email } })
  }
  return (
    <div className='flex flex-col justify-between'>
      <div>
        <h2 className='md:text-5xl'>Registrar mi cuenta</h2>
        <Input label="Email" name="email" placeholder="Ingresa tu correo" type="email" onchange={handleValidEmailInput} />
      </div>
      <ButtonAuth type="Registro" onclick={handleConfirmForm} />
    </div>

  )
}
