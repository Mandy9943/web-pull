import React, {useState} from 'react'
import "./Imagen.css"

/**
 * Componente encargado para el trabajo con las imágenes
 *
 * @version 1.0
 *
 */
const Imagen = ({...props}) => {
    const [loading, SetLoading] = useState(false)

    return (
        <React.Fragment>
            <img loading="lazy" decoding="async" alt={props.alt} {...props}/>
        </React.Fragment>
    )
}

export default Imagen