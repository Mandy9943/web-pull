import React, { Component } from "react";
import Link from "next/link";
import "./Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList, faTh, faTimes, faAngleRight, faChevronCircleRight,
  faWindowClose, faTruck
} from "@fortawesome/free-solid-svg-icons";

class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOrder: false,
      menuFilter: false,
      categorySize: 10,
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

  ShowAllCategories() {
    this.setState({ categorySize: this.state.categorySize+10});
  }



  render() {
    let res_categories = [];
    if (this.props.data && this.props.data.categories) {
      console.log(this.props.data.categories)
      for (var cat in this.props.data.categories) {
        if (this.props.filters.indexOf("category|" + cat + " (" + this.props.data.categories[cat] + ")") === -1)
          res_categories.push([cat + " (" + this.props.data.categories[cat] + ")",
          this.props.data.categories[cat]]);
      }
      res_categories.sort(function (a, b) {
        return b[1] - a[1];
      });

    }

    let res_brands = [];

    if (this.props.data && this.props.data.brands) {

      for (var brand in this.props.data.brands) {

        if (this.props.filters.indexOf("brand|" + brand + " (" + this.props.data.brands[brand] + ")") === -1)
          res_brands.push([brand + " (" + this.props.data.brands[brand] + ")",
          this.props.data.brands[brand]]);
      }

      res_brands.sort(function (a, b) {
        return b[1] - a[1];
      });


    }

    let prices = [];

    if (this.props.data && this.props.data.max_price) {
      var max_price = this.props.data.max_price;
      let top = 0;

      if (max_price > 99999999999) {
        top = 100000000000;
      } else if (max_price > 9999999999) {
        top = 10000000000;
      } else if (max_price > 999999999) {
        top = 1000000000;
      } else if (max_price > 99999999) {
        top = 100000000;
      } else if (max_price > 9999999) {
        top = 10000000;
      } else if (max_price > 999999) {
        top = 1000000;
      } else if (max_price > 99999) {
        top = 100000;
      } else if (max_price > 9999) {
        top = 10000;
      } else if (max_price > 999) {
        top = 1000;
      } else if (max_price > 99) {
        top = 100;
      } else if (max_price > 9) {
        top = 10;
      }

      let div = top / 4;
      prices.push("Más de " + (top).toLocaleString())
      for (let it = 0; it < 4; it++) {
        if (this.props.filters.indexOf("price|" + "Desde " + (top - (div * (it + 1)) + 1).toLocaleString() + " Hasta " + (top - (div * it)).toLocaleString()) === -1)
          prices.push("Desde " + (top - (div * (it + 1)) + 1).toLocaleString() + " Hasta " + (top - (div * it)).toLocaleString())
      }
    }


    const filters = this.props.filters.map((item, index) => {
      return <p className="result" onClick={() => {
        this.props.removeFilter(index);
      }}>
        {item.split("|")[1]} <FontAwesomeIcon icon={faWindowClose} /> </p>
    });

    const buttonState = this.props.format;
    const responsiveButton = buttonState == "grid" ? faTh : faList;
    const text = buttonState == "grid" ? "Mosaico" : "Lista";

    console.log(res_categories)
    return (
      <>
        <div className="wrap-filter">

          {/*
            <div className="categories-finder">
            <Link href="#"><a><p>Belleza y cuidado personal</p></a></Link>
            <p className="categories-finder-icon">
              <FontAwesomeIcon icon={faAngleRight} />
            </p>
            <Link href="#"><a><p>Electrodomésticos de Belleza</p></a></Link>
          </div>
          */}

          <div className="filter-group">
            <h3>{this.props.search}</h3>
            <span>{this.props.data && this.props.data.rows && this.props.data.rows} Resultados
              {filters}
            </span>
          </div>
          <div className="filter-group">
            <h4>Ordenar resultados</h4>
            <div className="wrap-filter-button">
              <select className="select-filter">
                <option value="0">Más relevantes</option>
                <option value="1">Mayor precio</option>
                <option value="2">Menor precio</option>
              </select>
              <p>|</p>
              <div className="wrap-filter-format">
                <div
                  onClick={() => {
                    this.props.toggle({ format: "list" });
                  }}
                  className={buttonState == "list" ? "active" : null}>
                  <FontAwesomeIcon icon={faList} />
                </div>
                <div
                  onClick={() => {
                    this.props.toggle({ format: "grid" });
                  }}
                  className={buttonState == "grid" ? "active" : null}>
                  <FontAwesomeIcon icon={faTh} />
                </div>
              </div>
            </div>
          </div>
          <div className="filter-group">
            <h4>Marca</h4>
            <div>
              {
                res_brands.map((item, index) => (
                  <div key={index} className="item-filter-group show"
                    onClick={() => {
                      this.props.applyFilter("brand", item[0]);
                    }}>
                    {item[0]}
                  </div>
                ))
              }
            </div>
            <Link href="#"><a className="view-all">ver todos</a></Link>
          </div>
          <div className="filter-group show">
            <h4>Rango de precios</h4>
            <div>
              {prices.map((item, index) => (
                <div key={index}
                  onClick={() => {
                    this.props.applyFilter("price", item);
                  }}>
                  <p className="item-filter-group show">{item}</p>
                </div>

              ))}
            </div>
            <div className="wrap-filter-price">
              <input placeholder="Minimo" type="number" size="mini" />
              <p>-</p>
              <input placeholder="Maximo" type-="number" size="mini" />
              <FontAwesomeIcon icon={faChevronCircleRight} />
              <button>Filtrar</button>
            </div>
          </div>
            <div className="send-free">
              <h5>Envio</h5>
              <span>Envío gratis <FontAwesomeIcon icon={faTruck} /></span>
            </div> 
          <div className="filter-group">
            <h4>Categorias</h4>
            <div>
              {res_categories.slice(0, this.state.categorySize).map((item, index) => (
                <div key={index} className="item-filter-group show"
                  onClick={() => {
                    this.props.applyFilter("category", item[0]);
                  }}>
                  {item[0]}
                </div>
              ))}
            </div>
            <a className="view-all" onClick={() => this.ShowAllCategories()}>Ver Mas</a>
          </div>
        </div>
        <div className="responsive-filter">
          <div
            className="responsive-filter-item"
            onClick={this.toggleMenuOrder}
          >
            Ordenes
          </div>
          <div
            className="responsive-filter-item"
            onClick={() => {
              const format =
                buttonState == "grid" ? { format: "list" } : { format: "grid" };
              this.props.toggle(format);
            }}
          >
            {text} <FontAwesomeIcon icon={responsiveButton} />
          </div>
          <div
            className="responsive-filter-item border-none"
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
                <details className="responsive-dropdown">
                  <summary>Categoria</summary>
                  {res_categories.map((item, index) => (
                    <div key={index} className="responsive-dropdown-item"
                      onClick={() => {
                        this.props.applyFilter("category", item[0]);
                      }}>
                      {item[0]}
                    </div>
                  ))}
                </details>
              </li>
              <li>
                <details className="responsive-dropdown">
                  <summary>Marca</summary>
                  {res_brands.map((item, index) => (
                    <div key={index} className="responsive-dropdown-item"
                      onClick={() => {
                        this.props.applyFilter("brand", item[0]);
                      }}>
                      {item[0]}
                    </div>
                  ))}
                </details>
              </li>
              <li>
                <details className="responsive-dropdown">
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
