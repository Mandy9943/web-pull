import React, {Component} from "react";
import "./Filter.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faList, faTh, faWindowClose
} from "@fortawesome/free-solid-svg-icons";

class FilterTop extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    setSort(event) {
        this.props.sortProducts("" + event.target.value);
    }

    render() {
        const filters = this.props.filters.map((item, index) => {
            if (item.split("|")[1] !== 'category') {
                return <p key={index} className="result" onClick={() => {
                    this.props.removeFilter(index);
                }}>
                    {item.split("|")[1]} <FontAwesomeIcon icon={faWindowClose}/>
                </p>
            }
        });

        const buttonState = this.props.format;
        const responsiveButton = buttonState == "grid" ? faTh : faList;
        const text = buttonState == "grid" ? "Mosaico" : "Lista";

        return (
            <div className="filter-top-container">
                <div className="content-left">
                    <span className="ots">
                        {this.props.search}
                    </span>
                    <span className="totals">
                        {this.props.totalItems} resultados
                    </span>
                </div>
                <div className="order">
                    <div className="text">Ordenar publicaciones</div>
                    <div className="wrap-filter-button">
                        <select onChange={(e) => this.setSort(e)} className="select-filter">
                            <option value="0">Más relevantes</option>
                            <option value="1">Mayor precio</option>
                            <option value="2">Menor precio</option>
                        </select>
                        <p>|</p>
                        <div className="wrap-filter-format">
                            <div
                                onClick={() => {
                                    this.props.toggle({format: "list"});
                                }}
                                className={buttonState == "list" ? "active" : null}>
                                <FontAwesomeIcon icon={faList}/>
                            </div>
                            <div
                                onClick={() => {
                                    this.props.toggle({format: "grid"});
                                }}
                                className={buttonState == "grid" ? "active" : null}>
                                <FontAwesomeIcon icon={faTh}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default FilterTop;
