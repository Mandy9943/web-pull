import React from "react";
import Head from "next/head";
import Detail from "../../components/ProductDetail";
import { getOrderId } from "../../services/ordersApi";
import {getUser, isAuthenticated, getJwt } from "../../lib/auth";
import Header from "./../../components/Common/Header/Header";
import Footer from "./../../components/Common/Footer/Footer";


function Product({data, u_data}) {
    return (
    <div>
      <Head>
        <title>Kiero | Resultado de compra </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <Header/>

        <body>

        DATOS DE RESULTADO:
        Metodo de pago: {data.method_id}<br />
        Estado del pago: { data.status == 1 ? "APROBADO" : data.status == 6 ? "RECHAZADO" : "PENDIENTE" }
        
        
        <br />
        Metodo de pago: {data.product.title}<br />
        Total a pagar: {data.total}<br />
        SELLERID: {data.seller_id}<br />
        USERID: {data.user_id}<br />

        </body>
        <Footer />
    </div>
  );
}


// This gets called on every request
export async function getServerSideProps(context) {

    // Fetch data from external API
    let order_id = context.params.order;

    let usr = getUser(context);
    let jwt = getJwt(context);

    const res = await getOrderId(order_id[0], jwt)
    const data = await res.data

    console.log(data);
    const u_data = {
        user: (usr !== undefined ? usr  : null),
        authenticated: isAuthenticated(context),
        jwt: jwt ? jwt : '' 
    }

    return { props: { data, u_data } }
}

export default Product
