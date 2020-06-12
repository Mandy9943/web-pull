import React from 'react';
import Head from 'next/head';
import ForgotPass from "../components/ForgotPass";
import './sass/ForgotPass.css';
import {redirectIfAuthenticated} from "../lib/auth";
import {getCookie, removeCookie} from "../lib/session";

export default class recuperar extends React.Component {
    static getInitialProps(ctx) {
        if (redirectIfAuthenticated(ctx)) {
            return {};
        }
        const success = getCookie("success", ctx.req);

        if (success) {
            removeCookie("success");
        }

        return {
            success
        };

    }

    render() {
        const { success } = this.props;
        return (
            <div className="forgot-page">
                <Head>
                    <title>Kiero | Recuperar Contraseña</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>
                <ForgotPass success={success}/>
            </div>
        )
    }
}