import React, { Component } from "react";
import "./QuestionItem.css";
import Link from "next/link";

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
        {this.props.questions ? <span className="empty-question">Se el primero en preguntar.</span> : null}
        <a><h5 className="no-web accent">Hacer una pregunta al vendedor</h5></a>
        <fotoer className="footer-question no-web">
          <span>Publicacion #324234</span> <Link href="/ayuda"><a>Necesitas ayuda?</a></Link>
          {/*NEED FIX THIS SHIT*/}
        </fotoer>
      </div>
    );
  }
}

export default QuestionItem;
