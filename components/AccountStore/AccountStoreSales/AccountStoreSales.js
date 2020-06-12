import React, { Component } from "react";
import "./AccountStoreSales.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThList } from "@fortawesome/free-solid-svg-icons";

class AccountStoreSales extends Component {
  render() {
    return (
      <div className="account-store-sales-wrap-content">
        <div>
          <h2>Ventas</h2>
        </div>
        <div className="account-store-sales-wrap-task-bar">
          <div className="account-store-sales-item-task-bar">
            <p>para preparar</p>
            <p>0 ventas</p>
          </div>
          <div className="account-store-sales-item-task-bar">
            <p>listos para despachar</p>
            <p>0 ventas</p>
          </div>
          <div className="account-store-sales-item-task-bar">
            <p>en proceso</p>
            <p>0 ventas</p>
          </div>
          <div className="account-store-sales-item-task-bar">
            <p>finalizadas</p>
            <p>0 ventas</p>
          </div>
        </div>
        <div className="account-store-sales-wrap-search">
          <div className="account-store-sales-wrap-filter">
            <p>
              <FontAwesomeIcon icon={faThList} /> filtrar y ordenar
            </p>
            <div className="account-store-sales-wrap-input-search">
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
              <input className="account-store-sales-input-search" />
            </div>
          </div>
          <p>ventas</p>
        </div>
        <div>
          <div className="account-store-sales-item-sale">
            <div>
              <div className="acccount-store-sales-item-title">
                <h4>En proceso</h4>
                <p>8 de junio - 00:00</p>
              </div>
              <div className="account-store-sales-item-wrap-product-info">
                <div className="account-store-sales-item-wrap-product-img">
                  <img src="https://picsum.photos/200" />
                </div>
                <div className="account-store-sales-item-product-info">
                  <h5>portatil</h5>
                  <p>$ 100.000</p>
                  <p>1 unidad</p>
                </div>
              </div>
            </div>
            <div className="account-store-sales-item-wrap-client-info">
              <h4>Cliente</h4>
              <p>Julio</p>
              <p>1234567890</p>
              <p>ver mensajes</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountStoreSales;
