import React, { Component } from "react";
<<<<<<< HEAD
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faPhoneSquare,
    faTruck,
    faShieldAlt
} from "@fortawesome/free-solid-svg-icons";
>>>>>>> Jorge
import "./Info.css";

class Info extends Component {
  render() {
    return (
      <div className="wrap-info-block">
        <div className="content-info-block">
          <div className="info-item">
<<<<<<< HEAD
            <span>icon</span>
=======
            <p className="info-icon">
              <FontAwesomeIcon icon={faPhoneSquare} />
            </p>
>>>>>>> Jorge
            <h3>Contacto</h3>
            <p>
              Sobre dudas, quejas y reclamos +57 (1) 5800817 (4) 604 6458 EXT 1103
            </p>
          </div>
          <div className="info-item">
<<<<<<< HEAD
            <span>icon</span>
            <h3>Seguridad</h3>
            <p>
              No te gusta? ¡Devuélvelo! En Kiero, velamos por tu seguridad, compra
              con confianza estamos contigo en cada momento.
            </p>
          </div>
          <div className="info-item">
            <span>icon</span>
=======
            <p className="info-icon">
              <FontAwesomeIcon icon={faTruck} />
            </p>
>>>>>>> Jorge
            <h3>Envíos</h3>
            <p>
              Envio gratis en todos nuestros productos con un tiempo de envio de 3
              a 7 días hábiles.
            </p>
          </div>
<<<<<<< HEAD
=======
          <div className="info-item">
            <p className="info-icon">
              <FontAwesomeIcon icon={faShieldAlt} />
            </p>
            <h3>Seguridad</h3>
            <p>
              No te gusta? ¡Devuélvelo! En Kiero, velamos por tu seguridad, compra
              con confianza estamos contigo en cada momento.
            </p>
          </div>
>>>>>>> Jorge
        </div>
      </div>
    );
  }
}

export default Info;
