import React, { Component } from "react";
import "./AccountDetailPurchase.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class AccountDetailPurchase extends Component {
  render() {
    return (
      <div>
        <div className="account-detail-purchase-header">
          <p>ruta > ruta</p>
          <h3>Compra #47328636</h3>
          <h4>Entregado</h4>
        </div>
        <div className="account-detail-purchase-wrap">
          <div className="account-detail-purchase-item">
            <div className="account-detail-purchase-wrap-img">
              <img src="https://picsum.photos/100" />
            </div>
            <div className="account-detail-purchase-wrap-info">
              <h4>portatil premium 2020</h4>
              <p>$ 1.000.000</p>
              <p>1 unidad</p>
            </div>
          </div>
          <div className="account-detail-purchase-item">
            <div className="account-detail-purchase-wrap-check">
              <FontAwesomeIcon icon={faCheck} />
            </div>
            <div className="account-detail-purchase-wrap-info">
              <h3>Pago aprobado</h3>
              <h4>Efecty</h4>
              <p>transaccion: #426341346</p>
              <p>20 de julio de 2020</p>
            </div>
          </div>
        </div>
        <div>
          <div className="account-detail-purchase-item">
            <div className="account-detail-purchase-wrap">
              <div className="account-detail-purchase-wrap-img">
                <img src="https://picsum.photos/100" />
              </div>
              <div className="account-detail-purchase-wrap-info">
                <h4>vendedor</h4>
                <p>Julio</p>
                <p>123456789</p>
              </div>
            </div>
            <div className="account-detail-purchase-wrap-msg">
              <p>ver mensajes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountDetailPurchase;
