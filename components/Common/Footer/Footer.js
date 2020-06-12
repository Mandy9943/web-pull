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
                            <Link href="#"><a>www.sic.gov.co</a></Link>
                            <Link href="#"><a>Términos y condiciones</a></Link>
                            <Link href="#"><a>Políticas de privacidad</a></Link>
                            <Link href="#"><a>Contáctanos</a></Link>
                            <Link href="#"><a>Ayuda / PQR</a></Link>
                        </ul>
                    </div>
                    <div className="footer-download">
                        <Link href="#">
                            <a className="download-app">
                                <img className="phone-img" src={Phone} />
                                <p>¡Descarga gratis la app!</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
