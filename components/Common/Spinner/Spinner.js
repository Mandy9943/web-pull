import React, { Component } from "react";
import "./Spinner.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class Spinner extends Component {
  render() {
    return (
      <div className="spinner-container">
      <div className="element-spinner show">
        <div />
        <div />
        <div />
        <div />
      </div>
      </div>
    );
  }
}

export default Spinner;
