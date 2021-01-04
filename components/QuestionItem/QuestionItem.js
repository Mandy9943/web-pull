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
                {question.content} &nbsp;&nbsp;<small style={{color: "rgb(134, 134, 134)", "font-size": "smaller"}}>{question.created_since.split(" ")[0]}</small>
            </h5>
            {responses && <h5 className="responses-title">{question.answer}</h5>}
            </section>
        ))}
        {this.props.questions.length===0 ? <span className="empty-question">Se el primero en preguntar.</span> : null}
        <a><h5 className="no-web accent">Hacer una pregunta al vendedor</h5></a>
        <fotoer className="footer-question no-web">
          <span>Publicacion #{this.props.product_id}</span> <Link href="/ayuda"><a>Necesitas ayuda?</a></Link>
        </fotoer>
      </div>
    );
  }
}

export default QuestionItem;
