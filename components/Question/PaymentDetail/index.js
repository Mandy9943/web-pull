import React from 'react';

function PaymentDetail() {
    return (
        <div className="payment-questions">
            <h3>Métodos de pago</h3> 
            <br />
            <p>Kieropago cuenta con diversos métodos de pago, con la finalidad de
                brindarle mayor facilidad en el momento de efectuar tus compras</p>
            <h4><strong>En efectivo</strong></h4>
            <br />
            <p>Puedes consignar tu pago en cualquier punto de Efecty Baloto.
                Los pagos efectuados por estos medios serán acreditados
                inmediatamente. Además de que no generan costos adicionales.</p>


            <br />
            <h4><strong>Desde la banca en línea</strong></h4>
            <br />
            <p>En el momento que decidas pagar por la banca en línea te daremos
                las instrucciones necesarias. Estos pagos serán acreditados de
                forma inmediata. No generan costos adicionales.</p>
        </div>
    );
}

export default PaymentDetail;