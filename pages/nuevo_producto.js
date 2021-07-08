import React from 'react';
import Head from "next/head";
import AddProducts from '../components/AddProducts/AddProducts';
import PropTypes from "prop-types";
import {
    getEmail,
    getFullName, getJwt,
    getLastName,
    getName,
    getUser,
    getUserType,
    getRole,
    getUserId,
    isAuthenticated,
    redirectIfNotAuthenticated
} from "../lib/auth";
import favicon from "../assets/img/favicon.svg";


export default class nuevo_producto extends React.Component {

    static propTypes = {
        user: PropTypes.string,
        authenticated: PropTypes.bool
    };

    static async getInitialProps(ctx) {
        if (redirectIfNotAuthenticated(ctx)) {
            return {};
        }

        return {
            jwt: getJwt(ctx),
            user: getUser(ctx),
            type: getUserType(ctx),
            role: getRole(ctx),
            name: getName(ctx),
            last_name: getLastName(ctx),
            full_name: getFullName(ctx),
            email: getEmail(ctx),
            user_id: getUserId(ctx),
            authenticated: 5(ctx),
        };
    }


    render() {
       
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
                    <title>Kiero | Crear producto</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="robots" content="index,follow" />
                    <meta name="robots" content="noodp" />
                    <meta name="robots" content="noydir" />
                    <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis
                    a todo el pais, encuentra lo que buscas en Kiero.co" />
                    <link rel="icon" href={favicon} type="image/png" />
                </Head>
                {/* Google Tag Manager (noscript) */}
                    <noscript
                        dangerouslySetInnerHTML={{
                            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TXNXPM7" height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
                        }}
                    />
                {/* End Google Tag Manager (noscript) */}
                <AddProducts user_data={this.props}/>
            </div>
        )
    }
}
