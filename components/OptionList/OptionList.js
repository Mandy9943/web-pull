import React, { Component } from 'react';
import Link from 'next/link';
import "./OptionList.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faListUl,
    faMoneyBillWave,
    faShoppingBag,
    faCog,
    faAngleRight,
    faAngleDown
} from "@fortawesome/free-solid-svg-icons";


export default class OptionList extends Component {
    constructor(props) {
        super(props);
        this.state = { 
        }
    }

    getYear() {
        return new Date().getFullYear();
    }
    render() {
                return (
            <div className="Option-list">
                <h5>Producto</h5> <h5>Categoria</h5> <h5>Fecha</h5> <h5>Id product</h5>
                <div className="option product">
                    aca va la imagen y nombre del producto
                </div>
                <div className="option category">
                    categoria del producto
                </div>
                <div className="option date">
                    {this.getYear()}
                </div>
                <div className="option id"> 324123423 icon</div>
            </div>
        )
    }
}
