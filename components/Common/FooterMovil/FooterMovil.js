import React, { Component } from 'react';
import Link from "next/link";
import "./FooterMovil.css";
import LogoKiero from "../../../assets/img/kiero.png";

export default class FooterMovil extends Component {

    render() {
        return (
            <div className="FooterMovil no-web">
                <section className="download">
                    <img src={LogoKiero} /><span> ¡Compra y vende con la app!</span>
                </section>
                <section className="menu-items">
                    <Link href="#"><a>Mi cuenta</a></Link>
                    <Link href="#"><a>Mis compras</a></Link>
                    <Link href="#"><a>Histotial</a></Link>
                    <Link href="#"><a>ofertas de la semana</a></Link>
                    <Link href="#"><a>Favoritos</a></Link>
                    <Link href="#"><a>Tiendas oficiales</a></Link>
                    <Link href="#"><a>Categorìas</a></Link>
                    <Link href="#"><a>Mercado puntos</a></Link>
                    <Link href="#"><a>Ayuda / PQR</a></Link>
                    <Link href="#"><a>vender</a></Link>
                </section>
                <section className="menu-items login-menu">
                    <Link href="#"><a>Mi cuenta</a></Link>
                    <Link href="#"><a>Mis compras</a></Link>
                   <span>2019 Kiero. Todos los derechos reservados.</span>
                </section>
            </div>
        )
    }
}
