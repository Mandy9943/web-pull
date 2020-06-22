import React from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import "./BuyerProtection.css";

export default function BuyerProtection() {
    return (
        <div className="seller-reputation">
            <Header />
                <div className="buyer-brotection-container">
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
                    <div className="seller-reputation-content">
                        <h2>Proteccion al comprador </h2>
                        <div className="seller-reputation-box">
                            <p>Si te gustó un producto y tienes dudas sobre el vendedor, te damos algunos consejos para que tengas en cuenta:</p>
                            <div className="seller-reputations-qualification">
                                <h4>Si tiene 5 estrellas, excelente</h4>
                                <p>Esto quiere decir que es un KinderLider, es un vendedor garantizado por la cantidad de ventas realizadas, 
                                    la calidad de servicio ofrecido a sus clientes y el cumplimiento de normas fiscales</p>
                            </div>
                            <p>Si lo que buscas es un servicio de calidad, te sugerimos leer cada una de las opiniones de las personas que han contratado a este vendedor.</p>
                            <h4>Lee detalladamente la publicación.</h4>
                            <p>Debes leer detenidamente y con mucha atención la descripción y las fotos publicadas, 
                                de esta forma estar seguro de las políticas de ventas expuestas por el vendedor.</p>
                            <h4>Confirma que el producto tenga garantía y que puedas devolverlo en caso de ser necesario.</h4>
                            <p>Si aun depues de leer todas las opiniones y publicaciones sigues teniendo dudas en cuanto al producto, pregúntale al vendedor todo aquello de te genere dudas. 
                                Ejemplo si requieres de un comprobante de pago, realiza todas las preguntas que sean necesaria en cuanto al tema.</p>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}
