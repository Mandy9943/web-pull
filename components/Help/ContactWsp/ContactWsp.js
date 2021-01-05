import React, { Component } from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Button from "../../Common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import "./ContactWsp.css";


export default class ContactWsp extends Component {
    
    render() {
        return (
            <div className="contact-wsp">
                <Header />
                    <div className="contact-wsp-top">
                        <div className="contact-wsp-bar">
                            <div className="back-btn">
                                <Link href="/ayuda">
                                    <a>
                                        <p className="back-btn-icon">
                                            <FontAwesomeIcon icon={faAngleLeft} />
                                        </p>
                                        <p>Volver</p>
                                    </a>
                                </Link>
                            </div>
                        <h1>Contáctanos por Whatsapp</h1>
                        </div>
                    </div>
                    <div className="contact-wsp-content">
                        <div className="contact-wsp-box">
                            
                            <p>Indícanos tu e-mail nuestro equipo se pondrá en contacto.</p>
                            <div className="code-input"><input placeholder="(Código area)" /><input placeholder="Celular"/>
                            </div>
                            {/*NEED FIX THIS SHIT*/}
                            <div className="contact-wsp-box-btn">
                                <Button text={"Confirmar"} />
                            </div>
                        </div>
                    </div>
                <Footer />
            </div>
        )
    }
}
