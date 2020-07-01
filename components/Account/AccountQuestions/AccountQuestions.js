import React, { Component } from "react";
import "./AccountQuestions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faClock, faCheckCircle, faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Select from "./../../Common/Select";
import Table from "../../Common/Table/Table";
import { getData } from "../../../services/userApi"
import Modal from "../../Common/Modal";
import { sendAnswer } from "../../../services/productsApi"


class AccountQuestions extends Component {

  constructor(props) {
    super(props);
    this.state = {
      questions: [],
      modal: -1
    }
  }


  componentDidMount() {
    this.loadData();
  }

  loadData() {
    getData("/getAQ", this.props.user.jwt)
      .then((response) => {
        console.log(response.data);
        this.setState({ questions: response.data.answers });
      });
  }

  reply = (id, i) => {
    console.log(id)
    console.log(this.state.questions[i])
    this.setState({ modal: i })
  }


  replyQuestion = async e => {

    e.preventDefault();

    const answer = e.target.elements.answer.value;
    sendAnswer(answer, this.state.questions[this.state.modal].question_id, this.props.user.jwt)
      .then((result) => {
        console.log(result);

        if (result.data.result == "ok") {

          this.loadData();
          this.setState({ modal: -1 });

        } else {
          alert("Error al responder.");
        }

      });

  };

  render() {

    console.log(this.state.questions)

    const mid = this.state.modal;


    const content1 = this.state.modal >= 0 ? (
      <div className="modal-question">
        <div className="header-modal">
          <h3>Responder pregúnta:</h3>
        </div>
        <div>
          <b className="account-questions-wrap-item">Usuario:</b>
          <p>
            {this.state.questions[mid].user.name + " " + this.state.questions[mid].user.last_name}
          </p>
          <b className="account-questions-wrap-item">Pregúnta:</b>
          <p>
            {this.state.questions[mid].content}
          </p>

          <br /><h4><div className="">

            {
              this.state.questions[mid].answer === "" ?
                <form className="wrap-question-input" onSubmit={this.replyQuestion}>
                  <input type="text" name={"answer"} placeholder={"Responde a " + this.state.questions[mid].user.name} />
                  <button type="submit" className="button-question-product-detail">Responder</button>
                </form>
                :
                <><b>Respondiste: </b>{this.state.questions[mid].answer}</>
            }


          </div></h4>
          <p>
            <div className="account-data-form-wrap-button">
              <button className="cancel-btn"
                onClick={() => {
                  this.setState({ modal: -1 });
                }}
              >
                <p>Cancelar</p>
              </button>
            </div>
          </p>
        </div>
      </div>
    ) : (<></>);



    return (
      <div className="question-component">
        {this.state.modal > -1 ? (
          <Modal toggle={() => this.setState({ modal: -1 })} content={content1} button />
        ) : null}

        <div className="account-questions-wrap-title">
          <div>
            <h1>Preguntas</h1>
          </div>
          <div>
            <Select>
              <option>Todo</option>
            </Select>
          </div>
        </div>
        <div className="account-questions-wrap-questions">
          {this.state.questions.length == 0 &&
            <div className="account-questions-wrap-item no-question">
              <span>
                <FontAwesomeIcon icon={faQuestionCircle} />
              </span>
            &nbsp;En este momento no tienes preguntas
          </div>
          }
          {this.state.questions.length > 0 &&
            <div className="question-table" >
              <section class="title-head">
                <span className="title">Pregunta</span>
                <span className="fetch">Fecha</span>
                <span className="name-user">Cliente</span>
              </section>
              <section className="body">
                {this.state.questions.map((question, i) => {
                  return <div className="question-item" key={i} onClick={() => this.reply(question.question_id, i)}>
                    <span className="title">
                      <span>
                        <FontAwesomeIcon icon={faAngleDown} />
                      </span>
                    &nbsp;
                    {question.content}
                    </span>
                    <span className="fetch">{question.created_since.split(":").slice(0, -1).join(":")}</span>
                    <span className='name-user'>{question.user.name + " " + question.user.last_name}</span>
                  </div>
                })}
              </section>
            </div>
          }
        </div>
      </div>
    );
  }
}

export default AccountQuestions;
