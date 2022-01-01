import React from "react";
import { handleFormatNumber } from "../../../../../../lib/functions";
import "./PriceSaving.module.css";

const PriceSaving = ({ priceProduct, discountPercentage, quantityProduct }) => {
  let PriceDiscount =
    priceProduct *
    quantityProduct *
    (1 - parseFloat("." + discountPercentage).toFixed(2));
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
            Costaba $ {handleFormatNumber(FirstPriceProduct)}
          </p>
          <p className="savingPrice">
            Ahorra {"$"}
            {handleFormatNumber(Saving)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default PriceSaving;
