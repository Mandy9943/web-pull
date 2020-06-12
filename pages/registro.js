import React, {Component} from 'react';
import Head from 'next/head';
import Register from "../components/Register";
import './sass/Register.css';
import {redirectIfAuthenticated} from "../lib/auth";
import {getCookie, removeCookie} from "../lib/session";
import Login from "../components/Login";


export default class registro extends Component {

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
            <div className="register-page">
                <Head>
                    <title>Kiero | Registro</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>
                <Register success={success}/>
            </div>
        )
    }
}