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
    // let start = 0;
    let start = 547;
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
          lg={6}
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
                fontSize: { xs: "6vw", sm: "5.3vw", md: "3vw", lg: "3vw" },
                marginLeft: { xs: "5vw", sm: "4vw", md: "2.3vw", lg: "1vw" },
              }}
            >
              Spice Stock LLC.
            </Typography>
          </Grid>
        </Grid>
        <Grid container xs={12} sm={12} md={6} lg={6} className="infoSeller">
          <Grid
            container
            className="certificate"
            sx={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Grid
              sx={{
                alignItems: "center",
                justifyContent: "center",
                width: "auto",
                marginRight: { xs: "2vw", sm: "1vw" },
              }}
            >
              <div className="anullProperties">
                <Image
                  src={cert}
                  layout="fill"
                  alt="Certificado"
                  className="certificateSeller_image"
                />
              </div>
            </Grid>
            <Typography
              component="h6"
              sx={{
                fontStyle: "normal",
                color: "#1fc2e6",
                fontWeight: "bold",
                paddingRight: { xs: "1vw" },
                fontSize: { xs: "4vw", sm: "2.5vw", md: "1.5vw", lg: "2vw" },
              }}
            >
              Certificado de calidad
            </Typography>

            <FontAwesomeIcon
              icon={faStar}
              className="starSellerIcon"
              color="#1fc2e6"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="starSellerIcon"
              color="#1fc2e6"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="starSellerIcon"
              color="#1fc2e6"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="starSellerIcon"
              color="#1fc2e6"
            />
            <FontAwesomeIcon
              icon={faStar}
              className="starSellerIcon"
              color="#1fc2e6"
            />
          </Grid>
          <Grid
            container
            className="footerSeller"
            sx={{
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "column",
              marginX: { xs: "3vw", sm: "2vw" },
            }}
          >
            <Typography
              gutterBottom
              xs={12}
              sx={{
                fontStyle: "normal",
                fontWeight: "normal",
                color: "#5d5d5d",
                whiteSpace: "nowrap",
                fontSize: { xs: "4vw", sm: "2.5vw", md: "1.5vw", lg: "2vw" },
              }}
            >
              Es uno de nuestros mejores vendedores
            </Typography>
            <Typography
              component="div"
              sx={{
                width: { xs: "90%", md: "100%" },
                border: "1px solid #d1d1d1",
              }}
            />
            <Grid container spacing={1} sx={{ flexDirection: "row" }}>
              <Grid
                container
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
                xs={4}
                className="block"
              >
                <Typography
                  sx={{
                    fontStyle: "normal",
                    fontWeight: { xs: "700", md: "700", sm: "bold", lg: "700" },
                    color: "#000",
                    fontSize: { xs: "4vw", sm: "4vw", md: "2.7vw", lg: "2vw" },
                  }}
                  component="h3"
                >
                  {conteo}
                </Typography>
                <Typography
                  component="p"
                  sx={{
                    fontSize: { xs: "3vw", sm: "3vw", md: "1.5vw", lg: "2vw" },
                    fontWeight: { xs: "500", sm: "bold", md: "700", lg: "700" },
                    letterSpacing: "0.02rem",
                    textAlign: "center",
                    color: { xs: "#000", sm: "#969696" },
                  }}
                >
                  Ventas en los últimos 2 meses.
                </Typography>
              </Grid>
              <Grid
                container
                xs={4}
                className="block"
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <div className="anullProperties">
                  <Image src={ok} alt="ok" layout="fill" />
                </div>

                <Typography
                  component="p"
                  sx={{
                    fontSize: { xs: "3vw", sm: "3vw", md: "1.5vw", lg: "2vw" },
                    fontWeight: { xs: "500", sm: "bold", md: "700", lg: "700" },
                    letterSpacing: "0.02rem",
                    textAlign: "center",
                    color: { xs: "#000", sm: "#969696" },
                  }}
                >
                  Brinda buena atención.
                </Typography>
              </Grid>
              <Grid
                container
                xs={4}
                className="block"
                sx={{
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "flex-end",
                }}
              >
                <div className="anullProperties">
                  <Image src={ok} alt="ok" layout="fill" />
                </div>
                <Typography
                  component="p"
                  sx={{
                    fontSize: { xs: "3vw", sm: "3vw", md: "1.5vw", lg: "2vw" },
                    fontWeight: { xs: "500", sm: "bold", md: "700", lg: "700" },
                    letterSpacing: "0.02rem",
                    textAlign: "center",
                    color: { xs: "#000", sm: "#969696" },
                  }}
                >
                  Entrega gratis y a tiempo.
                </Typography>
              </Grid>
            </Grid>
            <Typography
              component="div"
              sx={{
                width: { xs: "90%", md: "100%" },
                border: "1px solid #d1d1d1",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SellerInfo;
