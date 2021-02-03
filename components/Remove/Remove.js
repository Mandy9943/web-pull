import React, { Component } from "react";
import "./Remove.css";
import Accordion from "./../Common/Accordion";

class Remove extends Component {
  render() {
    return (
      <Accordion title={this.props.title}>
        <h4>Selecciona si aceptas o no el retiro en persona</h4>
        <div className="remove-wrap-form 2dual">
          <div className="remove-form-group single">
            <input
              type="radio"
              id="remove_1"
              value="1"
              name="pick_up"
              onChange={(e) => { this.props.call("pick_up",e); }}
              hidden
              defaultChecked
            />
            <label htmlFor="remove_1">Acepto</label>
          </div>
          <div className="remove-form-group single">
            <input type="radio" id="remove_2" value="0" name="pick_up" onChange={(e) => { this.props.call("pick_up",e); }} hidden />
            <label htmlFor="remove_2">No acepto</label>
          </div>
        </div>
      </Accordion>
    );
  }
}

export default Remove;
