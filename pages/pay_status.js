import React from "react";
import Head from "next/head";
import { getUser, isAuthenticated, getJwt } from "../lib/auth";
import Header from "../components/Common/Header/Header";
import Footer from "../components/Common/Footer/Footer";
import './sass/order.css';
import favicon from "../assets/img/favicon.svg";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faCheck, faWindowClose, faHourglassHalf

} from "@fortawesome/free-solid-svg-icons";

function PayStatus({ data, u_data }) {

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
        
      </div> 
      <section className="order-content">
        
        <section className="info">
          <h3 className="title">DATOS DE RESULTADO</h3>
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




export default PayStatus
