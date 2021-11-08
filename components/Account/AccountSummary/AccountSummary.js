import React, { Component } from "react";
import "./AccountSummary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBell } from "@fortawesome/free-solid-svg-icons";
import { getData } from "../../../services/userApi"
import Link from "next/link";
import { getImgUrl } from "../../../lib/config";
import {handleFormatUrl} from '../../../lib/functions'


class AccountSummary extends Component {

  constructor(props) {
    super(props);
    this.state = {
        mostrar: false,
        answers: [],
        questions : []
    }
  }

  componentDidMount() {
    getData("/getAQ", this.props.user.jwt)
        .then((response) => {
            this.setState({ answers: response.data.answers, questions: response.data.questions });
        });
  }

  render() {

    return (
      <div className="account-summary-wrap">
        <h1 className="account-summary-title">Resumen</h1>

          {this.props.user.type === 2 &&
          <div className="account-summary-wrap-items">
              <div className="account-summary-item-title">
                  <FontAwesomeIcon icon={faComment}/> Preguntas
              </div>
              {this.state.answers.length > 0 ?

                  this.state.answers.map((answer, i) => {
                      <div key={i} className="question">
                          <h5>{answer.user.name + " " + answer.user.last_name} Te hizo una pregunta en:</h5>
                          <div className='item-question'>
                          <img loading="lazy" alt={answer.product.title} src={answer.product.images.length > 0 && getImgUrl(answer.product.images[0].url)}/>
                              <section className="text">
                                  <p className="title">{answer.product.title}</p>
                                  <a
                                      href={handleFormatUrl(answer.product.product_id, answer.product.title)}
                                      className="responses">Ver respuesta</a>
                              </section>
                          </div>
                      </div>
                  })
                  : <div className="account-summary-item"><span className="Count">0</span> Sin preguntas</div>
              }

          </div>
          }

        <div className="account-summary-wrap-items">
          <div className="account-summary-item-title">
            <FontAwesomeIcon icon={faComment} /> Respuestas
          </div>
          {this.state.questions.length > 0 ? 
          this.state.questions.map( (question,i) => {
            if(i<2){
              return <div key={i} className="question">
              <h5>{question.user.name+" "+question.user.last_name} Te respondió una pregunta en:</h5>
              <div className='item-question'>
                  <img alt={question.product.title} src={question.product.images.length>0 && getImgUrl(question.product.images[0].url)}/>
                <section className="text">
                <p className="title">{question.product.title}</p>
                <a href={handleFormatUrl(question.product.product_id, question.product.title)} className="responses">Ver respuesta</a>
                </section>
              </div>
            </div>
            }

          })
          :<div className="account-summary-item"><span className="Count">0</span> No tienes respuestas </div>
          }

        </div>


        <div className="account-summary-wrap-items">
          <div className="account-summary-item-title">
            <FontAwesomeIcon icon={faBell} /> Notificaciones
          </div>
          <div className="account-summary-item"><span className="Count">0</span> Sin Notificaciones</div>
        </div>
      </div>
    );
  }
}

export default AccountSummary;
