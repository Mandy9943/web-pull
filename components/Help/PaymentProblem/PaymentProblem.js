import React from 'react';
import Link from 'next/link';
import Header from "../../Common/Header/Header";
import Footer from "../../Common/Footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faCheck
} from "@fortawesome/free-solid-svg-icons";
import "./PaymentProblem.css";

export default function PaymentProblem() {
    return (
        <div className="payment-problem">
            <Header />
            <div className="payment-problem-container">
                <div className="back-btn">
                    <Link href="/como_pagar">
                        <a>
                            <p className="payment-problem-icon">
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </p>
                            <p>Volver</p>
                        </a>
                    </Link>
                </div>
                <div className="payment-problem-content">
                    <h2>Presento inconveniente con el paso</h2>
                    <div className="payment-problem-box">
                        <div className="payment-problem-status">
                            <p className="payment-problem-icon">
                                <FontAwesomeIcon icon={faCheck} />
                            </p>
                            <h3>Su pago está en orden</h3>
                        </div>
                        <div className="payment-problem-orders">
                            <div className="payment-problem-order-box">
                                <p className="payment-problem-icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </p>
                                <div className="payment-problem-order-box-description">
                                    <h3>Pago aprobado</h3>
                                    <div className="payment-problem-order-box-text">
                                        <p>Efecty</p>
                                        <p>Transacción #7861284</p>
                                        <p>21 de febrero de 2020</p>
                                    </div>
                                </div>
                            </div>
                            <div className="payment-problem-order-box">
                                <p className="payment-problem-icon">
                                    <FontAwesomeIcon icon={faCheck} />
                                </p>
                                <div className="payment-problem-order-box-description">
                                    <div className="payment-problem-order-box-text">
                                        <p>Disco Estado Solido Sad Westenr Wd Green 480gb M2 2280 New</p>
                                        <p>Cantidad: 1</p>
                                    </div>
                                    <h3>Total: $287.000</h3>
                                    {/*NEED FIX THIS SHIT*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
