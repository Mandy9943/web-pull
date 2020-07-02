import React from 'react';
import Head from 'next/head';
import Category from '../../components/Category/Category';
import {getUser, isAuthenticated } from "../../lib/auth";

function Results({data, session}) {
    return (
        <div>
            <Head>
                <title>Kiero | Busqueda</title>
                meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="robots" content="index,follow" />
                <meta name="robots" content="noodp" />
                <meta name="robots" content="noydir" />
                <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis a todo el pais, encuentra lo que buscas en Kiero.co" />
                <meta name="Keywords" content="Tienda en Línea" />
            </Head>
            <Category data={data} user_data={session}/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const data = {
        "type":"search",
        "search": String(context.params.search),
        "params": {
            "items_per_page": 15,
            "price_range": "",
            "order": "desc"
        }
    }

    let usr = getUser(context);
    const session = {
        user: (usr !== undefined ? usr  : null),
        authenticated: isAuthenticated(context)
    }
    return { props: { data, session } }
}


export default Results
