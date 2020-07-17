import React from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faCheck
} from "@fortawesome/free-solid-svg-icons";
import "./UserChange.css";

export default function UserChange() {
    return (
        <div className="user-change">
            <Header />
            <div className="user-change-container">
                <div className="back-btn">
                    <Link href="/cuenta">
                        <a>
                            <p className="user-change-icon">
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </p>
                            <p>Volver</p>
                        </a>
                    </Link>
                </div>
                <div className="user-change-content">
                    <h1>Modificar</h1>
                    <div className="user-change-box">
                        <p>Nombre de usuario</p>
                        <input placeholder="Nombres" />
                                    {/* NEED FIX THIS SHIT*/}
                        <p className="medium">Para modificar tu nombre usuario, debes tener en cuenta lo siguiente.</p>
                        <p className="regular-13"><FontAwesomeIcon icon={faCheck} />No debe de tener palabras vulgares</p>
                        <p><FontAwesomeIcon icon={faCheck} />Debe de tener máximo 30 caracteres</p>

                    <section className='actions'>
                            {/*NEED ACTION*/}
                            <a className="button-a">
                                <p>Modificar</p>
                            </a>
                        <Link href="/cuenta">
                            <a className="button-a cancel-btn">
                                <p>cancelar</p>
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
