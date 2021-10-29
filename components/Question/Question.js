import React, { Component } from "react";
import "./Question.css";
import { sendQuestion } from "../../services/productsApi"
import Modal from "./../Common/Modal";
import PaymentDetail from './PaymentDetail';
import WarrantyDetail from './WarrantyDetail';
import SendDetail from './SendDetail';
import {sendQuestionSocketChat} from "../../components/Services/kierochat-socket"
import swal from 'sweetalert';
import Link from 'next/link';

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
    console.log("probandp", this.props)
    e.preventDefault();
    const question = e.target.elements.question.value;
    if (question !== "") {
      console.log("probandp x2")
        sendQuestionSocketChat(question, this.props.market_id, this.props.product_id)
      // const r = await sendQuestion(question, this.props.product_id, this.props.user_data.jwt);
       // console.log(r);
      // if (r.data.result === "ok") {
      //   this.cngQuestion("");
      //   this.props.cb();
      //   alert("Pregúnta enviada");
      // } else {
      //   alert("No se ha podido enviar la pregúnta, intentelo nuevamente.")
      // }
        this.cngQuestion("");
        this.props.cb();
        swal({
          title: "Excelente!",
          text: "La pregunta fue enviada correctamente!",
          icon: "success",
        });
        // alert("Pregúnta enviada");
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
// console.log("id user", this.props, "id market",this.props.market_id, "id product",this.props.product_id,"pregunta")
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
            <form className="wrap-question-input newquestionsocketchat" onSubmit={this.newQuestion}>
              <input type="text" name={"question"} placeholder="Pregunta al vendedor" />
              <button type="submit" className="button-question-product-detail">Preguntar</button>
            </form>

          </div>

        }

        { !this.props.user_data.authenticated && 
            <div className="">
              <form className="wrap-question-input" style={{display: 'contents !important'}}>
              
              <Link href="/login"><a>inicia sesión
              </a></Link> o 
              <Link href="/registro"><a> regístrate
              </a></Link> para realizar una pregúnta al vendedor.
              </form>
            </div>
        }

      {this.state.modal1 ? (
        <Modal toggle={this.toggleModal} num="1" content={<SendDetail/>} button />
      ) : null}
      {this.state.modal2 ? (
        <Modal id='paymentDetailModal' toggle={this.toggleModal} num="2" content={<PaymentDetail />} button />
      ) : null}
      {this.state.modal3 ? (
        <Modal toggle={this.toggleModal} num="3" content={<WarrantyDetail />} button />
      ) : null}

      </div>
      

    );
  }
}

export default Question;
