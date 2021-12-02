import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import CartIcon from "../../../../assets/img/productDetail/CartIcon.svg";
import React from "react";
import Ripples from "react-ripples";
import "./CheckoutButton.css";
const CheckoutButton = ({ text, disabled, onClick }) => {
  let buttonClass = [""];
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
        <span className="icon-shoping-cart">
          <img src={CartIcon} alt="Shoping Cart" />
        </span>
      </div>
    </Ripples>
  );
};

export default CheckoutButton;
