import React, { useState, useEffect } from 'react'
import { useNavigate, useLocation } from "react-router";
import { springBootAxios } from '../../../api/axios';
import Swal from 'sweetalert2/dist/sweetalert2.all';
import { Input } from '../../components/UI/Input';
import { ButtonAuth } from '../UI/ButtonAuth';
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
  const handleInputForm = ({ target: { name, value } }) => { setForm({ ...form, [name]: value }); }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    // !!TODO:validar los inputs del formulario

    try {
      const { data } = await springBootAxios.post("/clients", form)
      if (data.status === 200) {
        Swal.fire({
          title: "¡Tu cuenta se creó correctamente!",
          text: "",
          icon: "sucess"
        });
        navigate("/account")
        return;
      }
    } catch (error) {
      console.log(error)
      Swal.fire({
        title: "Hubo un error al realizar el registro",
        text: error?.response?.data,
        icon: "error"
      });
    }
  }

  useEffect(() => { if (data) setForm(({ ...form, email: data })); }, [data]);
  return (
    <div className='w-11/12 md:w-3/5 mx-auto py-20'>
      <h1 className='text-3xl md:text-5xl'>Registrar mi cuenta</h1>
      <form onSubmit={handleSubmitForm}>
        <div className='grid md:grid-cols-2 gap-5 py-10'>
          <Input label="Nombre Completo" name="fullname" type="text" placeholder="Nombre completo" onchange={handleInputForm}/>
          <Input label="Email" name="email" type="email" value={form.email} onchange={handleInputForm}/>
          <Input label="Contraseña" name="password" type="password" placeholder="Introduce una contraseña segura" onchange={handleInputForm}/>
          <Input label="Teléfono" name="phone" type="text" placeholder="Teléfono de contacto" onchange={handleInputForm}/>
          <Input label="Dirección completa" name="address" type="text" placeholder="Dirección completa" onchange={handleInputForm}/>
          <Input label="Código Postal" name="postalcode" type="text" placeholder="Código Postal" onchange={handleInputForm}/>
          <Input label="Ciudad" name="city" type="text" placeholder="Ciudad" onchange={handleInputForm}/>
          <Input label="País" name="country" type="text" placeholder="País" onchange={handleInputForm}/>
        </div>
        <ButtonAuth type="Completar registro"/>
      </form>
    </div>
  )
}
