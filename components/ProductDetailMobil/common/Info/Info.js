import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Info.css"

const Info = () => {
    return (
        <div id="InfoProductDetailMovil">
            <div className="card">
                <div className="icon">
                    <span>
                        <FontAwesomeIcon icon={faTruck} />
                    </span>
                </div>
                <div className="titulo">
                    Envío Gratuito
                </div>
                <div className="description">
                    <p>
                        Nuestros productos son importados.Entrega de 3 a 9 días hábiles.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Info;
