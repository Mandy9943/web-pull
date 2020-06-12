import React from 'react';
import Link from 'next/link';
import Header from '../../Common/Header';
import Footer from '../../Common/Footer';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faAngleLeft,
    faStar
} from "@fortawesome/free-solid-svg-icons";
import "./SellerReputation.css";

export default function SellerReputation() {
    return (
        <div className="seller-reputation">
            <Header />
                <div className="seller-reputation-container">
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
                        <h2>Comprobar la reputación del vendedor</h2>
                        <div className="seller-reputation-box">
                            <p>Si te gustó un producto y tienes dudas sobre el vendedor, te damos algunos consejos para que tengas en cuenta:</p>
                            <div className="seller-reputations-qualification">
                                <div className="seller-reputations-qualification-starts">
                                    <p className="seller-reputations-icon">
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                    <p className="seller-reputations-icon">
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                    <p className="seller-reputations-icon">
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                    <p className="seller-reputations-icon">
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                    <p className="seller-reputations-icon">
                                        <FontAwesomeIcon icon={faStar} />
                                    </p>
                                </div>
                                <h4>Si tiene 5 estrellas, excelente</h4>
                                <p>Esto quiere decir que es un KinderLider, es un vendedor garantizado por la cantidad de ventas realizadas, laa calidad de servicio ofrecido a sus clientes y el cumplimiento de normas fiscales</p>
                            </div>
                            <p>Si lo que buscas es un servicio de calidad, te seugerimos leer cada una de las opinones de las personas que han contratado a este vendedor.</p>
                            <h4>Lee detalladamente la publicación.</h4>
                            <p>Debes leer detenidamente  y con mucha atención la descripción y las fotos pusblicadas, de esta forma estar seguro de las pilíticas de ventas expuestas por el vendedor.</p>
                            <h4>Confirma que el producto tenga garantia y que puedas devolverlo en caso de ser necesario.</h4>
                            <p>Si aun depyés de leer todas las opiniones y publicaciones sigues teniendo dudas en cuanto al producto, pregúntale al vendedor todo aquello de te genere dudas. Ejemplo si requires de un comprobante de pago, realiza todas las preguntas que sean necesaria en cuanto al tema.</p>
                        </div>
                    </div>
                </div>
            <Footer />
        </div>
    )
}
