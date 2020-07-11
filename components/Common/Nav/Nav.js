import React, { Component } from 'react';
import Link from "next/link";
import Logo from "../Logo/Logo";
import "./Nav.css";
import "./modal-home.css";
import "./modal-account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getData } from "../../../services/userApi";
import Modal from "../Modal/Modal";
import MenuCategories from "../MenuCategories";
import {
    faBars,
    faSearch,
    faAngleDown,
    faHome,
    faAlignLeft,
    faArrowDown,
    faQuestion,
    faBell,
    faUser,
    faMoneyBillWave,
    faShoppingBag,
    faCog
} from "@fortawesome/free-solid-svg-icons";
import Sidebar from '../../Sidebar/Sidebar';




export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mostrar: true,
            ocultar: true,
            modal1: false,
            modal2: false,
            showCategories: false,
            categories: [],
            showMenu: false,
        }
    }
    mostrar = () => {
        //document.getElementById("sidebar").style.width = "auto";
        //document.getElementById("sidebar").style.padding = "30px";
        document.getElementById("abrir").style.display = "none";
        document.getElementById("cerrar").style.display = "inline";
    }
    ocultar = () => {
        //document.getElementById("sidebar").style.width = "0";
        //document.getElementById("sidebar").style.padding = "0";
        document.getElementById("abrir").style.display = "inline";
        document.getElementById("cerrar").style.display = "none";
    }


    changeSearcherValue = (event) => {
        this.setState({ query: event.target.value })
    }


    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    toggleModal = (modal) => {
        const newState = { ...this.state };
        newState[`modal${modal}`] = !newState[`modal${modal}`] ? true : false;
        this.setState(newState);
    }

    showHideMenu = () => {
        this.setState({ showMenu: !this.state.showMenu })
    }

    menuBlur = () => {
        setTimeout(() => this.setState({ showMenu: false }), 200);
    }

    componentDidMount() {
        getData("/getMenuCategories")
            .then((response) => {
                this.setState({ categories: response.data });
            });
    }

    mouseEnter = () => {
        this.setState({ showCategories: true });
    }

    mouseLeave = () => {
        this.setState({ showCategories: false });
    }


    render() {

        let authenticated = this.props.authenticated
        let user = this.props.user
        let home = this.props.home
        let u_data = this.props.user_data;

        const content2 = (
            <>
                <div className="header-modal">
                    <h5>Bienvenido</h5>
                    <p>Crea tu cuenta o inicia sesion</p>
                    <section className="actions">
                        <Link href="/login"><a className="main-button">Iniciar sesión</a></Link>
                        <Link href="/registro"><a className="main-button">Registrarse</a></Link>
                    </section>
                </div>
                <div className="footer-modal">
                    <Link href="/cuenta"><a><FontAwesomeIcon icon={faHome} /> <p>Inicio </p></a></Link>
                    <Link href="/categorias"><a><FontAwesomeIcon icon={faAlignLeft} /> <p>Categorias</p></a></Link>
                    <Link href="#"><a><FontAwesomeIcon icon={faArrowDown} /> <p>Descarga la app</p></a></Link>
                    <hr />
                    <Link href="/ayuda"><a><FontAwesomeIcon icon={faQuestion} /> <p>Ayuda / PQR</p></a></Link>
                </div>
            </>
        );
        const content1 = (
            <>
            <Sidebar user_data={user} cb={this.showSection} />
            </>
        );

        return (
            <div className="nav">
                <div className="nav-content desktop-nav">
                    <div className="nav-top">
                        <Logo />
                        <div className="search-bar">
                            <input
                                type="text"
                                name={"searchBar"}
                                defaultValue={this.props.actualSearch}
                                placeholder="Buscar productos..."
                                onChange={this.handleChange}
                                onKeyPress={(event) => {
                                    if (event.key === 'Enter') {
                                        this.search()
                                    }
                                }}
                            />
                            <section onClick={(event) => {
                                this.search()
                            }} className='icon'>
                                <a onClick={(event) => {
                                    this.search()
                                }}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>
                            </section>
                        </div>
                        {!authenticated &&
                            <div className="user-menu">
                                <ul>
                                    <Link href="/login"><a>Iniciar sesión</a></Link>
                                    <Link href="/registro"><a>Registrarse</a></Link>
                                </ul>
                            </div>
                        }
                        {authenticated &&
                            <div className="user-menu" onBlur={this.menuBlur} >
                                <ul>
                                    <Link href="/ayuda"><a className="bell">Ayuda / PQR <FontAwesomeIcon icon={faBell} /></a></Link>
                                    <a onClick={() => this.showHideMenu()} className="user-icon"><FontAwesomeIcon icon={faUser} /> {user} <FontAwesomeIcon icon={faAngleDown} /></a>
                                    {/*
                                    <span style={{ color: '#FFFFFF' }}>Hola, <b>{user}</b></span>
                                    <Link href="/cuenta"><a>Ir a mi cuenta</a></Link>
                                    <Link href="/logout"><a>Salir</a></Link>
                                    */}
                                    <section className={this.state.showMenu ? "menu-off menu-on" : "menu-off"}>
                                        <h5><FontAwesomeIcon className="icon" icon={faUser} /> Bienvenido <b className="name">Hola, {user}</b></h5>
                                        <Link href="/cuenta"><a className="main-button"><p>Mi cuenta</p></a></Link>
                                        <section className="options">
                                            <hr />
                                            <Link href="/cuenta#facturacion"><a className="items"> <FontAwesomeIcon icon={faMoneyBillWave} />Facturacion</a></Link>
                                            <Link href="/cuenta#compras"><a className="items"> <FontAwesomeIcon icon={faShoppingBag} />Compras</a></Link>
                                            <Link href="/cuenta#opciones"><a className="items"> <FontAwesomeIcon icon={faCog} />Opciones</a></Link>
                                            <hr />
                                            <Link href="/logout"><a className="items">Cerrar sesion</a></Link>
                                        </section>
                                    </section>
                                </ul>
                            </div>}
                    </div>
                    <div className="nav-botton">
                        <div className="main-menu">
                            <ul>
                                <section className="menu">
                                    <ul>
                                        <li onMouseEnter={this.mouseEnter}>
                                            {this.state.showCategories ? (<MenuCategories toggle={this.mouseLeave} num="2" categories={this.state.categories} />) : null}
                                            Categorías <FontAwesomeIcon icon={faAngleDown} />
                                        </li>
                                    </ul>
                                </section>
                                <Link href="/categoria/[category]" as="/categoria/Bebés"><a>Bebés</a></Link>
                                <Link href="/categoria/[category]" as="/categoria/Belleza"><a>Belleza</a></Link>
                                <Link href="/categoria/[category]" as="/categoria/Cámaras y accesorios"><a>Cámaras y accesorios</a></Link>
                                <Link href="/categoria/[category]" as="/categoria/Electrodomésticos"><a>Electrodomésticos</a></Link>
                                <Link href="/categoria/[category]" as="/categoria/Electrónica"><a>Electrónica</a></Link>
                                <Link href="/categoria/[category]" as="/categoria/Hogar y muebles"><a>Hogar y muebles</a></Link>
                                <Link href="/categoria/[category]" as="/categoria/Juegos y juguetes"><a>Juegos y juguetes</a></Link>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="nav-content mobil-nav">
                    <div className="nav-top">
                        <Logo />
                        <div className="search-bar">
                            <input
                                type="text"
                                defaultValue={this.props.actualSearch}
                                name={"searchBar"}
                                placeholder="Buscar productos"
                                onChange={this.handleChange}
                                onKeyPress={(event) => {
                                    if (event.key === 'Enter') {
                                        this.search()
                                    }
                                }}
                            />
                            <section onClick={(event) => {
                                this.search()
                            }} className='icon'>
                                <a onClick={(event) => {
                                    this.search()
                                }}>
                                    <FontAwesomeIcon icon={faSearch} />
                                </a>

                            </section>
                        </div>
                    </div>
                    {home ?
                        <div className="nav-botton">
                            {this.state.modal2 ? (<section className="modal-home"><Modal toggle={this.toggleModal} num="2" content={content2} button /></section>) : null}
                            <div onClick={() => { this.toggleModal(2); }}>
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                        </div>
                        :
                        <div className="nav-botton">
                            {this.state.modal2 ? (<section className="modal-account"><Modal toggle={this.toggleModal} num="1" content={content1} button /></section>) : null}
                            <div onClick={() => { this.toggleModal(2); }}>
                                <FontAwesomeIcon icon={faBars} />
                            </div>
                        </div>
                    }
                </div>
            </div>
        )
    }

    search = e => {
        if (this.state.query != undefined)
            location.href = "/busqueda/" + this.state.query
    };
}