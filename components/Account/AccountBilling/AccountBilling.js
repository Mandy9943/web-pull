import React, { Component } from "react";
import "./AccountBilling.css";

class AccountBilling extends Component {
  render() {
    return (
      <div>
        <h2 className="account-billing-title">Facturacion</h2>
        <div className="account-billing-content">
          <p>¿Buscas tu factura de compras?</p>
          <p>
            Debes pedirla a tu vendedor desde la mensajeria que esta en{" "}
            <span>listado de compras</span>
          </p>
        </div>
      </div>
    );
  }
}

export default AccountBilling;
