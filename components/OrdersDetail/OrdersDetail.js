import React, { useState } from "react";
import Link from "next/link";
import "./OrdersDetail.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCheck,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { getProductImgs } from "../../lib/functions";
import "../../components/Common/Chat/Chat.sass";

export default function OrderDetail({ item, close, verifyOrder }) {
  const [showModal, setShowModal] = useState(false);

  const modalBodySuccess = (
    <div id="modal-body">
      <FontAwesomeIcon icon={faCheck} />
      <p>Verificado</p>
    </div>
  );

  // Chat here lacks of functionality, it is just drawn
  return (
    <div className="orders-detail">
      <section class="left-panel">
        <div className="breadcrumb">
          <a onClick={close}>Ventas</a>
          <FontAwesomeIcon icon={faAngleRight} />
          <a>#{item.data.order_id}</a>
        </div>

        <main>
          <div className="chat-wrap">
            <div className="msg" style={{ height: "50vh" }}></div>
            <form>
              <div className="chat-input">
                <input type="text" />
                <input hidden type="file" id="file" />
                <div className="chat-wrap-button">
                  <label htmlFor="file">
                    <FontAwesomeIcon icon={faPaperclip} />
                  </label>
                  <button type="submit">Enviar</button>
                </div>
              </div>
            </form>
          </div>
        </main>
      </section>
      <section className="right-panel">
        <Link href={"/ayuda"}>
          <a>Necesito ayuda</a>
        </Link>

        {/* Seccion Cliente */}
        <section className="card">
          <header>
            <h4>Cliente</h4>
          </header>
          <main>
            <div className="card-img">
              <img
                alt={item.data.product.title}
                src={getProductImgs(item.data.product.images)}
              />
            </div>

            <section className="card-description">
              <h3>{item.data.user.name + " " + item.data.user.last_name}</h3>
              <h3 className="product-stock">{item.data.user.phone}</h3>
              <a href="#">Detalles de venta</a>
            </section>
          </main>
        </section>
        {/* Fin seccion cliente */}

        {/* Seccion producto */}
        <section className="card" id="product">
          <header>
            <h4>Entregado</h4>
          </header>

          <main>
            <div className="card-img">
              <img
                alt={item.data.product.title}
                src={getProductImgs(item.data.product.images)}
              />
            </div>

            <section className="card-description">
              <h3>{item.data.product.title}</h3>
              <h3>$ {item.data.total}</h3>
              <h3 className="product-stock">
                {item.data.quantity} unidad{item.data.quantity > 1 && "es"}
              </h3>
            </section>
          </main>
        </section>
        {/* Fin seccion producto */}

        {/* Seccion Action */}
        <section className="action">
          <p className="description">
            Una vez confirme los detalles del producto y el tiempo de entrega
            podrás calificar la venta como verificada.
          </p>
          <a
            onClick={async (e, id) => {
              e.preventDefault();

              // Steps to follow:
              // 1- Send request
              // let res = verifyOrder(e, id)

              // 2- Show Modal Exit after Modal and return to previous page
              setShowModal(true);
            }}
          >
            He verificado esta venta
          </a>
        </section>
        {/* Fin Seccion Action */}

        {/*  Modal  */}
        {showModal && (
          <Modal
            content={modalBodySuccess}
            toggle={async () => {
              setShowModal(false);
              close();
            }}
          />
        )}
      </section>
    </div>
  );
}
