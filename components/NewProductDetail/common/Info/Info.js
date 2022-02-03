import React from "react";
import "./Info.module.css";
import envios from "../../../../assets/img/productDetail/delivery-icon-@2x.svg";
import compras from "../../../../assets/img/productDetail/union-2@2x.svg";
import garantia from "../../../../assets/img/productDetail/union-3@2x.svg";

import Image from "next/image";
import { Grid, Box, Typography } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";

const Info = () => {
  return (
    <Box id="InfoProductDetail" flexDirection="column">
      <Grid
        xs={12}
        container
        item
        alignItems="center"
        justifyContent="center"
        flexWrap
        className="title"
        sx={{
          flexWrap: "nowrap",
          paddingTop: "5vw",
          marginBottom: "4vw",
        }}
      >
        <SectionTitle>
          Porqué Comprar con{" "}
          <Box
            sx={{
              color: "#cf0a2c",
              display: "inline",
            }}
            className="company"
          >
            Kiero
          </Box>
        </SectionTitle>
      </Grid>
      <Grid
        container
        rowSpacing={{ xs: 1, md: 2 }}
        className="info"
        alignItems="center"
        justifyContent="center"
      >
        <Grid item sm={4} xs={12} className="envios">
          <div className="icon">
            <div className="anullProperties">
              <Image src={envios} alt="Envios gratis" layout="fill" />
            </div>
          </div>
          <div className="text">
            <h3>Envío Gratuito</h3>
            <p>
              Nuestros productos son importados. Entrega de 3 a 9 días hábiles.
            </p>
          </div>
        </Grid>
        <Grid item sm={4} xs={12} className="envios">
          <div className="icon">
            <div className="anullProperties">
              <Image src={compras} alt="Compra Protegida" layout="fill" />
            </div>
          </div>
          <div className="text">
            <h3>Compra Protegida</h3>
            <p>
              En caso de que surja algún problema, te devolveremos el dinero.
            </p>
          </div>
        </Grid>
        <Grid item sm={4} xs={12} className="envios">
          <div className="icon">
            <div className="anullProperties">
              <Image src={garantia} alt="Garantia del Vendedor" layout="fill" />
            </div>
          </div>
          <div className="text">
            <h3>Garantía del Vendedor</h3>
            <p>Garantía por defecto de fábrica de (1) mes.</p>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Info;
