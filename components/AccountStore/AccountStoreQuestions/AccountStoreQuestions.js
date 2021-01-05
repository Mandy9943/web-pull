import React, { Component } from "react";
import "./AccountStoreQuestions.css";
import Table from "./../../Common/Table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faReply,
  faUser,
  faTrash,
} from "@fortawesome/free-solid-svg-icons";
import Modal from "./../../Common/Modal";

class AccountStoreQuestions extends Component {
  constructor(props) {
    super(props);
    this.state = { modal: false, data: null, dataModal: null };
    this.toggleModal = this.toggleModal.bind(this);
    this.addAction = this.addAction.bind(this);
    this.deleteItem = this.deleteItem.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((r) => r.json())
      .then((r) => this.setState({ data: r }));
  }
  toggleModal(id) {
    !this.state.modal
      ? this.setState({ modal: true })
      : this.setState({ modal: false });
    if (id != undefined) {
      const result = this.state.data.find((item) => item.id == id);
      this.setState({ dataModal: result });
    }
  }
  deleteItem(id) {
    console.log(id);
  }
  addAction() {
    const state = this.state.data != null ? [...this.state.data] : null;
    if (this.state.data != null) {
      state.map(
        (item) =>
          (item.action = (
            <div className="account-store-questions-wrap-button-table">
              <button
                className="account-store-questions-button-table"
                onClick={() => {
                  this.toggleModal(item.id);
                }}
              >
                <FontAwesomeIcon icon={faReply} />
              </button>
              <button
                className="account-store-questions-button-table"
                onClick={() => {
                  this.deleteItem(item.id);
                }}
              >
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))
      );
      return state;
    }
  }
  constructorModal() {
    const content = (
      <form className="response-modal">
        <div className="response-modal-header">
          <div className="response-modal-wrap-question">
            <h4>{this.state.dataModal.title}</h4>
            <div className="response-modal-wrap-info-client">
              <p>
                <FontAwesomeIcon icon={faUser} /> Julio
              </p>
              <p>20/20/2020 - 00:00</p>
            </div>
          </div>
          <div className="response-modal-wrap-seller">
            <div className="response-modal-wrap-img">
              <img src="https://picsum.photos/200" />
            </div>
            <div>
              <p className="response-modal-title-product">
                {this.state.dataModal.title}
              </p>
              <p className="response-modal-title-product">$ 100.000</p>
            </div>
          </div>
        </div>
        <div>
          <textarea className="response-modal-response-text" />
        </div>
        <div className="response-modal-wrap-button">
          <button type="button">responder</button>
          <button className="cancel-btn" type="button" onClick={this.toggleModal}>
            cancelar
          </button>
        </div>
      </form>
    );
    return content;
  }
  render() {
    const data = {
      titles: ["preguntas", "fecha", "cliente", "algo", "acciones"],
      data: this.addAction(),
    };
    return (
      <div className="">
        <div className="account-store-questions-wrap-header">
          <div className="account-store-questions-wrap-title">
            <h3>Preguntas</h3>
          </div>
          <div>
            <div>
              {this.state.data != null
                ? `${this.state.data.length} publicaciones`
                : null}
            </div>
            <div className="account-store-questions-wrap-input-search">
              <input className="account-store-questions-input-search" />
              <span>
                <FontAwesomeIcon icon={faSearch} />
              </span>
            </div>
          </div>
        </div>
        {this.state.data != null ? <Table data={data} /> : <div>cargando</div>}
        {this.state.modal ? (
          <Modal toggle={this.toggleModal} content={this.constructorModal()} />
        ) : null}
      </div>
    );
  }
}

export default AccountStoreQuestions;
