import CartIcon from "../../../../assets/img/productDetail/CartIcon.svg";
import React from "react";
import Ripples from "react-ripples";
import "./CheckoutButton.module.css";

import Image from "next/image";
import { Button } from "@mui/material";
const CheckoutButton = ({
  text,
  disabled,
  onClick,
  rounded,
  notShowCar,
  secundary,
}) => {
  let buttonClass = [""];
  if (rounded) {
    buttonClass.push("roundedButton");
  }
  if (secundary) {
    buttonClass.push("secundaryColor");
    buttonClass.push("secundaryHeight");
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
    <Button
      id="CheckoutButton"
      className={buttonClass.join(" ")}
      onClick={handleOnClick}
    >
      <span className="button-text">{text}</span>
      {!notShowCar && (
        <span className="icon-shoping-cart">
          <div className="anullProperties">
            <Image src={CartIcon} alt="Shoping Cart" layout="fill" />
          </div>
        </span>
      )}
    </Button>
  );
};

export default CheckoutButton;
