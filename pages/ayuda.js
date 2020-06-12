import React from 'react';
import Head from "next/head";
import Help from '../components/Help/Help';

export default function ayuda() {
    return (
        <div>
            <Head>
                <title>Kiero | Ayuda</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Help />
        </div>
    )
}
