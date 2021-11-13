import React, {useState} from 'react'
import "./Imagen.css"
import Spinner from "../Spinner";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

/**
 * Componente encargado para el trabajo con las imágenes
 *
 * Para que salga el Spinner en el cargando la imagen defina spinner={true} sino saldra Skeleton
 *
 * Para desactivar el spinner o skeleton pasar el atributo limpio = {true}
 *
 * @version 1.0
 *
 */
const Imagen = ({spinner, limpio, ...props}) => {
    const [loading, setLoading] = useState(false)

    const handleLoad = (e) => {
        setLoading(true)
    }

    const getAnimate = () => {
        if (limpio === true) {
            return null;
        }
        if (spinner === true) {
            return <Spinner/>
        } else {
            return <Skeleton/>
        }
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
            {!loading ? getAnimate() : null}
        </React.Fragment>
    )
}

export default Imagen