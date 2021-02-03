import React, { Component } from "react";
import "./BreadCrumbs.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class BreadCrumbs extends Component {
  render() {
    return (
      <div className="breadcrumbs-wrap">
        <span className="breadcrumbs">ruta</span>
        <FontAwesomeIcon icon={faChevronRight} className="breadcrumbs" />
        <span className="breadcrumbs">ruta</span>
        <FontAwesomeIcon icon={faChevronRight} className="breadcrumbs" />
        <span className="breadcrumbs">ruta</span>
      </div>
    );
  }
}

export default BreadCrumbs;
