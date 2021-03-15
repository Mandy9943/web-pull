import React, { useEffect, useState } from "react";
import "./AccountStoreSales.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThList } from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../../services/userApi";

export default function AccountStoreSales(props) {
  const { user, mode } = props;
  const [purchases, setPurchases] = useState([]);

  let started = 0;
  let verified = 0;
  let delivered = 0;
  let qualified = 0;

  function processSellData(data) {
    // Esta uncion es para que los datos devueltos por el endpoint /shop/orders/
    // tengan el mismo formato del de las ventas.
    return data.data.map((record) => {
      return { data: record };
    });
  }

  if (mode === "sell") {
    purchases.map((item, i) => {
      if (item.data.purchase_status === "INICIADA") {
        started++;
      }

      if (item.data.purchase_status === "VERIFICADA") {
        verified++;
      }

      if (item.data.purchase_status === "ENTREGADO") {
        delivered++;
      }

      if (item.data.purchase_status === "CALIFICADA") {
        qualified++;
      }
    });
  }

  useEffect(() => {
    console.log(
      "utilizar un endpoint que traiga exclusivamente la informacion de las cantidades"
    );

    let endp = "/shop/orders";
    getData(endp, user.jwt).then((response) => {
      setPurchases(processSellData(response.data));
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
