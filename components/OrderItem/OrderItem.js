import React, { useState } from "react";
import Link from "next/link";
import { getProductImgs } from "../../lib/functions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import "./OrderItem.css";
import Modal from "../../components/Common/Modal";
// import '../Purchases/PurchaseItem/PurchaseItem.css';
import { Iniciada, Verificada, Entregado, Calificada } from "./StateViews";
import moment from "moment";

export default function OrderItem({ item, onSelect, user }) {
  const [showModal, setShowModal] = useState(false);
  /*if (item) {
    item.data.purchase_status = "VERIFICADA";
  }*/
  function getComponentByState(state) {
    // Perhaps there is a cleaner way to do this, I dont like it D:
    switch (state) {
      case "INICIADA":
        return <Iniciada item={item} onSelect={onSelect} />;
      case "VERIFICADA":
        return (
          <Verificada
            item={item}
            showModal={showModal}
            toggle={() => {
              setShowModal(!showModal);
            }}
          />
        );
      case "ENTREGADO":
        return (
          <Entregado
            item={item}
            showModal={showModal}
            toggle={() => {
              setShowModal(!showModal);
            }}
          />
        );
      case "CALIFICADA": {
        return (
          <Calificada
            item={item}
            showModal={showModal}
            user={user}
            toggle={() => {
              setShowModal(!showModal);
            }}
          />
        );
      }
    }
  }

  return (
    <div className="order-item">
      {item.purchase_status === "CALIFICADA" && (
        <p className="detail-status">{item.data.rate_purchase.created_since}</p>
      )}
      <p className="date_time">
        {moment(item.data.created_since)
          .locale("es")
          .format("D [de] MMMM [del] YYYY")}
      </p>
      <div className="order-item-content">
        <section className="order">
          <div className="order-card-img">
            <img
              alt={item.data.product.title.slice(0, 10)}
              src={getProductImgs(item.data.product.images)}
              width="65"
              height="56"
            />
          </div>
          <div className="description">
            <h3>{item.data.product.title}</h3>
            <h3>$ {item.data.total}</h3>
            <h3 className="order-stock">
              {item.data.quantity}{" "}
              {Number(item.data.quantity) > 1 ? "unidades" : "unidad"}
            </h3>
          </div>
        </section>

        <section id="order-client-data">
          <p className="title_cliente">Cliente:</p>
          <p>{item.data.user.name + " " + item.data.user.last_name}</p>
          <p className="phone-client">3647777777 {item.data.user.phone}</p>
          {/*<Link href={"/chat/" + 'Texto'}>*/}
          <div className="messages">
            <a>Ver mensajes</a>
            {1 && <span className="accent-background">5</span>}
          </div>
          {/*</Link>*/}
        </section>

        {/*<section id="order-client-verify">
                  <p>
                      <Link href="/">
                          <a>Verificar</a>
                      </Link>
                  </p>
        </section>*/}

        {getComponentByState(item.data.purchase_status)}
      </div>
    </div>
  );
}
