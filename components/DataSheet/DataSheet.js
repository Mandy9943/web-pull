import React, { Component } from "react";
import "./DataSheet.css";
import Accordion from "./../Common/Accordion";

class DataSheet extends Component {
  render() {
    return (
      <Accordion title={this.props.title}>
        <div className="data-sheet-wrap-title">
          <h4>
            Completa estos datos con la ayuda de la caja de producto, su
            etiqueta, envase o usando las especificaciones del fabricante
          </h4>
        </div>
        <form className="data-sheet-wrap-form">
          <div className="data-sheet-wrap-section-form">
            <div className="data-sheet-item-form">
              <input placeholder="Marca" />
            </div>
            <div className="data-sheet-item-form">
              <input placeholder="Material" />
            </div>
            <div className="data-sheet-item-form">
              <input placeholder="Modelo" />
            </div>
          </div>
          <div className="data-sheet-wrap-section-form">
            <div className="data-sheet-item-form">
              <input placeholder="Ancho" />
              <select>
                <option>CM</option>
              </select>
            </div>
            <div className="data-sheet-item-form">
              <input placeholder="Largo" />
              <select>
                <option>CM</option>
              </select>
            </div>
            <div className="data-sheet-item-form">
              <button>cancelar</button>
              <button>confirmar</button>
            </div>
          </div>
        </form>
      </Accordion>
    );
  }
}

export default DataSheet;
