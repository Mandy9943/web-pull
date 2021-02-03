import React from 'react';
import "./PaymentDetail.css";
import PayOnline from "../../../assets/img/pay-online.png";
import PayCredit from  '../../../assets/img/pay-credit.png';
import PayTransfer from '../../../assets/img/pay-transfer.png';

function PaymentDetail() {
    return (
        <div className="payment-questions">
            <h3>Métodos de pago</h3> 
            <br />
            <p>Kieropago cuenta con diversos métodos de pago, con la finalidad de
                brindarle mayor facilidad en el momento de efectuar tus compras</p>
                <br />
                
            <h4><strong>En efectivo</strong></h4>
            
            <p>Puedes consignar tu pago en cualquier punto de Efecty Baloto.
                Los pagos efectuados por estos medios serán acreditados
                inmediatamente. Además de que no generan costos adicionales.</p>
            
            <img className="pay-online-question" src={PayOnline} />
            
            
            <h4><strong>Desde la banca en línea</strong></h4>
            
            <p>En el momento que decidas pagar por la banca en línea te daremos
                las instrucciones necesarias. Estos pagos serán acreditados de
                forma inmediata. No generan costos adicionales.</p>
            
            <img className="pay-transfer-question" src={PayTransfer} />
            
            <h4><strong>Tarjeta de crédito</strong></h4>
            <p>El banco incluirá los intereses de las cuotas en el resumen de tu tarjeta</p>
            <img className="pay-credit-question" src={PayCredit} />
        </div>
    );
}

export default PaymentDetail;