import React, { useState } from "react";

export const Checkout = () => {
    const [user, setUser] = useState({ nombre:"", email: "", telefono: "" });

    const envioDeFromulario = (event) => {
        event.preventDefault()
        console.log(user);
    };
    
    const handleChange = (event) => {
        setUser({ ...user, [event.target.name]: event.target.value});
    };

    return (
        <div> 
            <form onSubmit={envioDeFromulario}>
                <input type="text" placeholder="Ingresa tu nombre" onChange={handleChange} name="nombre"/> 
                <input type="text" placeholder="Ingresa tu correo electrónico" onChange={handleChange} name="email"/>
                <input type="text" placeholder="Ingresa tu teléfono" onChange={handleChange} name="telefono" /> 
                <button> Enviar </button>
                <button type="button"> Cancelar </button>
            </form>
        </div>
    );
};  