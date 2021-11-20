import React, {useState} from 'react'
import Spinner from "../Spinner";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import Image from "next/image";

/**
 * Componente encargado para el trabajo con las imágenes
 *
 * Para que salga el Spinner en el cargando la imagen defina spinner={true} sino saldra Skeleton
 *
 * Para desactivar el spinner o skeleton pasar el atributo limpio = {true}
 *
 * @version 1.0
 * @param spinner
 * @param limpio
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
            {!limpio ? (
                <Image
                    layout="fill"
                    alt={props.alt}
                    onLoad={handleLoad}
                    src={props.src}
                    className={props.className}
                    placeholder={props.placeholder}
                />
            ) : (
                <img src="props.src" alt="props.alt" {...props}/>
            )
            }

            {!loading ? getAnimate() : null}
        </React.Fragment>
    )
}

export default Imagen