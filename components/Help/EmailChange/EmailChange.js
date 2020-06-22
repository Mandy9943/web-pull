import React from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import "./EmailChange.css";

export default function EmailChange() {
    return (
        <div className="email-change">
            <Header />
            <div className="email-change-container">
                <div className="email-change-content">
                    <h2>Modificar correo</h2>
                    <div className="email-change-box">
                        <p>Escribe tu nuevo correo</p>
                        <input />
                        {/*NEED FIX THIS SHIT*/}
                        <p>Repetir correo</p>
                        <input />
                        {/*NEED FIX THIS SHIT*/}
                        <section className="actions">
                            <Link href="/cuenta">
                                <a className="button-a">
                                    <p>modificar</p>
                                </a>
                            </Link>
                            <Link href="/ayuda">
                                <a className="button-a cancel-btn">
                                    <p className='accent'>cancelar</p>
                                </a>
                            </Link>
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
