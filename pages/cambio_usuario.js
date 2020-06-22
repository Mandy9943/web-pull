import React from 'react';
import Head from 'next/head';
import UserChange from '../components/Help/UserChange/UserChange';

export default function cambio_usuario() {
    return (
        <div>
            <Head>
                <title>Kiero | Cambio de usuario</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <UserChange />
        </div>
    )
}
