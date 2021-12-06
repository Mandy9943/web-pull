import React from 'react';
import visa from "../../../../assets/img/productDetail/visa@2x.png";
import mastercard from "../../../../assets/img/productDetail/mastercard@2x.png";
import american from "../../../../assets/img/productDetail/american-express@2x.png";
import baloto from "../../../../assets/img/productDetail/baloto@2x.png";
import pse from "../../../../assets/img/productDetail/pse@2x.png";
import efecty from "../../../../assets/img/productDetail/efecty@2x.png";
import "./PayMethod.css"

const PayMethod = () => {
    return (
        <div id="PayMethod">
            <div className="titulo">
                <h3>Métodos de pago</h3>
            </div>
            <div className="link">
                <img loading="lazy" src={visa} alt="Tarjeta Visa"/>
                <img loading="lazy" src={mastercard} alt="Tarjeta Mastercard"/>
                <img loading="lazy" src={american} alt="Tarjeta American"/>
                <img loading="lazy" src={baloto} alt="Baloto"/>
                <img loading="lazy" src={pse} alt="PSE"/>
                <img loading="lazy" src={efecty} alt="Efecty"/>
            </div>
        </div>
    );
}

export default PayMethod;