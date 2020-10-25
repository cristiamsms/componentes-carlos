import React, { useEffect, useState } from 'react'

export const AddProductos = () => {
    const [inputValue, setinputValue] = useState(
        {
            id:'',
            referencia:'',
            nombre:'',
            descripcion:'',
            detalle:'',
            valor:'',

        }
    )
    useEffect(() => {
       
    }, [])
    const {id,referencia,nombre,descripcion,detalle,valor}=inputValue;
    
    
    const HandleInputValue=({target})=>
    {
        
        setinputValue({...inputValue,
            [target.name]:target.value})
        
    }
        
    
    
   
   
    return (
        <form >
            <input
            type="number"
            name="id"
            value={id}
            onChange={ HandleInputValue }
            placeholder="id"
            
            />
            <input
            type="text"
            name="referencia"
            value={referencia}
            onChange={ handleInputValue }
            placeholder="referencia"
            />
            <input
            type="text"
            name="nombre"
            value={nombre}
            onChange={ handleInputValue }
            placeholder="nombre"
            />
            <input
            type="text"
            name="descripcion"
            value={descripcion}
            onChange={ handleInputValue }
            placeholder="descripcion"
            />
            <input
            type="text"
            name="detalle"
            value={detalle}
            onChange={ handleInputValue }
            placeholder="detalle"
            />
            <input
            type="number"
            name="valor"
            value={valor}
            onChange={ handleInputValue }
            placeholder="valor"
            />
           <select name="categorias" id="categorias">
            <option value="categoria1">activo</option>
            <option value="categoria2">inactivo</option>
            </select>

            <select name="marcas" id="marcas">
            <option value="marca1">activo</option>
            <option value="marca2">inactivo</option>
            </select>
            <button>enviar</button>
        </form>
    )
}
