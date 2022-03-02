import React, { useState } from "react";
import "./Information.module.css";
import cerrado from "../../../../assets/img/productDetail/icono-desplegar@2x.svg";
import abierto from "../../../../assets/img/productDetail/l-nea-86@2x.svg";

import Image from "next/image";
import arrow from "../../../../assets/img/productDetail/arrow-down@2x.svg";
import { Collapse, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";

function Information({ product }) {
  const [collapse, setCollapse] = useState(false);
  const [desglosar, setDesglosar] = useState(cerrado);

  const handleOnClick = () => {
    collapse === false ? setDesglosar(abierto) : setDesglosar(cerrado);
    setCollapse(!collapse);
  };
  return (
    <div id="Information" className={collapse === false ? "closed" : "open"}>
      <div className="titulo" onClick={handleOnClick}>
        <SectionTitle percent="60">Información</SectionTitle>

        <div className="anullProperties">
          <Image
            loading="lazy"
            src={desglosar}
            alt="Icono del desglose"
            layout="fill"
          />
        </div>
      </div>
      <Collapse in={collapse === true}>
        <div className="detalles">
          <Typography component="div" variant="body1">
            <p dangerouslySetInnerHTML={{ __html: product.information }} />
          </Typography>
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
      </Collapse>
    </div>
  );
}

export default Information;
