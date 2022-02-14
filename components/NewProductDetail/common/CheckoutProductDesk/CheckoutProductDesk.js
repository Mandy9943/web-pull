import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import Counter from "../Counter/Counter";
import PayMethod from "../PayMethod/PayMethod";
import WhatsappBanner from "../WhatsappBanner/WhatsappBanner";
import "./CheckoutProductDesk.module.css";
import { styled } from "@mui/material/styles";
const CheckoutProductDeskWrapper = styled(Paper)(() => ({
  width: "100%",
  boxSizing: "border-box",
  borderRadius: "10px",
  justifyContent: "space-between",
  padding: "30px 20px",
  marginBottom: "12px",
  position: "relative",
}));

useEffect(() => {
  //   const scrollDiv = document.querySelector("#CheckoutProductDesk");
  //   scrollDiv.addEventListener("scroll", event => {
  //     console.log("Top",scrollDiv.scrollTop,"Bottom",scrollDiv.scrollBottom)
  // }, { passive: true });
  // let coords = scrollDiv.getBoundingClientRect();
  // console.log("coords",coords.top)
}, []);

const CheckoutProductDesk = ({
  title,
  price,
  stock,
  discount_percentage,
  onClickBuy,
}) => {
  const count = Math.ceil(Math.random() * 50);
  return (
    <CheckoutProductDeskWrapper elevation={4} id="CheckoutProductDesk">
      <div className="title">
        <h1>{title.length > 80 ? title.substr(0, 80) + "..." : title}</h1>
      </div>
      <span className="oldPrice">
        ${" "}
        {parseInt(
          price / (1 - parseFloat("." + discount_percentage).toFixed(2))
        )
          .toString()
          .split(".")[0]
          .replace(/(.)(?=(\d{3})+$)/g, "$1.")}
      </span>
      <div className="price">
        <span className="realPrice">
          ${" "}
          {price
            .toString()
            .split(".")[0]
            .replace(/(.)(?=(\d{3})+$)/g, "$1.")}{" "}
          {/* <p>COP</p> */}
        </span>
        <span className="percent">
          -{parseFloat(discount_percentage).toFixed(0)}% OFF
        </span>
      </div>
      <div className="count">
        <div className="countText">
          <h3>Solo quedan</h3>
          {stock > 0 ? (
            <p>{stock} en stock </p>
          ) : (
            <p className="noAvilable">(Stock Agotado)</p>
          )}
        </div>
        <div className="countCounter">
          <Counter stock={stock} />
        </div>
      </div>
      <div className="buyButton">
        <CheckoutButton
          text="Comprar"
          disabled={stock <= 0}
          onClick={onClickBuy}
          rounded
        />
      </div>
      <div className="purchased">
        <p>
          {" "}
          <span className="number">{count}</span> Personas han comprado este
          producto recientemente.
        </p>
      </div>
      <PayMethod isDektop />
      <WhatsappBanner isDesktop />
    </CheckoutProductDeskWrapper>
  );
};

export default CheckoutProductDesk;
