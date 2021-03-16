import React, { useState } from "react";
import Modal from "../../Common/Modal";

export default function Verificada({ item, showModal, toggle, updateState }) {
  const qModal = (
    <section id="verified-modal">
      <h3>¿Este producto ya fue entregado?</h3>
      <p>Invita al comprador a calificar su experiencia con la compra</p>
      <div className="actions">
        <a
          style={{ cursor: "pointer" }}
          onClick={async (e) => {
            e.preventDefault();
            await updateState("/shop/order/" + item.data.order_id);
            // TODO Logic behind this
            toggle();
          }}
        >
          Ya fue entregado
        </a>
        <a
          style={{ cursor: "pointer" }}
          onClick={(e) => {
            e.preventDefault();
            toggle();
          }}
        >
          Aun no lo ha recibido
        </a>
      </div>
    </section>
  );

  return (
    <section className="info" style={{ textAlign: "center" }}>
      <a onClick={toggle}>
        ¿Este producto ya fue <br />
        entregado?
      </a>
      {showModal && <Modal content={qModal} toggle={toggle} />}
    </section>
  );
}
