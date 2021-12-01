import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Ripples from "react-ripples";
import "./CheckoutButton.css";
const CheckoutButton = ({ text }) => {
  return (
    <Ripples className="ripple-effect-detail-mobile">
      <div id="CheckoutButton">
        <span className="button-text">{text}</span>
        <span className="icon-shoping-cart">
          <FontAwesomeIcon icon={faShoppingCart} size="2x" />
        </span>
      </div>
    </Ripples>
  );
};

export default CheckoutButton;
