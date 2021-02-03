import React, { Component } from "react";
import "./AccountStoreSales.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThList } from "@fortawesome/free-solid-svg-icons";

class AccountStoreSales extends Component {
  render() {
    return (
      <div className="account-store-sales-wrap-task-bar">
        <div className="account-store-sales-item-task-bar">
          <section>
            <p>Para preparar</p>
            <p>0 Ventas</p>
          </section>
        </div>
        <div className="account-store-sales-item-task-bar">
        <section>
          <p>Listos para despachar</p>
          <p>0 Ventas</p>
        </section>
        </div>
        <div className="account-store-sales-item-task-bar">
        <section>
          <p>En proceso</p>
          <p>0 Ventas</p>
        </section>
        </div>
        <div className="account-store-sales-item-task-bar">
        <section>
          <p>Finalizadas</p>
          <p>0 Ventas</p>
        </section>
        </div>
      </div>
    );
  }
}

export default AccountStoreSales;
