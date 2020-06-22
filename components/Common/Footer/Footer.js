import React, { Component } from 'react';
import Link from "next/link";
import Phone from "../../../assets/img/phone.png";
import "./Footer.css";

export default class Footer extends Component {
    getYear() {
        return new Date().getFullYear();
    }
    render() {
        return (
            <div className="footer">
                <div className="footer-content">
                    <div className="footer-tex">
                        <p>{this.getYear()} Kiero. Todos los derechos reservados.</p>
                        <ul>
                            <Link href="www.sic.gov.co"><a>www.sic.gov.co</a></Link>
                            <Link href="#"><a>Términos y condiciones</a></Link>
                            <Link href="#"><a>Políticas de privacidad</a></Link>
                            <Link href="#"><a>Contáctanos</a></Link>
                            <Link href="/ayuda"><a>Ayuda / PQR</a></Link>
                        </ul>
                    </div>
                    {/*
                    <div className="footer-download">
                        <Link href="#">
                            <a className="download-app">
                                <img className="phone-img" src={Phone} />
                                <p>¡Descarga gratis la app!</p>
                            </a>
                        </Link>
                    </div>*/}
                </div>
                
                <div className="footer-content footer-movil">
                    {/*
                    <div className="footer-download">
                        <Link href="#">
                            <a className="download-app">
                                <img className="phone-img" src={Phone} />
                                <p>¡Descarga gratis la app!</p>
                            </a>
                        </Link>
                    </div>*/}
                    <div className="footer-tex">
                        <ul>
                            <Link href="/ayuda"><a>Ayuda / PQR</a></Link>
                            <Link href="#"><a>Políticas de privacidad</a></Link>
                            <Link href="#"><a>Términos y condiciones</a></Link>
                            <Link href="#"><a>Contáctanos</a></Link>
                            <Link href="www.sic.gov.co"><a>www.sic.gov.co</a></Link>
                        </ul>
                        <p>{this.getYear()} Kiero. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
        )
    }
}
