import React from 'react';
import Head from 'next/head';
import UserChange from '../components/Help/UserChange/UserChange';
import favicon from "../assets/img/favicon.svg";
import {getUser, isAuthenticated, getJwt, redirectIfNotAuthenticated } from "../lib/auth";


function cambio_usuario({u_data}) {
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
                <title>Kiero | Cambio de usuario</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
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
            <UserChange u_data={u_data}/>
        </div>
    )
}

export async function getServerSideProps(context) {

    let usr = getUser(context);
    let jwt = getJwt(context);

    const u_data = {
        user: (usr !== undefined ? usr  : null),
        authenticated: isAuthenticated(context),
        jwt: jwt ? jwt : ''
    }

    redirectIfNotAuthenticated(context);

    return { props: { u_data } }
}

export default cambio_usuario;