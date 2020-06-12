import React, { Component } from "react";
import "./Question.css";

class Question extends Component {
  render() {
    return (
      <div className="wrap-question">
        <h3>Preguntas y respuestas</h3>
        <div className="wrap-question-buttons">
          <button className="button-question-product-detail">Envíos</button>
          <button className="button-question-product-detail">Medios de pago</button>
          <button className="button-question-product-detail">Garantía</button>
        </div>
        <div className="wrap-question-input">
          <input type="text" />
          <button className="button-question-product-detail">Preguntar</button>
        </div>
      </div>
    );
  }
}

export default Question;
