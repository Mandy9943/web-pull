import { Box, Typography } from "@mui/material";
import React from "react";
import SectionTitle from "../SectionTitle/SectionTitle";
const OfferSection = () => {
  return (
    <>
      <Box sx={{ marginTop: "60px" }}>
        <SectionTitle color="#CF0A2C" center big variant="h3">
          OFERTA ESPECIAL
        </SectionTitle>
        <Box sx={{ padding: "0 29px 43px 29px" }}>
          <Typography gutterBottom component="div" variant="subtitle1">
            <Box
              sx={{
                color: "#969696",
                textAlign: "center",
              }}
            >
              Obtén descuentos en tu compra de{" "}
              <Box
                sx={{
                  display: "block",
                  color: "#000",
                }}
              >
                2 o más productos
              </Box>
            </Box>
          </Typography>
        </Box>
      </Box>
    </>
  );
};

export default OfferSection;
