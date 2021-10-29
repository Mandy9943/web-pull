import React from 'react';
import Head from "next/head";
import UserAccount from '../components/UserAccount/UserAccount';
import Summary from '../components/Summary/Summary';
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


export default class cuenta extends React.Component {

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
            authenticated: isAuthenticated(ctx),
        };
    }


    render() {
       
        return (
            <div>
                <Head>
                    <title>Kiero | Cuenta de usuario</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                    <meta httpEquiv="Content-Type" content="text/html; charset=UTF-8" />
                    <meta name="robots" content="index,follow" />
                    <meta name="robots" content="noodp" />
                    <meta name="robots" content="noydir" />
                    <meta name="description" content="Descubre miles de productos al mejor precio. Envios gratis
                    a todo el pais, encuentra lo que buscas en Kiero.co" />
                    <link rel="icon" href={favicon} type="image/png" />
                </Head>
                <Summary user_data={this.props}/>
            </div>
        )
    }
}
