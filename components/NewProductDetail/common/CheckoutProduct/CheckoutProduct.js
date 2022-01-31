import React from "react";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import Counter from "../Counter/Counter";
import "./CheckoutProduct.module.css";
import PropTypes from "prop-types";
import { Box } from "@mui/system";

const CheckoutProduct = ({
  price,
  stock,
  discount_percentage,
  onClickBuy,
  table,
}) => {
  const count = Math.ceil(Math.random() * 50);
  return (
    <Box
      id="CheckoutProductMobil"
      sx={table ? { marginBottom: "12px", borderRadius: "10px" } : {}}
    >
      <div className="productPrice">
        <div className="price">
          <span>
            ${" "}
            {price
              .toString()
              .split(".")[0]
              .replace(/(.)(?=(\d{3})+$)/g, "$1.")}{" "}
            {/* <p>COP</p> */}
          </span>
        </div>
        <div className="discount">
          <span className="percent">
            -{parseFloat(discount_percentage).toFixed(0)}% OFF
          </span>
          <span className="old-price">
            ${" "}
            {parseInt(
              price / (1 - parseFloat("." + discount_percentage).toFixed(2))
            )
              .toString()
              .split(".")[0]
              .replace(/(.)(?=(\d{3})+$)/g, "$1.")}
          </span>
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
      <div className="count">
        <div className="count-text">
          <h3>Solo quedan</h3>
          {stock > 0 ? (
            <p>{stock} en stock </p>
          ) : (
            <p className="no-avilable">(Stock Agotado)</p>
          )}
        </div>
        <div className="count-counter">
          <Counter stock={stock} />
        </div>
      </div>
      <div className="purchased">
        <p>
          {" "}
          <span className="number">{count}</span> Personas han comprado este
          producto recientemente.
        </p>
      </div>
    </Box>
  );
};

export default CheckoutProduct;

CheckoutProduct.propTypes = {
  price: PropTypes.number.isRequired,
  stock: PropTypes.number.isRequired,
  discount_percentage: PropTypes.number.isRequired,
  onClickBuy: PropTypes.func.isRequired,
  table: PropTypes.bool,
};
