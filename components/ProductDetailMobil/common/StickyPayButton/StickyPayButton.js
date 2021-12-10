import React from "react";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import "./StickyPayButton.module.css";
const StickyPayButton = () => {
  return (
    <div id="StickyPayButton">
      <CheckoutButton rounded text="Comprar" />
    </div>
  );
};

export default StickyPayButton;
