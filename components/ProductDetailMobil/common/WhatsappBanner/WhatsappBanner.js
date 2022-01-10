import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./WhatsappBanner.module.css";

const WhatsappBanner = ({ close, productId }) => {
  return (
    <div id="WhatsappBanner">
      <div className="closeIcon" onClick={close}>
        <FontAwesomeIcon icon={faTimes} />
      </div>

      <a
        rel="noopener noreferrer"
        target="_blank"
        href={`https://wa.me/573226569293/?text=Hola estoy interesado sobre el producto “https://kiero.co/detalle/${productId}" y quiero saber más información, me pueden ayudar?`}
        className="linkToWhatsapp"
      >
        <div className="info">
          <span>Ayuda en linea</span>
          <span className="whatsappIcon">
            <FontAwesomeIcon icon={faWhatsapp} />
          </span>
          <span>+57 322 6569293</span>
        </div>
      </a>
    </div>
  );
};

export default WhatsappBanner;
