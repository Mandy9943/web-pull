import React from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faCheck
} from "@fortawesome/free-solid-svg-icons";
import "./ConfirmAccount.css";

export default function ConfirmAccount() {
    return (
        <div className="comfirm-account">
            <Header />
            <div className="comfirm-account-container">
                <div className="back-btn">
                    <Link href="/ayuda">
                        <a>
                            <p className="comfirm-account-icon">
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </p>
                            <p>Volver</p>
                        </a>
                    </Link>
                </div>
                <div className="comfirm-account-content">
                    <h1>Seguridad proporcionada para los vendedores</h1>
                    <div className="comfirm-account-box">
                        <p>Es necesario validar tu identidad para proceder con la cancelación de la cuenta</p>
                        <p>Por favor ingresa el código que enviamos a tu e-mail ***********@gmail.com</p>

                        <div className="code-input"><span>Codigo: </span><input />
                        {/*NEED FIX THIS SHIT*/}
                        </div>

                        <Link href="/#">
                            <a className="button-a">
                                <p>Confirmar</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
