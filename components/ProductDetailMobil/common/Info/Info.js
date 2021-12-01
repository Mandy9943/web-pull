import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Info.css"

const Info = () => {
    return (
        <div id="InfoProductDetailMovil">
            <div className="info">
                <div className="icon">
                    <FontAwesomeIcon icon={faTruck} />
                </div>
                <div className="text">
                    <h3>Envío Gratuito</h3>
                    <p>
                        Nuestros productos son importados.Entrega de 3 a 9 días hábiles.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Info;
