import React, { Component } from "react";
import "./RefundPolicy.css";
import Header from "./../Common/Header";
import Footer from "./../Common/Footer";
class RefundPolicy extends Component {
  render() {
    return (
      <div>
        <Header />

        <div className="RefundPolicy-wrap-content">
          <div>
            <h1 className="RefundPolicy-title">Política de reembolso</h1>
          </div>
          <div>
            <p className="RefundPolicy-paragraph">
              Aplicara reembolso total del dinero en las siguientes situaciones:
            </p>
            <ul>
              <li className="RefundPolicy-list">
                <p className="RefundPolicy-paragraph ">
                  Cuando el producto recibido no corresponda al producto
                  comprado y el cliente decide solicitar reembolso de su dinero,
                  es de anotar de que previamente el cliente debe notificar
                  oportunamente que el producto recibido no corresponde al
                  comprado en la página, esta notificación se debe realizar por
                  medio de los canales de comunicación que brinda el
                  Marketplace; el personal de apoyo de gestión al cliente
                  procederá a brindar indicaciones de cuál es el proceso a
                  seguir para realizar el trámite de reembolso.
                </p>
              </li>
              <li className="RefundPolicy-list">
                <p className="RefundPolicy-paragraph ">
                  Cuando el cliente acude a la ley de retracto, la cual según el
                  artículo 47 de la ley 1480 de 2011 y donde el cliente puede
                  hacer uso de la misma solo bajo las condiciones estipuladas
                  esta, recuerde que para ejercer este derecho el término máximo
                  para notificar el retracto es de 5 días hábiles y se debe
                  reportar por medio de los canales de comunicación que brinda
                  el Marketplace o por el medio por donde fue contactado para
                  confirmar los datos de envío. Recuerde que si decide aplicar a
                  la ley de retracto debe asumir el valor de la devolución del
                  producto hasta la dirección indicada por el área de gestión
                  del Marketplace.
                </p>
              </li>
              <li className="RefundPolicy-list">
                <p className="RefundPolicy-paragraph ">
                  Cuando el producto recibido no se encuentra en el estado
                  original de un producto nuevo o su apariencia no tiene esta
                  cualidad y el cliente decide no recibir un reemplazo del
                  producto.
                </p>
              </li>
              <li className="RefundPolicy-list">
                <p className="RefundPolicy-paragraph ">
                  Cuando por falta de stock o disponibilidad, la tienda o
                  vendedor no cuente con disponibilidad total del producto o por
                  causa de fuerza mayor no pueda cumplir con su obligación para
                  con el cliente.
                </p>
              </li>
              <li className="RefundPolicy-list">
                <p className="RefundPolicy-paragraph ">
                  Por extravío de la mercancía por parte de transportadora
                  asociada al servicio de entregas y el cliente no pueda esperar
                  la llegada del reemplazo del producto.
                </p>
              </li>
              <li className="RefundPolicy-list">
                <p className="RefundPolicy-paragraph ">
                  Por no haber recibido el producto, pagado y comprado en el
                  Marketplace.
                </p>
              </li>
            </ul>

            <p className="RefundPolicy-paragraph ">
              <b> Nota:</b> Tenga presente que, en los anteriores casos, el
              cliente debe reportar al Marketplace cualquier novedad encontrada
              en el producto recibido dentro de los primeros 5 días hábiles
              después de haber recibido el producto, para que el área de gestión
              pueda hacerse cargo del caso.
            </p>
            <p className="RefundPolicy-paragraph">
              Antes de realizar cualquier reembolso, se propondrá al cliente
              hacer uso del saldo a favor en la compra de un nuevo producto
              equivalente al mismo valor, en caso de que el producto tenga un
              valor superior al pagado, el cliente asumirá el ajuste de precio,
              si el cliente decide no acceder a la propuesta, se hará devolución
              total de dinero a la cuenta desde donde fue pagado el producto, en
              caso de que el productohaya sido pagado en efectivo a través de un
              corresponsal bancario o aliado bancario, el cliente deberá
              presentar una cuenta de ahorros a donde poder transferir el
              dinero.
            </p>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default RefundPolicy;
