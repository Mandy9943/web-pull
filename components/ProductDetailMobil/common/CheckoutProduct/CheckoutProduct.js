import React from "react";
import CheckoutButton from "../CheckoutButton/CheckoutButton";
import Counter from "../Counter/Counter";
import "./CheckoutProduct.css";
const CheckoutProduct = ({ price, stock }) => {
  return (
    <div id="CheckoutProductMobil">
      <div className="price">
        <span>
          ${" "}
          {price
            .toString()
            .split(".")[0]
            .replace(/(.)(?=(\d{3})+$)/g, "$1.")}
        </span>
      </div>
      <div className="discount">
        <span className="old-price">
          {(price * 1.428571428571429)
            .toString()
            .split(".")[0]
            .replace(/(.)(?=(\d{3})+$)/g, "$1.")}
        </span>
        <span className="percent">-30% OFF</span>
      </div>
      <div className="buyButton">
        <CheckoutButton text="Comprar" onClick={() => alert("buy")} />
      </div>
      <div className="count">
        <div className="count-text">
          <h3>Cantidad</h3>
          <p>(Stock Disponible {stock})</p>
        </div>
        <div className="count-counter">
          <Counter />
        </div>
      </div>
    </div>
  );
};

export default CheckoutProduct;
