import React, { Component } from "react";
import "./QuestionItem.css";

class QuestionItem extends Component {
  render() {

    let responses = true;
    return (
      <div className="QuestionItem-list">
        <h5 className="title">Ultimas Preguntas</h5>
        {this.props.questions.map((question, i) => (
            <section key={i} className="question-item">
            <h5 className="question-title">
              {question.content}
            </h5>
            {responses && <h5 className="responses-title">{question.answer}</h5>}
            </section>
        ))}
      </div>
    );
  }
}

export default QuestionItem;
