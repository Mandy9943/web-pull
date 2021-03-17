import React from 'react';
import Head from 'next/head';
import PaymentWay from '../../components/PaymentWay/PaymentWay';
import { getProductGlobalDetail } from "../../services/productsApi";
import {getUser, isAuthenticated, getJwt, redirectIfNotAuthenticated } from "../../lib/auth";
import {authenticate} from "../../services/authApi";
import {getDSI} from "../../services/userApi";
import favicon from "../../assets/img/favicon.svg";



function plataforma_de_pago({data, u_data, cantidad}) {
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
                <link rel="icon" href={favicon} type="image/png" />
            </Head>
            <PaymentWay data={data} user={u_data} cantidad={cantidad} />
        </div>
    )
}


export async function getServerSideProps(context) {

    let id_product = String(context.params.product[0]);
    let cantidad = String(context.params.product[1]);

    const res = await getProductGlobalDetail(id_product);
    const data = await res.data;

    let usr = getUser(context);
    let jwt = getJwt(context);

    const dsi = await getDSI(jwt)
    const u_data = {
        user: (usr !== undefined ? usr  : null),
        authenticated: isAuthenticated(context),
        dsi: dsi.data,
        jwt: jwt ? jwt : ''
    }

    redirectIfNotAuthenticated(context);

    return { props: { data, u_data, cantidad } }
}



export default plataforma_de_pago