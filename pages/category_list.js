import React from "react";
import Head from 'next/head';
import CategoryList from "../components/CategoryList/";
import { Component } from "react";
import PropTypes from "prop-types";
import { isAuthenticated, getUser } from "../lib/auth";
import favicon from "../assets/img/favicon.svg";


export default class category_list extends Component {

    static propTypes = {
        user: PropTypes.string,
        authenticated: PropTypes.bool
    };

    static async getInitialProps(ctx) {
        return {
            user: getUser(ctx),
            authenticated: isAuthenticated(ctx)
        };
    }

    render() {
        return (
            <div className="home">
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
                    {/*NEED FIX THIS SHIT colocar nombre de la categoria a mostrar*/}
                    <title>Compra en Kiero.co Marketplace | "category_name"</title>
                    <meta name="Title" content="Compra en Kiero.co Marketplace | category_name" />
                    <meta name="Description" content="KIERO.CO Marketplace | Encuentra category_name en Kiero.co - Descubre millones de productos online" />
                    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="robots" content="index,follow" />
                    <meta name="robots" content="noodp" />
                    <meta name="robots" content="noydir" />
                    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                    <meta name="apple-mobile-web-app-capable" content="yes" />
                    <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
                    <meta name="google" content="notranslate" />
                    <meta name = "twitter: card" content = "Encuentra todo lo relacionado con productos de category_name en kiero.co" />
                    <meta name = "twitter: site" content = "@kierogroup1" />
                    <meta name = "twitter: title" content = " Compra en Kiero todo lo encuentras en nuestra Tienda Online" />
                    <meta name = "twitter: description" contenido =" Envíos gratis en Colombia - Encuentra productos de c
                    ategory_name en Kiero.co - Descubre millones de productos online." />
                    <meta name = "twitter: image" content = "https://kiero.co/_next/static/images/banners-apk-911388a7cee05467bbd92b4b573820ab.jpg" />
                    <meta property="og:title" content="Compra category_name en Kiero.co Compra Portatiles y accesorios en
                    Kiero.co "/>
                    <meta property="og:description" content="Encuentra category_name en Kiero.co - Descubre millones de p
                    roductos online. Encuentra Portatiles y accesorios en Kiero.co " />
                    <meta property="og:url" content="url de listado" />
                    <meta property='og:locale' content='es_ES' />
                    <meta property='og:type' content='website' />
                    <meta property='og:site_name' content='Kiero.co' />
                    <meta property="og:image" content="https://kiero.co/_next/static/images/banners-apk-911388a7cee05467b
                    bd92b4b573820ab.jpg"/>
                    <link rel="icon" href={favicon} type="image/png" />
                </Head>
                {/* Google Tag Manager (noscript) */}
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXNXPM7" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                        }}
                    />
                {/* End Google Tag Manager (noscript) */}
                <CategoryList user_data={this.props} />
            </div>
        );
    }
}
