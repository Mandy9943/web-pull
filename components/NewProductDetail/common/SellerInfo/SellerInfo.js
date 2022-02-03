import React, { useEffect, useState } from "react";
import spice from "../../../../assets/img/seller/spice.jpeg";
import cert from "../../../../assets/img/productDetail/Certified Icon.svg";
import ok from "../../../../assets/img/productDetail/Positive Round Checkbox Icon.svg";
import Image from "next/image";
import "./SellerInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { createTheme, ThemeProvider, Box, Grid } from "@mui/material";

const SellerInfo = () => {
  const [conteo, setConteo] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = 547;
    if (start === end) return;
    let totalmilSecDur = 20;
    let incrementTime = (totalmilSecDur / end) * 1000;
    let timer = setInterval(() => {
      start += 4;
      setConteo(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);
  }, []);

  const theme = createTheme({
    breakpoints: {
      values: {
        mobile: 0,
        tablet: 640,
        laptop: 1025,
        desktop: 1200,
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Box id="SellerInfo">
        <Grid
          container
          sx={{ alignItems: "center", justifyContent: "center" }}
          mobile={12}
          className="header"
        >
          <h4>Información sobre el vendedor</h4>
        </Grid>
        <Grid container className="container">
          <Grid
            container
            className="picture"
            sx={{ alignItems: "center", justifyContent: "center" }}
            mobile={12}
            tablet={12}
            desktop={6}
          >
            <div className="anullProperties">
              <Image src={spice} layout="fill" alt="Imagen del vendedor" />
            </div>
            <h4>Spice Stock SAS.</h4>
          </Grid>
          <Grid container mobile={12} tablet={12} desktop={6}>
            <Grid item className="certificate">
              <div className="anullProperties">
                <Image src={cert} layout="fill" alt="Certificado" />
              </div>
              <h6>Certificado de calidad</h6>
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </Grid>
            <Grid container className="footer">
              <h3>Es uno de nuestros mejores vendedores</h3>
              <hr />
              <Grid className="info">
                <Grid className="block">
                  <h3>{conteo}</h3>
                  <p>Ventas en los últimos 2 meses.</p>
                </Grid>
                <Grid className="block">
                  <div className="anullProperties">
                    <Image src={ok} alt="ok" layout="fill" />
                  </div>
                  <p>Brinda buena atención.</p>
                </Grid>
                <Grid className="block">
                  <div className="anullProperties">
                    <Image src={ok} alt="ok" layout="fill" />
                  </div>
                  <p>Entrega gratis y a tiempo.</p>
                </Grid>
              </Grid>
              <hr />
            </Grid>
          </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
  );
};

export default SellerInfo;
