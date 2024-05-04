import React, { useState } from 'react'
import { useNavigate } from "react-router";
import "./Register.css";
export const Register = () => {

  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "" })
  // TODO: Validar que el correo es válido para seguir a la pagina de registro
  const handleValidEmailInput = ({ target: { name, value } }) => {
    setForm({ ...form, [name]: value })
  }

  const handleConfirmForm = () => {
    if (!form.email.toLowerCase().includes("@")) {
      alert("Introduce un correo válido para continuar")
      return;
    }
    navigate("/account/form-register", { state: { data: form.email } })
  }
  return (
    <>
      <div className='form-register'>
        <h2>Registrarse</h2>
        <div className='form-register-box'>
          <label htmlFor="email"></label>
          <input type="email"
            name="email"
            placeholder="Introduce un correo electrónico"
            onChange={handleValidEmailInput}
          />
        </div>
        <div className='form-register-box register-btn_submit'>
          <button type='button' onClick={handleConfirmForm}>Continuar</button>
        </div>
      </div>
    </>
  )
}
