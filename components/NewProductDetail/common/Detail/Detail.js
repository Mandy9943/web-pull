import React, { useState } from "react";
import PropTypes from "prop-types";
import "./Detail.module.css";
import cerrado from "../../../../assets/img/productDetail/icono-desplegar@2x.svg";
import abierto from "../../../../assets/img/productDetail/l-nea-86@2x.svg";
import arrow from "../../../../assets/img/productDetail/arrow-down@2x.svg";

import Image from "next/image";
import { Collapse, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";

const Detail = ({ product }) => {
  const [collapse, setCollapse] = useState(false);
  const [desglosar, setDesglosar] = useState(cerrado);

  const handleOnClick = () => {
    collapse === false ? setDesglosar(abierto) : setDesglosar(cerrado);
    setCollapse(!collapse);
  };

  return (
    <div id="DetailInfo" className={collapse === false ? "closed" : "open"}>
      <div className="titulo" onClick={handleOnClick}>
        <SectionTitle>Detalles del Producto</SectionTitle>
        <div className="anullProperties">
          <Image src={desglosar} alt="Icono del desglose" layout="fill" />
        </div>
      </div>
      <Collapse in={collapse === true}>
        <div className="detalles">
          <div className="detailContainer">
            <Typography variant="body1" component="h6">
              Marca
            </Typography>
            <h5>{product?.brand}</h5>
          </div>
          <div className="detailContainer">
            <Typography variant="body1" component="h6">
              Color
            </Typography>
            <h5>{product?.color !== null ? product.color : "Ninguno"}</h5>
          </div>
          <div className="detailContainer">
            <Typography variant="body1" component="h6">
              Modelo
            </Typography>
            <h5>{product?.model}</h5>
          </div>
          <div className="detailContainer">
            <Typography variant="body1" component="h6">
              Tamaño
            </Typography>
            <h5>
              {parseFloat(product?.length).toFixed(2)}&quot; - (
              {parseFloat(parseFloat(product?.length) * 2.54).toFixed(1)}cm)
            </h5>
          </div>
          <div className="detailContainer">
            <Typography variant="body1" component="h6">
              Ancho
            </Typography>
            <h5>
              {parseFloat(product?.width).toFixed(2)}&quot; - (
              {parseFloat(product?.width * 2.54).toFixed(1)}cm)
            </h5>
          </div>
          <div className="detailContainer">
            <Typography variant="body1" component="h6">
              Peso
            </Typography>
            <h5>
              {parseFloat(product?.weight).toFixed(2)} Lb - ({" "}
              {parseFloat(parseFloat(product?.weight) / 2.205).toFixed(1)}kg)
            </h5>
          </div>

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
};

Detail.propTypes = {
  product: PropTypes.object.isRequired,
};

export default Detail;
