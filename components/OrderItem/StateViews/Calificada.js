import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar } from "@fortawesome/free-solid-svg-icons";
import Modal from "../../Common/Modal";
import { getProductImgs } from "../../../lib/functions";
import { getData } from "../../../services/userApi";

export default function Calificada({ item, toggle, showModal, user }) {
  let id = item.data.order_id;
  let jwt = user.jwt;
  const [detailData, setDetailData] = useState(null);

  useEffect(() => {
    if (showModal) {
      const endp = "/getOrderDetails/" + id;

      getData(endp, jwt).then((response) => {
        setDetailData(response.data);
      });
    }
  }, [showModal, id, jwt]);

  let qModal = null;

  if (detailData !== null) {
    qModal = (
      <div className="item-product-modal">
        <div className="vendor-reputation">
          <section className="info">
            <img
              alt="Foto del vendedor"
              src={detailData.data.seller.photo}
              width="65"
              height="56"
              style={{ float: "left", borderRadius: "50%" }}
            />
            <section className="info-text" style={{ marginLeft: "80px" }}>
              <p className="stars">
                {Array.from(
                  Array(detailData.rate_purchase_data.rate_product),
                  (i) => (
                    <FontAwesomeIcon icon={faStar} />
                  )
                )}
              </p>
              {detailData.rate_purchase_data.rate_product == 5 && (
                <h5 className="sub_excelent">Excelente vendedor!</h5>
              )}
            </section>
          </section>
          <br />
          <section className="info">
            <img
              alt="Foto del producto"
              src={detailData.data.product.images[0].url}
              width="65"
              height="56"
              style={{ float: "left" }}
            />
            <section className="info-text" style={{ marginLeft: "80px" }}>
              <h4>Calificación del producto</h4>
              <p className="description">{detailData.data.product.title}</p>
              <p className="description" style={{ marginTop: "15px" }}>
                {detailData.rate_purchase_data.comments}
              </p>
            </section>
          </section>
          {detailData.rate_purchase_data &&
            detailData.rate_purchase_data.images_rate_purchase.length > 0 && (
              <section className="thumbnails">
                {detailData.rate_purchase_data.images_rate_purchase.map(
                  (url, i) => (
                    <img
                      src={url}
                      key={i}
                      width="65"
                      height="56"
                      alt="Foto de la valoración"
                    />
                  )
                )}
              </section>
            )}
        </div>
      </div>
    );
  } else {
    qModal = (
      <div className="item-product-modal">
        <div className="vendor-reputation">
          <section className="info">
            <section className="info-text" style={{ textAlign: "center" }}>
              <h4>Cargando datos ...</h4>
            </section>
          </section>
        </div>
      </div>
    );
  }

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
