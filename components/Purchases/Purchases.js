import React, { useState, useEffect } from "react";
import Link from "next/link";
import "./Purchases.css";
import ProductItem from "../ProductItem/ProductItem";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../services/userApi";
import { modifyData } from "../../services/ordersApi";
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
import { makeStyles } from '@material-ui/core/styles';
import Paginations from './Pagination/Pagination';

function processSellData(data) {
  // Esta uncion es para que los datos devueltos por el endpoint /shop/orders/
  // tengan el mismo formato del de las ventas.
  console.log(data)
  if (data.message === 'Error') {
    return [];
  }else{
    return data.data.map((record) => {
      return { data: record };
    });
  }
}


function Purchases(props) {
  const [pagination, setPagination] = useState();
  const [purchases, setPurchases] = useState([]);
  const [selected, setSelected] = useState();
  const [order, setOrder] = useState("");
  const [search, setSearch] = useState("");

  let lastPage = 1;
  let currentPage = 1;
  let nextPage = 1;
  const LIMIT = 20;

  if (pagination) {
    lastPage = pagination["last_page"];
    currentPage = pagination.current_page > 0 ? pagination.current_page : 1;
    nextPage = pagination.next_page > 0 ? pagination.next_page : 1;
  }
  useEffect(() => {
    const endp =
      props.mode === "sell"
        ? "/shop/orders?page=1&limit=" + LIMIT + order + search
        : "/getPurchases?page=1&size=" + LIMIT;
    getData(endp, props.user.jwt).then((response) => {
      
      if (response.status !== 404) {
        setPagination(response.data.pagination);

        // Dirty Hack
        if (props.mode === "sell") {
          setPurchases(processSellData(response.data));
        } else {
          setPurchases(response.data.purchases); // Dirty hack the funciton
        }
      } else {
        setPagination();
        setPurchases([]);
      }
    });

    return () => {
      setPagination();
      setPurchases([]);
    };
  }, []);

  const handleSelect = (item) => {
    // console.log("elementos",item)
    setSelected(item);
  };

  const orderBy = (type) => {
    let order = "&order=" + type;
    let endp = "/shop/orders?page=1&limit=" + LIMIT + order + search;
    getData(endp, props.user.jwt).then((response) => {
      if (response.data && response.data.code && response.data.code !== 404) {
        setPagination(response.data.pagination);
        setPurchases(processSellData(response.data));
        setOrder(order);
      } else {
        setPagination();
        setPurchases([]);
      }
    });
  };

  const searchOrders = () => {
    let endp = "/shop/orders?page=1&limit=" + LIMIT + order + search;
    getData(endp, props.user.jwt).then((response) => {
      setSearch("");
      if (response.data && response.data.code && response.data.code !== 404) {
        setPagination(response.data.pagination);
        setPurchases(processSellData(response.data));
      } else {
        setPagination();
        setPurchases([]);
      }
    });
  };

  const paginate = (selectPage) => {
    const endp =
      props.mode === "sell"
        ? "/shop/orders?page=" + selectPage + "&limit=" + LIMIT + order
        : "/getPurchases?page=" + selectPage + "&size=" + LIMIT;
    getData(endp, props.user.jwt).then((response) => {
      if (response.data && response.data.code && response.data.code !== 404) {
        setPagination(response.data.pagination);

        // Dirty Hack
        if (props.mode === "sell") {
          setPurchases(processSellData(response.data));
        } else {
          setPurchases(response.data.purchases); // Dirty hack the funciton
        }
      } else {
        setPagination();
        setPurchases([]);
      }
    });
  };

  const updateState = async (endp) => {
    let response = await modifyData(endp, "", props.user.jwt);
    let element = response.data.data[0];
    //buscar este elemento en el arreglo original y sustituirlo
    let newPurchases = purchases.map((item, i) => {
      if (item.data.order_id == element.order_id) {
        item.data = element;
      }
      return item;
    });
    setPurchases(newPurchases);
  };

  console.log(purchases)

  return !selected ? (
    <div className="purchase-list">
      <h1 className="status-title">
        {props.mode === "sell" ? "Mis ventas" : "Mis Compras"}
      </h1>
      {props.mode === "sell" ? (
        <>
          <AccountStoreSales user={props.user} />
          <div className="account-store-sales-wrap-search">
            <div className="account-store-sales-wrap-filter">
              <div className="menu_options">
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
              </div>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  searchOrders();
                }}
              >
                <div className="account-store-sales-wrap-input-search">
                  <span>
                    <FontAwesomeIcon icon={faSearch} />
                  </span>
                  <input
                    className="account-store-sales-input-search"
                    placeholder="buscar por # o título"
                    value={search ? search.replace("&search=", "") : ""}
                    onChange={(e) => {
                      setSearch("&search=" + e.target.value);
                    }}
                  />
                </div>
              </form>
            </div>
            {/*<span className="sub-title"> {purchases.length} ventas</span>*/}
          </div>
          {purchases.length === 0 ? (
            <section className="empty-text">
              <span>No tiene ninguna venta</span>
            </section>
          ) : (
            purchases.map((item, index) => {
              if (
                item.data.product !== null &&
                item.data.purchase_status !== null
              ) {
                return (
                  <OrderItem
                    key={index}
                    updateState={updateState}
                    item={item}
                    onSelect={handleSelect}
                    close={setSelected}
                    user={props.user}
                  />
                );
              }
            })
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
      <Paginations/>
      {pagination && lastPage > 1 && (
        <Pagination
          actual={currentPage}
          totalPages={lastPage}
          cb={(selectPage) => {
            paginate(selectPage);
          }}
        />
      )}
    </div>
  ) : (
    <>
      {props.mode === "sell" ? (
        <OrdersDetail
          item={selected}
          close={setSelected}
          updateState={updateState}
        />
      ) : (
        <PurchasesDetail item={selected} close={setSelected} />
      )}
    </>
  );
}

export default Purchases;
