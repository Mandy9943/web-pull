import React, { Component } from "react";
import "./AccountSummary.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment, faBell } from "@fortawesome/free-solid-svg-icons";

class AccountSummary extends Component {
  render() {
    return (
      <div className="account-summary-wrap">
        <h2 className="account-summary-title">Resumen</h2>
        <div className="account-summary-wrap-items">
          <div className="account-summary-item-title">
            <FontAwesomeIcon icon={faComment} /> Preguntas
          </div>
          <div className="account-summary-item">Sin respuesta</div>
        </div>
        <div className="account-summary-wrap-items">
          <div className="account-summary-item-title">
            <FontAwesomeIcon icon={faBell} /> Notificaciones
          </div>
          <div className="account-summary-item">Sin Notificaciones</div>
        </div>
      </div>
    );
  }
}

export default AccountSummary;
