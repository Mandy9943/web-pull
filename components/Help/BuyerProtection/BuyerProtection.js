import React from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faCheck
} from "@fortawesome/free-solid-svg-icons";
import "./BuyerProtection.css";

export default function BuyerProtection() {
    return (
        <div className="buyer-protection">
            <Header />
            <div className="buyer-protection-container">
                <div className="back-btn">
                    <Link href="/ayuda">
                        <a>
                            <p className="buyer-protection-icon">
                                <FontAwesomeIcon icon={faAngleLeft} />
                            </p>
                            <p>Volver</p>
                        </a>
                    </Link>
                </div>
                <div className="buyer-protection-content">
                    <h1>Proteccion al comprador </h1>
                    <div className="buyer-protection-box">
                        <p> En Kiero puedes comprar tranquilo, te ofrecemos los siguientes beneficios:</p>
                        <p> <FontAwesomeIcon icon={faCheck} />Puedes contar con nuestro respaldo</p>
                        <p>
                            Si tienes un problema con tu compra, queremos recordarte que estamos allí para ayudarte. Lo primordial que debes hacer,
                            es iniciar un reclamo a tu vendedor. Tienes que hacerlo lo antes posible,
                            recuerda contarnos en detalle todo lo sucedido para hacer seguimiento y ayudarte lo mas pronto posible a resolverlo.
                        </p>

                        <p><FontAwesomeIcon icon={faCheck} /> Tranquilidad en tus compras</p>

                        <p>Nos encargaremos de cuidar su dinero, hasta que hayas asegurado tu compra.</p>
                        <p>Cuando pagas, el vendedor puede ver el dinero reflejado en su cuenta, pero no tiene acceso a el,
                        debe esperar a que recibas tu producto. Esto se realizo con el fin de que puedas evaluarlo. Además,
                            puedes elegir que te entreguen el producto a través de Kiero Envíos y tu dinero estará protegido hasta 30 días después de que el correo envie informacion que el producto llegó.</p>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}
