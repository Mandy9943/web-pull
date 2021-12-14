import React, { useState } from "react";
import Ripples from "react-ripples";
import "./BuyButton.css";


const CheckoutButton = ({ text, disabled, onClick, rounded}) => {
  let buttonClass = [""];
  if (rounded) {
    buttonClass.push("roundedButton");
  }
  if (disabled) {
    buttonClass.push("disableButton");
  }
  const handleOnClick = () => {
    if (!disabled && onClick) {
      onClick();
    }
  };

  return (
    <Ripples className="ripple-effect-detail-mobile">
      <div
        id="CheckoutButton"
        className={buttonClass.join(" ")}
        onClick={handleOnClick}
      >
        <span className="button-text">{text}</span>
      </div>
    </Ripples>
  );
};

export default CheckoutButton;
