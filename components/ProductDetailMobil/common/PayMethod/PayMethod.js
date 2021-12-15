import React from "react";
import visa from "../../../../assets/img/productDetail/visa@2x.png";
import mastercard from "../../../../assets/img/productDetail/mastercard@2x.png";
import american from "../../../../assets/img/productDetail/american-express@2x.png";
import baloto from "../../../../assets/img/productDetail/baloto@2x.png";
import pse from "../../../../assets/img/productDetail/pse@2x.png";
import efecty from "../../../../assets/img/productDetail/efecty@2x.png";
import "./PayMethod.module.css";

import Image from "next/image";
import { fill } from "lodash";

const PayMethod = () => {
  return (
    <div id="PayMethod">
      <div className="titulo">
        <h3>Métodos de pago</h3>
      </div>
      <div className="link ">
        <div className="anullProperties">
          <Image
            className="min"
            loading="lazy"
            src={visa}
            alt="Tarjeta Visa"
            layout="fill"
          />
        </div>

        <div className="anullProperties">
          <Image
            loading="lazy"
            src={mastercard}
            alt="Tarjeta Mastercard"
            layout="fill"
          />
        </div>

        <div className="anullProperties">
          <Image
            loading="lazy"
            src={american}
            alt="Tarjeta American"
            layout="fill"
          />
        </div>
        <div className="anullProperties">
          <Image loading="lazy" src={baloto} alt="Baloto" layout="fill" />
        </div>
        <div className="anullProperties">
          <Image loading="lazy" src={pse} alt="PSE" layout="fill" />
        </div>
        <div className="anullProperties">
          <Image loading="lazy" src={efecty} alt="Efecty" layout="fill" />
        </div>
        {/* <img loading="lazy" src={visa} alt="Tarjeta Visa" />
        <img loading="lazy" src={mastercard} alt="Tarjeta Mastercard" />
        <img loading="lazy" src={american} alt="Tarjeta American" />
        <img loading="lazy" src={baloto} alt="Baloto" />
        <img loading="lazy" src={pse} alt="PSE" />
        <img loading="lazy" src={efecty} alt="Efecty" /> */}
      </div>
    </div>
  );
};

export default PayMethod;
