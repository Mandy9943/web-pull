import CartIcon from "../../../../assets/img/productDetail/CartIcon.svg";
import React from "react";
import Ripples from "react-ripples";
import "./CheckoutButton.css";

import Image from "next/image";
const CheckoutButton = ({ text, disabled, onClick, rounded }) => {
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
        <span className="icon-shoping-cart">
          <div className="anullProperties">
            <Image
              loading="lazy"
              src={CartIcon}
              alt="Shoping Cart"
              layout="fill"
            />
          </div>
        </span>
      </div>
    </Ripples>
  );
};

export default CheckoutButton;
