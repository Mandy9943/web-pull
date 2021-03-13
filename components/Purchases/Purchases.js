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

/*const data = {
  code: 200,
  data: [
    {
      created_since: "2020-06-17T23:16:04.226275",
      method_id: 2,
      order_id: 7,
      product_id: 41479552,
      purchase_status: "NUEVA",
      quantity: 1,
      seller_id: 22,
      status: 2,
      total: "135400.00",
      transaction_id: null,
      updated_since: "2021-03-04T00:00:00",
      user_id: 5551,
      product: {
        title: "Dell Inspiron 15 3000 Series, Core i3 HD 16``",
        images: [],
        category: "Electronica",
      },
      client: {
        name: "Francisco",
        last_name: "Aro",
        phone: 55665566,
      },
      rate_purchase_data: {
        rate_shop: 5,
        created_since: "yesterday",
        comments: "Este producto es la hostia",
      },
    },
  ],
  error: {},
  filters: [],
  pagination: {},
};*/

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
  const LIMIT = 20;

  if (pagination) {
    lastPage = pagination["last_page"];
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
        ? "/shop/orders?page=1&limit=" + LIMIT
        : "/getPurchases?page=1&size=" + LIMIT;
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
  };

  const orderBy = (type) => {
    let endp = "/shop/orders?page=1&limit=" + LIMIT + "&order=" + type;
    getData(endp, props.user.jwt).then((response) => {
      setPagination(response.data.pagination);

      setPurchases(processSellData(response.data));
    });
  };

  let started = 0;
  let verified = 0;
  let delivered = 0;
  let qualified = 0;

  if (props.mode === "sell") {
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

  return !selected ? (
    <div className="purchase-list">
      <h1 className="status-title">
        {props.mode === "sell" ? "Mis ventas" : "Mis Compras"}
      </h1>
      {props.mode === "sell" ? (
        <>
          <AccountStoreSales
            started={started}
            verified={verified}
            delivered={delivered}
            qualified={qualified}
          />
          <div className="account-store-sales-wrap-search">
            <div className="account-store-sales-wrap-filter">
              <p>
                <a>
                  <FontAwesomeIcon icon={faThList} /> Filtrar y ordenar
                  <div className="hide_menu_options">
                    <ul>
                      <li>
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            orderBy("created");
                          }}
                        >
                          Fecha de creado
                        </a>
                      </li>
                      <li>
                        <a
                          onClick={(e) => {
                            e.preventDefault();
                            orderBy("updated");
                          }}
                        >
                          Fecha de modificado
                        </a>
                      </li>
                    </ul>
                  </div>
                </a>
              </p>
              <div className="account-store-sales-wrap-input-search">
                <span>
                  <FontAwesomeIcon icon={faSearch} />
                </span>
                <input
                  className="account-store-sales-input-search"
                  placeholder="buscar por # o título"
                  onChange={(e) => {
                    console.log(e.target.value);
                  }}
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
        </>
      )}
      <br />
      {pagination && lastPage > 1 && (
        <Pagination
          actual={currentPage}
          totalPages={lastPage}
          cb={(selectPage) => {
            const endp =
              props.mode === "sell"
                ? "/shop/orders?page=" + selectPage + "&limit=" + LIMIT
                : "/getPurchases?page=" + selectPage + "&size=" + LIMIT;
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
    </div>
  ) : (
    <>
      {props.mode === "sell" ? (
        <OrdersDetail item={selected} close={() => setSelected()} />
      ) : (
        <PurchasesDetail item={selected} close={() => setSelected()} />
      )}
    </>
  );
}

export default Purchases;
