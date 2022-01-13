import React from "react";
import "./FooterSection.module.css";
import responsabilidad from "../../../../assets/img/imgAbout/responsabilidad.svg";
import respeto from "../../../../assets/img/imgAbout/respeto.svg";
import honestidad from "../../../../assets/img/imgAbout/honestidad.svg";
import compromiso from "../../../../assets/img/imgAbout/compromiso.svg";
import Image from "next/image";
const FooterSection = () => {
  return (
    <div className="FooterSectionWrapper">
      <div className="FooterSection">
        <div className="title">
          <h3>VALORES CORPORATIVOS</h3>
        </div>
        <div className="content">
          <div className="item">
            <div className="imgFooterContent">
              <div className="anullProperties">
                <Image
                  src={responsabilidad}
                  alt="responsabilidad"
                  layout="fill"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="caption">
              <div className="title2">
                <h4>RESPONSABILIDAD</h4>
              </div>
              <div className="description">
                Escuchamos, entendemos y valoramos al otro, entendiendo las
                circunstancias, sin arrogancia, con respeto y amabilidad,
                buscando armonía en las relaciones interpersonales, laborales y
                comerciales.
              </div>
            </div>
          </div>
          <div className="item">
            <div className="imgFooterContent">
              <div className="anullProperties">
                <Image
                  src={respeto}
                  alt="responsabilidad"
                  layout="fill"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="caption">
              <div className="title2">
                <h4>RESPETO</h4>
              </div>
              <div className="description">
                Tenemos presente en cada actividad, que la unión conlleva al
                éxito. Cuando trabajamos en equipo, aunamos y potenciamos las
                aptitudes de cada empleado, aumentando así, la eficacia de los
                resultados.
              </div>
            </div>
          </div>
          <div className="item">
            <div className="imgFooterContent">
              <div className="anullProperties">
                <Image
                  src={honestidad}
                  alt="responsabilidad"
                  layout="fill"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="caption">
              <div className="title2">
                <h4>HONESTIDAD</h4>
              </div>
              <div className="description">
                Realizamos todas las operaciones con transparencia, rectitud e
                integridad. Asimismo, actuamos para construir un ambiente de
                seguridad y confianza, brindando una información verídica,
                oportuna, relevante y de calidad.
              </div>
            </div>
          </div>
          <div className="item">
            <div className="imgFooterContent">
              <div className="anullProperties">
                <Image
                  src={compromiso}
                  alt="responsabilidad"
                  layout="fill"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="caption">
              <div className="title2">
                <h4>COMPROMISO</h4>
              </div>
              <div className="description">
                Obramos con seriedad, en consecuencia, con nuestros deberes y
                derechos, bajo firmes principios de disciplina y equidad,
                logrando ofrecer nuestro mejor servicio cumpliendo con lo
                prometido.
              </div>
            </div>
          </div>
        </div>
      </div>
      ;
    </div>
  );
};

export default FooterSection;
