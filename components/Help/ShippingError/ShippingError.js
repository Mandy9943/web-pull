import React from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import Button from "../../Common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft
} from "@fortawesome/free-solid-svg-icons";
import "./ShippingError.css";

export default function ShippingError() {
    return (
        <div className="shipping-error">
            <Header />
                <div className="shipping-error-top">
                    <div className="shipping-error-bar">
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
                        <h1>No llegó el envío</h1>
                    </div>
                </div>
                <div className="shipping-error-content">
                    <div className="shipping-error-box">
                        <div  className="shipping-error-box-text">
                        <p>Si el producto que compraste aparece como "producto entregado" pero aún no lo recibes {/*NEED ACTION*/}<a>comunicate con el vendedor</a>.</p>
                        <p>Tambien puedes validar el <a>estado del envío</a> {/*NEED ACTION*/} .</p>
                        <p>Te sugerimos validar la dirección indicada en la compra, en caso de encontras un error{/*NEED ACTION*/}<a>comunicate con el vendedor</a>.</p>
                        </div>
                        <div className="shipping-error-box-btns">
                            <Button text={"Comunicate con el vendedor"} />
                            <Button text={"Ver estado de envío"} />
                            <Button text={"Iniciar reclamo"} />
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}
