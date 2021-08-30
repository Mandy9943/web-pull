import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneSquare,
    faTruck,
    faShieldAlt
} from "@fortawesome/free-solid-svg-icons";
import "./Info.css";

class Info extends Component {
  render() {
    return (
      <div className="wrap-info-block">
        <div className="content-info-block">
          <div className="info-item only-desktop">
            <p className="info-icon">
              <FontAwesomeIcon icon={faPhoneSquare} />
            </p>
            <h3>Contacto</h3>
            <p>
              Sobre dudas, quejas y reclamos +57 (4) 604 6458
            </p>
          </div>
          <div className="info-item">
            <p className="info-icon">
              <FontAwesomeIcon icon={faTruck} />
            </p>
            <h3>Envíos</h3>
            <p>
              Envío gratis en todos nuestros productos con un tiempo de entrega de 3
              a 7 días hábiles.
            </p>
          </div>
          <div className="info-item only-desktop">
            <p className="info-icon">
              <FontAwesomeIcon icon={faShieldAlt} />
            </p>
            <h3>Seguridad</h3>
            <p>
            ¿No te gusta? ¡Devuélvelo! En Kiero, velamos por tu seguridad, compra
              con confianza estamos contigo en cada momento.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Info;
