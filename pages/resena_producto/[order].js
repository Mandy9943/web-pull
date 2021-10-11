import React from 'react';
import Head from "next/head";
import ProductReview from '../../components/ProductReview/ProductReview';
import favicon from "../../assets/img/favicon.svg";
import { getJwt, getUser, isAuthenticated } from "../../lib/auth";
import { getOrderDetails } from "../../services/productsApi";


function resena_producto({data, jwt}) {
    return (
        <div>
            <Head>
                <title>Kiero | reseña producto</title>
                <meta name="robots" content="noindex" />
				<meta name="googlebot" content="noindex" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                <meta name="robots" content="index,follow" />
                <meta name="robots" content="noodp" />
                <meta name="robots" content="noydir" />
                <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis a todo el pais, encuentra lo que buscas en Kiero.co" />
                <meta name="Keywords" content="Tienda en Línea" />
                <link rel="icon" href={favicon} type="image/png" />
            </Head>
            <ProductReview order={data} jwt={jwt}/>
        </div>
    )
}

export async function getServerSideProps(context) {

    let jwt = getJwt(context);
    const res = await getOrderDetails(context.params.order, jwt);
    const data = await res.data;

    return { props: { data: data, jwt:jwt } }
}

export default resena_producto