import React from "react";
import PropTypes from "prop-types";
import {
  handleFormatNumber,
  setDiscount,
} from "../../../../../../lib/functions";
import "./PriceSaving.module.css";

const PriceSaving = ({ priceProduct, quantityProduct }) => {
  let PriceDiscount = setDiscount(priceProduct, quantityProduct);
  let FirstPriceProduct = priceProduct * quantityProduct;
  let Saving = FirstPriceProduct - PriceDiscount;
  return (
    <div className="containerPriceSaving">
      <div className="wrapperPrice">
        <div className="wrapperCurrentPrice">
          <p className="currentPrice">$ {handleFormatNumber(PriceDiscount)}</p>
        </div>
        <div className="wrapperOtherPrices">
          <p className="lastPrice">
            Costaba ${handleFormatNumber(FirstPriceProduct)}
          </p>
          <p className="savingPrice">Ahorra ${handleFormatNumber(Saving)}</p>
        </div>
      </div>
    </div>
  );
};

PriceSaving.PropTypes = {
  priceProduct: PropTypes.number.isRequired,
  quantityProduct: PropTypes.number.isRequired,
};

export default PriceSaving;
