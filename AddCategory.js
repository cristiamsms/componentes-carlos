import React, { useState } from 'react'


export const AddCategory = ({}) => {
    
    const [inputValue, setinputValue] = useState()
    const [inputValue2, setinputValue2] = useState('')
    
    const handleInputValue=(e)=>
    {
        
        setinputValue(e.target.value)
        
    }
    const handleInputValue2=(e)=>
    {
        
        
        setinputValue2(e.target.value)
    }
   
   
    return (
        <form >
            <input
            type="number"
            value={inputValue}
            onChange={ handleInputValue }
            placeholder="id"
            
            />
            <input
            type="text"
            value={inputValue2}
            onChange={ handleInputValue2 }
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

