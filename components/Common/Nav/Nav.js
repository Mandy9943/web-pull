import React, { Component } from 'react';
import Link from "next/link";
import Logo from "../Logo/Logo";
import "./Nav.css";
import "./notification.css";
import "./modal-home.css";
import "./modal-account.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { getData } from "../../../services/userApi";
import Modal from "../Modal/Modal";
import NotificationItem from "../NotificationItem";
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
            modal2: false,
            showCategories: false,
            categories: [],
            showMenu: false,
            showNotification: false
        }
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

    showHideNotification = () => {
        this.setState({ showNotification: !this.state.showNotification })
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
        let home = this.props.home
        
    
        const content2 = (
            <>
                <div className="header-modal">
                    {!authenticated ?
                    <>
                        <h5>Bienvenido</h5>
                        <p>Crea tu cuenta o inicia sesion</p>
                    <section className="actions">
                                <Link href="/login"><a className="main-button">iniciar sesion</a></Link>
                        <Link href="/registro"><a className="main-button">Registrarse</a></Link>
                        </section> 
                    </>
                        :   
                        <section className="user-perfil">
                            <img src="https://recap-project.eu/wp-content/uploads/2017/02/default-user.jpg"/>
                            <span className="user-name">
                                <h5>Bienvenido</h5>
                                <p>{this.props.user}</p>
                            </span>
                        </section>
                    }
                    <hr />
                    <Link href="/cuenta"><a><FontAwesomeIcon icon={faHome} /> <p>Inicio </p></a></Link>
                    {authenticated ?
                    <Link href="/notificaciones"><a><FontAwesomeIcon icon={faBell} /> 
                        <p>Notificaciones <span className="number-accent">3</span>{/*NEED FIX THIS SHIT*/}
                    </p></a></Link> : null}
                    <Link href="/lista_categorias"><a><FontAwesomeIcon icon={faAlignLeft} /> <p>Categorias</p></a></Link>
                    {/*<Link href="#"><a><FontAwesomeIcon icon={faArrowDown} /> <p>Descarga la app</p></a></Link>*/}
                    <hr />
                    <Link href="/ayuda"><a><FontAwesomeIcon icon={faQuestion} /> <p>Ayuda / PQR</p></a></Link>
                    {authenticated ?
                    <Link href="/logout"><a className="logout">Cerrar sesion</a></Link> : null
                    }
                </div>
            </>
        );
        const content1 = (
            <>
            <Sidebar user_data={this.props.user_data} cb={this.props.cb} />
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
                                <span> 
                                    <Link href="/ayuda"><a className="bell">Ayuda / PQR</a></Link>
                                    <a onClick={() => this.showHideNotification()} ><FontAwesomeIcon icon={faBell} /></a>
                                </span>
                                    <a onClick={() => this.showHideMenu()} className="user-icon"><FontAwesomeIcon icon={faUser} /> {this.props.user} <FontAwesomeIcon icon={faAngleDown} /></a>
                                    <section className={this.state.showMenu ? "menu-off menu-on" : "menu-off"}>
                                        <h5><FontAwesomeIcon className="icon" icon={faUser} /> Bienvenido <b className="name">Hola, {this.props.user}</b></h5>
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
                                <section className={this.state.showNotification ? "notification-off notification-on" : "notification-off"}>
                                    <div class="triangle-up"/>
                                    <h3 className="title">Notificaciones</h3>
                                    <NotificationItem />
                                    <NotificationItem />
                                    <NotificationItem />
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
                            {this.state.modal2 ? (<section className="modal-account"><Modal toggle={this.toggleModal} num="2" content={content1} button /></section>) : null}
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