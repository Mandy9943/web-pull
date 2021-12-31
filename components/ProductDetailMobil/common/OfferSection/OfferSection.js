import React from "react";
import "./OfferSection.module.css";
const OfferSection = () => {
  return (
    <>
      <div className="containerOffer">
        <div className="headerOffer">
          <p className="titleOffer">OFERTA ESPECIAL</p>
        </div>
        <div className="contentOffer">
          <p>
            Obtén descuentos en tu compra de <strong>2 o más productos</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default OfferSection;
