import React, {useState} from 'react';
import "./Detail.css"
import cerrado from "../../../../assets/img/productDetail/icono-desplegar@2x.svg"
import abierto from "../../../../assets/img/productDetail/l-nea-86@2x.svg"

import Image from "next/image";

const Detail = ({product}) => {
    const [collapse, setCollapse] = useState(false);
    const [desglosar, setDesglosar] = useState(cerrado);

    const handleOnClick = () => {
        (collapse === false) ? setDesglosar(abierto) : setDesglosar(cerrado)
        setCollapse(!collapse)
    }

    return (
        <div id="DetailInfo" className={collapse === false ? "closed" : "open"}>
            <div className="titulo" onClick={handleOnClick}>
                <h3>Detalles</h3>
                <div className='anullProperties'> 
                <Image
                    
                    loading='lazy'
                    src={desglosar}
                    alt='Icono del desgrose'
                    layout="fill"
                />
               </div> 
                
            </div>
            {collapse === true ? (
                <div className="detalles">
                    <h6>Marca</h6><h5>{product.brand}</h5>
                    <h6>Color</h6><h5>{product.color !== null ? product.color : 'Ninguno'}</h5>
                    <h6>Modelo</h6><h5>{product.model}</h5>
                    <h6>Tamaño</h6><h5>{parseFloat(product.length).toFixed(2)}" - (
                        {parseFloat(parseFloat(product.length) * 2.54).toFixed(1)}cm)</h5>
                    <h6>Ancho</h6><h5>{parseFloat(product.width).toFixed(2)}" - (
                        {parseFloat(product.width * 2.54).toFixed(1)}cm)</h5>
                    <h6>Peso</h6><h5>{parseFloat(product.weight).toFixed(2)} Lb -
                        ( {parseFloat(parseFloat(product.weight) / 2.205).toFixed(1)}kg)</h5>

                </div>
            ) : null}
        </div>
    );
}

export default Detail;
