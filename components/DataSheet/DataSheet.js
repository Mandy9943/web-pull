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
        <div className="data-sheet-wrap-form">
          <div className="data-sheet-wrap-section-form">
            <div className="data-sheet-item-form">
              <input name="brand" placeholder="Marca" onChange={(e) => { this.props.call("brand",e); }}/>
            </div>
            <div className="data-sheet-item-form">
              <input name="material" placeholder="Material"  onChange={(e) => { this.props.call("material",e); }}/>
            </div>
            <div className="data-sheet-item-form">
              <input name="model" placeholder="Modelo" onChange={(e) => { this.props.call("model",e); }}/>
            </div>
          </div>
          <div className="data-sheet-wrap-section-form">
            <div className="data-sheet-item-form">
              <input name="width" placeholder="Ancho" onChange={(e) => { this.props.call("width",e); }}/>
              <select name="width_type">
                <option>mm</option>
                <option>cm</option>
                <option>Ft</option>
                <option>Mt</option>
              </select>
            </div>

            <div className="data-sheet-item-form">
              <input name="height" placeholder="Alto" onChange={(e) => { this.props.call("height",e); }}/>
              <select name="height_type">
                <option>mm</option>
                <option>cm</option>
                <option>Ft</option>
                <option>Mt</option>
              </select>
            </div>

            <div className="data-sheet-item-form">
              <input name="long" placeholder="Largo" onChange={(e) => { this.props.call("long",e); }}/>
              <select name="long_type">
                <option>mm</option>
                <option>cm</option>
                <option>Ft</option>
                <option>Mt</option>
              </select>
            </div>

            <div className="data-sheet-item-form">
              <input name="weight" placeholder="Peso" onChange={(e) => { this.props.call("weight",e); }}/>
              <select name="weight_type">
                <option>Gr</option>
                <option>Kg</option>
                <option>Tn</option>
              </select>
            </div>

          </div>
        </div>
      </Accordion>
    );
  }
}

export default DataSheet;
