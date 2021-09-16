import React, { Component } from 'react';
import Head from 'next/head';
import '../sass/activate.css';
import favicon from "../../assets/img/favicon.svg";
import { getData } from "../../services/userApi";
import Link from 'next/link';


var result = false;


function Activate({ result }) {
    return (
        <div className="activate-page">
            <Head>
                <title>Kiero | Activar mi cuenta</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="robots" content="index,follow" />
                <meta name="robots" content="noodp" />
                <meta name="robots" content="noydir" />
                <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis
                a todo el pais, encuentra lo que buscas en Kiero.co" />
                <link rel="icon" href={favicon} type="image/png" />
            </Head>

            {
                result ?
                    <div className="msg">
                        <Link href="/"><a>ir al Marketplace</a></Link>
                    </div>
                    :
                    <div className="msg"><span>Se produjo un error al activar su cuenta.</span></div>
            }


        </div>
    )
}


function setS(state) {
    result = state;
}

export async function getServerSideProps(context) {

    const data = {
        "token": String(context.params.token),
    }
    await getData("/activate/" + context.params.token)
        .then(() => setS(true));

    return { props: { result } }
}


export default Activate
