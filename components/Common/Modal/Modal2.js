import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes, faCheck } from "@fortawesome/free-solid-svg-icons";
import "./Modal.css";

class Modal2 extends Component {
  render() {
    return (
      <div className="wrap-modal">
        <div
          className="close"
          onClick={() => {
            this.props.toggle(this.props.num);
          }}
        />
        <div className="modal modal2">
          {this.props.type === "error" && (
            <div className="icon-error">
              <FontAwesomeIcon icon={this.props.icon} />
            </div>
          )}

          {this.props.type === "ok" && (
            <div className="icon-ok">
              <FontAwesomeIcon icon={this.props.icon} />
            </div>
          )}
          <br />
          <p>{this.props.content}</p>
          <br />
          <button
            onClick={() => {
              this.props.toggle(this.props.num);
            }}
          >
            cerrar
          </button>
        </div>
      </div>
    );
  }
}

export default Modal2;
