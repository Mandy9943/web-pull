import React, { useCallback, useEffect, useState } from "react";
import spice from "../../../../assets/img/seller/spice.jpeg";
import cert from "../../../../assets/img/productDetail/Certified Icon.svg";
import ok from "../../../../assets/img/productDetail/Positive Round Checkbox Icon.svg";
import Image from "next/image";
import "./SellerInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { Box, Grid } from "@mui/material";
import { Typography } from "@mui/material";
import SectionTitle from "../SectionTitle/SectionTitle";

const SellerInfo = () => {
  const [conteo, setConteo] = useState(0);
  const handleConteo = useCallback(() => {
    let start = 0;
    const end = 547;
    if (start === end) return;
    let totalmilSecDur = 20;
    let incrementTime = (totalmilSecDur / end) * 1000;
    let timer = setInterval(() => {
      start += 1;
      setConteo(start);
      if (start >= end) clearInterval(timer);
    }, incrementTime);
  }, []);
  useEffect(() => {
    handleConteo();
  }, []);

  return (
    <Box
      className="SellerInfo"
      sx={{
        width: "100%",
        backgroundColor: "#fff",
      }}
    >
      <Grid
        container
        sx={{
          alignItems: "center",
          justifyContent: "center",
        }}
        xs={12}
        className="headerSeller"
      >
        <SectionTitle>Información sobre el vendedor</SectionTitle>
      </Grid>
      <Grid
        container
        className="containerSeller"
        sx={{
          alignItems: "center",
          justifyContent: "center",
          flexDirection: { md: "row", lg: "row" },
          flexWrap: { lg: "nowrap", md: "nowrap" },
        }}
      >
        <Grid
          container
          className="pictureSeller"
          sx={{
            alignItems: "center",
            justifyContent: "center",
            m: { xs: "0 3vw", sm: "0 5vw", md: "0 3vw", lg: "0 3vw" },
          }}
          xs={12}
          sm={12}
          md={6}
          lg={4}
        >
          <Grid xs={6} item>
            <div className="anullProperties">
              <Image
                src={spice}
                layout="fill"
                alt="Imagen del vendedor"
                className="pictureSeller_image"
              />
            </div>
          </Grid>
          <Grid xs={6} item>
            <Typography
              gutterBottom
              component="h4"
              sx={{
                fontStyle: "normal",
                fontWeight: "bold",
                color: "#5d5d5d",
                letterSpacing: "0",
                fontSize: { xs: "6vw", sm: "5.3vw", md: "3vw", lg: "2.3vw" },
                marginLeft: { xs: "5vw", sm: "4vw", md: "2.3vw", lg: "1vw" },
              }}
            >
              Spice Stock LLC.
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={8}>
          <Grid item className="certificate">
            <div className="anullProperties">
              <Image src={cert} layout="fill" alt="Certificado" />
            </div>
            <h6>Certificado de calidad</h6>
            <FontAwesomeIcon icon={faStar} className="starSellerIcon" />
            <FontAwesomeIcon icon={faStar} className="starSellerIcon" />
            <FontAwesomeIcon icon={faStar} className="starSellerIcon" />
            <FontAwesomeIcon icon={faStar} className="starSellerIcon" />
            <FontAwesomeIcon icon={faStar} className="starSellerIcon" />
          </Grid>
          <Grid container className="footerSeller">
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
  );
};

export default SellerInfo;
