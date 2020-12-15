import React, { Component } from "react";
import "./AccountQuestions.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuestionCircle, faClock, faCheckCircle, faAngleDown, faUser, faEllipsisV } from "@fortawesome/free-solid-svg-icons";
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
      modal: -1,
      optionPanel: [],
      keepOpen: false,
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

  clsall = () => {
    if (!this.state.keepOpen) {
      let tmp = []
      for (let i = 0; i < this.state.optionPanel.length; i++) {
        tmp.push(false);
      }
      this.setState({ optionPanel: tmp });
    }
    this.setState({ keepOpen: false });
  }

  closeOptions = () => {
    setTimeout(this.clsall, 100);
  }

  mEnter = () => {
    clearTimeout(this.state.timeClose);
  }

  mLeave = () => {
    this.state.timeClose = setTimeout(this.closeOptions, 1000);
  }

  openOption = (item) => {
    this.setState({ keepOpen: true });
    let tmp = []
    for (let i = 0; i < this.state.optionPanel.length; i++) {
      tmp.push(item === i);
    }
    this.setState({ optionPanel: tmp });
  }

  render() {

    const mid = this.state.modal;

    const content1 = this.state.modal >= 0 ? (
      <div className="modal-question">
        <a className="cancel-modal"
          onClick={() => {
            this.setState({ modal: -1 });
          }}>
          <p>X</p>
        </a>
        <div className="header-modal">
          <h3 className="question">
            {this.state.questions[mid].content}
          </h3>
          <section className="question-product">
            <img src={this.state.questions[mid].product.images[0].url} />
            <div className="description-item">
              <p>{this.state.questions[mid].product.title}</p>
              <span className="accent">{this.state.questions[mid].product.price}</span>
            </div>
          </section>
        </div>
        <div>
          <p className="name-user-question">
            <FontAwesomeIcon icon={faUser} />
            {this.state.questions[mid].user.name + " " + this.state.questions[mid].user.last_name}
            <span>{this.state.questions[mid].product.created_since.split(".")[0]}</span>
          </p>
          <br /><h4><div className="">
            {
              this.state.questions[mid].answer === "" ?
                <form className="wrap-question-input" onSubmit={this.replyQuestion}>
                  <input type="text" name={"answer"} placeholder={"Responde a " + this.state.questions[mid].user.name} />
                  <button type="submit" className="button-question-product-detail">Responder</button>
                </form>
                :
                <><b className="name-user-question-respondida">Respondiste: </b> {this.state.questions[mid].answer}</>
            }
          </div>
          </h4>
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
          {/* <div>
            <Select>
              <option>Todo</option> NEED FIX THIS SHIT
            </Select>
          </div> */}
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
                  return <div className="question-item" key={i}>
                    <span className="title" onClick={() => this.reply(question.question_id, i)}>
                      <span>
                        <FontAwesomeIcon icon={faAngleDown} />
                      </span>
                    &nbsp;
                    {question.content}
                    </span>
                    <span className="fetch">{question.created_since.split(":").slice(0, -1).join(":")}</span>
                    <span className='name-user'>{question.user.name + " " + question.user.last_name} 
                      <a style={{ padding: "10px", cursor: "pointer" }} className="icon-action" onClick={() => this.openOption(i)}>
                        <FontAwesomeIcon icon={faEllipsisV} />
                      </a>
                      <section onMouseEnter={() => this.mEnter(i)} onMouseLeave={() => this.mLeave(i)} className={this.state.optionPanel[i] === true ? "actions active" : "actions"}>
                        <a
                          style={{ cursor: 'pointer' }}>
                          Eliminar
                        </a>
                      </section>
                    </span>
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
