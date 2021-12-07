import React, {useState} from 'react';
import cerrado from "../../../../assets/img/productDetail/icono-desplegar@2x.svg";
import abierto from "../../../../assets/img/productDetail/l-nea-86@2x.svg";
import "./HelpCenter.module.css";
import pregunta from "../../../../assets/img/productDetail/preguntas-frecuentes-icon@2x.svg";
import ayuda from "../../../../assets/img/productDetail/ayuda-profesional-icon@2x.svg";
import refund from "../../../../assets/img/productDetail/refund-policy-icon@2x.svg";

const HelpCenter = () => {
    const [collapse, setCollapse] = useState(false);
    const [desglosar, setDesglosar] = useState(cerrado);

    const handleOnClick = () => {
        (collapse === false) ? setDesglosar(abierto) : setDesglosar(cerrado)
        setCollapse(!collapse)
    }
    return (
        <div id="HelpCenter" className={collapse === false ? "closed" : "open"}>
            <div className="titulo" onClick={handleOnClick}>
                <h3>Centro de Ayuda</h3>
                <img src={desglosar} alt="Icono del desgrose"/>
            </div>

            <div className="detalles">
                {collapse === true ? (
                    <React.Fragment>
                        <a href="#">
                            <h3>Preguntas Frecuentes</h3>
                            <img src={pregunta} alt="Preguntas Frecuentes"/>
                        </a>
                        <a href="#">
                            <h3>Ayuda Profesional Del Equipo Kiero</h3>
                            <img src={ayuda} alt="Ayuda Profesional Del Equipo Kiero"/>
                        </a>
                        <a href="#">
                            <h3>Refund Policy</h3>
                            <img src={refund} alt="Refund Policy"/>
                        </a>
                    </React.Fragment>
                ) : null}
            </div>
        </div>
    );
}

export default HelpCenter;