import React, { Component } from "react";
import Link from "next/link";
import "./Filter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faList, faTh, faTimes, faAngleRight, faChevronCircleRight,
  faWindowClose, faTruck, faChevronRight
} from "@fortawesome/free-solid-svg-icons";
import Tree from '@naisutech/react-tree'

class Filter extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOrder: false,
      menuFilter: false,
      categorySize: 10,
    };

    this.brands = React.createRef();
    this.categories = React.createRef();

    this.toggleMenuOrder = this.toggleMenuOrder.bind(this);
    this.toggleMenuFilter = this.toggleMenuFilter.bind(this);

  }

  toggleMenuOrder() {
    this.setState({ menuOrder: !this.state.menuOrder });
  }

  toggleMenuFilter() {
    this.setState({ menuFilter: !this.state.menuFilter })
  }

  ShowAllCategories() {
    this.setState({ categorySize: this.state.categorySize+10});
  }

  setSort(event){
    this.setState({ menuOrder: false });
    this.props.sortProducts(""+event.target.value);
  }

  viewAll = (ele, ref) => {
    ele.classList.add('display-none')
    if (ref === 'brands')
      this.brands.current.classList.remove('filter-height-overflow')

    if (ref === 'categories')
      this.categories.current.classList.remove('filter-height-overflow')
  }

  handlePrice = (e) => {
    e.preventDefault();

    const from_price = parseInt(e.target.elements.from_price.value);
    const to_price = parseInt(e.target.elements.to_price.value);

    if(!Number.isInteger((from_price)) && Number.isInteger((to_price))){
      this.props.applyFilter("price", "Desde " + 0 + " Hasta " + to_price);
    }

    if(Number.isInteger((from_price)) && !Number.isInteger((to_price))){
      this.props.applyFilter("price", "Más de " + from_price);
    }

    if(Number.isInteger((from_price)) && Number.isInteger((to_price))){
      this.props.applyFilter("price", "Desde " + from_price + " Hasta " + to_price);
    }
  }

  render() {
    let res_categories = [];
    let res_brands = [];
    let prices = [];

    if (this.props.data && this.props.data.categories) {
      res_categories = this.props.data.categories
    }

    if (this.props.data && this.props.data.brands) {
      res_brands = this.props.data.brands;
    }

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
      prices.push("Más de " + (top))
      for (let it = 0; it < 4; it++) {
        if (this.props.filters.indexOf("price|" + "Desde " + (top - (div * (it + 1)) + 1) + " Hasta " + (top - (div * it))) === -1)
          prices.push("Desde " + (top - (div * (it + 1)) + 1) + " Hasta " + (top - (div * it)))
      }
    }

    const filters = this.props.filters.map((item, index) => {
      if (item.split("|")[1] !== 'category') {
        return <p key={index} className="result" onClick={() => {
        this.props.removeFilter(index);
        }}>
          {item.split("|")[1]} <FontAwesomeIcon icon={faWindowClose} />
        </p>
      }
    });

    const buttonState = this.props.format;
    const responsiveButton = buttonState == "grid" ? faTh : faList;
    const text = buttonState == "grid" ? "Mosaico" : "Lista";

    const kieroTheme = {
    'kiero-theme': {
      text: '#575757',
      highlight: '#f3f3f3',
      accent: '#f3f3f3',
      fontSize: '10px'
    }
  }

    return (
      <>
        <div className="wrap-filter">
          <div className="filter-group categories">
            <div className="filter-title">Categorías</div>
            {res_brands.length > 0 && <>
              <div ref={this.categories} className="filter-height-overflow">
                <Tree nodes={res_categories} theme={"kiero-theme"} customTheme={kieroTheme} noIcons onSelect={this.props.onSelectCategory}/>
              </div>
              <div style={{marginTop: 12}} className="view-all" onClick={e => this.viewAll(e.target, 'categories')}>Ver Todos</div>
            </>}
          </div>
          <div className="filter-group">
            <div className="filter-title">Marca</div>
            {res_brands.length > 0 && <>
              <div ref={this.brands} className="filter-height-overflow" style={{paddingLeft: 4}}>
                {
                  res_brands.map((item, index) => (
                    <p key={index} className="item-filter-group show"
                      onClick={() => {
                        this.props.applyFilter("brand", item.key);
                      }}>
                      {item.key} ({item.doc_count})
                    </p>
                  ))
                }
              </div>
              <div className="view-all" onClick={e => this.viewAll(e.target, 'brands')}>Ver Todos</div>
            </>}
          </div>

          <div className="filter-group show">
            <div className="filter-title">Precio</div>
            <div style={{paddingLeft: 4}}>
              {prices.map((item, index) => (
                <div key={index}>
                  <a onClick={() => {
                    this.props.applyFilter("price", item);
                  }}><p className="item-filter-group show">{item}</p></a>
                </div>
              ))}
            </div>
            {prices.length > 0 &&
              <form onSubmit={this.handlePrice}>
                <div className="wrap-filter-price" style={{paddingLeft: 4}}>
                  <input placeholder="Mínimo" name={"from_price"} type="number"/>
                  <div className="align-center">-</div>
                  <input placeholder="Máximo" name={"to_price"} type="number"/>
                  <button type="submit">
                    <FontAwesomeIcon color={'#fff'} icon={faChevronRight}/>
                  </button>
                </div>
              </form>
            }
          </div>
          {/*<div className="send-free">*/}
          {/*  <h4>Envio</h4>*/}
          {/*  <span>Envío gratis <FontAwesomeIcon icon={faTruck} /></span>*/}
          {/*</div> */}
        </div>
        <div className="responsive-filter">
          <div
            className="responsive-filter-item"
            onClick={this.toggleMenuOrder}>
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
              <li>Ordenar</li>
              <li onClick={(e) => this.setSort(e)} value="2" className="responsive-dropdown-item">Menor precio</li>
              <li onClick={(e) => this.setSort(e)} value="1" className="responsive-dropdown-item">Mayor precio</li>
              <li onClick={(e) => this.setSort(e)} value="0" className="responsive-dropdown-item">Mas relevante</li>
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
              {filters}
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
                  <div className="filter-group filter-responsive show">
                    <h4>Rango de precios</h4>
                    <div>
                      {prices.map((item, index) => (
                          <div key={index}>
                            <a onClick={() => {
                              this.props.applyFilter("price", item);
                            }}><p className="item-filter-group show">{item}</p></a>
                          </div>

                      ))}
                    </div>
                    <form onSubmit={this.handlePrice}>
                      <div className="wrap-filter-price">
                        <input placeholder="Minimo" name={"from_price"} type="number" size="mini" />
                        <p>-</p>
                        <input placeholder="Maximo" name={"to_price"} type-="number" size="mini" />
                        <FontAwesomeIcon icon={faChevronCircleRight} />
                        <button type="submit">Filtrar</button>
                      </div>
                    </form>
                  </div>
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
