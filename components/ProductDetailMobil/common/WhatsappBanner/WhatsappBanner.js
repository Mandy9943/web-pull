import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./WhatsappBanner.module.css";
const WhatsappBanner = ({ close }) => {
  return (
    <div id="WhatsappBanner">
      <div className="closeIcon" onClick={close}>
        <FontAwesomeIcon icon={faTimes} />
      </div>
      <div className="info">
        <span>Ayuda en linea</span>
        <span className="whatsappIcon">
          <FontAwesomeIcon icon={faWhatsapp} />
        </span>
        <span>
          <a
            href={`https://wa.me/573128246497/?text=Hola estoy interesado sobre el producto “https://kiero.co/detalle/74427014“`}
          >
            +57 312 0246497
          </a>
        </span>
      </div>
    </div>
  );
};

export default WhatsappBanner;
