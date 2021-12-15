import React from 'react';
import "./Subscription.module.css"
import recurso from "../../../../assets/img/productDetail/recurso-7-1@2x.svg"
import Image from "next/image"
const Subscription = () => {
    return (
        <div id="Subscription">
            <h3>
                Mantente al día con nuestras mejores ofertas
            </h3>
            <p>
                También odiamos el spam. Solo le enviaremos correos electrónicos si tenemos noticias increíbles, ofertas especiales o descuentos, u otras golosinas que valgan la pena.
            </p>
            <div className="anullProperties">
                <Image layout="fill" src={recurso} alt="Recurso" />
            </div>
            <input type="email" placeholder="Correo" />
            <button onClick={() => alert('Clicked')}>SUSCRIBIRSE</button>
        </div>
    );
}

export default Subscription;