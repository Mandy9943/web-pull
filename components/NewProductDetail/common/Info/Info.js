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
    <Box
      id="InfoProductDetail"
      flexDirection="column"
      sx={{ backgroundColor: "#fff", padding: { xs: "0 20px", sm: "0 50px" } }}
    >
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
          paddingTop: "3vw",
          paddingBottom: "3vw",
        }}
      >
        <SectionTitle variant="h5">
          ¿Porqué Comprar con{" "}
          <Box
            sx={{
              color: "#cf0a2c",
              display: "inline",
            }}
            className="company"
          >
            Kiero?
          </Box>
        </SectionTitle>
      </Grid>
      <Grid container alignItems="center">
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            flexWrap: "nowrap",
            paddingBottom: "20px",
            paddingRight: "20px",
          }}
        >
          <div className="icon">
            <div className="anullProperties">
              <Image src={envios} alt="Envios gratis" layout="fill" />
            </div>
          </div>
          <div className="text">
            <Box>
              <Typography gutterBottom component="div" variant="subtitle2">
                Envío Gratuito
              </Typography>
            </Box>

            <Box>
              <Typography gutterBottom component="div" variant="body1">
                <Box
                  sx={{
                    color: "#5D5D5D",
                  }}
                >
                  Nuestros productos son importados. Entrega de 3 a 9 días
                  hábiles.
                </Box>
              </Typography>
            </Box>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            flexWrap: "nowrap",
            paddingBottom: "20px",
            paddingRight: "20px",
          }}
        >
          <div className="icon">
            <div className="anullProperties">
              <Image src={compras} alt="Compra Protegida" layout="fill" />
            </div>
          </div>
          <div className="text">
            <Box>
              <Typography gutterBottom component="div" variant="subtitle2">
                Compra Protegida
              </Typography>
            </Box>

            <Box>
              <Typography gutterBottom component="div" variant="body1">
                <Box
                  sx={{
                    color: "#5D5D5D",
                  }}
                >
                  En caso de que surja algún problema, te devolveremos el
                  dinero.
                </Box>
              </Typography>
            </Box>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          sx={{
            width: "100%",
            display: "flex",
            alignItems: "center",
            gap: "15px",
            flexWrap: "nowrap",
            paddingBottom: "20px",
          }}
        >
          <div className="icon">
            <div className="anullProperties">
              <Image src={garantia} alt="Garantia del Vendedor" layout="fill" />
            </div>
          </div>
          <div className="text">
            <Box>
              <Typography gutterBottom component="div" variant="subtitle2">
                Garantía del Vendedor
              </Typography>
            </Box>

            <Box>
              <Typography gutterBottom component="div" variant="body1">
                <Box
                  sx={{
                    color: "#5D5D5D",
                  }}
                >
                  Garantía por defecto de fábrica de (1) mes.
                </Box>
              </Typography>
            </Box>
          </div>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Info;
