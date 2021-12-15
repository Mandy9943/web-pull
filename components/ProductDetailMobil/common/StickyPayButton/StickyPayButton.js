import React from "react";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import "./StickyPayButton.module.css";
const StickyPayButton = ({ onClickBuy }) => {
  return (
    <div id="StickyPayButton">
      <CheckoutButton rounded text="Comprar" onClick={onClickBuy} />
    </div>
  );
};

export default StickyPayButton;
