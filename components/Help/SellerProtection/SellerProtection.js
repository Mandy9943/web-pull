import React from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faCheck
} from "@fortawesome/free-solid-svg-icons";
import "./SellerProtection.css";

export default function SellerProtection() {
    return (
        <div className="seller-protection">
            <Header />
            <div className="seller-protection-container">
                <div className="back-btn">
                    <Link href="/ayuda">
                        <a>
                            <p className="seller-protection-icon">
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </p>
                            <p>Volver</p>
                        </a>
                    </Link>
                </div>
                <div className="seller-protection-content">
                    <h2>Seguridad proporcionada para los vendedores</h2>
                    <div className="seller-protection-box">
                        <p><FontAwesomeIcon icon={faCheck} /> En caso de existir un problema con una compra, es posible que una persona te genere un reclamo.
                        Por lo general son simples malos entendidos, que pueden resolverse con facilidad. Una vez se genere un reclamo,
                        te avisaremos y te diremos los pasos a seguir e incluso podemos ayudarte a resolver la situacion.</p>

                        <p> <FontAwesomeIcon icon={faCheck} />
                        En el caso de recibir un contracargo, te pediremos comprobar la entrega del producto. Este programa solo funciona con productos físicos.
                        En la actualidad no esta disponible para venta de licencias, contratación de servicio o todo aquello que sea intangible.
                        </p>

                        <p><FontAwesomeIcon icon={faCheck} />
                        Sus pagos son monitoreados las 24 horas para asegurarte que todo lo relacionado con el pago esta bien,
                        de esta forma no tendrás que preocuparte. En caso de ver el <span className='accent'>pago acreditado</span> es señal de que puedes entregar el producto con toda confianza.</p>

                        <Link href="/ayuda">
                            <a className="main-button">
                                <p>Volver</p>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
