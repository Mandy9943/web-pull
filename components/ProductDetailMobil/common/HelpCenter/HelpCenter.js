import React, { useState } from "react";
import cerrado from "../../../../assets/img/productDetail/icono-desplegar@2x.svg";
import abierto from "../../../../assets/img/productDetail/l-nea-86@2x.svg";
import "./HelpCenter.module.css";
import pregunta from "../../../../assets/img/productDetail/preguntas-frecuentes-icon@2x.svg";
import ayuda from "../../../../assets/img/productDetail/ayuda-profesional-icon@2x.svg";
import refund from "../../../../assets/img/productDetail/refund-policy-icon@2x.svg";
import Image from "next/image";

const HelpCenter = () => {
  const [collapse, setCollapse] = useState(false);
  const [desglosar, setDesglosar] = useState(cerrado);

  const handleOnClick = () => {
    collapse === false ? setDesglosar(abierto) : setDesglosar(cerrado);
    setCollapse(!collapse);
  };
  return (
    <div id="HelpCenter" className={collapse === false ? "closed" : "open"}>
      <div className="titulo" onClick={handleOnClick}>
        <h3>Centro de Ayuda</h3>
        <div className="anullProperties">
          <Image alt="Icono del desgrose" src={desglosar} layout="fill" />
        </div>
      </div>

        {collapse === true ? (
      <div className="detalles">
          <React.Fragment>
            <a href="#">
              <h3>Preguntas Frecuentes</h3>
              <div className="anullProperties">
                <Image
                  alt="Preguntas Frecuentes"
                  src={pregunta}
                  layout="fill"
                />
              </div>
            </a>
            <a href="#">
              <h3>Ayuda Profesional Del Equipo Kiero</h3>
              <div className="anullProperties">
                <Image
                  alt="Ayuda Profesional Del Equipo Kiero"
                  src={ayuda}
                  layout="fill"
                />
              </div>
            </a>
            <a href="#">
              <h3>Refund Policy</h3>
              <div className="anullProperties">
                <Image
                  alt="Refund Policy"
                  src={refund}
                  layout="fill"
                  className="refoundImg"
                />
              </div>
            </a>
          </React.Fragment>
      </div>
        ) : null}
    </div>
  );
};

export default HelpCenter;
