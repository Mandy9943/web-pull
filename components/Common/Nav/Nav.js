import React, { Component } from 'react';
import Link from "next/link";
import Logo from "../Logo/Logo";
import "./Nav.css";

export default class Nav extends Component {
    render() {
        return (
            <div className="nav">
                <div className="nav-content">
                    <div className="nav-top">
                        <Logo />
                        <div className="search-bar">
                            <input/>
                        </div>
                        <div className="user-menu">
                            <ul>
                                <Link href="/login"><a>Iniciar seción</a></Link>
                                <Link href="/registro"><a>Registrarse</a></Link>
                            </ul>
                        </div>
                    </div>
                    <div className="nav-botton">
                        <div className="main-menu">
                            <ul>
                                <Link href="#"><a className="drop-select">Categorías</a></Link>
                                <Link href="#"><a>Bebés</a></Link>
                                <Link href="#"><a>Belleza</a></Link>
                                <Link href="#"><a>Cámaras y accesorios</a></Link>
                                <Link href="#"><a>Electrodomésticos</a></Link>
                                <Link href="#"><a>Electrónica</a></Link>
                                <Link href="#"><a>Hogar y muebles</a></Link>
                                <Link href="#"><a>Juegos y juguetes</a></Link>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
