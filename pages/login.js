import React from 'react';
import Head from 'next/head';
import Login from "../components/Login";

export default function login() {
    return (
        <div className="login-page">
            <Head>
                <title>Kiero | Login</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Login />
        </div>
    )
}
