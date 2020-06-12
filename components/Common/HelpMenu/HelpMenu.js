import React, { Component } from "react";
import "./HelpMenu.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

class HelpMenu extends Component {
  render() {
    return (
      <div className="help-menu">
        <div>
          <h4>Ayuda kiero</h4>
        </div>
        <details>
          <summary>
            <span>pruebas</span>
            <FontAwesomeIcon icon={faChevronRight} className="arrow" />
          </summary>
          <div className="help-details-item">
            <p className="help-details-item-content">prueba_1</p>
            <p className="help-details-item-content">prueba_2</p>
            <p className="help-details-item-content">prueba_3</p>
            <p className="help-details-item-content">prueba_4</p>
            <p className="help-details-item-content">prueba_5</p>
          </div>
        </details>
        <details>
          <summary>
            <span>pruebas</span>
            <FontAwesomeIcon icon={faChevronRight} className="arrow" />
          </summary>
          <div className="help-details-item">
            <p className="help-details-item-content">prueba_1</p>
            <p className="help-details-item-content">prueba_2</p>
            <p className="help-details-item-content">prueba_3</p>
            <p className="help-details-item-content">prueba_4</p>
            <p className="help-details-item-content">prueba_5</p>
          </div>
        </details>
        <details>
          <summary>
            <span>pruebas</span>
            <FontAwesomeIcon icon={faChevronRight} className="arrow" />
          </summary>
          <div className="help-details-item">
            <p className="help-details-item-content">prueba_1</p>
            <p className="help-details-item-content">prueba_2</p>
            <p className="help-details-item-content">prueba_3</p>
            <p className="help-details-item-content">prueba_4</p>
            <p className="help-details-item-content">prueba_5</p>
          </div>
        </details>
      </div>
    );
  }
}

export default HelpMenu;
