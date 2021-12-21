import react from "react";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import OfferSection from "../OfferSection/OfferSection";
import Discount from "./componentsDiscount/Discount/Discount";
import DivindingLine from "../DivindingLine/DivindingLine";
import PriceSaving from "./componentsDiscount/PriceSaving/PriceSaving";

import "./DiscountPrice.module.css";
const DiscountPrice = () => {
  return (
    <div className="containerDiscountPrice">
      <OfferSection />
      <Discount />
      <DivindingLine />
      <PriceSaving />
      <div className="widthButton">
        <CheckoutButton text="Comprar" rounded secundary notShowCar />
      </div>
    </div>
  );
};

export default DiscountPrice;
