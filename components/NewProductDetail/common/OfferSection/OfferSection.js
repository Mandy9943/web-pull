import { Box, Typography } from "@mui/material";
import React from "react";
const OfferSection = () => {
  return (
    <>
      <Box sx={{ marginTop: "60px" }}>
        <Box>
          <Typography gutterBottom component="div">
            <Box
              sx={{
                color: "#cf0a2c",
                fontWeight: 900,
                textAlign: "center",
                letterSpacing: "0.1rem",
                fontSize: { xs: 28, sm: 45 },
              }}
            >
              OFERTA ESPECIAL
            </Box>
          </Typography>
        </Box>
        <Box sx={{ padding: "0 29px 43px 29px" }}>
          <Typography gutterBottom component="div">
            <Box
              sx={{
                color: "#969696",
                fontWeight: "bold",
                textAlign: "center",
                lineHeight: { xs: "20px", sm: "39px" },
                fontSize: { xs: 16, sm: 32 },
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
