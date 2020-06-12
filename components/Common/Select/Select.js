import React, { Component } from "react";
import "./Select.css";
class Select extends Component {
  render() {
    return (
      <div className="wrap-select">
        <select>{this.props.children}</select>
      </div>
    );
  }
}

export default Select;
