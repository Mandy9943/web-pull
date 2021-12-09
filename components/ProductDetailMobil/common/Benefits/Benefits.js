import React from "react";
import "./Benefits.module.css";
import benefit_01 from "../../../../assets/img/productDetail/01-benefit@2x.svg";
import benefit_02 from "../../../../assets/img/productDetail/02-benefit@2x.svg";
import benefit_03 from "../../../../assets/img/productDetail/03-benefit@2x.svg";

import Image from "next/image";

const Benefits = () => {
  return (
    <div id="Benefits">
      <div className="beneficio">
        <h1>
          Beneficios de comprar con <div className="red">KIERO</div>
        </h1>
        <div className="anullProperties">
          <Image
            loading="lazy"
            src={benefit_01}
            alt="Envio gratuito y rapido a cualquier parte de Colombia"
            layout="fill"
          />
        </div>
        <h3>Envío gratuito y rápido a cualquier parte de Colombia</h3>
        <p>
          Con envío gratuito y un tiempo de entrega de 3 a 7 días hábiles, hacemos que sea fácil para los clientes obtener lo que quieren, cuando lo desean.
        </p>
        <div className="anullProperties">
          <Image
            loading="lazy"
            src={benefit_02}
            alt="Devolucion"
            layout="fill"
          />
        </div>
        <h3>Devolución de dinero garantizada</h3>
        <p>
          ¿No te gusta? ¡Devuélvelo! En Kiero, garantizamos su seguridad, compramos con confianza y paz, estamos con usted en todo momento.
        </p>
        <div className="anullProperties">
          <Image loading="lazy" src={benefit_03} alt="Garantia" layout="fill" />
        </div>
        <h3>Garantía de 1 mes por defecto de fábrica</h3>

        <p>
          Este equipo ha sido cubierto con una garantía de un mes por cualquier defecto de fabrica.
        </p>
      </div>
    </div>
  );
};

export default Benefits;
