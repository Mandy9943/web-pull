import React, { Component } from "react";
import "./Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faList, faTh, faTimes } from "@fortawesome/free-solid-svg-icons";

class Filter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOrder: false,
      menuFilter: false,
    };
    this.toggleMenuOrder = this.toggleMenuOrder.bind(this);
    this.toggleMenuFilter = this.toggleMenuFilter.bind(this);
  }
  toggleMenuOrder() {
    !this.state.menuOrder
      ? this.setState({ menuOrder: true })
      : this.setState({ menuOrder: false });
  }
  toggleMenuFilter() {
    !this.state.menuFilter
      ? this.setState({ menuFilter: true })
      : this.setState({ menuFilter: false });
  }
  render() {
    const test = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
    const buttonState = this.props.format;
    const responsiveButton = buttonState == "grid" ? faTh : faList;
    return (
      <>
        <div className="wrap-filter">
          <div className="filter-group">
            <h3>titulo</h3>
            <span>20.000 resultados</span>
          </div>
          <div className="filter-group">
            <h4>Ordenar resultados</h4>
            <div className="wrap-filter-button">
              <select className="select-filter">
                <option value="0">Relevancia</option>
                <option value="1">Mayor precio</option>
                <option value="2">Menor precio</option>
              </select>
              <div className="wrap-filter-format">
                <div
                  onClick={() => {
                    this.props.toggle({ format: "grid" });
                  }}
                  className={buttonState == "grid" ? "active" : null}
                >
                  <FontAwesomeIcon icon={faTh} />
                </div>
                <div
                  onClick={() => {
                    this.props.toggle({ format: "list" });
                  }}
                  className={buttonState == "list" ? "active" : null}
                >
                  <FontAwesomeIcon icon={faList} />
                </div>
              </div>
            </div>
          </div>
          <div className="filter-group">
            <h4>Marca</h4>
            <div>
              {test.map((item, index) => (
                <div key={index} className="item-filter-group">
                  marca_{item}
                </div>
              ))}
            </div>
          </div>
          <div className="filter-group">
            <h4>Precio</h4>
            <div>
              <div>
                <p className="item-filter-group">Hasta 150.000</p>
              </div>
              <div>
                <p className="item-filter-group">150.000 a 250.000</p>
              </div>
              <div>
                <p className="item-filter-group">Más de 250.000</p>
              </div>
            </div>
            <div className="wrap-filter-price">
              <input placeholder="Minimo" type="number" size="mini" />
              <input placeholder="Maximo" type-="number" size="mini" />
              <button>Filtrar</button>
            </div>
          </div>
          <div className="filter-group">
            <h4>Categorias</h4>
            <div>
              {test.map((item, index) => (
                <div key={index} className="item-filter-group">
                  categoria_{item}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="responsive-filter">
          <div
            className="responsive-filter-item"
            onClick={this.toggleMenuOrder}
          >
            Ordenar
          </div>
          <div
            className="responsive-filter-item"
            onClick={() => {
              const format =
                buttonState == "grid" ? { format: "list" } : { format: "grid" };
              this.props.toggle(format);
            }}
          >
            <FontAwesomeIcon icon={responsiveButton} />
          </div>
          <div
            className="responsive-filter-item"
            onClick={this.toggleMenuFilter}
          >
            Filtrar
          </div>
          <div
            className={`responsive-menu-filter ${
              this.state.menuOrder ? "show" : null
            }`}
          >
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={this.toggleMenuOrder}
                />
              </li>
              <li>ordenar</li>
              <li className="responsive-dropdown-item">Menor precio</li>
              <li className="responsive-dropdown-item">Mayor precio</li>
              <li className="responsive-dropdown-item">Mas relevante</li>
            </ul>
          </div>
          <div
            className={`responsive-menu-filter ${
              this.state.menuFilter ? "show" : null
            }`}
          >
            <ul>
              <li>
                <FontAwesomeIcon
                  icon={faTimes}
                  onClick={this.toggleMenuFilter}
                />
              </li>
              <li>Filtrar</li>
              <li>
                <details class="responsive-dropdown">
                  <summary>Categoria</summary>
                  {test.map((item, index) => (
                    <div key={index} className="responsive-dropdown-item">
                      categoria_{item}
                    </div>
                  ))}
                </details>
              </li>
              <li>
                <details class="responsive-dropdown">
                  <summary>Marca</summary>
                  {test.map((item, index) => (
                    <div key={index} className="responsive-dropdown-item">
                      marca_{item}
                    </div>
                  ))}
                </details>
              </li>
              <li>
                <details class="responsive-dropdown">
                  <summary>Precio</summary>
                  <p className="responsive-dropdown-item">Menor precio</p>
                  <p className="responsive-dropdown-item">Mayor precio</p>
                  <p className="responsive-dropdown-item">Mas relevante</p>
                </details>
              </li>
            </ul>
          </div>
        </div>
      </>
    );
  }
}
export default Filter;
