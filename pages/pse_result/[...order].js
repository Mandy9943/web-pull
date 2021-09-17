import React from "react";
import Head from "next/head";
import Detail from "../../components/ProductDetail";
import { getOrderId } from "../../services/ordersApi";
import { getUser, isAuthenticated, getJwt } from "../../lib/auth";
import Header from "./../../components/Common/Header/Header";
import Footer from "./../../components/Common/Footer/Footer";
import '../sass/order.css';
import favicon from "../../assets/img/favicon.svg";




function Product({ data, u_data }) {
  return (
    <div className="order-page">
      <Head>
        <title>Kiero | Resultado de compra </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
        <meta name="robots" content="index,follow" />
        <meta name="robots" content="noodp" />
        <meta name="robots" content="noydir" />
        <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis a todo el pais, encuentra lo que buscas en Kiero.co" />
        <meta name="Keywords" content="Tienda en Línea" />
        <link rel="icon" href={favicon} type="image/png" />
      </Head>
      <Header />

      <section className="order-content">

        <section className="info">
          <h3 className="title">DATOS DE RESULTADO</h3>
          <span className="user-id">USERID: <strong>{data.user_id}</strong></span>
          <span>SELLERID: <strong>{data.seller_id}</strong></span>
          <span>Método de pago: <strong>{data.method_id}</strong></span>
          <span>Estado del pago:<strong>{data.status == 2 ? "APROBADO" : data.status == 6 ? "RECHAZADO" : "PENDIENTE"}</strong> </span>
          <span>Total a pagar: <strong>{data.total} </strong></span>
          <span className="name-product">Nombre del producto: <strong>{data.product.title}</strong></span>
        </section>

      </section>
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
    user: (usr !== undefined ? usr : null),
    authenticated: isAuthenticated(context),
    jwt: jwt ? jwt : ''
  }

  return { props: { data, u_data } }
}

export default Product
