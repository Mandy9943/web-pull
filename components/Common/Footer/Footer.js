import React, { Component } from 'react';
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Phone from "../../../assets/img/phone.png";
import "./Footer.css";
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';

export default class Footer extends Component {
    getYear() {
        return new Date().getFullYear();
    }
   
    render() {
        let url = "https://www.sic.gov.co/";
        return (
            <>
            <footer id="footerWrapper" >
                <div className="footer">

             
             <div className="footerContentWrapper">

              
            
             
               <div className="footerContent">
                    <div className="footerElement">
                        <h3>Acerca de </h3>
                        <div className="footerLinks">
                            <Link href="/about">
                                <a className="footerLink">Sobre kiero</a>
                            </Link>
                            <Link href="/blog">
                                <a className="footerLink">Prensa</a>
                            </Link>
                        </div>
                    </div>
                    <div className="footerElement">
                        <h3>Metodos de pago </h3>
                        <div className="footerLinks">
                            <Link href="/about">
                                <a className="footerLink">Deposito Bancario</a>
                            </Link>
                            <Link href="/blog">
                                <a className="footerLink">Efectivo</a>
                            </Link>
                            <Link href="/blog">
                                <a className="footerLink">Visa</a>
                            </Link>
                            <Link href="/blog">
                                <a className="footerLink">Master Card</a>
                            </Link>
                        </div>
                    </div>
                    <div className="footerElement">
                        <h3>Redes Sociales </h3>
                        <div className="footerLinks">
                            <Link href="/about">
                                <a className="footerLink">Facebook</a>
                            </Link>
                            <Link href="/blog">
                                <a className="footerLink">Twitter</a>
                            </Link>
                            <Link href="/blog">
                                <a className="footerLink">Instagram</a>
                            </Link>
                            <Link href="/blog">
                                <a className="footerLink">Youtube</a>
                            </Link>
                        </div>
                    </div>
                    <div className="footerElement ">
                        <h3>Mi cuenta </h3>
                        <div className="footerLinks">
                            <Link href="/about">
                                <a className="footerLink">Ingresar</a>
                            </Link>
                            <Link href="/blog">
                                <a className="footerLink">Registrarse</a>
                            </Link>
                        </div>
                    </div>
               </div>
                </div>
                </div>
            </footer>
            <div className="footerRed">
                <div className="footerRed-content">
                    <div className="footerRed-tex">
                        <p>{this.getYear()} Kiero. Todos los derechos reservados.</p>
                        <ul>
                            <a href={url} target="_blank">www.sic.gov.co</a>
                            <Link href="/terminos"><a>Términos y condiciones</a></Link>
                            <Link href="/privacidad"><a>Políticas de privacidad</a></Link>
                            <Link href="/contactanos_email"><a>Contáctanos</a></Link>
                            <Link href="/ayuda"><a>Ayuda / PQR</a></Link>
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
                            <Link href="/ayuda"><a>Ayuda / PQR</a></Link>
                            <Link href="/privacidad"><a>Políticas de privacidad</a></Link>
                            <Link href="/terminos"><a>Términos y condiciones</a></Link>
                            <Link href="/contactanos_email"><a>Contáctanos</a></Link>
                            <a href={url} target="_blank">www.sic.gov.co</a>
                        </ul>
                        <p>{this.getYear()} Kiero. Todos los derechos reservados.</p>
                    </div>
                </div>
            </div>
            </>
        )
    }
}
