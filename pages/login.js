import React from 'react';
import { Component } from "react";
import Head from 'next/head';
import Login from "../components/Login";
import {redirectIfAuthenticated} from "../lib/auth";
import {getCookie, removeCookie} from "../lib/session";


export default class login extends Component {
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
        const { url, success } = this.props;
        return (
            <div className="login-page">
                <Head>
                    <title>Kiero | Login</title>
                    <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
                </Head>
                <Login success={success}/>
            </div>
        )
    }
}
