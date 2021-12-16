import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import "./OurClient.module.css";
import Image from "next/image";
import abierto from "../../../../assets/img/productDetail/l-nea-86@2x.svg";
import cerrado from "../../../../assets/img/productDetail/icono-desplegar@2x.svg";

const OurClient = (props) => {
  let count_opinion = 123;
  const [collapse, setCollapse] = useState(false);
  const [desglosar, setDesglosar] = useState(cerrado);

  const handleOnClick = () => {
    collapse === false ? setDesglosar(abierto) : setDesglosar(cerrado);
    setCollapse(!collapse);
  };
  return (
    <section id="OurClient" className={collapse === false ? "closed" : "open"}>
      <header onClick={handleOnClick}>
        <div className="left">
          <h4>
            Nuestros Clientes de <div className="company">KIERO</div>
          </h4>
          <div className="clasification">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <p>({count_opinion} Opiniones)</p>
          </div>
        </div>
        <div className="right">
          <div className="anullProperties">
            <Image src={desglosar} alt="Icono del desglose" layout="fill" />
          </div>
        </div>
      </header>
    </section>
  );
};

export default OurClient;
