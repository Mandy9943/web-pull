import React from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faTruck
} from "@fortawesome/free-solid-svg-icons";
import "./HowDoRecive.css";

export default function HowDoRecive() {
    return (
        <div className="how-do-recive">
            <Header />
                <div className="how-do-recive-container">
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
                    <div className="how-do-recive-content">
                        <h1>Como recibo mi compra</h1>
                        <div className="how-do-recive-box">
                            <h4>Envíos gratis a través de Kiero envíos</h4>
                            <p>Cada publicacíon especifica la forma de envío y el costo del producto. Alquilarás este beneficio de envíos gratis cuando veas el clásico camión rojo de Kiero Envíos cuando aparezca en la publicación.</p>
                            <div className="kiero-envios">
                                <p>Kiero envíos</p>
                                <p className="seller-reputations-icon">
                                    <FontAwesomeIcon icon={faTruck} />
                                </p>
                            </div>
                            <h4>Acordar con el vendedor</h4>
                            <p>Si en la piblicación no aparece Kiero envíos, puedes acordar la entrega de forma directa con el vendedor.</p>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}
