import React, { Component } from "react";
import "./AccountStorePublication.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Table from "./../../Common/Table";
class AccountStorePublications extends Component {
  constructor(props) {
    super(props);
    this.state = { data: null };
    this.addFunction = this.addFunction.bind(this);
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((r) => r.json())
      .then((r) => this.setState({ data: r }));
  }
  addFunction() {
    if (this.state.data != null) {
      const state = [...this.state.data];
      state.map((item, i) => {
        item.function = (
          <button
            onClick={() => {
              alert(i);
            }}
          >{`action_${i}`}</button>
        );
      });
      return state;
    }
  }
  render() {
    const testData2 = {
      titles: ["post - id", "id", "nombre", "correo", "comentario", "accion"],
      data: this.addFunction(),
    };
    return (
      <div className="account-store-wrap-content">
        <h3>Publicaciones</h3>
        <p className="account-store-sub-title">gestion</p>
        <div className="account-store-wrap-search">
          <div className="account-store-wrap-input-search">
            <input className="account-store-input-search" />
            <span>
              <FontAwesomeIcon icon={faSearch} />
            </span>
          </div>
          {this.state.data != null ? (
            <div>{this.state.data.length} publicaciones</div>
          ) : null}
        </div>
        {this.state.data != null ? (
          <Table data={testData2} />
        ) : (
          <div>cargando...</div>
        )}
      </div>
    );
  }
}

export default AccountStorePublications;
