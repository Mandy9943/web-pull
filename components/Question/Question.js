import React, { Component } from "react";
import "./Question.css";
import { sendQuestion } from "../../services/productsApi"

class Question extends Component {

  newQuestion = async e => {

    e.preventDefault();

    const question = e.target.elements.question.value;
    console.log(question)
    const r = sendQuestion(question, this.props.product_id, this.props.user_data.jwt);
    console.log(r);

    if(r.msg=="ok"){
      console.log("LISTO!")
      this.props.cb();
    }else{

    }
  };

  render() {
    console.log(this.props);
    return (
      <div className="wrap-question">
        <h3>Preguntas y respuestas</h3>
        <div className="wrap-question-buttons">

          <button className="button-question-product-detail">Envíos</button>
          <button className="button-question-product-detail">Medios de pago</button>
          <button className="button-question-product-detail">Garantía</button>

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

      </div>
      

    );
  }
}

export default Question;
