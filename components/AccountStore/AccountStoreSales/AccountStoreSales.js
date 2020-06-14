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
            <p>para preparar</p>
            <p>0 ventas</p>
          </section>
        </div>
        <div className="account-store-sales-item-task-bar">
        <section>
          <p>listos para despachar</p>
          <p>0 ventas</p>
        </section>
        </div>
        <div className="account-store-sales-item-task-bar">
        <section>
          <p>en proceso</p>
          <p>0 ventas</p>
        </section>
        </div>
        <div className="account-store-sales-item-task-bar">
        <section>
          <p>finalizadas</p>
          <p>0 ventas</p>
        </section>
        </div>
      </div>
    );
  }
}

export default AccountStoreSales;
