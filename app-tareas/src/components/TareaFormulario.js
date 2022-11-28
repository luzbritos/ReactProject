import React, {useState} from 'react'
import '../css/TareaFormulario.css'
// Instalar libreria uuid para id unicos
import { v4 as uuidv4} from 'uuid'

function TareaFormulario(props){

    const [input, setInput] = useState('')

    const manejarCambio = e => {       
        setInput(e.target.value)            
    }

    const manejarEnvio = e =>{
        // No se vuelve a cargar toda la app cuando enviamos el form
        e.preventDefault();
        
        const tareaNueva = {
            id: uuidv4(),
            texto: input,
            completada: false
        }
        props.onSubmit(tareaNueva);
    }
    

    return(
        <form 
            className='tarea-formulario' 
            onSubmit={manejarEnvio}>
            <input 
                className='tarea-input'
                type="text" 
                placeholder='Escribe una tarea'
                name="texto" 
                onChange={manejarCambio}               
            />
            <button className='tarea-boton'>
                Agregar tarea
            </button>
        </form>
    )
}

export default TareaFormulario