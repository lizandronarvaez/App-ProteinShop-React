import React from 'react'
import "./Profile.css";
export const Profile = () => {
    // todo:Obetener los datos del cliente desde el local storage
    const user=JSON.parse(localStorage.getItem("cliente"));
    console.log(user)
    // TODO: ALMACENAR LOS DATOS EN UN OBJETO

    // todo: enviar peticion al backend para actualizar los datos

    // 
    return (
        <div className='container profile-user'>
            <h2>Perfil Usuario</h2>
            <div className='profile-user-grid'>
                <div className='profile-user-nav'>
                    <ul>
                        <li>Datos Personales</li>
                        <li>Pedidos</li>
                        <li>Datos</li>
                        <li>Datos</li>
                        <li>Datos</li>
                    </ul>
                </div>
                <div className='profile-user-data'>
                    <form>
                        <div>
                            <label htmlFor="">Nombre</label>
                            <input type="text" name="fullname" value={user.fullname}/>
                        </div>
                        <div>
                            <label htmlFor="">Email</label>
                            <input type="text" name="email" value={user.email} />
                        </div>
                        <div>
                            <label htmlFor="">Password</label>
                            <input type="text" name="password" placeholder='contraseña'/>
                        </div>
                        <div>
                            <label htmlFor="">Teléfono</label>
                            <input type="text" name="phone" value={user.phone}/>
                        </div>
                        <div>
                            <label htmlFor="">Dirección</label>
                            <input type="text" name="address" value={user.address} />
                        </div>
                        <div>
                            <label htmlFor="">Ciudad</label>
                            <input type="text" name="city" value={user.city}/>
                        </div>
                        <div>
                            <label htmlFor="">País</label>
                            <input type="text" name="country" value={user.country}/>
                        </div>
                        <div>
                            <label htmlFor="">Código Postal</label>
                            <input type="text" name="postalcode" value={user.postalcode}/>
                        </div>
                        <div>
                            <button type='submit'>Guardar Cambios</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
