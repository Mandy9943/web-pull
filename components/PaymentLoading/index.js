import React from 'react';
import './PaymentLoading.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTimes
} from "@fortawesome/free-solid-svg-icons";

function PaymentLoading({error, back}) {
    return (
        <div className="payment-loading">
            {
                !error ? 
                <div className="payment-loading-message">
                    <p>Su compra se está procesando. Espere un momento.</p>
                    <p><span>...</span></p>
                </div> :
                <div className="payment-error-message">
                    <p>
                        <div className={"icon-close"}>
                        <FontAwesomeIcon icon={faTimes} />
                        </div>
                        <br />
                        Su pago se ha rechazado
                    </p>
                    <br />
                    <div className="container-message-error">
                        <p>Hubo un error con tu pago. Te sugerimos verificar los datos o puedes seleccionar otro método de pago</p>
                        <button onClick={back} className="button-continue main-button">
                            <p>Seleccionar otro método de pago</p>
                        </button>    
                    </div>
                </div>
            }
           
         
        </div>
    );
}

export default PaymentLoading;