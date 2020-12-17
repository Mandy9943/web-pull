import React from 'react';
import PayEfecty from "../../assets/img/pay-cash-efecty.png";
import PayBaloto from "../../assets/img/pay-cash-baloto.png";
import PaySured from "../../assets/img/pay-cash-sured.png";
import './PaymentCashResult.css';

function PaymentCashResult({type, amount, agreement, pay}) {
    return (
        <div className="payment-cash-result">
            <h3>Total a pagar con {type===1?'Efecty':'Baloto'} ${parseFloat(amount).toFixed(2)}</h3>
            <hr />
            <div className="payment-cash-result-container">   
                <div className="payment-cash-result-logo">
                    <img alt="logo" src={type===1?PayEfecty:(type===2?PayBaloto:PaySured)} />
                </div>
                <div className="payment-cash-result-info">
                    <span className="info-title">{'Nº de convenio'}</span>
                    <br />
                    <span>{agreement}</span>
                    <br />
                    <br />
                    <span className="info-title">{'Nº de pago'}</span>
                    <br />
                    <span>{pay}</span>
                </div>
            </div>
            <button className="main-button">
                <p>Imprimir voucher de pago</p>
            </button>
            <br />
            <div className="footer-info">
                <small>Imprime estos datos para cancelar tu compra en puntos cercanos de {type===1?'Efecty':'Baloto'}</small>
            </div>
            
        </div>
    );
}

export default PaymentCashResult;