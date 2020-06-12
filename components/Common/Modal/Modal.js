import React, { Component } from "react";
import "./Modal.css";

class Modal extends Component {
  render() {
    return (
      <div className="wrap-modal">
        <div
          className="close"
          onClick={() => {
            this.props.toggle(this.props.num);
          }}
        />
        <div className="modal">
          {this.props.content}
        </div>
      </div>
    );
  }
}

export default Modal;
<button>cerrar</button>;
