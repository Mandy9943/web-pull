import React from "react";
import Image from "next/image";
import { Grid } from "@material-ui/core";
import { Box } from "@mui/material";
import "./Benefits.module.css";
import benefit_01 from "../../../../assets/img/productDetail/01-benefit@2x.svg";
import benefit_02 from "../../../../assets/img/productDetail/02-benefit@2x.svg";
import benefit_03 from "../../../../assets/img/productDetail/03-benefit@2x.svg";
import benefit_04 from "../../../../assets/img/productDetail/Best Support 4 Graphic.svg";
import benefit_05 from "../../../../assets/img/productDetail/Best Discounts 05 Graphic.svg";
import SectionTitle from "../SectionTitle/SectionTitle";

const Benefits = () => {
  return (
    <Grid
      container
      id="Benefits"
      alignItems="center"
      direction="row"
      justifyContent="center"
      sx={{
        marginBottom: "50px",
      }}
    >
      <SectionTitle variant="h4" center benefit>
        Beneficios de comprar con <div className="red">KIERO</div>
      </SectionTitle>

      <Grid
        container
        alignItems="center"
        justifyContent="center"
        className="benefit"
      >
        <Grid item sm={12} md={4} xs={12}>
          <Box
            sx={{ height: { xs: "auto", sm: "400px", xs: "300px" } }}
            className="benefitContainer"
          >
            <div className="anullProperties container">
              <Image
                src={benefit_01}
                alt="Envio gratuito y rapido a cualquier parte de Colombia"
                layout="fill"
              />
            </div>
            <Box
              classname="auto"
              sx={{
                height: { xs: "auto", sm: "75px", md: "75" },
                marginBottom: "5px",
              }}
            >
              <h3>Envío Gratuito y Rápido a Cualquier Parte de Colombia</h3>
            </Box>

            <p>
              Con envío gratuito y un tiempo de entrega de 3 a 7 días hábiles,
              hacemos que sea fácil para los clientes obtener lo que quieren,
              cuando lo desean.
            </p>
          </Box>
        </Grid>
        <Grid item sm={6} md={4} xs={12}>
          <Box
            sx={{ height: { xs: "350px", sm: "400px" } }}
            className="benefitContainer"
          >
            <div className="anullProperties container">
              <Image src={benefit_02} alt="Devolucion" layout="fill" />
            </div>
            <Box
              sx={{ height: { xs: "auto", sm: "75px" }, marginBottom: "5px" }}
            >
              <h3>Devolución de Dinero Garantizada</h3>
            </Box>
            <p>
              ¿No te gusta? ¡Devuélvelo! En Kiero, garantizamos su seguridad,
              compre con confianza y paz, estamos con usted en todo momento.
            </p>
          </Box>
        </Grid>

        <Grid item sm={6} md={4} xs={12}>
          <Box
            sx={{ height: { xs: "350px", sm: "400px" } }}
            className="benefitContainer"
          >
            <div className="anullProperties container">
              <Image src={benefit_03} alt="Garantia" layout="fill" />
            </div>
            <Box
              sx={{ height: { xs: "auto", sm: "75px" }, marginBottom: "5px" }}
            >
              <h3>Garantía de 1 Mes Por Defecto de Fábrica</h3>
            </Box>

            <p>
              Este equipo ha sido cubierto con una garantía de un mes por
              cualquier defecto de fabrica.
            </p>
          </Box>
        </Grid>

        <Grid item sm={6} md={4} xs={12}>
          <Box
            sx={{ height: { xs: "350px", sm: "400px" } }}
            className="benefitContainer"
          >
            <div className="anullProperties container">
              <Image src={benefit_04} alt="Soporte" layout="fill" />
            </div>
            <Box
              sx={{ height: { xs: "auto", sm: "75px" }, marginBottom: "5px" }}
            >
              <h3>El Mejor Servicio y Soporte de Ayuda</h3>
            </Box>
            <p>
              Un equipo dedicado a brindarle un servicio personalizado, ayudarle
              a encontrar las mejores ofertas, los productos que busca y todo lo
              que necesite. Le guiamos con su compra en un mercado hecho para
              usted.
            </p>
          </Box>
        </Grid>
        <Grid item sm={6} md={4} xs={12}>
          <Box
            sx={{ height: { xs: "350px", sm: "400px" } }}
            className="benefitContainer"
          >
            <div className="anullProperties container">
              <Image src={benefit_05} alt="Descuento" layout="fill" />
            </div>
            <Box
              sx={{ height: { xs: "auto", sm: "75px" }, marginBottom: "5px" }}
            >
              <h3>Los Mejores Descuentos del Mercado</h3>
            </Box>

            <p>
              Un espacio de mercado innovador, donde la experiencia de compra
              gira en torno a su conveniencia y le brinda las mejores ofertas y
              promociones
            </p>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Benefits;
