import React, {Component} from 'react';
import Head from 'next/head';
import './sass/activate.css';
import favicon from "../assets/img/favicon.svg";



export default class activate extends Component {

    render() {
        const { success } = this.props;
        return (
            <div className="activate-page">
                <Head>
                    <title>Kiero | activate</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="robots" content="index,follow" />
                    <meta name="robots" content="noodp" />
                    <meta name="robots" content="noydir" />
                    <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis
                    a todo el pais, encuentra lo que buscas en Kiero.co" />
                    <link rel="icon" href={favicon} type="image/png" />
                </Head>

                <div className="msg">
                    <span>Su cuenta ha sido activada </span> será redireccionando en 5 segundos espere.
                </div>
            </div>
        )
    }
}