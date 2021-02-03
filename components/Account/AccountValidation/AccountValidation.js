import React, { Component } from "react";
import "./AccountValidation.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

class AccountValidation extends Component {
  render() {
    return (
      <div className="account-validate-pass-wrap">
        <div className="account-validate-pass">
          <h3>Para continuar ingresa tu contraseña</h3>
          <p>
            <span>
              <FontAwesomeIcon icon={faUser} />
            </span>{" "}
            julio@julio.com
          </p>
          <div className="account-validate-pass-form">
            <input />
            <button>Continuar</button>
            <p>¿Olvidaste tu contraseña?</p>
          </div>
        </div>
      </div>
    );
  }
}

export default AccountValidation;
