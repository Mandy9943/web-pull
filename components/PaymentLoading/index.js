import React from 'react';
import './PaymentLoading.css';

function PaymentLoading() {
    return (
        <div className="payment-loading">
           <div className="payment-loading-message">
                <p>Su compra se está procesando. Espere un momento.</p>
                <p><span>...</span></p>
           </div> 
         
        </div>
    );
}

export default PaymentLoading;