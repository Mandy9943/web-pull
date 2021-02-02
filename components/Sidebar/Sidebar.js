import React, { Component } from 'react';
import Router from 'next/router'
import Link from "next/link";
import Button from "../Common/Button/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faBars,
    faListUl,
    faMoneyBillWave,
    faShoppingBag,
    faCog,
    faAngleRight,
    faAngleDown,
    faAngleUp,
    faMoneyBill,
    faAlignLeft,
    faQuestion,
    faUser
} from "@fortawesome/free-solid-svg-icons";
import "./Sidebar.css";
import redirect from "../../lib/redirect";


export default class Sidebar extends Component {

    constructor(props) {
        super(props);
        this.state = {
            userName: this.props.user_data.user,
            accordionMyData: true,
            accordionBill: true,
            accordionShop: true,
            closeBill: true,
            closeShop: true,
            closeMyData: true,
            iconShop: true,
            iconBill: true,
            iconMyData: true,
            userAccountIconMyData: faAngleDown,
            userAccountIconShop: faAngleDown,
            userAccountIconBill: faAngleDown,
            modal1: false,
            modal2: false
        }
    }

    accordionBill = () => {

        this.setState({
            closeBill: !this.state.closeBill,
            iconBill: !this.state.iconBill
        });

        if (this.state.iconBill === true) {
            this.setState({
                userAccountIconBill: faAngleUp
            })

        } else if (this.state.iconBill === false) {
            this.setState({
                userAccountIconBill: faAngleDown
            })
        }

    }

    accordionShop = () => {
        this.setState({
            closeShop: !this.state.closeShop,
            iconShop: !this.state.iconShop
        });
        if (this.state.iconShop === true) {
            this.setState({
                userAccountIconShop: faAngleUp
            })
        } else if (this.state.iconShop === false) {
            this.setState({
                userAccountIconShop: faAngleDown
            })
        }
    }

    accordionMyData = () => {
        this.setState({
            closeMyData: !this.state.closeMyData,
            iconMyData: !this.state.iconMyData
        });
        if (this.state.iconMyData === true) {
            this.setState({
                userAccountIconMyData: faAngleUp
            })
        } else if (this.state.iconMyData === false) {
            this.setState({
                userAccountIconMyData: faAngleDown
            })
        }
    }

    newProduct = () => {
        Router.push('/publicacion/new')
    }

    toggleModal = (modal) => {
        const newState = { ...this.state };
        newState[`modal${modal}`] = !newState[`modal${modal}`] ? true : false;
        this.setState(newState);
    }

    render() {

        return (
            <div id="sidebar" className="user-account-menu">
                <div className="user-account-menu-item border-bottom">
                    <p className="user-account-menu-icon icon-profile">
                        <FontAwesomeIcon icon={faUser} />
                    </p>
                    <div className="user-name">
                        <h3>Mi cuenta</h3>
                        <p onClick={(e) => this.props.cb("home", e)} className="user-account-menu-text">¡Hola {this.state.userName}!</p>
                    </div>
                </div>
                <div className="user-account-menu-item" >
                    <p className="user-account-menu-icon">
                        <FontAwesomeIcon icon={faListUl} />
                    </p>
                    <p onClick={(e) => this.props.cb("resume", e)} className="user-account-menu-text">Resumen</p>
                </div>
                {this.props.user_data.role === "user" &&
                <div className="user-account-menu-item" >
                    <p className="user-account-menu-icon">
                        <FontAwesomeIcon icon={faMoneyBill} />
                    </p>
                    <p onClick={(e) => this.props.cb("bill", e)} className="user-account-menu-text">Facturación</p>
                </div>
                }
                {this.props.user_data.role === "vendedor" &&
                    <div className={this.state.closeBill ? "user-account-menu-item" : "user-account-menu-item active"} onClick={() => this.accordionBill()}>
                        <p className="user-account-menu-icon">
                            <FontAwesomeIcon icon={faMoneyBillWave} />
                        </p>
                        <div className="user-account-menu-accordion">
                            <p className="user-account-menu-text">Ventas</p>
                            <div className="user-account-accordion">
                                {/* <p onClick={this.newProduct} >Agregar nuevo producto</p> */}
                                <p onClick={(e) => this.props.cb("myProducts", e)} >Mis publicacioness</p>
                                <p onClick={(e) => this.props.cb("mySales", e)} >Mis ventas</p>
                                <p onClick={(e) => this.props.cb("questions", e)} >Preguntas</p>
                            </div>
                        </div>
                        <p className="user-account-menu-icon">
                            <FontAwesomeIcon icon={this.state.userAccountIconBill} />
                        </p>
                    </div>
                }
                {this.props.user_data.role === "user" &&
                <div className={this.state.closeShop ? "user-account-menu-item" : "user-account-menu-item active"} onClick={() => this.accordionShop()}>
                    <p className="user-account-menu-icon">
                        <FontAwesomeIcon icon={faShoppingBag} />
                    </p>
                    <div className="user-account-menu-accordion">
                        <p className="user-account-menu-text">Compras</p>
                        <div className="user-account-accordion">
                            <p onClick={(e) => this.props.cb("orders", e)}>Mis Ordenes</p>
                        </div>
                        <div className="user-account-accordion">
                            <p onClick={(e) => this.props.cb("detail", e)}>Detalle de compra</p>
                        </div>
                    </div>
                    <p className="user-account-menu-icon">
                        <FontAwesomeIcon icon={this.state.userAccountIconShop} />
                    </p>
                </div>}
                <div className={this.state.closeMyData ? "user-account-menu-item border-bottom" : "user-account-menu-item border-bottom active"} onClick={() => this.accordionMyData()}>
                    <p className="user-account-menu-icon">
                        <FontAwesomeIcon icon={faCog} />
                    </p>
                    <div className="user-account-menu-accordion">
                        <p className="user-account-menu-text">Mis datos</p>
                        <div className="user-account-accordion">
                            <p onClick={(e) => this.props.cb("myData", e)} >Mis datos</p>
                            {/*<p onClick={(e)=>this.props.cb("security", e)}>Seguridad</p>*/}
                        </div>
                    </div>
                    <p className="user-account-menu-icon">
                        <FontAwesomeIcon icon={this.state.userAccountIconMyData} />
                    </p>
                </div>
                <Link href="/lista_categorias"><a className="no-web">
                    <div className="user-account-menu-item border-bottom">
                        <p className="user-account-menu-icon">
                            <FontAwesomeIcon icon={faAlignLeft} />
                        </p>
                        <p className="user-account-menu-text">Categorias</p>
                    </div>
                </a>
                </Link>
                <Link href="/ayuda"><a className="no-web">
                    <div className="user-account-menu-item">
                        <p className="user-account-menu-icon">
                            <FontAwesomeIcon icon={faQuestion} />
                        </p>
                        <p className="user-account-menu-text">Ayuda / PQR</p>
                    </div>
                </a>
                </Link>
            </div>
        )
    }
}