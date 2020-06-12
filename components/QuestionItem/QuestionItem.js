import React, { Component } from "react";
import "./QuestionItem.css";

class QuestionItem extends Component {
  render() {

    let responses = true;

    return (
      <div className="QuestionItem-list">
        <h5 className="title">Ultimas Preguntas</h5>
        <section className="question-item">
          <h5 className="question-title">
            pregunta Del cliente jhoubercito
          </h5>
          {responses && <h5 className="responses-title">Respues del vendedor</h5>}
        </section>
      </div>
    );
  }
}

export default QuestionItem;
