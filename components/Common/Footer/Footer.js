import React, {Component} from "react";
import Link from "next/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import Phone from "../../../assets/img/phone.png";
import "./Footer.css";
import {faAngleDown} from "@fortawesome/free-solid-svg-icons";
import {
    faFacebook,
    faInstagram,
    faTwitter,
    faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import PayCredit from "../../../assets/img/pay-credit.png";
import PayOnline from "../../../assets/img/pay-online.png";
import PayTransfer from "../../../assets/img/pay-transfer.jpg";
import Imagen from "../Imagen/Imagen";

const fb = "//www.facebook.com/KieroGroup/";
const ig = "https://www.instagram.com/kiero.co/";
const tw = "//twitter.com/KIEROGROUP1";
const yt = "//www.youtube.com/user/KieroGroup";

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
                                        <Link href="//novedades.kiero.co/">
                                            <a className="footerLink">Prensa</a>
                                        </Link>
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
                        <Imagen src={PayCredit} alt="Tarjetas de crédito"/>
                      </span>
                                            <span className="footerPay">
                        <Imagen src={PayOnline} alt="Efectivo en puntos de pago"/>
                      </span>
                                            <span className="footerPay">
                        <Imagen
                            src={PayTransfer}
                            alt="Transferencia desde tu banco"
                        />
                      </span>
                                        </div>

                                        {/* <span className="footerLink">Efectivo</span>

                    <span className="footerLink">Visa</span>

                    <span className="footerLink">Master Card</span> */}
                                    </div>
                                </div>
                                <div className="footerElement">
                                    <h3>Redes Sociales </h3>
                                    <div className="footerLinks social">
                                        <Link href={fb}>
                                            <a className="footerLink">
                                                {" "}
                                                <FontAwesomeIcon icon={faFacebook} size="3x"/>
                                            </a>
                                        </Link>
                                        <Link href={tw}>
                                            <a className="footerLink">
                                                {" "}
                                                <FontAwesomeIcon icon={faTwitter}/>
                                            </a>
                                        </Link>
                                        <Link href={ig}>
                                            <a className="footerLink">
                                                {" "}
                                                <FontAwesomeIcon icon={faInstagram}/>
                                            </a>
                                        </Link>
                                        <Link href={yt}>
                                            <a className="footerLink">
                                                {" "}
                                                <FontAwesomeIcon icon={faYoutube}/>
                                            </a>
                                        </Link>
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
                                <a href={url} target="_blank">
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
                                <a href={url} target="_blank">
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
