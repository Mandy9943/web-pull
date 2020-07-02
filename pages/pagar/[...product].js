import React from 'react';
import Head from 'next/head';
import PaymentWay from '../../components/PaymentWay/PaymentWay';
import { getProductDetail } from "../../services/productsApi";
import {getUser, isAuthenticated, getJwt } from "../../lib/auth";


function plataforma_de_pago({data, u_data}) {
    return (
        <div className="plataforma">
            <Head>
                <title>Kiero | Plataforma de pago</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="robots" content="index,follow" />
                <meta name="robots" content="noodp" />
                <meta name="robots" content="noydir" />
                <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis a todo el pais, encuentra lo que buscas en Kiero.co" />
                <meta name="Keywords" content="Tienda en Línea" />
            </Head>
            <PaymentWay data={data} user={u_data} />
        </div>
    )
}


export async function getServerSideProps(context) {

    // Fetch data from external API
    let id_product = String(context.params.product);
    const res = await getProductDetail(id_product)
    const data = await res.data

    let usr = getUser(context);
    let jwt = getJwt(context);

    const u_data = {
        user: (usr !== undefined ? usr  : null),
        authenticated: isAuthenticated(context),
        jwt: jwt ? jwt : '' 
    }

    return { props: { data, u_data } }
}



export default plataforma_de_pago