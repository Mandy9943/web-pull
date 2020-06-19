import React from 'react';
import Link from 'next/link';
import CreditCard from "../../../assets/img/pay-credit.png";
import BankTransfer from "../../../assets/img/pay-transfer.png";
import OnlineTransfer from "../../../assets/img/pay-online.png";
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import Button from "../../Common/Button/Button";
import "./HowToPay.css";

export default function HowToPay() {
    return (
        <div className="how-to-pay">
            <Header />
            <div className="how-to-pay-container">
                <div className="back-btn">
                    <Link href="/ayuda">
                        <a>
                            <p className="seller-reputations-icon">
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </p>
                            <p>Volver</p>
                        </a>
                    </Link>
                </div>
                <div className="how-to-pay-content">
                    <h2>Como pagar tu compra</h2>
                    <div className="how-to-pay-box">
                        <div className="how-to-pay-box-content">
                            <h4>Puedes pagar con confianza</h4>
                            <p>Te devolveremos el dinero si el producto no es lo que esperabas.</p>
                            <h4>Elige entre cualquiera de estos medios de pago:</h4>
                            <iv className="how-to-pay-ways">
                                <img src={CreditCard} />
                                <p>Tarjetas de crédito</p>
                                <img src={BankTransfer} />
                                <p>Transferencias desde tu banco</p>
                                <img src={OnlineTransfer} />
                                <p>Traspaso Online</p>
                            </iv>
                            <p>El banco incluirá los intereses de las cuotas en el resumen de tu tarjeta.</p>
                            <h4>Cuando termines tu compra, te daremos las instrucciones 
                                para que sepas cómo y dónde pagarla.</h4>
                        </div>
                        <Link href="/problemas_de_pago">
                            <a>
                                <Button text={"Tengo un problema con el pago"} />
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
