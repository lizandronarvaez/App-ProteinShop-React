import React from 'react'

export const ProfileForm = ({ user }) => {
    const { fullname, email, phone, address, city, country, postalcode } = user;

    // TODO: Recogida de datos formulario para que el cliente actualize sus datos
    const onChangeInput = ({ target: { name, value } }) => {
        console.log({ name, value })
    }

    // TODO!!:Realizar envio de formulario al backend
    const onSubmitForm = () => {

    }
    return (
        <>

            <form onChange={onSubmitForm}>
                <div>
                    <label htmlFor="">Nombre</label>
                    <input type="text" name="fullname" value={fullname} onChange={onChangeInput} />
                </div>
                <div>
                    <label htmlFor="">Email</label>
                    <input type="text" name="email" value={email} onChange={onChangeInput} />
                </div>
                <div>
                    <label htmlFor="">Password</label>
                    <input type="text" name="password" placeholder='contraseña' onChange={onChangeInput} />
                </div>
                <div>
                    <label htmlFor="">Teléfono</label>
                    <input type="text" name="phone" value={phone} onChange={onChangeInput} />
                </div>
                <div>
                    <label htmlFor="">Dirección</label>
                    <input type="text" name="address" value={address} onChange={onChangeInput} />
                </div>
                <div>
                    <label htmlFor="">Ciudad</label>
                    <input type="text" name="city" value={city} onChange={onChangeInput}/>
                </div>
                <div>
                    <label htmlFor="">País</label>
                    <input type="text" name="country" value={country} onChange={onChangeInput}/>
                </div>
                <div>
                    <label htmlFor="">Código Postal</label>
                    <input type="text" name="postalcode" value={postalcode} onChange={onChangeInput}/>
                </div>
                <div>
                    <button type='submit'>Guardar Cambios</button>
                </div>
            </form>
        </>
    )
}
