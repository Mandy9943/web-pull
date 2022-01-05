import React, { Component } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Footer.css";
import {
  faFacebook,
  faInstagram,
  faLinkedin,
  faPinterest,
  faTwitter,
  faWhatsapp,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import PayCredit from "../../../assets/img/pay-credit.png";
import PayOnline from "../../../assets/img/pay-online.png";
import PayTransfer from "../../../assets/img/pay-transfer.jpg";

const fb = "https://www.facebook.com/KieroMarketplaceColombia/";
const ig = "https://www.instagram.com/kiero.co/";
const tw = "https://twitter.com/kiero_co";
const yt = "https://www.youtube.com/channel/UCckOshPpIgdMvVEdKgLUz6g";
const pt = "https://co.pinterest.com/Kiero_Marketplace/_created/";
const lk = "https://www.linkedin.com/company/kiero-marketplace";
const wh = "https://wa.me/+573128246497";

import Image from "next/image";

export default class Footer extends Component {
  getYear() {
    return new Date().getFullYear();
  }

  render() {
    let url = "https://www.sic.gov.co/";
    return (
      <footer>
        <div id="footerWrapper">
          <div className="footer">
            <div className="footerContentWrapper">
              <div className="footerContent">
                <div className="footerElement">
                  <h3>Acerca de </h3>
                  <div className="footerLinks">
                    <Link href="/about">
                      <a className="footerLink">Sobre Kiero</a>
                    </Link>

                    <a
                      href="https://novedades.kiero.co/"
                      className="footerLink"
                    >
                      Prensa
                    </a>
                  </div>
                </div>
                <div className="footerElement ">
                  <h3>Mi cuenta </h3>
                  <div className="footerLinks">
                    <Link href="/login">
                      <a className="footerLink">Ingresar</a>
                    </Link>
                    <Link href="/registro">
                      <a className="footerLink">Registrarse</a>
                    </Link>
                  </div>
                </div>

                <div className="footerElement">
                  <h3>Métodos de pago </h3>
                  <div className="footerLinks">
                    <div className="footerPayWrapper">
                      <span className="footerPay">
                        <div className="anullProperties">
                          <Image
                            loading="lazy"
                            src={PayCredit}
                            alt="Tarjetas de crédito"
                            layout="fill"
                          />
                        </div>
                      </span>
                      <span className="footerPay">
                        <div className="anullProperties">
                          <Image
                            loading="lazy"
                            src={PayOnline}
                            alt="Efectivo en puntos de pago"
                            layout="fill"
                          />
                        </div>
                      </span>
                      <span className="footerPay">
                        <div className="anullProperties">
                          <Image
                            loading="lazy"
                            src={PayTransfer}
                            alt="Transferencia desde tu banco"
                            layout="fill"
                          />
                        </div>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="footerElement">
                  <h3>Redes Sociales </h3>
                  <div className="footerLinks social">
                    <a
                      target="_blank"
                      aria-label="Facebook Kiero"
                      className="footerLink"
                      href={fb}
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faFacebook} size="3x" />
                    </a>

                    <a
                      target="_blank"
                      aria-label="Twitter Kiero"
                      className="footerLink"
                      href={tw}
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faTwitter} />
                    </a>

                    <a
                      target="_blank"
                      aria-label="Instagram Kiero"
                      className="footerLink"
                      href={ig}
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faInstagram} />
                    </a>

                    <a
                      target="_blank"
                      aria-label="YouTube Kiero"
                      className="footerLink"
                      href={yt}
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faYoutube} />
                    </a>
                    <a
                      target="_blank"
                      aria-label="Linkedin Kiero"
                      className="footerLink"
                      href={lk}
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                    <a
                      target="_blank"
                      aria-label="Whatsapp Kiero"
                      className="footerLink"
                      href={wh}
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faWhatsapp} />
                    </a>
                    <a
                      target="_blank"
                      aria-label="Pinterest Kiero"
                      className="footerLink"
                      href={pt}
                      rel="noopener noreferrer"
                    >
                      {" "}
                      <FontAwesomeIcon icon={faPinterest} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footerRed">
          <div className="footerRed-content">
            <div className="footerRed-tex">
              <p>{this.getYear()} Kiero. Todos los derechos reservados.</p>
              <ul>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  www.sic.gov.co
                </a>
                <Link href="/terminos">
                  <a>Términos y condiciones</a>
                </Link>
                <Link href="/privacidad">
                  <a>Políticas de privacidad</a>
                </Link>
                <Link href="/contactanos_email">
                  <a>Contáctanos</a>
                </Link>
                <Link href="/ayuda">
                  <a>Ayuda / PQR</a>
                </Link>
              </ul>
            </div>
            {/*
                    <div className="footerRed-download">
                        <Link href="#">
                            <a className="download-app">
                                <img className="phone-img" src={Phone} />
                                <p>¡Descarga gratis la app!</p>
                            </a>
                        </Link>
                    </div>*/}
          </div>

          <div className="footerRed-content footerRed-movil">
            {/*
                    <div className="footerRed-download">
                        <Link href="#">
                            <a className="download-app">
                                <img className="phone-img" src={Phone} />
                                <p>¡Descarga gratis la app!</p>
                            </a>
                        </Link>
                    </div>*/}
            <div className="footerRed-tex">
              <ul>
                <Link href="/ayuda">
                  <a>Ayuda / PQR</a>
                </Link>
                <Link href="/privacidad">
                  <a>Políticas de privacidad</a>
                </Link>
                <Link href="/terminos">
                  <a>Términos y condiciones</a>
                </Link>
                <Link href="/contactanos_email">
                  <a>Contáctanos</a>
                </Link>
                <a href={url} target="_blank" rel="noopener noreferrer">
                  www.sic.gov.co
                </a>
              </ul>
              <p>{this.getYear()} Kiero. Todos los derechos reservados.</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}
