import React from "react";
import Image from "next/image";
import "./Discount.module.css";

import { PropTypes } from "prop-types";
import { Box, Typography } from "@mui/material";

const Discount = ({
  quantityProduct,
  discountPercentage,
  images,
  altImg,
  movil = true,
}) => {
  const desktopRender = (
    <Box
      sx={{ display: "flex", flexDirection: "row", alignItems: "end" }}
      className="wrapperDiscount"
    >
      <Typography variant="h3" component="div">
        <Box
          sx={{
            color: "#5f5f5f",
            fontWeight: "900",
            marginRight: "20px",
          }}
        >
          x{quantityProduct}
        </Box>
      </Typography>
      <div className="wrapperImage">
        <div className="wrapperAnullProperties">
          <div className="anullProperties">
            <Image alt={altImg} src={images[0].url} layout="fill" />
          </div>
        </div>
      </div>
      <div className="wrapperPercent">
        <Typography variant="h1" component="div">
          <Box
            sx={{
              color: "#1fc2e5",
              fontWeight: "800",
            }}
          >
            {discountPercentage}%
          </Box>
        </Typography>

        <Typography variant="subtitle1" component="div">
          <Box
            sx={{
              color: "#1fc2e5",
              fontWeight: "700",
              letterSpacing: "1px",
            }}
          >
            DESCUENTO
          </Box>
        </Typography>
      </div>
    </Box>
  );
  const movilRender = (
    <>
      <div className="wrapperDiscount wrapperPercent">
        <Typography variant="h1" component="div">
          <Box
            sx={{
              color: "#1fc2e5",
              fontWeight: "800",
            }}
          >
            {discountPercentage}%
          </Box>
        </Typography>
        <Typography variant="subtitle1" component="div">
          <Box
            sx={{
              color: "#1fc2e5",
            }}
          >
            DESCUENTO
          </Box>
        </Typography>
      </div>
      <div className=" wrapperDiscount wrapperImage">
        <div className="wrapperAnullProperties">
          <div className="anullProperties">
            <Image alt={altImg} src={images[0].url} layout="fill" />
          </div>
        </div>
        <Typography variant="h3" component="div">
          <Box
            sx={{
              color: "#5f5f5f",
              fontWeight: "900",
              marginRight: "20px",
            }}
          >
            x{quantityProduct}
          </Box>
        </Typography>
      </div>
    </>
  );
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        padding: { lg: "0", md: "0 20px" },
        backgroundColor: "white",
        paddingBottom: "20px",
        marginRight: { md: "0", lg: "69px" },
      }}
      className="containerDiscount"
    >
      {movil === true ? movilRender : desktopRender}
    </Box>
  );
};

Discount.propTypes = {
  images: PropTypes.arrayOf(PropTypes.object).isRequired,
  quantityProduct: PropTypes.number.isRequired,
  altImg: PropTypes.string.isRequired,
  discountPercentage: PropTypes.number.isRequired,
};
export default Discount;
