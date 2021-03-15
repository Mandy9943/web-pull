import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../Common/Modal";
import { getProductImgs } from "../../../lib/functions";

export default function Calificada({ item, toggle, showModal }) {
  const qModal = (
    <div className="item-product-modal">
      <div className="vendor-reputation">
        <section className="info">
          <img
            src={getProductImgs(item.data.product.images)}
            width="65"
            height="56"
            style={{ float: "left" }}
          />
          <section className="info-text" style={{ marginLeft: "80px" }}>
            <p className="stars">
              {/*Array.from(Array(item.data.rate_purchase_data.rate_shop), (i) => (
              <FontAwesomeIcon icon={faStar} />
            ))*/}
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
              <FontAwesomeIcon icon={faStar} />
            </p>
            {/*item.data.rate_purchase_data.rate_shop == 5 && (
            <h5 className="sub">Excelente vendedor!</h5>
          )*/}
            <h5 className="sub_excelent">¡Excelente vendedor!</h5>
          </section>
        </section>
        <br />
        <section className="info">
          <img
            src={getProductImgs(item.data.product.images)}
            width="65"
            height="56"
            style={{ float: "left" }}
          />
          <section className="info-text" style={{ marginLeft: "80px" }}>
            <h4>Calificación del producto</h4>
            <p className="description">{item.data.product.title}</p>
            <p className="description" style={{ marginTop: "15px" }}>
              {/*item.data.rate_purchase_data.comments*/}
              Comentarios de la venta del producto.
            </p>
          </section>
        </section>
        {/*item.rate_purchase_data.images.length > 0 && (
          <section className="thumbnails">
            {item.rate_purchase_data.images.map((url, i) => (
              <img
                src={"https://api.kieroapi.org/getFile/" + url}
                key={i}
                width="80"
                height="80"
              />
            ))}
          </section>
            )*/}
        <section className="thumbnails">
          <img
            alt={item.data.product.title.slice(0, 10)}
            src={getProductImgs(item.data.product.images)}
            width="65"
            height="56"
          />
          <img
            alt={item.data.product.title.slice(0, 10)}
            src={getProductImgs(item.data.product.images)}
            width="65"
            height="56"
          />
          <img
            alt={item.data.product.title.slice(0, 10)}
            src={getProductImgs(item.data.product.images)}
            width="65"
            height="56"
          />
        </section>
      </div>
    </div>
  );

  return (
    <div>
      <section className="state">
        <FontAwesomeIcon icon={faCheck} />
        <p>Venta calificada</p>
        <a onClick={() => toggle(true)}> Ver</a>
      </section>
      {showModal && <Modal content={qModal} toggle={() => toggle(false)} />}
    </div>
  );
}
