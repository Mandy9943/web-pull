import React from "react";
import "./AccountStoreSales.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThList } from "@fortawesome/free-solid-svg-icons";

export default function AccountStoreSales (props) {
    const {started, verified, delivered, qualified} = props;

    return (
      <div className="account-store-sales-wrap-task-bar">
        <div className="account-store-sales-item-task-bar">
          <section>
            <p>Venta iniciada</p>
            <p>{started || 0} Ventas</p>
          </section>
        </div>
        <div className="account-store-sales-item-task-bar">
        <section>
          <p>Venta verificada</p>
          <p>{verified || 0} Ventas</p>
        </section>
        </div>
        <div className="account-store-sales-item-task-bar">
        <section>
          <p>Producto entregado</p>
          <p>{delivered || 0} Ventas</p>
        </section>
        </div>
        <div className="account-store-sales-item-task-bar">
        <section>
          <p>Venta calificada</p>
          <p>{qualified || 0} Ventas</p>
        </section>
        </div>
      </div>
    );
}
