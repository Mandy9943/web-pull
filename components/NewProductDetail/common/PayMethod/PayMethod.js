import React from "react";
import visa from "../../../../assets/img/productDetail/visa@2x.png";
import mastercard from "../../../../assets/img/productDetail/mastercard@2x.png";
import american from "../../../../assets/img/productDetail/american-express@2x.png";
import baloto from "../../../../assets/img/productDetail/baloto@2x.png";
import pse from "../../../../assets/img/productDetail/pse@2x.png";
import efecty from "../../../../assets/img/productDetail/efecty@2x.png";
import "./PayMethod.module.css";

import Image from "next/image";

const PayMethod = ({ isDektop }) => {
  const payMethodClass = [""];
  if (isDektop) {
    payMethodClass.push("noBorder");
  }
  return (
    <div id="PayMethod" className={payMethodClass.join(" ")}>
      <div className="titulo">
        <h3>Métodos de pago</h3>
      </div>
      <div className="link ">
        <div className="imgContainer">
          <div className="anullProperties">
            <Image src={visa} alt="Tarjeta Visa" layout="fill" />
          </div>
        </div>
        <div className="imgContainer">
          <div className="anullProperties">
            <Image src={mastercard} alt="Tarjeta Mastercard" layout="fill" />
          </div>
        </div>

        <div className="imgContainer">
          <div className="anullProperties">
            <Image src={american} alt="Tarjeta American" layout="fill" />
          </div>
        </div>

        <div className="imgContainer">
          <div className="anullProperties">
            <Image src={baloto} alt="Baloto" layout="fill" />
          </div>
        </div>

        <div className="imgContainer">
          <div className="anullProperties">
            <Image src={pse} alt="PSE" layout="fill" />
          </div>
        </div>

        <div className="imgContainer">
          <div className="anullProperties">
            <Image src={efecty} alt="Efecty" layout="fill" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayMethod;
