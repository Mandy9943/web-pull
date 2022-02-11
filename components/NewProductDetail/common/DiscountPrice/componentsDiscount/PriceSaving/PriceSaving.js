import React from "react";
import PropTypes from "prop-types";
import {
  handleFormatNumber,
  setDiscount,
} from "../../../../../../lib/functions";
import "./PriceSaving.module.css";
import { Box, Typography } from "@mui/material";

const PriceSaving = ({ priceProduct, quantityProduct }) => {
  let PriceDiscount = setDiscount(priceProduct, quantityProduct);
  let FirstPriceProduct = priceProduct * quantityProduct;
  let Saving = FirstPriceProduct - PriceDiscount;
  return (
    <div className="containerPriceSaving">
      <div className="wrapperPrice">
        <div className="wrapperCurrentPrice">
          <Typography variant="h4" component="div">
            <Box
              sx={{
                color: "#000",
                fontWeight: "800",
              }}
            >
              $ {handleFormatNumber(PriceDiscount)}
            </Box>
          </Typography>
        </div>
        <div className="wrapperOtherPrices">
          <Typography variant="body2" component="div">
            <Box
              sx={{
                color: "#969696",
                fontWeight: 500,
                marginRight: "20px",
              }}
            >
              Costaba ${handleFormatNumber(FirstPriceProduct)}
            </Box>
          </Typography>
          <Typography variant="body2" component="div">
            <Box
              sx={{
                color: "#cf0a2c",
                fontWeight: 500,
              }}
            >
              Ahorra ${handleFormatNumber(Saving)}
            </Box>
          </Typography>
        </div>
      </div>
    </div>
  );
};

PriceSaving.propTypes = {
  priceProduct: PropTypes.number.isRequired,
  quantityProduct: PropTypes.number.isRequired,
};

export default PriceSaving;
