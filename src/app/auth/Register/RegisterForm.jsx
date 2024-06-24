import React, { useState, useEffect } from 'react'
import "./RegisterForm.css";
import { useNavigate, useLocation } from "react-router";
import { springBootAxios } from '../../../api/axios';
import Swal from 'sweetalert2/dist/sweetalert2.all';
const formData = {
  fullname: "",
  email: "",
  password: "",
  phone: "",
  address: "",
  postalcode: "",
  city: "",
  country: ""
}
export const RegisterForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const data = location.state?.data;

  const [form, setForm] = useState(formData);
  const { email } = form;
  const handleInputForm = ({ target: { name, value } }) => { setForm({ ...form, [name]: value }); }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    // !!TODO:validar los inputs del formulario

    try {
      const { data: { status, message } } = await springBootAxios.post("/clients", form)
      if (status == 200) {
        Swal.fire({
          title: "¡Cuenta creada correctamente!",
          text: response.data,
          icon: "sucess"
        });
        navigate("/account")
        return;
      }
    } catch ({ response }) {
      Swal.fire({
        title: "Hubo un error",
        text: response.data,
        icon: "error"
      });
    }
  }

  useEffect(() => { if (data) setForm(({ ...form, email: data })); }, [data]);
  return (
    <div className='container form-register-client'>
      <h1>Registrar mi cuenta</h1>
      <form onSubmit={handleSubmitForm}>
        <div className='form-client-box'>
          <label htmlFor="fullname"></label>
          <input
            type="text"
            name='fullname'
            placeholder='Nombre completo'
            onChange={handleInputForm}
          />
        </div>
        <div className='form-client-box'>
          <label htmlFor="email"></label>
          <input
            type="email"
            name='email'
            value={form.email}
            placeholder='Correo electrónico'
            onChange={handleInputForm}
          />
        </div>
        <div className='form-client-box'>
          <label htmlFor="password"></label>
          <input
            type="password"
            name='password'
            placeholder='Contraseña'
            onChange={handleInputForm}
          />
        </div>
        <div className='form-client-box'>
          <label htmlFor="phone"></label>
          <input
            type="text"
            name='phone'
            placeholder='Teléfono'
            onChange={handleInputForm}
          />
        </div>
        <div className='form-client-box'>
          <label htmlFor="address"></label>
          <input
            type="text"
            name='address'
            placeholder='Dirección completa'
            onChange={handleInputForm}
          />
        </div>
        <div className='form-client-box'>
          <label htmlFor="postalcode"></label>
          <input
            type="text"
            name='postalcode'
            placeholder='Código postal'
            onChange={handleInputForm}
          />
        </div>
        <div className='form-client-box'>
          <label htmlFor="city"></label>
          <input
            type="text"
            name='city'
            placeholder='Ciudad'
            onChange={handleInputForm}
          />
        </div>
        <div className='form-client-box'>
          <label htmlFor="country"></label>
          <input
            type="text"
            name='country'
            placeholder='País'
            onChange={handleInputForm}
          />
        </div>
        <div className='form-client-box btn-form-client'>
          <button type='submit'>Registrarse</button>
        </div>
      </form>
    </div>
  )
}
