import React, { Component } from "react";
import "./AccountBilling.css";

class AccountBilling extends Component {
  render() {
    return (
      <div className="account-summary-wrap">
        <h1 className="account-billing-title">Facturación</h1>
        <div className="account-billing-content">
          <h2>¿Buscas tu factura de compras?</h2>
          <p>
            Debes pedírsela a tu vendedor desde la mensajería que <br /> está en el
            <span onClick={(e) => this.props.cb("orders", e)}>listado de compras</span>
      
          </p>
        </div>
      </div>
    );
  }
}

export default AccountBilling;
