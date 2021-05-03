import React from 'react';
import Head from 'next/head';
import Category from '../../components/Category/Category';
import {getUser, isAuthenticated } from "../../lib/auth";
import favicon from "../../assets/img/favicon.svg";
import {searchItemsPerPage} from "../../lib/config";
import { useRouter } from 'next/router'

function Results({data, session}) {
    
    const router = useRouter();
    const {page} = router.query;
    const currentPath = router.asPath;
    return (
        <div>
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
            <title>Kiero | {data.search}</title>
            <meta name="Description"
            content="KIERO.CO MARKETPLACE | Encuentra más productos de{category_name}" />
            <meta name="Keywords" content="{product.title}" />
            <meta name="Title" content="Kiero.co -{product.title} a {product.price}" />
            <meta name="apple-mobile-web-app-capable" content="yes" />
            <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
            <meta name="google" content="notranslate" />
            <meta name="twitter: card" content="Envíos gratis en Colombia, productos para Bebés,
            Belleza, Cámaras y accesorios, Electrodomésticos, Electrónica, Hogar y muebles y mucho más." />
            <meta name="twitter: site" content="@kierogroup1" />
            <meta name="twitter: title" content={`Compra en Kiero ${data.search} - todo lo
            encuentras en nuestra Tienda Online`} />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
            <meta name="robots" content="index,follow" />
            <meta name="description" content="Descubre miles de productos al mejor precio. Envíos
            gratis a todo el país, encuentra lo que buscas en Kiero.co" />
            <meta name="Keywords" content="Tienda en Línea, {category_name}" />
            <link rel="canonical" href="{url_sin_parametro_de_pagina}" />
            <link rel="icon" href={favicon} type="image/png" />
            </Head>

               {/* Google Tag Manager (noscript) */}
               <noscript
                    dangerouslySetInnerHTML={{
                    __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXNXPM7" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                }}
                />
                {/* End Google Tag Manager (noscript) */}       

            <Category data={data} user_data={session} page={page} path={currentPath}/>
        </div>
    )
}

export async function getServerSideProps(context) {
    const data = {
        "type": "search",
        "search": String(context.params.search),
        "params": {
            "items_per_page": searchItemsPerPage,
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
