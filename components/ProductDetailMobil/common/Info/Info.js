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
            <div className="info">
                <div className="icon">
                    {/* TODO: Poner icono correcto */}
                    <FontAwesomeIcon icon={faTruck} />
                </div>
                <div className="text">
                    <h3>Compra Protegida</h3>
                    <p>
                        En caso de que surja algún problema, te devolveremos el dinero.
                    </p>

                </div>
            </div>
            <div className="info">
                <div className="icon">
                    {/* TODO: Poner icono correcto */}
                    <FontAwesomeIcon icon={faTruck} />
                </div>
                <div className="text">
                    <h3>Garantía del Vendedor</h3>
                    <p>
                        Garantía por defecto de fábrica de (1) mes.
                    </p>

                </div>
            </div>
        </div>
    );
}

export default Info;
