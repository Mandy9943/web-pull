import React, { Component } from "react";
import "./Remove.css";
import Accordion from "./../Common/Accordion";

class Remove extends Component {
  render() {
    return (
      <Accordion title={this.props.title}>
        <h4>Selecciona si aceptas o no el retiro en persona</h4>
        <form className="remove-wrap-form">
          <div className="remove-form-group">
            <input
              type="radio"
              id="remove_1"
              value="1"
              name="remove"
              hidden
              checked
            />
            <label htmlFor="remove_1">Acepto</label>
          </div>
          <div className="remove-form-group">
            <input type="radio" id="remove_2" value="0" name="remove" hidden />
            <label htmlFor="remove_2">No acepto</label>
          </div>
          <div className="remove-form-group">
            <button>confirmar</button>
            <button>cancelar</button>
          </div>
        </form>
      </Accordion>
    );
  }
}

export default Remove;
