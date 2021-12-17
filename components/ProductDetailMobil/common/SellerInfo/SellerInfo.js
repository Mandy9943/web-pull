import React, { useEffect, useState } from "react";
import spice from "../../../../assets/img/seller/spice.jpeg";
import cert from "../../../../assets/img/productDetail/Certified Icon.svg";
import ok from "../../../../assets/img/productDetail/Positive Round Checkbox Icon.svg";
import Image from "next/image";
import "./SellerInfo.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const SellerInfo = () => {
  const [conteo, setConteo] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = 547;
    if (start === end) return;
    let totalmilSecDur = 30;
    let incrementTime = (totalmilSecDur / end) * 1000;
    let timer = setInterval(() => {
      start += 1;
      setConteo(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, conteo);
  return (
    <section id="SellerInfo">
      <header>
        <h4>Información sobre el vendedor</h4>
      </header>
      <picture>
        <div className="anullProperties">
          <Image src={spice} layout="fill" alt="Imagen del vendedor" />
        </div>
        <h4>Spice Stock SAS.</h4>
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
            <h3>{conteo}</h3>
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
