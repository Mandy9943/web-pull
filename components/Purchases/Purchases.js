import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./Purchases.css";
import ProductItem from "../ProductItem/ProductItem";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../services/userApi";
import ProductCard from "../ProductCard";
import OptionList from "../OptionList/OptionList";
import AccountStoreSales from "../AccountStore/AccountStoreSales/AccountStoreSales";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faThList } from "@fortawesome/free-solid-svg-icons";
import PurchaseItem from "./PurchaseItem";
import PurchasesDetail from "../PurchasesDetail";
import OrderItem from "../OrderItem/OrderItem.js";
import OrdersDetail from "../OrdersDetail/OrdersDetail.js";
import Pagination from "../Common/Pagination/Pagination";

function processSellData(data) {
  // Esta uncion es para que los datos devueltos por el endpoint /shop/orders/
  // tengan el mismo formato del de las ventas.
  return data.data.map((record) => {
    return { data: record };
  });
}

function Purchases(props) {
  const [pagination, setPagination] = useState();
  const [purchases, setPurchases] = useState([]);
  const [selected, setSelected] = useState();
  let lastPage = 1;
  let currentPage = 1;
  let nextPage = 1;
  if (pagination) {
    lastPage = pagination["last_page "];
    currentPage = pagination.current_page;
    if (currentPage === 0) {
      currentPage = 1;
    }
    nextPage = pagination.next_page;
    if (nextPage === 0) {
      nextPage = 1;
    }
  }
  useEffect(() => {
    const endp =
      props.mode === "sell"
        ? "/shop/orders?page=1&limit=2"
        : "/getPurchases?page=1&size=2";
    getData(endp, props.user.jwt).then((response) => {
      setPagination(response.data.pagination);

      // Dirty Hack
      if (props.mode === "sell") {
        setPurchases(processSellData(response.data));
      } else {
        setPurchases(response.data.purchases); // Dirty hack the funciton
      }
    });

    return () => {
      setPagination();
      setPurchases([]);
    };
  }, []);

  const handleSelect = (item) => {
    setSelected(item);
    console.log(item);
  };

  return !selected ? (
    <div className="purchase-list">
      <h1 className="status-title">
        {props.mode === "sell" ? "Mis ventas" : "Mis Compras"}
      </h1>
      {props.mode === "sell" ? (
        <>
          <AccountStoreSales />
          <div className="account-store-sales-wrap-search">
            <div className="account-store-sales-wrap-filter">
              <p>
                <FontAwesomeIcon icon={faThList} /> Filtrar y ordenar
              </p>
              <div className="account-store-sales-wrap-input-search">
                <span>
                  <FontAwesomeIcon icon={faSearch} />
                </span>
                <input
                  className="account-store-sales-input-search"
                  placeholder="buscar por # o titulo"
                />
              </div>
            </div>
            {/*<span className="sub-title"> {purchases.length} ventas</span>*/}
          </div>
          {purchases.length === 0 ? (
            <section className="empty-text">
              <span>No tiene ninguna venta</span>
            </section>
          ) : (
            purchases.map((item, index) => (
              <OrderItem key={index} item={item} onSelect={handleSelect} />
            ))
          )}
        </>
      ) : (
        <>
          {" "}
          {/* Mode = buy */}
          {purchases.length === 0 ? (
            <section className="empty-text">
              <span>No tiene compras anteriores</span>
            </section>
          ) : (
            purchases.map((item, index) => (
              <PurchaseItem key={index} item={item} onSelect={handleSelect} />
            ))
          )}
          <br />
          {pagination && (
            <Pagination
              actual={currentPage}
              totalPages={lastPage}
              cb={(textContent) => {
                const endp =
                  props.mode === "sell"
                    ? "/shop/orders?page=" + textContent + "&limit=2"
                    : "/getPurchases?page=" + textContent + "&size=2";
                getData(endp, props.user.jwt).then((response) => {
                  setPagination(response.data.pagination);

                  // Dirty Hack
                  if (props.mode === "sell") {
                    setPurchases(processSellData(response.data));
                  } else {
                    setPurchases(response.data.purchases); // Dirty hack the funciton
                  }
                });
              }}
            />
          )}
        </>
      )}
    </div>
  ) : (
    <>
      {props.mode === "sell" ? (
        <OrdersDetail item={selected} close={() => setSelected()} />
      ) : (
        <PurchasesDetail
          item={selected}
          close={() => setSelected()}
          role={props.user.role}
        />
      )}
    </>
  );
}

export default Purchases;
