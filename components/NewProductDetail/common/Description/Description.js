import React, { useState } from "react";
import "./Description.module.css";
import cerrado from "../../../../assets/img/productDetail/icono-desplegar@2x.svg";
import abierto from "../../../../assets/img/productDetail/l-nea-86@2x.svg";

import Image from "next/image";
import arrow from "../../../../assets/img/productDetail/arrow-down@2x.svg";

function Description({ product }) {
  const [collapse, setCollapse] = useState(false);
  const [desglosar, setDesglosar] = useState(cerrado);

  const handleOnClick = () => {
    collapse === false ? setDesglosar(abierto) : setDesglosar(cerrado);
    setCollapse(!collapse);
  };
  return (
    <div id="Description" className={collapse === false ? "closed" : "open"}>
      <div className="titulo" onClick={handleOnClick}>
        <h3>Descripción</h3>
        <div className="anullProperties">
          <Image
            loading="lazy"
            src={desglosar}
            alt="Icono del desglose"
            layout="fill"
          />
        </div>
      </div>
      {collapse === true ? (
        <div className="detalles">
          <p className="texto">{product.information}</p>
          <footer>
            <div className="anullProperties">
              <Image
                src={arrow}
                layout="fill"
                alt="Flecha abajo"
                onClick={handleOnClick}
              />
            </div>
          </footer>
        </div>
      ) : null}
    </div>
  );
}

export default Description;
