import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTruck} from "@fortawesome/free-solid-svg-icons";
import React from "react";
import "./Info.css"
import envios from "../../../../assets/img/productDetail/delivery-icon-@2x.svg"
import compras from "../../../../assets/img/productDetail/union-2@2x.svg"
import garantia from "../../../../assets/img/productDetail/union-3@2x.svg"

import Image from "next/image";
const Info = () => {
    return (
        <div id="InfoProductDetailMovil">
            <div className="info envios">
                <div className="icon">
                <div className='anullProperties'> 
                <Image
                    
                    loading='lazy'
                    src={envios}
                    alt='Envios gratis'
                    layout="fill"
                />
               </div> 
                </div>
                <div className="text texte">
                    <h3>Envío Gratuito</h3>
                    <p>
                        Nuestros productos son importados.Entrega de 3 a 9 días hábiles.
                    </p>
                </div>
            </div>
            <div className="info compras">
                <div className="icon">
                <div className='anullProperties'> 
                <Image
                    
                    loading='lazy'
                    src={compras}
                    alt='Compra Protegida'
                    layout="fill"
                />
               </div> 
                </div>
                <div className="text">
                    <h3>Compra Protegida</h3>
                    <p>
                        En caso de que surja algún problema, te devolveremos el dinero.
                    </p>
                </div>
            </div>
            <div className="info garantia">
                <div className="icon">
                <div className='anullProperties'> 
                <Image
                    
                    loading='lazy'
                    src={garantia}
                    alt='Garantia del Vendedor'
                    layout="fill"
                />
               </div>
                </div>
                <div className="text">
                    <h3>Garantía del Vendedor</h3>
                    <p>
                        Garantía por defecto de fábrica de (1) mes.
                    </p>
                </div>
            </div>
        </div>
    );
}

export default Info;
