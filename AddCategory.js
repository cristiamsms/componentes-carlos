import React, { useState } from 'react'


export const AddCategory = () => {
    
    const [inputValue, setinputValue] = useState({
        id:'',
        categoria:''

    });
    useEffect(() => {
       
    }, [])
    
    const {id,categoria}=inputValue;
    
    const handleInputValue=({target})=>
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
            onChange={ handleInputValue }
            placeholder="id"
            
            />
            <input
            type="text"
            name="categoria"
            value={categoria}
            onChange={ handleInputValue }
            placeholder="categoria"
            
            />
           <select name="estado" id="estado">
            <option value="activo">activo</option>
            <option value="inactivo">inactivo</option>
            </select>
            <button>enviar</button>
        </form>
    )
    
}

