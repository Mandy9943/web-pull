import React, { Component } from 'react';
import Link from "next/link";
import "./FooterMovil.css";
import LogoKiero from "../../../assets/img/kiero.png";

export default class FooterMovil extends Component {

    render() {
        return (
            <div className="FooterMovil no-web">
                <section className="download">
                    <img alt="Kiero.co" src={LogoKiero} />{/*<span> ¡Compra y vende con la app!</span>*/}
                </section>
                <section className="menu-items">
                    {/*NEED ACTION*/}
                    <Link href="/cuenta"><a>Mi cuenta</a></Link>
                    <Link href="#"><a>Mis compras</a></Link>
                    <Link href="#"><a>Histotial</a></Link>
                    <Link href="#"><a>Favoritos</a></Link>
                    <Link href="#"><a>Tiendas oficiales</a></Link>
                    <Link href="#"><a>Categorìas</a></Link>
                    <Link href="https://shops.kiero.co/"><a>KieroShops</a></Link>
                    <Link href="/ayuda"><a>Ayuda / PQR</a></Link>
                    <Link href="#"><a>vender</a></Link>
                </section>
                {/*NEED FIX THIS SHIT*/}
                <section className="menu-items login-menu">
                    <Link href="/login"><a className="main-button"><p>Iniciar sesion</p></a></Link>
                    <Link href="/registro"><a className="main-button"><p>Registrate</p></a></Link>
                   <span>2019 Kiero. Todos los derechos reservados.</span>
                </section>
            </div>
        )
    }
}
