import React, { useState } from "react";
import "./Subscription.module.css";
import recurso from "../../../../assets/img/productDetail/recurso-7-1@2x.svg";
import Image from "next/image";

const Subscription = () => {
  const [email, setEmail] = useState("");
  const handleChange = (e) => {
    setEmail(e.target.value);
  };
  const handleClick = (e) => {
    e.preventDefault();
    alert("Clicked");
    return 0;
  };

  return (
    <div id="Subscription">
      <div className="title">
        <h3>Mantente al día con nuestras mejores ofertas</h3>
        <p>
          También odiamos el spam. Solo le enviaremos correos electrónicos si
          tenemos noticias increíbles, ofertas especiales o descuentos que
          valgan la pena.
        </p>
      </div>
      <div className="anullProperties">
        <Image layout="fill" src={recurso} alt="Recurso" />
      </div>
      <div className="button">
        <input type="email" placeholder="Correo" onChange={handleChange} />
        <button onClick={handleClick}>SUSCRIBIRSE</button>
      </div>
    </div>
  );
};

export default Subscription;
