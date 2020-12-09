import React, { Component } from "react";
import "./Question.css";
import { sendQuestion } from "../../services/productsApi"
import Modal from "./../Common/Modal";
import PaymentDetail from './PaymentDetail';
import WarrantyDetail from './WarrantyDetail';
import SendDetail from './SendDetail';

class Question extends Component {

  constructor(props) {
    super(props);
    this.state = {
      question: "",
      modal1: false,
      modal2: false,
      modal3: false,
    };
    this.toggleModal = this.toggleModal.bind(this);
  }

  newQuestion = async e => {
    e.preventDefault();
    const question = e.target.elements.question.value;
    if (question !== "") {
      const r = await sendQuestion(question, this.props.product_id, this.props.user_data.jwt);
      console.log(r);
      if (r.data.result === "ok") {
        this.cngQuestion("");
        this.props.cb();
        alert("Pregúnta enviada");
      } else {
        alert("No se ha podido enviar la pregútna, intentelo nuevamente.")
      }
    } else {
      alert("Escriba una pregunta.")
    }
  };

  cngQuestion = (nval) => {
    this.setState({question: nval});
  }

  toggleModal(modal) {
    const newState = { ...this.state };
    newState[`modal${modal}`] = !newState[`modal${modal}`] ? true : false;
    this.setState(newState);
  }

  render() {

    return (
      <div className="wrap-question">
        <h3>Preguntas y respuestas</h3>
        <div className="wrap-question-buttons">

          <button onClick={() => {
              this.toggleModal(1);
            }} className="button-question-product-detail">Envíos</button>
          <button onClick={() => {
              this.toggleModal(2);
            }} className="button-question-product-detail">Medios de pago</button>
          <button onClick={() => {
              this.toggleModal(3);
            }} className="button-question-product-detail">Garantía</button>

        </div>
        { this.props.user_data.authenticated &&
          <div className="">
            <form className="wrap-question-input" onSubmit={this.newQuestion}>
              <input type="text" name={"question"} placeholder="Pregunta al vendedor" />
              <button type="submit" className="button-question-product-detail">Preguntar</button>
            </form>

          </div>

        }

        { !this.props.user_data.authenticated && 
            <div className="">
              <form className="wrap-question-input">

                Inicia sesión o registrate para realizar una pregúnta al vendedor.
              </form>
            </div>
        }

      {this.state.modal1 ? (
        <Modal toggle={this.toggleModal} num="1" content={<SendDetail/>} button />
      ) : null}
      {this.state.modal2 ? (
        <Modal toggle={this.toggleModal} num="2" content={<PaymentDetail />} button />
      ) : null}
      {this.state.modal3 ? (
        <Modal toggle={this.toggleModal} num="3" content={<WarrantyDetail />} button />
      ) : null}

      </div>
      

    );
  }
}

export default Question;
