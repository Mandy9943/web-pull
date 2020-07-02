import React from 'react';
import Head from 'next/head';
import './sass/menuMobile.css';
import Link from "next/link";
import Logo from "../components/Common/Logo/Logo";


export default function menu_mobile() {
    return (
        <div className="menu_page">
            <Head>
                <title>Kiero | Menu</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="robots" content="index,follow" />
                <meta name="robots" content="noodp" />
                <meta name="robots" content="noydir" />
                <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis
                    a todo el pais, encuentra lo que buscas en Kiero.co" />
            </Head>
            <Link href="/">
                <h2> <Logo /> &nbsp;Home</h2>
            </Link>
            <div className="menu-list">
                <Link href="/login">
                    <a className="item">
                        <p>Iniciar seción</p>
                    </a>
                </Link>
                <Link href="/registro">
                <a className="item">
                    <p>Registrarse</p>
                </a>
                </Link>
                <Link href="/categoria/bebes">
                <a className="item">
                    <p>Bebés</p>
                </a>
                </Link>
                <Link href="/categoria/belleza">
                <a className="item">
                    <p>Belleza</p>
                </a>
                </Link>
                <Link href="/categoria/camaras">
                <a className="item">
                    <p>Cámaras y accesorios</p>
                </a>
                </Link>
                <Link href="/categoria/electrodomesticos">
                <a className="item">
                    <p>Electrodomésticos</p>
                </a>
                </Link>
                <Link href="/categoria/electronica">
                <a className="item">
                    <p>Electrónica</p>
                </a>
                </Link>
                <Link href="/categoria/hogar">
                <a className="item">
                    <p>Hogar y muebles</p>
                </a>
                </Link>
                <Link href="/categoria/juegos">
                <a className="item">
                    <p>Juegos y juguetes</p>
                </a>
                </Link>
            </div>
        </div>
    )
}
