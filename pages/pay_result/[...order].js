import React from "react";
import Head from "next/head";
import Detail from "../../components/ProductDetail";
import { getOrderId } from "../../services/ordersApi";
import { getUser, isAuthenticated, getJwt } from "../../lib/auth";
import Header from "./../../components/Common/Header/Header";
import Footer from "./../../components/Common/Footer/Footer";
import '../sass/order.css';
import favicon from "../../assets/img/favicon.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck, faWindowClose, faHourglassHalf

} from "@fortawesome/free-solid-svg-icons";

function Product({ data, u_data }) {

  // console.log(data);

  return (
    <div className="order-page">
      <Head>
        {/* Google Tag Manager */}
				<script
					dangerouslySetInnerHTML={{
						__html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                    })(window,document,'script','dataLayer','GTM-TXNXPM7');`,
					}}
				/>
				{/* End Google Tag Manager */}
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
      {/* Google Tag Manager (noscript) */}
			<noscript
				dangerouslySetInnerHTML={{
					__html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXNXPM7" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
				}}
			/>
			{/* End Google Tag Manager (noscript) */}
      <Header />
    
      <div className="container-success">
        <p>
            <div className={"icon-check"}>
            {data.status == 2 ? <FontAwesomeIcon icon={faCheck} /> : data.status == 6 ? <FontAwesomeIcon icon={faWindowClose} />: <FontAwesomeIcon icon={faHourglassHalf} />}
            </div>
            <br />
            <span><strong>{data.status == 2 ? "Su compra ha sido exitosa" : data.status == 6 ? "Su compra ha sido rechazada": "Su compra esta en espera por aprobación"} </strong></span>
        </p>
      </div> 
      <section className="order-content">
        
        <section className="info">
          <h3 className="title">DATOS DE RESULTADO</h3>
          <span className="user-id"><strong>COMPRADOR: </strong>{data.user_id}</span>
          <span><strong>NOMBRE DE TIENDA: </strong>{data.seller_id}</span>
          <span><strong>MÉTODO DE PAGO:</strong> {data.method_id}</span>
          <span><strong>ESTADO DEL PAGO: </strong>{data.status == 2 ? "APROBADO" : data.status == 6 ? "RECHAZADO" : "PENDIENTE"} </span>
          <span><strong>TOTAL:</strong> {data.total} </span>
          <span className="name-product"><strong>NOMBRE DEL PRODUCTO: </strong>{data.product.title}</span>
        </section>
      
      </section>
      <div className="go-purchases-link">
         <Link href="/">
          <a>
              <p>Ir a compras</p>
          </a>
        </Link>
      </div>
        
      <Footer />
    </div>
  );
}


// This gets called on every request
export async function getServerSideProps(context) {
  // Fetch data from external API
  let order_id = JSON.parse(context.params.order)

  let usr = getUser(context);
  let jwt = getJwt(context);

  const res = await getOrderId(order_id, jwt)
  const data = await res.data
  // const data = order_id

  // console.log(data);
  const u_data = {
    user: (usr !== undefined ? usr : null),
    authenticated: isAuthenticated(context),
    jwt: jwt ? jwt : ''
  }

  return { props: { data, u_data } }
}

export default Product
