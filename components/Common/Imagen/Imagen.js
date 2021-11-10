import React, {useEffect, useState} from 'react'
import "./Imagen.css"
import Spinner from "../Spinner";

/**
 * Componente encargado para el trabajo con las imágenes
 *
 * @version 1.0
 *
 */
const Imagen = ({...props}) => {
    const [loading, setLoading] = useState(false)

    const handleLoad = (e) => {
        setLoading(true)
    }

    return (
        <React.Fragment>
            <img
                loading="lazy"
                decoding="async"
                alt={props.alt}
                data-src={props.src}
                onLoad={handleLoad}
                {...props}/>
            {!loading ? <Spinner/> : null}
        </React.Fragment>
    )
}

export default Imagen