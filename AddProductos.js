import React from 'react'

export const AddProductos = () => {
    const [inputValue, setinputValue] = useState()
    const [inputValue2, setinputValue2] = useState('')
    const [inputValue3, setinputValue3] = useState('')
    const [inputValue4, setinputValue4] = useState('')
    const [inputValue5, setinputValue5] = useState('')
    const [inputValue6, setinputValue6] = useState('')
    
    
    const handleInputValue=(e)=>
    {
        
        setinputValue(e.target.value)
        
    }
    const handleInputValue2=(e)=>
    {
        
        
        setinputValue2(e.target.value)
    }
    const handleInputValue3=(e)=>
    {
        
        
        setinputValue3(e.target.value)
    }
    const handleInputValue4=(e)=>
    {
        
        
        setinputValue4(e.target.value)
    }
    const handleInputValue5=(e)=>
    {
        
        
        setinputValue5(e.target.value)
    }
    const handleInputValue6=(e)=>
    {
        
        
        setinputValue6(e.target.value)
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
            placeholder="referencia"
            />
            <input
            type="text"
            value={inputValue3}
            onChange={ handleInputValue3 }
            placeholder="nombre"
            />
            <input
            type="text"
            value={inputValue4}
            onChange={ handleInputValue4 }
            placeholder="descripcion"
            />
            <input
            type="text"
            value={inputValue5}
            onChange={ handleInputValue5 }
            placeholder="detalle"
            />
            <input
            type="number"
            value={inputValue6}
            onChange={ handleInputValue6 }
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
