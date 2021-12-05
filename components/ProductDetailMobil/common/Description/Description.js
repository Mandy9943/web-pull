import React, {useState} from "react"
import "./Description.css"
import cerrado from "../../../../assets/img/productDetail/icono-desplegar@2x.svg";
import abierto from "../../../../assets/img/productDetail/l-nea-86@2x.svg";

function Description({product}) {
    const [collapse, setCollapse] = useState(false);
    const [desglosar, setDesglosar] = useState(cerrado);

    const handleOnClick = () => {
        (collapse === false) ? setDesglosar(abierto) : setDesglosar(cerrado)
        setCollapse(!collapse)
    }
    return (
        <div id="Description" className={collapse === false ? "closed" : "open"}>
            <div className="titulo" onClick={handleOnClick}>
                <h3>Descripción</h3>
                <img src={desglosar} alt="Icono del desglose"/>
            </div>
            {collapse === true ? (
                <div className="detalles">
                    <p className="texto">
                        {product.information}
                    </p>
                </div>
            ) : null}
        </div>
    )
}

export default Description
