import React, { Component } from "react";
import "./AccountData.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faEdit } from "@fortawesome/free-solid-svg-icons";
import Modal from "./../../Common/Modal";

class AccountData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      stateModals: {
        modal1: false,
        modal2: false,
        modal3: false,
      },
      info: {
        name: null,
        type: null,
        id: null,
        phone: null,
      },
    };
    this.toggleModal = this.toggleModal.bind(this);
  }
  icon = {
    add: <FontAwesomeIcon icon={faPlus} />,
    edit: <FontAwesomeIcon icon={faEdit} />,
  };
  contentModals = {
    modal1: (
      <form className="account-data-form-modals">
        <div className="account-data-form-group">
          <h3>
            {this.data == null
              ? "Añadir nombre y apellido"
              : "Modificar nombre y apellido"}
          </h3>
        </div>
        <div className="account-data-form-group">
          <input placeholder="Nombres" />
        </div>
        <div className="account-data-form-group">
          <input placeholder="Apellidos" />
        </div>
        <div className="account-data-form-wrap-button">
          <button>enviar</button>
          <button className="cancel-btn"
            onClick={() => {
              this.toggleModal(1);
            }}
          >
            cancelar
          </button>
        </div>
      </form>
    ),
    modal2: (
      <form className="account-data-form-modals">
        <h3 className="account-data-form-group">
          {this.data == null ? "Añadir documento" : "Modificar documento"}
        </h3>
        <div className="account-data-form-group">
          <select>
            <option value="C.C.">C.C.</option>
            <option value="C.E.">C.E.</option>
          </select>
        </div>
        <div className="account-data-form-group">
          <input placeholder="documento" type="number" />
        </div>
        <div className="account-data-form-wrap-button">
          <button>enviar</button>
          <button className="cancel-btn"
            onClick={() => {
              this.toggleModal(2);
            }}
          >
            cancelar
          </button>
        </div>
      </form>
    ),
    modal3: (
      <form className="account-data-form-modals">
        <div className="account-data-form-group">
          <h3>{this.data == null ? "Añadir numero" : "Modificar numero"}</h3>
        </div>
        <div className="account-data-form-group">
          <input placeholder="Numero" type="number" />
        </div>
        <div className="account-data-form-wrap-button">
          <button>enviar</button>
          <button className="cancel-btn"
            onClick={() => {
              this.toggleModal(3);
            }}
          >
            cancelar
          </button>
        </div>
      </form>
    ),
  };
  toggleModal(modal) {
    const newState = { ...this.state.stateModals };
    newState[`modal${modal}`] = !newState[`modal${modal}`] ? true : false;
    this.setState({ stateModals: newState });
  }
  render() {
    return (
      <div className="account-data-content">
        <h3 className="account-data-title">Mis datos</h3>
        <div className="account-data-sub-title">
          <h4>Cuenta</h4>
          <span>Ayuda</span>
        </div>
        <div className="account-data-section">
          <div className="account-data-section-row">
            <div className="account-data-section-column">
              <p>Usuario</p>
            </div>
            <div className="account-data-section-column">
              <p>Julio98</p>
            </div>
            <div className="account-data-section-column">{this.icon.edit}</div>
          </div>
          <div className="account-data-section-row">
            <div className="account-data-section-column">
              <p>Correo</p>
            </div>
            <div className="account-data-section-column">
              <p>julio@julio.com</p>
            </div>
            <div className="account-data-section-column">{this.icon.edit}</div>
          </div>
        </div>
        <div className="account-data-sub-title">
          <h4>Datos personales</h4>
          <span>Ayuda</span>
        </div>
        <div className="account-data-section">
          <div className="account-data-section-row">
            <div className="account-data-section-column">
              <p>Nombre y apellido</p>
            </div>
            <div className="account-data-section-column">
              <p>
                {this.state.data != null && this.state.data.name
                  ? this.state.data.name
                  : "No hay nombre registrado"}
              </p>
            </div>
            <div className="account-data-section-column">
              <span
                onClick={() => {
                  this.toggleModal(1);
                }}
              >
                {this.data == null ? this.icon.add : this.icon.edit}
              </span>
            </div>
          </div>
          <div className="account-data-section-row">
            <div className="account-data-section-column">
              <p>Documento</p>
            </div>
            <div className="account-data-section-column">
              {this.state.data != null && this.state.data.id
                ? this.state.data.id
                : "No hay documento registrado"}
            </div>
            <div className="account-data-section-column">
              <span
                onClick={() => {
                  this.toggleModal(2);
                }}
              >
                {this.data == null ? this.icon.add : this.icon.edit}
              </span>
            </div>
          </div>
          <div className="account-data-section-row">
            <div className="account-data-section-column">
              <p>Numero</p>
            </div>
            <div className="account-data-section-column">
              {this.state.data != null && this.state.data.phone
                ? this.state.data.phone
                : "No hay numero registrado"}
            </div>
            <div className="account-data-section-column">
              <span
                onClick={() => {
                  this.toggleModal(3);
                }}
              >
                {this.data == null ? this.icon.add : this.icon.edit}
              </span>
            </div>
          </div>
        </div>
        <div className="account-data-sub-title">
          <h4>Tarjetas</h4>
          <span>Ayuda</span>
        </div>
        <div className="account-data-section">
          <div className="account-data-section-row">
            <div className="account-data-section-column">
              <p>No hay tarjetas</p>
            </div>
            <div className="account-data-section-column">
              <p>{}</p>
            </div>
            <div className="account-data-section-column">
              {this.data == null ? this.icon.add : this.icon.edit}
            </div>
          </div>
        </div>
        <div className="account-data-sub-title">
          <h4>Domicilios</h4>
          <span>Ayuda</span>
        </div>
        <div className="account-data-section">
          <div className="account-data-section-row">
            <div className="account-data-section-column">
              <p>No hay direcciones guardadas</p>
            </div>
            <div className="account-data-section-column">
              <p>{}</p>
            </div>
            <div className="account-data-section-column">
              {this.data == null ? this.icon.add : this.icon.edit}
            </div>
          </div>
        </div>
        {this.state.stateModals.modal1 ? (
          <Modal
            toggle={this.toggleModal}
            num="1"
            content={this.contentModals.modal1}
          />
        ) : null}
        {this.state.stateModals.modal2 ? (
          <Modal
            toggle={this.toggleModal}
            num="2"
            content={this.contentModals.modal2}
          />
        ) : null}
        {this.state.stateModals.modal3 ? (
          <Modal
            toggle={this.toggleModal}
            num="3"
            content={this.contentModals.modal3}
          />
        ) : null}
      </div>
    );
  }
}

export default AccountData;
