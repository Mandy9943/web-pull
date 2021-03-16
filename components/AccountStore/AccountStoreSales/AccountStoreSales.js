import React, { useEffect, useState } from "react";
import "./AccountStoreSales.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThList } from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../../services/userApi";

export default function AccountStoreSales({ user, mode }) {
  const [started, setStarted] = useState(0);
  const [verified, setVerified] = useState(0);
  const [delivered, setDelivered] = useState(0);
  const [qualified, setQualified] = useState(0);

  useEffect(() => {
    let endp = "/shop/orders/status";
    getData(endp, user.jwt).then((response) => {
      setStarted(response.data.data[0]["Venta iniciada"]);
      setVerified(response.data.data[0]["Venta verificada"]);
      setDelivered(response.data.data[0]["Producto entregado"]);
      setQualified(response.data.data[0]["Venta calificada"]);
    });
  }, []);

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
