import React from 'react';
import "./Subscription.module.css"
import recurso from "../../../../assets/img/productDetail/recurso-7-1@2x.svg"

const Subscription = () => {
    return (
        <div id="Subscription">
            <h3>
                Mantente al día con nuestras mejores ofertas
            </h3>
            <p>
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt.
            </p>
            <img src={recurso} alt="Recurso"/>
            <input type="email" placeholder="Correo"/>
            <button onClick={() => alert('Clicked')}>SUSCRIBIRSE</button>
        </div>
    );
}

export default Subscription;