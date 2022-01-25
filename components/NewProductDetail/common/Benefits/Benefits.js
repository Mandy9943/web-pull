import React from "react";
import Image from "next/image";
import { Grid } from "@material-ui/core";

import "./Benefits.module.css";
import benefit_01 from "../../../../assets/img/productDetail/01-benefit@2x.svg";
import benefit_02 from "../../../../assets/img/productDetail/02-benefit@2x.svg";
import benefit_03 from "../../../../assets/img/productDetail/03-benefit@2x.svg";
import benefit_04 from "../../../../assets/img/productDetail/Best Support 4 Graphic.svg";
import benefit_05 from "../../../../assets/img/productDetail/Best Discounts 05 Graphic.svg";

const Benefits = () => {
  return (
    <Grid
      container
      id="Benefits"
      alignItems="center"
      direction="row"
      justifyContent="center"
    >
      <h2>
        Beneficios de comprar con <div className="red">KIERO</div>
      </h2>
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className="benefit"
      >
        <Grid item sm={6} md={4} xs={12}>
          <div className="anullProperties">
            <Image
              src={benefit_01}
              alt="Envio gratuito y rapido a cualquier parte de Colombia"
              layout="fill"
            />
          </div>
          <h3>Envío Gratuito y Rápido a Cualquier Parte de Colombia</h3>
          <p>
            Con envío gratuito y un tiempo de entrega de 3 a 7 días hábiles,
            hacemos que sea fácil para los clientes obtener lo que quieren,
            cuando lo desean.
          </p>
        </Grid>
        <Grid item sm={6} md={4} xs={12}>
          <div className="anullProperties">
            <Image src={benefit_02} alt="Devolucion" layout="fill" />
          </div>
          <h3>Devolución de Dinero Garantizada</h3>
          <p>
            ¿No te gusta? ¡Devuélvelo! En Kiero, garantizamos su seguridad,
            compre con confianza y paz, estamos con usted en todo momento.
          </p>
        </Grid>
        <Grid item sm={6} md={4} xs={12}>
          <div className="anullProperties">
            <Image src={benefit_03} alt="Garantia" layout="fill" />
          </div>
          <h3>Garantía de 1 Mes Por Defecto de Fábrica</h3>
          <p>
            Este equipo ha sido cubierto con una garantía de un mes por
            cualquier defecto de fabrica.
          </p>
        </Grid>
        <Grid item sm={6} md={4} xs={12}>
          <div className="anullProperties">
            <Image src={benefit_04} alt="Soporte" layout="fill" />
          </div>
          <h3>El Mejor Servicio y Soporte de Ayuda</h3>
          <p>
            Un equipo dedicado a brindarle un servicio personalizado, ayudarle a
            encontrar las mejores ofertas, los productos que busca y todo lo que
            necesite. Le guiamos con su compra en un mercado hecho para usted.
          </p>
        </Grid>
        <Grid item sm={6} xs={12}>
          <div className="anullProperties">
            <Image src={benefit_05} alt="Descuento" layout="fill" />
          </div>
          <h3>Los Mejores Descuentos del Mercado</h3>
          <p>
            Un espacio de mercado innovador, donde la experiencia de compra gira
            en torno a su conveniencia y le brinda las mejores ofertas y
            promociones
          </p>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Benefits;
