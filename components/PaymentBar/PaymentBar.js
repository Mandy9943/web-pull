import React, { Component } from "react";
import Modal from "./../Common/Modal";
import "./PaymentBar.css";
<<<<<<< HEAD
=======
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUniversity,
  faPlusCircle,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";
>>>>>>> Jorge

class PaymentBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal1: false,
      modal2: false,
      modal3: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  toggleModal(modal) {
    const newState = { ...this.state };
    newState[`modal${modal}`] = !newState[`modal${modal}`] ? true : false;
    this.setState(newState);
  }
  render() {
    const content1 = (
      <>
        <div className="header-modal">
          <h3>Más Metodos de pagos</h3>
        </div>
        <div className="textCenter">
          <h4>Tarjetas de credito</h4>
          <img src="assets\img\payTransfer.png" alt="tarjetas credito" />
          <p>
            El banco incluirá los intereses de las cuotas en el resumen de tu
            tarjeta
          </p>
          <h4>Transferencia desde tu banco</h4>
          <img src="" alt="tarjetas credito" />
          <h4>Traspaso Online</h4>
          <img src="" alt="tarjetas credito" />
          <p>
            cuando termines tu compra, te daremos las instrucciones para que
            sepas cómo y dónde pagarla
          </p>
        </div>
      </>
    );
    const content2 = (
      <>
        <div className="header-modal">
          <h3>Transferencia bancaria</h3>
        </div>
        <div>
          <p>
            Acércate a cualquier oficina Bancolombia a nivel nacional para
            realizar tu consignación
          </p>
          <p>Banco: Bancolombia</p>
          <p>Tipo de cuenta: Corriente</p>
          <p>Titular de la cuenta: Kiero International Group</p>
          <p>
            Debes tener presente que cuentas con 3 días para realizar la
            consignación y confirmar el pedido, de lo contrario será cancelado.
          </p>
        </div>
      </>
    );
    const content3 = (
      <>
        <div className="header-modal">
          <h3>Paga en efectivo</h3>
        </div>
        <div>
          <h4>Efecty</h4>
          <p>
            Acércate a cualquier punto Efecty del país, tienes un plazo de 2
            días Si pasados 2 días de realizar el pedido en www.kiero.co no se
            realiza el pago por Efecty, el pedido se cancelará. En el punto
            Efecty es indispensable informar que va dirigido a KIERO Cuando te
            soliciten la referencia, suministra el número de pedido.
          </p>
        </div>
      </>
    );
    return (
      <div className="payment">
        {this.state.modal1 ? (
          <Modal toggle={this.toggleModal} num="1" content={content1} button />
        ) : null}
        <div
          className="payment-block"
          onClick={() => {
            this.toggleModal(1);
          }}
        >
<<<<<<< HEAD
          <p className="payments-item-block">icono</p>
=======
        <p className="payments-icon payments-item-block">
          <FontAwesomeIcon icon={faPlusCircle} />
        </p>
>>>>>>> Jorge
          <p className="payments-item-block">Más Metodos de pagos</p>
          <p className="payments-item-block">Ver más</p>
        </div>
        {this.state.modal2 ? (
          <Modal toggle={this.toggleModal} num="2" content={content2} />
        ) : null}
        <div
          className="payment-block"
          onClick={() => {
            this.toggleModal(2);
          }}
        >
<<<<<<< HEAD
          <p className="payments-item-block">icono</p>
=======
          <p className="payments-icon payments-item-block">
            <FontAwesomeIcon icon={faUniversity} />
          </p>
>>>>>>> Jorge
          <p className="payments-item-block">Transferencia bancaria</p>
          <p className="payments-item-block">Ver más</p>
        </div>
        {this.state.modal3 ? (
          <Modal toggle={this.toggleModal} num="3" content={content3} />
        ) : null}
        <div
          className="payment-block"
          onClick={() => {
            this.toggleModal(3);
          }}
        >
<<<<<<< HEAD
          <p className="payments-item-block">icono</p>
=======
          <p className="payments-icon payments-item-block">
            <FontAwesomeIcon icon={faMoneyBillAlt} />
          </p>
>>>>>>> Jorge
          <p className="payments-item-block">Paga en efectivo</p>
          <p className="payments-item-block">Ver más</p>
        </div>
      </div>
    );
  }
}

export default PaymentBar;
