import React from "react";
import spice from "../../../../assets/img/seller/spice.jpeg";
import cert from "../../../../assets/img/productDetail/Certified Icon.svg";
import ok from "../../../../assets/img/productDetail/Positive Round Checkbox Icon.svg";
import Image from "next/image";
import "./SellerInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faTruck } from "@fortawesome/free-solid-svg-icons";

const SellerInfo = () => {
  return (
    <section id="SellerInfo">
      <header>
        <h4>Información sobre el vendedor</h4>
      </header>
      <picture>
        <div className="anullProperties">
          <Image src={spice} layout="fill" alt="Imagen del vendedor" />
        </div>
        <h4>Spice Stock LLC.</h4>
      </picture>
      <div className="certificate">
        <div className="anullProperties">
          <Image src={cert} layout="fill" />
        </div>
        <h6>Certificado de calidad</h6>
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
        <FontAwesomeIcon icon={faStar} />
      </div>
      <footer>
        <h3>Es uno de nuestros mejores vendedores</h3>
        <div className="separator" />
        <div className="info">
          <div className="block">
            <h3>543</h3>
            <p>Ventas en los últimos 2 meses</p>
          </div>
          <div className="block">
            <div className="anullProperties">
              <Image src={ok} alt="ok" layout="fill" />
            </div>
            <p>Ventas en los últimos 2 meses</p>
          </div>
          <div className="block">
            <div className="anullProperties">
              <Image src={ok} alt="ok" layout="fill" />
            </div>
            <p>Ventas en los últimos 2 meses</p>
          </div>
        </div>
        <div className="separator" />
      </footer>
    </section>
  );
};

export default SellerInfo;
